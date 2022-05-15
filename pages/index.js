import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Button, Flex, Text } from "@chakra-ui/react";

import { injected } from "../components/wallet/connectors";

export default function Home() {
  const { active, account, library, activate, deactivate } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  const disconnect = async () => {
    try {
      await deactivate();
    } catch (error) {
      console.log(error);
    }
  };

  const saveAccount = async (account, balance) => {
    const params = new URLSearchParams();
    params.append("address", account);
    params.append("balance", balance);
    axios
      .post("http://localhost:4000/accounts/create", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => console.log(response));
  };

  const getBalance = async () => {
    const response = await library.eth.getBalance(account);
    setBalance(response);
  };

  useEffect(() => {
    if (account) {
      getBalance();
    }
  }, [account]);

  const [balance, setBalance] = useState();
  return (
    <Container mt={5}>
      {active ? (
        <Flex flexDirection={"column"}>
          <Text>
            Connected with: <b>{account}</b>
          </Text>
          <Text>Eth Balance: {balance / 1000000000000000000}</Text>

          <Button mt={2} onClick={disconnect}>
            Disconnect
          </Button>
          <Button mt={2} onClick={() => saveAccount(account, balance)}>
            Save Account on Data Base
          </Button>
        </Flex>
      ) : (
        <Flex flexDirection={"column"}>
          <Text>Not Connected</Text>
          <Button mt={2} onClick={() => connect(library)}>
            Connect To Metamask
          </Button>
        </Flex>
      )}
    </Container>
  );
}
