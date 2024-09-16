/* 

Objetivo

Registration e auth: Registro
	- Realizar o registro de um novo usuário
* Critérios:
	Performance test
		- Carga 10 VU por 10s
	Limites:
		- Requisição com falha inferior a 1%;
		- Duração da requisição p(95) < 500;
		- Requisição com sucesso superior a 95%

#### Relembrando:

 * Requisições com sucesso 95%
 * Requisições com falha < 1%
 * Duração da requisição p(95) < 500
*/

import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {
	stages : [{duration: '10s', target: 10}],
	thresolds: {
		checks: ['rate > 0.95'],
		http_req_failed: ['rate < 0.01'],
		http_req_duration: ['p(95) < 500']
	}
};


export default function(){
	const BASE_URL = 'https://test-api.k6';
	const PASS = 'user123';
	const BASE_URL = 'https://test-api.k6.io';
}

