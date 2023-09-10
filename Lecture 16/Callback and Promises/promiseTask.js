//Tasks : ( Don't use callbacks use only promises )
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a new url

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
download("www.xyz.com")
  .then(function fulfillmentHandler(value) {
    console.log("download file data -> ", value);
    return write(value);
  })
  .then(function fulfillmentHandler2(value) {
    console.log("file written data -> ", value);
    return upload(value ,"www.upload.com");
  })

  .then(function fulfillmentHandler3(value) {
    console.log("file uploaded ... at the new url -> ", value);
  });
