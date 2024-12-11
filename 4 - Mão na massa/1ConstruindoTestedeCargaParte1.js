/*

Objetivo

public API: Exemplo 
	Buscar todos os crocodilos
* Critérios:
	Smoke test
		- 1 Usuários por 30 segundos
	Limites:
		- Requisição com sucesso > 99%
*/

import http from 'k6/http';
import { check } from 'k6';

export const options = {
	vus: 1, // defini que um usuario vai realizar a requisição
	duration: '30s', // defini que ira realizar a requisição por 30 segundos
	thresholds: {
		checks: [ 'rate > 0.99'] // defini que a taxa de sucesso será aprovada, por limites, apenas com o rate a cima de 99%
	}
}

export default function(){

	const BASE_URL = 'https://test-api.k6.io/public/crocodiles/';

	const res = http.get(BASE_URL);

	check(res, {
		'Status code 200': (r) => r.status === 200
	});
}

// para rodar o arquivo basta digitar o comando k6 run 1ConstruindoTestedeCargaParte1.js
