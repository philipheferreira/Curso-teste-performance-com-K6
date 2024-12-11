/*
	Registrar e autorizar: login
		* Realizar o login com um novo usuario

	Criterios:
		* Stress test
			- Ramp up 5 VU em 5s
			- Carga 5 VU por 5s
			- Ramp up 50 VU em 2s
			- Carga de 50 VU em 2s
			- Ramp down 0 VU em 5s

		* Limites:
			- Requisição com falha inferior a 1%

*/

import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';// biblioteca utilizada para receber dados do excel

export const options = {
    stages: [
        { duration: '5s', target: 5 },
        //{ duration: '5s', target: 5 },
        //{ duration: '2s', target: 50 },
        //{ duration: '2s', target: 50 },
      //  { duration: '5s', target: 0 },
    ],
    thresholds: {
        http_req_failed: ['rate < 0.01']
    }
}

const csvData = new SharedArray('Ler dados', function(){
    return papaparse.parse(open('./usuarios.csv'), {header: true}).data;
});

export default function () {
    const USER = csvData[Math.floor(Math.random() * csvData.length)].email
    const PASS = 'user123'
    const BASE_URL = 'https://test-api.k6.io';

    console.log(USER);

    const res = http.post(`${BASE_URL}/auth/token/login/`, {// metodo post dentro da constant res
        username: USER,
        password: PASS
    });

    check(res, {// chamada rest quando retornar 201 mostrara sucesso ao registrar e retornar status
        'sucesso login': (r) => r.status === 200,
        'token gerado com sucesso': (r) => r.json('access') != ''
    });

    sleep(1)
}


// para rodar o arquivo basta digitar o comando k6 run 4ConstruindoTestedeCargaParte4.js