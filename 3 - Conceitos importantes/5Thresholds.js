// Thresholds: É utilizado como criterio de reprovação ou aprovação. 
// Para definir limite não é necessario realizar importação no modulo, só definir ele no escolpo do modulo


import http from 'k6/http';
import { check } from 'k6';


export const options = {
	vus: 1, // Quantidades de maquina acessando
	duration: '3s', // duração do acesso em tempo
	thresholds: { // Parte responsavel por definir todos os limites do teste 
		http_req_failed: ['rate < 0.01'], // Definição de limite sobre as requisições com falhas
		//http_req_duration: ['p(95) < 200', 'p(90) < 400', 'p(99.9) < 2000'] // Definir um valor limite para o tempo de duração das requisições, pode ser feito mais de um parametro para essa definição como mostrado
		http_req_duration: [{threshold: 'p(95) < 20', abortOnFail: true}] //abortOnFail é uma diretriz que caso o threshold não atenda o que foi estipulado a aplicação para
		checks: ['rate > 0.99'] // Os thresholds podem ser combinados com outras metricas, esse é o exemplo com checks. checks defini que a taxa de verificação para ser bem suce
	}
}

export default function () {
	const res = http.get('http://test.k6.io/')

	check(res, {
		'status code é 200': (r) => r.status === 201 // modifiquei o teste de retorno para 201 em vez de 200 porque quando ele falhar vai acionar o checks definido no thresholds
	});

}



