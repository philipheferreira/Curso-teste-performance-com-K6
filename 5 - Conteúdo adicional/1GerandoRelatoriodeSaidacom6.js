import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"; // importa a biblioteca externa
import http from 'k6/http';
import { check } from 'k6';

export const options = {
	vus: 1,
	duration: '30s',
	thresholds: {
		checks: [ 'rate > 0.99']
	}
}

export default function(){

	const BASE_URL = 'https://test-api.k6.io/public/crocodiles/';

	const res = http.get(BASE_URL);

	check(res, {
		'Status code 200': (r) => r.status === 200
	});
}


export function handleSummary(data) {
  return {
    "TestePhiliphe.html": htmlReport(data),
  };
}