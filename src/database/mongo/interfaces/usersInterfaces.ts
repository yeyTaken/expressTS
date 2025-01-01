export interface UserConfig {
  _id: string;
  account: {
    email: string;
  };
}

export interface UserDocument extends UserConfig {}