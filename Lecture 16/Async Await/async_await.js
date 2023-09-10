function download(url) {
  return new Promise(function down(resolve, reject) {
    console.log("starting download .... from the url -> ", url);
    setTimeout(function processDownload(url) {
      console.log("Download complete");
      const content = "ABCDEF";
      resolve(content);
    }, 1000);
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

async function steps() {
  const downloadedData = await download("www.xyz.coom");
  console.log("data downloaded is", downloadedData);
  const fileWritten = await write(downloadedData);
  console.log("file written is", fileWritten);
  const uploadResponse = await upload(fileWritten, "www.google.drive.com");
  console.log("uploaded response is", uploadResponse);
  return uploadResponse;
}
steps();