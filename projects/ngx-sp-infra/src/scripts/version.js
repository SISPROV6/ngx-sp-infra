const fs = require('fs');
const execSync = require('child_process').execSync;

// Função para atualizar a versão
function updateVersion(version, suffix, useGit) {
  // Lê e inicializa o package.json
  let packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

  // CASO a versão possua uma tag, adiciona uma versão extra para "removê-la"
  if (packageJson.version.split('-')[1] && version == 'patch') {
    execSync(`npm version ${version} --no-git-tag-version`, { stdio: 'inherit' });
    execSync(`npm version ${version} --no-git-tag-version`, { stdio: 'inherit' });
    packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));    // Atualiza a variável do arquivo
  } else {
    execSync(`npm version ${version} --no-git-tag-version`, { stdio: 'inherit' });
    packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));    // Atualiza a variável do arquivo
  }

  // Adiciona o sufixo à versão
  let newVersion;

  if (suffix && suffix != "''") {
    if (suffix.includes('-')) { newVersion = `${packageJson.version}${suffix}`; }
    else { newVersion = `${packageJson.version}-${suffix}`; }
  }
  else {
    newVersion = `${packageJson.version}`;
  }

  packageJson.version = newVersion;

  // Escreve a nova versão no package.json
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');

  // Atualiza a tag Git se for utilizar Git
  if (useGit && (useGit == true || useGit == 'true')) {
    try {
      execSync(`git tag -d v${newVersion}`, { stdio: 'inherit' }); // Remove a tag prévia com o mesmo nome
      execSync(`git push --delete origin v${newVersion}`, { stdio: 'inherit' }); // Remove a tag prévia com o mesmo nome

      execSync(`git tag v${newVersion}`, { stdio: 'inherit' });
      execSync(`git push origin v${newVersion}`, { stdio: 'inherit' });

      console.log("\n\nTag de versão commitada e enviada!\n");
    }
    catch(error) {
      if (error.message.includes('Command failed: git tag -d') || error.message.includes('Command failed: git push --delete')) {
        execSync(`git tag v${newVersion}`, { stdio: 'inherit' });
        execSync(`git push origin v${newVersion}`, { stdio: 'inherit' });

        console.log("\n\nTag de versão commitada e enviada!\n");
      }
      else { console.log("\n\nOcorreu um erro ao realizar o commit da tag!\nABORTANDO PROCESSO..."); }
    }
  }
}

// Sufixo a ser adicionado, se não informado não terá nada
const version = process.argv[2];
const suffix = process.argv[3] || '';
const useGit = process.argv[4] || false;
updateVersion(version, suffix, useGit);
