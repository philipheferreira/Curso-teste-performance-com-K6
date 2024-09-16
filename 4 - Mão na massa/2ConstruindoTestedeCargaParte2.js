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
import { check, sleep } from 'k6'; // O sleep é utilizado para definir que cada  virtual user defina um tempo para que ela realize uma proxima solicitação de requisição

export const options = {
	stages: [
			{duration: '10s', target: 10},
			{duration: '10s', target: 10},
			{duration: '10s', target: 0}
		],
	thresholds: {
		checks: ['rate > 0.99'],
		http_req_duration: ['p(95) < 200'] // A requisição com o persitivo de 95% deve ter um tempo inferior de 200 milissegundos para funcionar perfeitamente
	}
}

export default function(){
	const BASE_URL = 'https://test-api.k6.io/public/crocodiles/1';

	const res = http.get(BASE_URL);

	check(res, {
		'status code 200': (r) => r.status === 200
	});

	sleep(1)
}


