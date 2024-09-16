/* 
			--------------------------------------------			MÃO NA MASSA PART 2			--------------------------------------------
	Public API: Exemplo 2
		- BUscar crocodilo por id

	Critérios:
		* Performance test
			- Ramp up 10 VU e, 10s
			- Carga 10 VU por 10s
			- Ramp down 0 VU em 10s
		* Limites:
			- Requisição com sucesso > 95%
			- Tempo requisição p(90) < 200
*/

import http from 'k6/http';
import { check } from 'k6';

export const options = {
	vus: 1,
	duration: '3s',
	thresholds: {
		checks: ['rate > 0.99']
	}
}

export default function(){
	const BASE_URL = 'https://test-api.k6.io/public/crocodiles/';

	const res = http.get(BASE_URL);

	check(res, {
		'status code 200': (r) => r.status === 200
	})
}


