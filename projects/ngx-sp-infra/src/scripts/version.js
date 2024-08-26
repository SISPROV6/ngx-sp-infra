const fs = require('fs');
const execSync = require('child_process').execSync;

// Função para atualizar a versão
function updateVersion(version, suffix) {
  // Lê e inicializa o package.json
  let packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

  // CASO a versão possua uma tag, adiciona uma versão extra para "removê-la"
  if (packageJson.version.split('-')[1]) {
    execSync(`npm version ${version} --no-git-tag-version`, { stdio: 'inherit' });
    execSync(`npm version ${version} --no-git-tag-version`, { stdio: 'inherit' });
    packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));    // Atualiza a variável do arquivo
  }

  // Adiciona o sufixo à versão
  let newVersion;

  if (suffix.includes('-')) { newVersion = `${packageJson.version}${suffix}`; }
  else { newVersion = `${packageJson.version}-${suffix}`; }

  packageJson.version = newVersion;

  // Escreve a nova versão no package.json
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');

  // Atualiza a tag Git
  execSync(`git tag v${newVersion}`, { stdio: 'inherit' });
  execSync(`git push origin v${newVersion}`, { stdio: 'inherit' });
}

// Sufixo a ser adicionado, se não informado não terá nada
const version = process.argv[2];
const suffix = process.argv[3] || '-test';
updateVersion(version, suffix);
