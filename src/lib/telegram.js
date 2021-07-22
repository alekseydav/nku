import http from 'https'
const TOKEN = '770512214:AAGGQpLUjGv1i8m3yT9MITE1wcGOBgixhkU'
const CHAT_ID = 326616878;

export default {
  sendMessage: (message) => {
    const options = {
      host: 'api.telegram.org',
      port: 443,
      path: `/bot${TOKEN}/sendMessage`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const req = http.request(options, (res) => {
      // res.on('data', (chunk) => {
      //   console.log(`BODY: ${chunk}`);
      // });
    })
    req.write(JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    }))
    req.end();
  }
}