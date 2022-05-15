import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(
      "mongodb+srv://gustavodm:1234@cluster0.acudy.mongodb.net/metamask-accounts?retryWrites=true&w=majority"
    );
    console.log("Db connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
