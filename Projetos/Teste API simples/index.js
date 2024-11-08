import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import http from 'k6/http'; // comando referente a importação de comandos http e metodos
import {check, group} from 'k6';

export const options = {
	stages: [{duration: '5s', target: 100},
			 {duration: '3s', target:10},
			 {duration: '5s', target:100}
		],
	thresholds: {
		checks: ['rate > 0.95'], // Nesse caso é aplicado para as duas
		'http_req_duration{tipo:todos-Produtos}': ['p(95) < 500'],
		'http_req_duration{tipo:um-Produto}': ['p(95) < 500']
	}
}


export default function () {

	group('Requisição do tipo GET referente a todos os produtos', function(){
		const todosProdutos = http.get('https://localhost:7122/api/Produtos', {
			tags:{
				tipo: "todos-Produtos"
			}
		});

		check(todosProdutos, {
			'Status code é sucesso para solicitação GET de todos os produtos': (r) => r.status === 200
		});
	});

	group('Requisição do tipo GET referente a um unico produto', function(){
		const umProduto = http.get('https://localhost:7122/api/Produtos/1', {
			tags:{
				tipo: "um-Produto"
			}
		});
		check(umProduto, {
			'Status code é sucesso para solicitação GET de um unico produto': (r) => r.status === 200
		})
	});

}


export function handleSummary(data) {
  return {
    "TesteAPIsimples.html": htmlReport(data),
  };
}


// comando para rodar no cmd a aplicação k6 run index.js