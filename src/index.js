import prompt from "prompt";
import { mainPrompt } from "./prompts/main.js";
import chalk from "chalk";

async function main() {
  prompt.get(mainPrompt, async (_, choose) => {
    if (choose.selectedOption === "1") console.log("QR Code Generator selected");
    if (choose.selectedOption === "2") console.log("QR Code Reader selected");

    prompt.start();
  })
}

main();