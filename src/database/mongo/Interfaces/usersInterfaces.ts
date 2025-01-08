export interface UserConfig {
  _id: string;
  account: {
    extendName: string;
    email: string;
    password: string;
  };
  wallet: {
    money: number;
  }
}

export interface UserDocument extends UserConfig {}