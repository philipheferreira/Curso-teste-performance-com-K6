// SOAK TESTING

// tem o objetivo de realizar um teste na API para verificar a confiabilidade em longos períodos de tempo

/*
1 - O sistema não sofre de bugs ou vazamentos de memória.
2 - Verifique se as reinicializações inesperadas do aplicativo não perdem solicitações.
3 - Encontre bugs relacionados a condições de corrida que aparecem esporadicamente.

1 - Certificar que seu banco de dados não esgote o espaço de armazenamento alocado e pare
2 - Certifique-se de que seus logs não esgotam o armazenamento em disco alocado.
3 - Certifique-se de que os serviços externos dos quais você depende não parem de funcionar após a execução de uma certa quantidade de solicitações.

PARA PODER FOCAR NESSE TESTE É NECESSARIO CONSIDERAR: 

1 - Quantidade de usuarios
2 - Requisitos de infraestrutura
 */

export const options = {
	stages: [
		{duration: '2m', target: 400},
		{duration: '3h56m', target: 400},
		{duration: '2m', target: 0},
	],
};