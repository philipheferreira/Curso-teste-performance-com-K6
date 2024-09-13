//		ROTULAR COM TAGS


/*
 O que pode ser rotulado com as tags no K6
1 - Requests (requisições);
2 - checks (validações);
3 - Thresolds (limites);
4 - Métricas customizadas;
5 - Todas as métricas de um teste;

obs: tags podem ser utilizadas em conjunto com groups
*/

import { group, check } from 'k6';
import http from 'k6/http';

export const options = {
	vus: 4, 
	duration: '5s',
	tags:{
		name:'meu-Teste'
	},
	thresholds:{
		'http_req_duration{tipo:busca-todos}': ['p(95) < 500']//Esse limite só é aplicado as requisições pertencentes a tag tipo que tem o valor buscar-todos
	}
}

export default function(){
	group('requisição de todos os crocodilos', function(){
		const responseGeral = http.get('https://test-api.k6.io/public/crocodiles/', {
			tags:{
				tipo: "Busca-todos"// é gerada uma tag dentro da chamada no arquivo csv, ajuda a fazer buscas especificas por uma determinada metrica ou requisição
			}
		});
		check(responseGeral, {
			'status code 200 pegar todos': (r) => r.status == 200
		});
	});

	group('Requisição de um crocodilo id', function(){
		const responsePrimeiroCrocodilo = http.get('https://test-api.k6.io/public/crocodiles/1/');
		check(responsePrimeiroCrocodilo, {
			'Status code 200 get id 1': (r) => r.status === 200
		});
	});
}







