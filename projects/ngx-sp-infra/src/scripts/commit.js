const fs = require('fs');
const execSync = require('child_process').execSync;

/** Lê e retorna o conteúdo do package.json como objeto.
 * @returns {object} Objeto JSON com os dados do package.json. */
function readPackageJson() {
  const packagePath = 'projects/ngx-sp-infra/package.json';
  
  try {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    return packageJson;
  }
  catch (error) {
    console.error(`\nErro ao ler o arquivo package.json: ${error.message}`);
    process.exit(1); // Encerra o script em caso de erro
  }
}


/** Realiza o commit das alterações na branch especificada.
 * @param {string} branch - Nome da branch onde será feito o commit. */
function commit(branch) {
  const packageJson = readPackageJson();
  
  try {
    // Adiciona as alterações e faz commit
    console.log(`\nAdicionando alterações e realizando commit...`);
    execSync(`git add .`, { stdio: 'inherit' });
    execSync(`git commit --allow-empty -m "v${packageJson.version} | Commit automático" -m "Commit automático realizado via script pós build"`, { stdio: 'inherit' });
    
    // Push das alterações
    console.log(`\nEnviando commit para a branch ${branch}...`);
    execSync(`git push origin ${branch}`, { stdio: 'inherit' });
    
    console.log("\nCommit automático realizado com sucesso via script. Acompanhe o processo de publicação pelo GitHub Actions!\n");
  }
  catch (error) { console.log(`Erro durante o commit: ${error.message}`); }
}


const readline = require('readline');

// Interfaces de entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário se ele deseja fazer commit no repositório GIT (https://github.com/SISPROV6/ngx-sp-infra)...
rl.question("Deseja fazer commit no repositório GIT (https://github.com/SISPROV6/ngx-sp-infra)? (S/N): ", (useGit) => {
  
  // ...se SIM...pega a branch atual e pergunta ao usuário se será feito o commit nela
  if (useGit.trim().toUpperCase() === "S") {
    try {
      // Obtém a branch atual
      const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
      console.log(`Branch atual: ${currentBranch}`);
      
      rl.question("Informe a branch para commit (pressione Enter para usar a branch atual): ", (branchName) => {
        const branch = branchName.trim() || currentBranch; // Se não for informada, usar a branch atual
        commit(branch);

        rl.close();
      });
    } catch (error) {
      console.error(`Erro ao obter a branch atual: ${error.message}`);
      rl.close();
    }
  }
  else {
    console.log("Operação de commit cancelada.\n");
    rl.close();
  }
});
