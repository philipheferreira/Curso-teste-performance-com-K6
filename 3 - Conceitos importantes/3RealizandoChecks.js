import http from 'k6/http'; // comando referente a importação de comandos http e metodos
import {check} from 'k6'; // Importa modulo para poder usar as validações com check


export const options = {
	vus: 1, // definindo o numero de usuarios acessando e gerando carga
	duration: '3s'
}


export default function(){
	const res = http.get('http://test.k6.io'); // faz a chamada do metodo get na url da API

	check(res, { // usando a resposta, avalia o resultado retornando o status
		'status code é sucesso': (r) => r.status === 200 // quando o status for 200 ele retornara a seguinte resposta
	});
}