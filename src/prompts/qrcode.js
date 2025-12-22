import chalk from "chalk";

export const QRCode = [
  {
    name: "link",
    description: chalk.blue("Digite o link para gerar o QR Code"),
    required: true
  },
  {
    name: "type",
    description: chalk.yellow("Digite o tipo de QR Code (1 - NORMAL) ou (2 - TERMINAL)"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Opção inválida, escolha 1 ou 2"),
    required: true
  }
]