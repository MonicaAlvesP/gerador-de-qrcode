import { permittedCharacters } from "./permittedCharacters.js"

async function handle() {
  let characters = []
  let passwordGenerated = ""
  characters = await permittedCharacters()

  const passwordLength = process.env.PASSWORD_LENGTH

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length)
    passwordGenerated += characters[index]
  }

  return passwordGenerated
}

export default handle;