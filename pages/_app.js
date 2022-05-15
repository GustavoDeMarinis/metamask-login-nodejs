import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import "../styles/globals.css";

const getLibrary = (provider) => {
  return new Web3(provider);
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </ChakraProvider>
  );
}

export default MyApp;
