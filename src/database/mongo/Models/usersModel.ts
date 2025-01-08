import { Schema, model } from "mongoose";
import { UserDocument } from "../Interfaces/usersInterfaces";

export const UserSchema: Schema<UserDocument> = new Schema<UserDocument>({
  _id: { type: String, required: true },
  account: {
    extendName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    },
    wallet: {
      money: { type: Number, default: 0 }
    },
});

const User = model("Users", UserSchema);
export default User;