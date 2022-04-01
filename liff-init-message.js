// 傳送訊息
// type 的可用值說明：https://developers.line.biz/en/reference/liff/#send-messages
liff.sendMessages([
  {
    type: 'text',
    text: 'Hello, World!'
  }
]).then(function(res) {
    console.log(res)
  })
  .catch(function(error) {
    console.log(error);
  });

