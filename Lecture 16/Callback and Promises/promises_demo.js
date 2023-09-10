function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Starting downloading from ", url);
    setTimeout(function processDownloading() {
      let data = "Dummy Data";
      console.log("Downloading Completed ");
      resolve(data);
    }, 7000);
  });
}

console.log("Start ..");
let PromiseObj = fetchData("urlForFetch");
PromiseObj.then(function fulfillHandler(value) {
  console.log("Value is", value);
});
console.log("end .....")