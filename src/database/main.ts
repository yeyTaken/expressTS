import User from './mongo/Models/usersModel'

import { globals } from '@/index';

var mongo = {
  users: User,
};

var firebase = {
  // nada aqui.
};

export default class Database {
  public mongo = mongo;
  public firebase = firebase;
}

// example:
(
  async () => {
    // Exemplo de usuário
    const user = { 
      id: 1233445
    };

    // Tenta encontrar o usuário no banco de dados
    let userDb = await globals.database.mongo.users.findOne({ _id: user.id });

    // Se o usuário não existir, cria um novo
    if (!userDb) {
      userDb = await globals.database.mongo.users.create({ _id: user.id });
      console.log("Novo usuário criado:", userDb);
    } else {
      console.log("Usuário encontrado:", userDb);
    }

    // Obtém o e-mail do usuário
    const email = userDb.account?.email || "Email não disponível";
    console.log("E-mail atual:", email);

    // Atualiza o e-mail do usuário no banco de dados
    const newEmail = "yeytaken@teste.com";
    const updateResult = await globals.database.mongo.users.updateOne(
      { _id: user.id },
      { $set: { "account.email": newEmail } }, // Atualiza o e-mail
      { upsert: true } // Garante que o documento seja criado se não existir
    );

    console.log("Atualização concluída:", updateResult);

  }
);