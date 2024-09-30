const fs = require('fs');
const execSync = require('child_process').execSync;

// Função para atualizar a versão
function updateVersion(version, suffix) {
  // Lê e inicializa o package.json
  let packageJson = JSON.parse(fs.readFileSync('../../package.json', 'utf8'));

  // CASO a versão possua uma tag, adiciona uma versão extra para "removê-la"
  if (packageJson.version.split('-')[1] && version == 'patch') {
    execSync(`npm version ${version} --no-git-tag-version`, { stdio: 'inherit' });
    execSync(`npm version ${version} --no-git-tag-version`, { stdio: 'inherit' });
    packageJson = JSON.parse(fs.readFileSync('../../package.json', 'utf8'));    // Atualiza a variável do arquivo
  } else {
    execSync(`npm version ${version} --no-git-tag-version`, { stdio: 'inherit' });
    packageJson = JSON.parse(fs.readFileSync('../../package.json', 'utf8'));    // Atualiza a variável do arquivo
  }

  // Adiciona (ou não) o sufixo à versão
  let newVersion = suffix ? `${packageJson.version}${suffix.startsWith('-') ? suffix : `-${suffix}`}` : packageJson.version;
  packageJson.version = newVersion;

  // Escreve a nova versão no package.json
  fs.writeFileSync('../../package.json', JSON.stringify(packageJson, null, 2) + '\n');
}


const readline = require('readline');
const version = process.argv[2];

// Inicializa uma interface para entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário se ele deseja adicionar um sufixo à versão
rl.question("Caso deseje, digite aqui um sufixo para a versão: ", (answer) => {
  updateVersion(version, answer ?? "");
  rl.close();
});
