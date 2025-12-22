import prompt from "prompt";
import { QRCode } from "../../prompts/qrcode.js";
import handleQRCode from "./handle.js";

async function createQRCode() {
  prompt.get(QRCode, handleQRCode);

  prompt.start();
}

export default createQRCode;