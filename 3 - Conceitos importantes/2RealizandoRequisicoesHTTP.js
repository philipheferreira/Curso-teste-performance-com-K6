//1 - Inicialização
import http from 'k6/http'; // uma vez importado já é possivel usar o modulo de requisições http, acessando aos metodos da biblioteca


//3 - execução (codigo vu)
export default function () {
	http.get('http://test.k6.io'); // endereço da API, usando comando GET para solicitar as infos da API
}

// para rodar o arquivo basta digitar o comando k6 run 2RealizandoRequisicoesHTTP.js