//				GROUPS
/*
O que é uma transação?
É uma solicitação, ou um grupo de solicitações, que correspondem a uma única ação do usuário
ex: Caso eu precise fazer o login em uma ferramenta, e antes de fazer o login um usuário tenha sido criado, o fluxo de criar o usuário é realizar o login é uma transação

Os Groups são uma forma de organizar scripts
*/


// 		----------------------------------------------------------	PROJETO ANTES DA IMPLEMENTAÇÃO DO GROUPS	---------------------------------------------------

/*

import { check } from 'k6';
import http from 'k6/http';

export const options = {
	vus: 4,
	duration: '5s'
}

export default function(){
	const responseGeral = http.get('https://test-api.k6.io/public/crocodiles/');
	check(responseGeral, {
		'status code 200 Pegar todos': (r) => r.status === 200
	});

	const responsePrimeiroCrocodilo = http.get('https://test-api.k6.io/public/crocodiles/1/');
	check(responsePrimeiroCrocodilo, {
		'Status code 200 get id 1': (r) => r.status === 200
	});
}

*/

	//	----------------------------------------------------	 PROJETO APÓS IMPLEMENTAÇÃO DO GROUPS		-----------------------------------------------------------


/*
import { check, group } from 'k6'; // Para utilizar grupo é necessario importar ele da biblioteca nativa do k6
import http from 'k6/http';

export const options = {
	vus: 4,
	duration: '5s'
}

export default function(){
	group('requisição de todos os crocodilos', function(){ // define um nome para o grupo e em seguida define uma função que ira fazer a requisição get com a API, o que for retornado dessa requisição será vinculado a esse grupo 
		const responseGeral = http.get('https://test-api.k6.io/public/crocodiles/');
		check(responseGeral, {
			'status code 200 pegar todos': (r) => r.status == 200
		});
	});



	group('requisição por id', function(){ // define um nome para o grupo e em seguida define uma função que ira fazer a requisição get com a API, o que for retornado dessa requisição será vinculado a esse grupo
		const responsePrimeiroCrocodilo = http.get('https://test-api.k6.io/public/crocodiles/1/');
		check(responsePrimeiroCrocodilo, {
			'Status code 200 get id 1': (r) => r.status === 200
		});
	});

}
*/


//		--------------------------------------------------	PROJETO ADICIONANDO thresolds focando em GROUPS	--------------------------------------------------


import { check, group } from 'k6'; // Para utilizar grupo é necessario importar ele da biblioteca nativa do k6
import http from 'k6/http';

export const options = {
	vus: 4,
	duration: '5s',
	thresholds: {
		'http_req_duration{group:::requisição por id}': ['p(95) < 500']
	}
}

export default function(){
	group('requisição de todos os crocodilos', function(){
		const responseGeral = http.get('https://test-api.k6.io/public/crocodiles/');
		check(responseGeral, {
			'status code 200 pegar todos': (r) => r.status == 200
		});
	});



	group('requisição por id', function(){
		const responsePrimeiroCrocodilo = http.get('https://test-api.k6.io/public/crocodiles/1/');
		check(responsePrimeiroCrocodilo, {
			'Status code 200 get id 1': (r) => r.status === 200
		});
	});

}



// para rodar o arquivo basta digitar o comando k6 run 7ConhecendoGroups.js