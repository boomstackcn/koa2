import _request from "request";

let request = (options) => {
	return new Promise((resolve, reject) => {
		options.headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json', // 需指定这个参数 否则 在特定的环境下 会引起406错误
        }
		_request(options, (error, response, body) => {
			error && reject(error);
            resolve(response, body);
		})
	})
}

export default request