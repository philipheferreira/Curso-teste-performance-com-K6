// Thresholds: É utilizado como criterio de reprovação ou aprovação. 
// Para definir limite não é necessario realizar importação no modulo, só definir ele no escolpo do modulo


import http from 'k6/http';
import { check } from 'k6';


export const options = {
	vus: 1, // Quantidades de maquina acessando
	duration: '3s', // duração do acesso em tempo
	thresholds: {
		http_req_failed: ['rate < 0.01'],
		http_req_duration: ['p(95) < 200']
	}
}

export default function () {
	const res = http.get('http://test.k6.io/')

	check(res, {
		'status code é 200': (r) => r.status === 200
	});

}



