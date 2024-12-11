import http from 'k6/http';
import {check} from 'k6';
import { Counter} from 'k6/metrics'; // modulo do k6 especifico para adicionar metricas referente a counters
import { Gauge } from 'k6/metrics'; // metrica do tipo Gauge sendo importada da biblioteca
import { Rate } from 'k6/metrics';
import { Trend } from 'k6/metrics';

export const options = {
	vus: 3,
	duration: '3s'
}


// constantes que irão receber as metricas que são puxadas das respectivas bibliotecas
const chamadas = new Counter('Quantidade de chamdas'); // A constante chamadas ira receber a variavel Counter da biblioteca metrics
const meuGauge = new Gauge('Tempo bloqueado');
const meuRate = new Rate('Taxa de requisição 200');
const meuTrend = new Trend('Taxa de espera');

export default function () {
	const res = http.get('http://test.k6.io/');

	// declaração de constante previamente declaradas que vão mostrar o resultado das metricas declaradas
	chamadas.add(1); // variavel que recebe a metrica Counter sendo chamada no cmd;
	
	// metrica do tipo medidor
	meuGauge.add(res.timings.blocked); // O req acessa o que foi retornado de informação da requisição, acessa a propriedade timings que tem muita informação sobre duração, tempo de bloqueio, tempo de conexão. Em seguida acessa tempo de bloqueio
	
	//metrica do tipo taxa
	meuRate.add(res.status === 200); //
	
	//metrica do tipo tendencia
	meuTrend.add(res.timings.waiting) // quanto tempo a requisição ficou esperando para ser realizada
}


// para rodar o arquivo basta digitar o comando k6 run 4EntendendooConceitodeMetricasPart2.js