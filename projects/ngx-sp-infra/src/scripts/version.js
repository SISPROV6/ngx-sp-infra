const fs = require('fs');
const execSync = require('child_process').execSync;

// Função para atualizar a versão
function updateVersion(suffix) {
  // Lê o package.json
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

  // Adiciona o sufixo à versão
  const newVersion = `${packageJson.version}${suffix}`;
  packageJson.version = newVersion;

  // Escreve a nova versão no package.json
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');

  // Atualiza a tag Git
  execSync(`git tag v${newVersion}`, { stdio: 'inherit' });
  execSync(`git push origin v${newVersion}`, { stdio: 'inherit' });
}

// Sufixo a ser adicionado, se não informado não terá nada
const suffix = process.argv[2] || '';
updateVersion(suffix);
