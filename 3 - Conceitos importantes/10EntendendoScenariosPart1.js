// 			ENTENDENDO SCENARIOS		

/*
	Os scenarios nos permitem configurar como as vus e as iterações são programadas no nosso script. Pode ser definido
	diversas cargas de trabalho ou padrões de tráfego para o teste de performace. Os ganhos na utilização deles está
	entre:
1 - Organização do teste: Podesse declarar varios cenarios no mesmo script e cada um pode executar independentemente uma função;
2 - Simulações mais realistas: Cada cenário pode usar uma V1 distinta e um padrão de interação alimentado por um executor especifico;
3 - Cargas de trabalho paralelas ou sequenciais: Os cenarios são independente uns dos outros e funcionam em paralelo, mesmo parecendo uma forma de execução sequencial;
4 - Análise granular dos resultados: Diferentes variáveis de ambiente e tags podem ser definidas para cada cenario.

	Das opções e configurações do escopo de options podem ser definidas as seguintes, em diferentes cenarios:
	1 - executor: 
	2 - startTime: 
	3 - gracefulstop: 
	4 - exec: 
	5 - env: 
	6 - tags: 


	* Por número de iterações:
	1 - shared-iterations: 
	2 - per-vu-iterations: faz com que cada vu execute as iterações configuradas

	* Por número de VUs:
	1 - constant-vus: envia um numero de vus constante para a execução
	2 - ramping-vus: Aumenta gradativamente o numero de vus de acordo com os estagios configurados

	* Por taxa de iteração:
	1 - constant-arrival-rate: Inicia iterações a uma taxa constante
	2 - ramping-arrival-rate: Aumenta a taxa de iterações de acordo com os estagios configurados
*/



