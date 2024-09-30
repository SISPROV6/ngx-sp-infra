const fs = require('fs');


// Lê o conteúdo do package.json
const packageJson = JSON.parse(fs.readFileSync('./projects/ngx-sp-infra/package.json', 'utf8'));


// Extrai a versão
const version = packageJson.version;

// Verifica se a versão tem algum sufixo
let tag = 'latest'; // Default é 'latest'

const suffixMatch = version.match(/-(.+)$/); // Pega qualquer coisa depois de um '-'
if (suffixMatch) tag = suffixMatch[1]; // Usa o sufixo como tag

console.log(`${tag}`);
