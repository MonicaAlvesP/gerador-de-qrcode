import handle from "./handle.js";

import chalk from "chalk";

async function createPassword() {
  console.log("Criando uma nova senha...");
  const password = await handle();

  console.log(chalk.green("Senha criada com sucesso: ") + chalk.blue(password));
}

export default createPassword;