import { globals } from "@/index";

export async function getUser(userId: string) {
  return await globals.database.mongo.users.findOne({
    _id: userId
  });
};

export async function createUser(
  userId: string,
  userExtendName: string,
  userEmail: string,
  userPassword: string
) {
  return await globals.database.mongo.users.create({
    _id: userId,
    account: {
      extendName: userExtendName,
      email: userEmail,
      password: userPassword
    }
  });
};


// exemplo de uso:
(
  async () => {

    var { id, account: { extendName, email, password } } = {
      id: '@raabi',
      account: {
        extendName: 'Israel Rabbi',
        email: 'user@gmail.com',
        password: 'Teste@123'
      }
    }

    let userDb = await globals.functions.getUser(id);
    if (!userDb) {
      userDb = await globals.functions.createUser(id, extendName, email, password)
    }
  }
)