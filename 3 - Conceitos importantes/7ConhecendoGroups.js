//				GROUPS
/*
O que é uma transação?
É uma solicitação, ou um grupo de solicitações, que correspondem a uma única ação do usuário
ex: Caso eu precise fazer o login em uma ferramenta, e antes de fazer o login um usuário tenha sido criado, o fluxo de criar o usuário é realizar o login é uma transação

Os Groups são uma forma de organizar scripts
*/


// 		----------------------------------------------------------	PROJETO ANTES DA IMPLEMENTAÇÃO DO GROUPS	---------------------------------------------------

import { check } from 'k6';
import http from 'k6/http';

export const options = {
	vus: 4,
	duration: '5s'
}

export default function(){
	const responseGeral = http.get('https://test-api.k6.io/public/crocodiles/');
	check(responseGeral, {
		'status code 200 Pegar todos' : (r) => r.status === 200
	});

	const responsePrimeiroCrocodilo = 
	check(responsePrimeiroCrocodilo, {
		'Status code 200 get id 1': (r) => r.status === 200
	});
}
