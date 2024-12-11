/* 

Objetivo

Registration e auth: Registro
	- Realizar o registro de um novo usuário
* Critérios:
	Performance test
		- Carga 10 VU por 10s
	Limites:
		- Requisição com falha inferior a 1%;
		- Duração da requisição p(95) < 500;
		- Requisição com sucesso superior a 95%

#### Relembrando:

 * Requisições com sucesso 95%
 * Requisições com falha < 1%
 * Duração da requisição p(95) < 500
*/

import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [{ duration: '10s', target: 10 }],
    thresholds: {
        checks: ['rate > 0.95'],
        http_req_failed: ['rate < 0.01'],
        http_req_duration: ['p(95) < 500']
    }
}

export default function () {
    const USER = `${Math.random()}@mail.com`
    const PASS = 'user123'
    const BASE_URL = 'https://test-api.k6.io';

    console.log( USER + PASS);

    const res = http.post(`${BASE_URL}/user/register/`, {// metodo post dentro da constant res
        username: USER,// Infos que serão passadas pelo post
        first_name: 'crocrodilo',
        last_name: 'dino',
        email: USER,// email recebe o user definido dentro do codigo
        password: PASS// senha recebe pass que é declarada dentro do codigo
    });

    check(res, {// chamada rest quando retornar 201 mostrara sucesso ao registrar e retornar status
        'sucesso ao registar': (r) => r.status === 201
    });

    sleep(1)
}

// para rodar o arquivo basta digitar o comando k6 run 3ConstruindoTestedeCargaParte3.js