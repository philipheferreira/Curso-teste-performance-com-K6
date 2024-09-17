/* 
browser_web_vital_cls é a medida do maiot boost de pontuação de troca de layout para cada mudança inesperada que ocorre durante toda a vida util de uma pagina

browser_web_Beatles_LCP é a metrica que informa o tempo de renderização da maior imagem ou bloco de texto visivel na janela de visualização da pagina, em relação ao momento em que a pagina começou a ser carregada

browser_web_vital_fid é a metrica que mede o tempo entre a primeira interação do usuario com a pagina até o momento em que o navegador consegue começar a processar os manipuladores de evento de interação com o usuario
*/

import { browser } from 'k6/experimental/browser'
import { sleep, check } from 'k6';

export const options = {
	scenarios: {
		ui: {
			executor: 'constant-vus',
			vus: 3,
			duration: '10s',
			options: {
				browser: {
					type: 'chromium',
				},
			},
		},
	},
	thresholds: {
    checks: ['rate==1.0'],
    browser_web_vital_fid: ["p(75) <= 100"],
    browser_web_vital_lcp: ["p(75) <= 2500"],
  },
  summaryTrendStats: ["min","med","avg","max","p(75)","p(95)","p(99)"],
}

export default async function () {
const page = browser.newPage();

	try {
		await page.goto('https://test.k6.io/my_messages.php');

		page.locator('input[name="login"]').type('admin');
		page.locator('input[name="password"]').type('123');

		const submitButton = page.locator('input[type="submit"]'); 

		await Promise.all([submitButton.click(), page.waitForNavigation()]);

		check(page, {
			header: (p) => p.locator('h2').textContent() == 'Welcome, admin!',
		});

	} finally {
		page.close();
	}
}