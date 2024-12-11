import http from 'k6/http'; // comando referente a importação de comandos http e metodos
import {check} from 'k6'; // Importa modulo para poder usar as validações com check


export const options = {
	vus: 10, // definindo o numero de usuarios acessando e gerando carga
	duration: '100s'
}


export default function(){
	const res = http.get('http://test.k6.io'); // faz a chamada do metodo get na url da API

	check(res, { // usando a resposta, avalia o resultado retornando o status
		'status code é sucesso(200)': (r) => r.status === 200 // quando o status for 200 ele retornara a seguinte resposta
	});
}

// para rodar o arquivo basta digitar o comando k6 run 3RealizandoChecks.js