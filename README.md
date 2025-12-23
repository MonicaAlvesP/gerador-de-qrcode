# 🔧 Gerador de QR Code & Senhas

Kit de utilidades escalável para e-commerce com geração de QR Codes e senhas seguras.

## 🚀 Instalação

```bash
npm install
npm start
```

## ⚙️ Configuração

Edite o arquivo `.env`:

```env
UPPERCASE_LETTERS=false
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=8
```

## 📋 Funcionalidades

- **QR Code Generator**: Gera QR codes para links (normal ou terminal)
- **Password Generator**: Cria senhas personalizáveis baseadas nas configurações

## 🏗️ Arquitetura

```
src/
├── services/          # Lógica de negócio
│   ├── qr-code/      # Geração de QR codes
│   └── password/     # Geração de senhas
├── schemas/          # Validação de entrada
└── index.js          # Ponto de entrada
```

## 🛠️ Tecnologias

- Node.js (ES Modules)
- qrcode-terminal
- chalk
- dotenv
- prompt

## 📦 Extensibilidade

Para adicionar novos serviços, crie uma pasta em `services/` com:
- `create.js` - Interface
- `handle.js` - Lógica principal
- `utils/` - Funções auxiliares

## 🤝 Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.