//		-------------------		SHARED - ITERATIONS		--------------------------

/* 

1 - Um número fixo de VUs completa um número fixo de iterações.
 As iterações não serão distribuidas uniformemente entre as vus alocadas. No shared-iterations teremos vus mais rapidas ou mais lentas

*/

/*
import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
	scenarios: {
		contacts: {
			executor: 'shared-iterations',
			vus: 10,
			iterations: 200, 
			maxDuration: '30s', // É o tempo maximo que o teste tem que realizar as interações
		},
	},
};

export default function () {
	http.get('https://test.k6.io/contacts.php');
	sleep(0.5);
}

*/

//		-----------------------------------------		PER-VU-ITERATIONS		-----------------------------------------

/*
1 - Cada VU executa um número exato de iterações
2 - Número total iterações: VU x Iterações

*/



/*

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {

	scenarios: {
		contacts: {
			executor: 'per-vu-iterations',
			vus: 10,
			iterations: 20,
			maxDuration: '30s',
		},
	},
};

export default function () {
	http.get('https://test.k6.io/contacts.php');
	sleep(0.5); // Quando não se utiliza o sleep, podesse ter um tempo não uniforme para cada uma
}

*/


//		---------------------------------------		CONSTANT-VUS		------------------------------------------
/*
1 - Um numero fixo de VUs executar quantas requisições forem possiveis
*/

/*

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
	scenarios: {
		contacts: {
			executor: 'constant-vus',
			vus: 10,
			duration: '30s',
		},
	},
};

export default function () {
	http.get('https://test.k6.io/contacts.php');
	sleep(0.5);
}

*/


//		------------------------------------		CONST-ARRIVAL-RATE		-----------------------------------------

/* 

1 - Número fixo de iterações iniciadas pelo k6
2 - Novas interações iniciadas enquanto houver VUs disponiveis
3 - Novas iterações seguindo sempre a taxa configurada

*/



import http from 'k6/http';

export const options = {
	scenarios: {
		contacts: {
			executor: 'constant-arrival-rate',
			duration: '30s',
			rate: 30,
			timeUnit: '1s',
			preAllocatedVUs: 50,
		},
	},
};


export default function () {
	http.get('https://test.k6.io/contacts.php');
}


/* 
PARA MAIS ESTUDOS:
1 - ramping-vus
2 - ramping-arrival-rate
3 - externally-controled: Consegue aumentar a quantidade de VUs, pronlogar o periodo de teste

*/

// para rodar o arquivo basta digitar o comando k6 run 11EntendendoScenariosPart2.js