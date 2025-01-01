import { Schema, model } from "mongoose";
import { UserDocument } from "../interfaces/usersInterfaces";

export const UserSchema: Schema<UserDocument> = new Schema<UserDocument>({
  _id: { type: String, required: true },
  account: {
    email: { type: String, required: true, unique: true },
    }
});

const User = model("Users", UserSchema);
export default User;