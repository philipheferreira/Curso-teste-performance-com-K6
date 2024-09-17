/* 
	CRITÉRIOS
		* Realizar consulta a API de listagem ed crocodilos e busca por id de crocodilos;
		* É esperado um RPS de 200REQ/S para a API de listagem de crocodilos durante 30 seg;
		* Para a busca por id, o sistema deve atender 50 usuários onde cada usuário realiza até 20 solicitações em até 1 minto
			- Usuários par devem realizar buscar ao crocodilo de ID 2;
			- Usuário ímpar devem realizar buscar ao crododilo de ID 1;
		* Ambos os testes devem ser executados simultaneamente
*/

import http from 'k6';

export const options = {
	scenarios:{
		listar: {
			executor: 'const-arrival-rate',
			exec: 'listar',
			duration: '30s',
			rate: 200,
			timeUnit: '1s',
			preAlocatedVud: 150,
			gracefulStop: '10s',
			tags: {test_type: 'listagem_de_crocodilos'}
		},
		buscar: {
			executor:'per-vu-iteration',
			exec: 'buscar',
			vus: 50,
			iterations: 20,
			maxDuration: '1m',
			gracefulStop: '10s',
			tags: {test_type: 'busca_de_crocodilos'}
		}
	}

};

export function listar(){
	http.get(__ENV.URL+ 'crocodiles');
}

export function buscar(){
	if(__VU % 2 === 0){
		http.get(__ENV.URL + '/crocodiles/2');
	}else{
		http.get(__ENV.URL + '/crocodiles/1');
	}
}