const fs = require('fs');
const execSync = require('child_process').execSync;
const readline = require('readline');

/** Lê e retorna o conteúdo do package.json como objeto.
 * @returns {object} Objeto JSON com os dados do package.json. */
function readPackageJson() {
  const packagePath = 'projects/ngx-sp-infra/package.json';

  try {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    console.log(`Versão atual do package.json: ${packageJson.version}`);
    return packageJson;
  }
  catch (error) {
    console.error(`Erro ao ler o arquivo package.json: ${error.message}`);
    process.exit(1); // Encerra o script em caso de erro
  }
}


/** Realiza o commit das alterações na branch especificada.
 * @param {string} branch - Nome da branch onde será feito o commit. */
function commit(branch) {
  const packageJson = readPackageJson();

  try {
    // Checkout na branch
    console.log(`Fazendo checkout para a branch ${branch}...`);
    execSync(`git checkout ${branch}`, { stdio: 'inherit' });

    // Verifica se há alterações no repositório   [DEVE REALIZAR COMMIT MESMO QUE NÃO HAJA ALTERAÇÕES]
    // const status = execSync('git status --porcelain').toString();
    // if (!status) {
    //   console.log("Nenhuma alteração detectada, abortando commit.");
    //   return;
    // }

    // Adiciona as alterações e faz commit
    console.log(`Adicionando alterações e realizando commit...`);
    execSync(`git add .`, { stdio: 'inherit' });
    execSync(`git commit --allow-empty -m "v${packageJson.version} | Commit automático" -m "Commit automático realizado via script pós build"`, { stdio: 'inherit' });
    
    // Push das alterações
    console.log(`Enviando commit para a branch ${branch}...`);
    execSync(`git push origin ${branch}`, { stdio: 'inherit' });

    console.log("\nCommit automático realizado com sucesso via script. Acompanhe o processo de publicação pelo GitHub Actions!\n");
  }
  catch (error) { console.error(`Erro durante o commit: ${error.message}`); }
}

// Interface de entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário em que branch será feito o commit
rl.question("Informe a branch para commit (se não informada irá para 'main'): ", (answer) => {
  const branch = answer.trim() || "main"; // Se não for informado, usar 'main'
  commit(branch);

  rl.close();
});
