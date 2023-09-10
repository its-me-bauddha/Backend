function download(url) {
  return new Promise(function exec(res, rej) {
    console.log("started downloading the content from", url);
    setTimeout(function p() {
      console.log("completed downloading data in 5s");
      const content = "ABCDEF";
      res(content);
    }, 5000);
  });
}
// download("www.xyz.com")
// .then(function fulfillmentHandler(value){
//     console.log("content downloaded is " ,value);
// })

x = download("www.xyz.com");
x.then(
  function fulfillmentHandler1(value) {
    console.log("content downloaded is ", value);
    return "New Promise String";
  },
  function rejectionHandler1(value) {
    console.log("Rejected with", value);
  }
)
.then(
    function newFulfillHandler(value){
        console.log("value from chained then promise",value);
    }
)
