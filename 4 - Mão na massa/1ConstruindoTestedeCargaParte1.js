
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
	vus: 2,
	duration: '5s',
}

export default function(){
	const BASE_URL = 'https://test-api.k6.io/public/crocodiles/';
	const res = http.get(BASE_URL);
}