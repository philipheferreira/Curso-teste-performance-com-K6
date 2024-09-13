// 							---------------------------  VARIAVEIS DE AMBIENTE	--------------------------------------

/*
as seguintes finalidades são:
1 - Fornecer uma variável de ambiente para o script.
2 - Realizar configurações do escopo de options

as variaveis de ambiente são declaradas dentro do cmd da pasta pelo K6 podendo ser reutilizadas em diferentes scenarios dentro da pasta sendo chamadas por diferentes scenarios(scripts)
*/

//		----------------------------------------------	SCRIPT INICIAL	---------------------------------------------

import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
	vus: 2,
	duration: '5s',
}

export default function(){
	const BASE_URL = 'https://test-api.k6.io/public/crocodiles/';

	const res = http.get(BASE_URL);
}


//			----------------------------------------		SCRIPT APÓS TIRAR URL E RECEBER UMA VARIAVEL PELO CMD		---------------------------------

import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
	vus: 2,
	duration: '5s',
}

export default function(){
	const BASE_URL = __ENV.URL; // --__ENV na frente do nome da variavel para ser identificada como variavel de ambiente
	// Para passar esse valor como uma variavel ambiente devesse colocar em frente a variavel declarada __ENV no codigo, no cmd não é necessario usa-lo
	const res = http.get(BASE_URL);

// pelo cmd rodar o seguinte comando para declarar uma variavel recebendo a url da api => k6 run -e URL=https://test-api.k6.io/public/crocodiles/ 9UtilizandoVariaveisDeAmbiente.js
// ou k6 run --env URL=https://test-api.k6.io/public/crocodiles/ 9UtilizandoVariaveisDeAmbiente.js
	sleep(1);
}


// 		----------------------------------------		SCRIPT APÓS RETIRAR O ESCOLPO export const options		--------------------------------------


import http from 'k6/http';
import { sleep } from 'k6';


// caso o export const options seja retirado como um todo o k6 usa os parametros pre-definidos de vus = 1 e duration = 1s

export default function(){
	const BASE_URL = __ENV.URL;
	const res = http.get(BASE_URL);

	sleep(1);

}

//k6 run -e URL=https://test-api.k6.io/public/crocodiles/ 9UtilizandoVariaveisDeAmbiente.js 
// ou k6 run --env URL=https://test-api.k6.io/public/crocodiles/ 9UtilizandoVariaveisDeAmbiente.js
