import prompt from "prompt";
import { mainPrompt } from "./prompts/main.js";
import createQRCode from "./services/qr-code/create.js";

async function main() {
  prompt.get(mainPrompt, async (_, choose) => {
    if (choose.selectedOption === "1") await createQRCode();
    if (choose.selectedOption === "2") console.log("QR Code Reader selected");

    prompt.start();
  })
}

main();