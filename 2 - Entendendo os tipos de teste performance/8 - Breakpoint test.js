
// Teste de breakpoint ou teste de capacidade ou teste de carga pontual ou teste de limite

/* É um teste que é feito para tentar encontrar o limite do sistema para melhorar e aumentar a margem do limite suportado
Ajustar/Cuidar de pontos fracos do sistema, buscando limites maiores suportados pelo sistema.
Ajudar a planejar e verificar a correção de sistema com baixo limite de utilização.

*/

/*

Após mudanças significativas na base de código/infraestrutura
consumo elevado de recursos pelo seu sistema.
Carga do sistema cresce continuamente? - Auxilia em responder essa pergunta

*/

/*
Antes de realizar o breaking point teste o time precisa se ligar nisso
1 - Teste é feito para verificar o limite do sistema e não da infraestrutura - Atenção a elasticidade de ambientes de nuvem
2 - Aumento de carga gradual para essa modalidade
3 - Tipo de teste de ciclo iterativo
4 - Interrupção manual ou automática
 */

/* Para realizar esse teste é preciso realizar os testes feitos anteriormente */


// EXEMPLO


import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
	executor: 'rapimng-arrival-rate',
	stages: [
		{duration: '2h', target: 20000}, // é uma carga que cresce devagar o carregamento de todas as requisições
	],
};

export default () => {
	const urlRes = http.get('https://test-api.k6.io');
	sleep(1);
}

// para rodar o arquivo basta digitar o comando k6 run Breakpoint_test.js


// Obs: esse script exemplo não tem uma interrupção automatica