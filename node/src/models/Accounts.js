import { Schema, model } from "mongoose";

const accountSchema = new Schema(
  {
    address: String,
    balance: String,
  },
  { timestamps: true, versionKey: false }
);

export default model("Account", accountSchema);
