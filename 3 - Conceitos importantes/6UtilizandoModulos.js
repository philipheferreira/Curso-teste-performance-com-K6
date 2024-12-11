/*
		------------------------------------------- EXISTEM 3 TIPOS DIFERENTES DE MODULOS ----------------------------------------

	1 - Módulos embutidos -> fazem parte da lib da ferramenta K6
	2 - Módulos remotos -> modulos que não são do K6 mas que fazemos uma importação remota pelo protocolo http
	3 - Módulos do sistema local de arquivos -> faz a utilização de algum arquivo local como modulo para a ferramenta
	obs: Qualquer pessoa pode criar um modulo local usando a lib xk6
*/

//DEFAULT
import http from 'k6/http';
// REMOTO
import { AWSConfig, S3Client } from 'https://jslib.k6.io/aws/0.4.0/s3.js';
//LOCAL
import runTest from './test1.js';


// Se utilizar modulos externos adicionados tem um impacto negativo pois aumenta o uso de memoria e o uso de CPU
// Se for feita uma solução utilizando apenas os modulos nativos da ferramenta, a solução será mais rapida e eficiente
// Caso seja utilizado um modulo externo, de preferencia utilizar os modulos s3.js

// para rodar o arquivo basta digitar o comando k6 run 6UtilizandoModulos.js