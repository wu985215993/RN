const baseURL = 'http://jacklv.cn:3001';
export default function request(url, options = {}) {
  if (options.method && options.method.toUpperCase() === 'POST') {
    options.body = JSON.stringify(options.body);
    options.headers = {
      'Content-Type': 'application/json',
    };
  }
  return fetch(baseURL + url, options).then((res) => res.json());
}
