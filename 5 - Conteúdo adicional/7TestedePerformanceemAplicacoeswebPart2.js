import { browser } from 'k6/experimental/browser';
import { sleep, check } from 'k6';


//script na parte de configuração de cenarios, especificação do motor internet e limites
export const options = { // para realizar testes web é obrigatorio a necessidade de um scenario
	scenarios:{
		ui: {
			executor: 'constant-vus',
			vus: 3,
			duration: '10s',
			options: {
				browser: {// define o tipo de browser que vai ser aberto ou utilizado
					type: 'chromium',
				},
			},
		},
	},
	thresholds: {//Unicos limites a serem definidos é os checks, que todos tem que ocorrer
		checks: ['rate == 1.0']
	},
};


export default async function(){// a chamada precisa ser assincrona, usando o comando async, para que o codigo aguarde as respostas das aplicações web
	const page = browser.newPage();// a variavel do tipo browzer confirma que vamos abrir uma nova pagina

	try{

		await page.goto('https://test.k6.io/my_messages.php');// vai dar um page.goto pra redirecionar para a pagina de interesse

		// o page.locator é para especionar a tela que abrimos e capturar o elemento que queremos interagir

		page.locator('input[name="login"]').type('admin'); // locator serve para acessar os elementos da tela e realizar testes pelo front
		page.locator('input[name="password"]').type('123');// comando type serve para escrever no elemento localizado

		const submitbutton = page.locator('input[type="submit"]'); // captura o elemento input do tipo submit e coloca ele dentro de uma constante

		await Promise.all([submitbutton.click(), page.waitForNavigation()]); //define uma promise que vai clicar no botao que está dentro da variavel e clicar nele, e com isso vai aguardar a pagina carregar

		check(page, {// cria um check pra confirmar que a operação ocorre corretamente, pois esse texto é da pagina seguinte
			header: (p) => p.locator('h2').textContent() == 'Welcome, admin!',
		});

		sleep(1)
		}finally{

		page.close();

	}
}
