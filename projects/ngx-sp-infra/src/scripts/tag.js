const fs = require('fs');
const execSync = require('child_process').execSync;

/** Remove a tag existente do Git e da origem remota.
 * @param {string} version - A versão da tag a ser removida. */
function removeExistingTag(version) {
   try {
      execSync(`git tag -d v${version}`, { stdio: 'inherit' });
    execSync(`git push --delete origin v${version}`, { stdio: 'inherit' });
    console.log(`\n\nTag v${version} removida com sucesso.`);
  }
  catch (error) {
     if (error.message.includes('Command failed')) console.log(`\n\nTag v${version} não existe, prosseguindo com a criação da nova tag.`);
     else throw new Error(`\n\nErro ao tentar remover a tag: ${error.message}`);
   }
}

/** Cria uma nova tag e faz o push para o Git.
 * @param {string} version - A versão da nova tag a ser criada. */
function createAndPushTag(version) {
   try {
      execSync(`git tag v${version}`, { stdio: 'inherit' });
      execSync(`git push origin v${version}`, { stdio: 'inherit' });
      console.log(`\n\nTag v${version} criada e enviada com sucesso.`);
   }
   catch (error) { throw new Error(`\n\nErro ao criar ou enviar a tag: ${error.message}`); }
}

/** Função principal para commit da tag de versão. */
function commitTag() {
  // Lê e inicializa o package.json
  const packageJson = JSON.parse(fs.readFileSync('../../package.json', 'utf8'));
  const newVersion = packageJson.version;
  
  // Validação da versão
  if (!newVersion) {
     console.error("\n\nA versão no package.json está inválida ou não foi encontrada.");
     process.exit(1);
   }

   // Remover tags antigas (se existirem) e criar a nova tag
   try {
    removeExistingTag(newVersion);
    createAndPushTag(newVersion);
    console.log("\nTag de versão commitada e enviada com sucesso!");
   }
   catch (error) { console.log("\n\nErro no processo de commit da tag:", error.message); }
}


const readline = require('readline');

// Inicializa uma interface para entrada do usuário
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

// Pergunta ao usuário se ele deseja prosseguir com o commit da tag
rl.question("\nVocê quer commitar a tag de versão? (S/N): ", (answer) => {
   if (answer.trim().toUpperCase() === "S") commitTag();
  else console.log("Tag não commitada por escolha do usuário. Prosseguindo com processo...\n");

  rl.close();
});
