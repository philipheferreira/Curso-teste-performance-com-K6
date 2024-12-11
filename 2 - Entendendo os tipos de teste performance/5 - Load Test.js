// Entenderemos melhor sobre options no modulo 3!!!

/*

Funcionalidades do codigo no geral
- Permite que seu sistema aqueça ou redimensione automaticamente para lidar com o tráfego.
- Permite que você compare o tempo de resposta entre os estágios de carga baixa e carga nominal.

*/

/*Carga constante: primeira abordagem */
export const options1 = {
	vus: 100,
	duration: '20m',
};

// carga variavel: segunda abordagem. Consegue modular a quantidade de pessoas que entra e a duração dessa carga
export const options2 = {
	stages: [ // divide em 3 fases dentro do projeto
		{duration: '5m', target: 100},
		{duration: '10m', target: 100},
		{duration: '5m', target: 0},
		]
};

// para rodar o arquivo basta digitar o comando k6 run Smoke_test.js