const { execSync } = require('child_process');

// Função para adicionar uma tag no git
function addTag() {
   try {
      const version = require('../../package.json').version;
      execSync(`git tag -a v${version} -m "Release version ${version}"`);
      execSync('git push --tags');
      
      console.log(`Tag v${version} criada e enviada para o repositório.`);
   }
   catch (error) {
      console.error('Erro ao criar ou enviar a tag:', error.message);
   }
}

addTag();
