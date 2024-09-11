// Entenderemos melhor sobre options no modulo 3!!!

/*Carga constante, é para 
testar o maximo de recursos e disponibilidade até quebrar */

export const options1 = {
	vus: 100,
	duration: '20m',
};

export const options2 = {
	stages: [
		{duration: '5m', target: 100},
		{duration: '10m', target: 100},
		{duration: '5m', target: 0},
		]
};