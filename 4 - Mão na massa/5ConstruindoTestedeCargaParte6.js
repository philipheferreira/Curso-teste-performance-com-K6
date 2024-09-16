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


};

export function listar(){
	http.get(__ENV.URL+ 'crocodiles');
}

export function buscar(){

}