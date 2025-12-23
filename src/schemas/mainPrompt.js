import chalk from "chalk";

export const mainPrompt = [
  {
    name: "selectedOption",
    description: chalk.blue.bold("Escolha a ferramenta (1 - Gerador de QR Code, 2 - Gerador de Senhas)"),
    pattern: /^(1|2)$/,
    message: chalk.red.italic("Opção inválida, escolha 1 ou 2"),
    required: true
  }
];