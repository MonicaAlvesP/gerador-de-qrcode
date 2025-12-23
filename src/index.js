import "dotenv/config";
import prompt from "prompt";
import { mainPrompt } from "./schemas/mainPrompt.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(mainPrompt, async (_, choose) => {
    if (choose.selectedOption === "1") await createQRCode();
    if (choose.selectedOption === "2") await createPassword();
  })

  prompt.start();
}

main();