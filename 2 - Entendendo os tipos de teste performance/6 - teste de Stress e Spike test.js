/*

						----------------------- STRESS TESTING -------------------------------
PERGUNTAS
1 - Como seu sistema se comporta em condições extremas?
2 - Qual é a capacidade máxima do seu sistema em termos de usuários ou taxa de transferência?
3 - O ponto de ruptura do seu sistema?
4 - O sistema se recupera sem intervenção manual após o termino do teste de estresse?

RESPOSTA
1 - A rapidez com que os mecanismos de dimensionamento automático reagem ao aumento da carga.
2 - Se houver alguma falha durante os eventos de dimensionamento
*/

// tem o objetivo de validar arquitetura de uma aplicação, verificando gargalos que podem ser prejudiciais para uma aplicação. Ex: o teste
// pode mostrar situações de que não está escalando bem, mostrar problemas de auto recuperação


/*
					------------------------- SPIKE TESTING --------------------------------
PERGUNTAS
1 - Como seu sistema funcionará sob um aumento repentino de tráfego?
2 - O seu sistema irá se recuperar assim que o tráfego diminuir?

- Tem 4 formas de categorizar: 1 - excelente, 2 - bom, 3 - insatisfatório e 4 - ruim

*/


export const options = {
	stages: [
		{duration: "10s", target: 100}, // 
		{duration: "1m", target: 100}, //
		{duration: "10s", target: 1400}, // Etapa de aceteração. Aumento de usuarios em um curto periodo de tempo
		{duration: "3m", target: 1400}, //
		{duration: "10s", target: 100}, // 
		{duration: "3m", target: 100}, //
		{duration: "10s", target: 0}, //
		]
	}
}