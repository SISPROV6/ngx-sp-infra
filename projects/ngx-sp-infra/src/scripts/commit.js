const fs = require('fs');
const execSync = require('child_process').execSync;

// Função para atualizar a versão
function commit(branch) {
  // Lê o package.json
  const packageJson = JSON.parse(fs.readFileSync('projects/ngx-sp-infra/package.json', 'utf8'));

  // Adiciona o sufixo à versão
  const packageVersion = packageJson.version;
  
  console.log(packageJson);
  console.log(packageVersion);

  // Adiciona alterações no commit e realiza o push
  execSync(`git add .`, { stdio: 'inherit' });
  execSync(`git commit --allow-empty -m "v${packageVersion} | Commit automático"`, { stdio: 'inherit' });
  execSync(`git push origin ${branch}`, { stdio: 'inherit' });
}

// Branch que será selecionada
const branch = process.argv[2];
commit(branch);
