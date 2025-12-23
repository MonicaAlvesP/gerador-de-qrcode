import QR from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
  if (err) {
    console.error("Erro na aplicação", err);
    return;
  }

  const isSmall = result.type === "2";
  QR.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso:\n" + qrcode));
  });
}

export default handle;