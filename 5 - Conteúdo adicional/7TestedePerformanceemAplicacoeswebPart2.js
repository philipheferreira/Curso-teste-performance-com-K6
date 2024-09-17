import { browser } from 'k6/experimental/browser';
import { sleep, check } from 'k6';


//script na parte de configuração de cenarios, especificação do motor internet e limites
export const options = { // para realizar testes web é obrigatorio a necessidade de um scenario
	scenarios:{
		ui: {
			executor: 'constant-vus',
			vus: 3,
			durations: '10s',
			options: {
				browser: {// define o tipo de browser que vai ser aberto ou utilizado
					type: 'chromium',
				}
			}
		}
	}
	thresholds: {//Unicos limites a serem definidos é os checks
		checks: ['rate == 1.0']
	}
}

