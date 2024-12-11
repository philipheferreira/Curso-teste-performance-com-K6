//1 - Inicialização
import sleep from 'k6'; // Importou um modulo de sleep que é nativo do k6. é chamado uma vez em todo o ciclo de vida


//2 - Configuração
export const options = { // bloco de configurações para configurações do cenario do teste
	vus: 1, // vus são os virtual users
	duration: '10s' // é a duração que os usuarios acessam a aplicação
}


//3 - execução (codigo vu)
export default function(){ // está informando para o k6 que esse é o modulo default onde ele ira executar o teste

	console.log("testando o k6");
	sleep(1);
}

//4 - Desmontagem: É util e opcional, serve para processar os dados da etapa de configuração e execução. É util quando quer enviar resultados para plataformas externas por webhook ou tratamento de dados. É executado uma unica vez

export function teardown(data){
	console.log(data);
}

// para rodar o arquivo basta digitar o comando k6 run 1CiclodeVidadeumTestecomK6.js