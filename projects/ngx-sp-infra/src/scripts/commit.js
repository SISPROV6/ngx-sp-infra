const fs = require('fs');
const execSync = require('child_process').execSync;

// Função para atualizar a versão
function commit(branch) {
  // Lê o package.json
  const packageJson = JSON.parse(fs.readFileSync('projects/ngx-sp-infra/package.json', 'utf8'));
  
  // Adiciona alterações no commit e realiza o push
  execSync(`git checkout ${branch}`, { stdio: 'inherit' });

  execSync(`git add .`, { stdio: 'inherit' });
  execSync(`git commit --allow-empty -m "v${packageJson.version} | Commit automático" -m "Commit automático realizado via script pós build"`, { stdio: 'inherit' });
  execSync(`git push origin ${branch}`, { stdio: 'inherit' });

  console.log("\n\nCommit automático realizado com sucesso via script. Acompanhe o processo de publicação pelo GitHub Actions!\n");
}

// Branch que será selecionada
const branch = process.argv[2] || 'main';
commit(branch);
