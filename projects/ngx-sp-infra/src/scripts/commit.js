const fs = require('fs');
const execSync = require('child_process').execSync;

// Função para atualizar a versão
function commit() {
  // Lê o package.json
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

  // Adiciona o sufixo à versão
  const packageVersion = packageJson.version;

  // Adiciona alterações no commit e realiza o push
  execSync(`git add .`, { stdio: 'inherit' });
  execSync(`git commit -m "v${packageVersion} | Commit automático"`, { stdio: 'inherit' });
  execSync(`git push origin main`, { stdio: 'inherit' });
}

commit();
