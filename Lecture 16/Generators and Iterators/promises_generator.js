function download(url) {
    return new Promise(function down(resolve, reject) {
      console.log("starting download .... from the url -> ", url);
      setTimeout(function processDownload(url) {
        console.log("Download complete");
        const content = "ABCDEF";
        resolve(content);
      }, 6000);
    });
  }
  
  function write(content) {
    return new Promise(function write(resolve, reject) {
      console.log("Started writing a file with", content);
      setTimeout(function processWrite() {
        console.log("completing the written work..");
        const filename = "file.txt";
        resolve(filename);
      }, 5000);
    });
  }
  
  function upload(file, url) {
    return new Promise(function write(resolve, reject) {
      console.log("starting uploading", file, "on", url);
      setTimeout(function up() {
        console.log("upload completed ");
        const response = "success";
        resolve(response);
      }, 2000);
    });
  }

function doAfterReceiving(value){
      let future = iter.next(value);
      console.log("future is " ,future);
      if(future.done) return ;
      future.value.then(doAfterReceiving);
}

function * steps(){
    const downloadedData = yield download("www.xyz.coom");
    console.log("data downloaded is" , downloadedData);
    const fileWritten = yield write(downloadedData);
    console.log("file written is",fileWritten);
    const uploadResponse = yield upload(fileWritten,"www.google.drive.com");
    console.log("uploaded response is" ,uploadResponse);
    return uploadResponse;
}

const iter = steps();
const future = iter.next();
future.value.then(doAfterReceiving);