import prompt from "prompt";
import { QRCode } from "../../prompts/qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
  prompt.get(QRCode, handle);

  prompt.start();
}

export default createQRCode;