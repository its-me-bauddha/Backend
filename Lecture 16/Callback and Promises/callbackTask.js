
//Tasks : (Don't use promises only use callbacks)
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a new url

function download(url, cb) {
  /**
   * Downloads content from the given url and passed the
   * downloaded content to the given callback cb
   */

  console.log("Starting to download data from", url);
  setTimeout(function down() {
    const content = "ABCDEF"; //assume dummy download content
    cb(content);
  }, 10000);
}

function writeFile(data, cb) {
  // writes the given data into a new file
  console.log("Started writing a file with", data);
  setTimeout(function write() {
    console.log("Completed writing the data in a file");
    const filename = "file.txt";
    cb(filename);
  }, 5000);
}

function upload(url, file, cb) {
  // uploads the data from a file to a given url
  console.log("starting uploading", file, "on", url);
  setTimeout(function up() {
    console.log("upload completed ");
    const response = "success";
    cb(response);
  }, 2000);
}

download("www.xyz.com", function processDownload(content) {
  console.log("We are now going to process the downloaded data");
  writeFile(content, function processWrite(filename) {
    console.log("We have downloaded and written the file ,now will upload");
    upload("www.upload.com", filename, function processUpload(response) {
      console.log("we have upload with", response);
    });
  });
});

// download("www.xyz.com" ,function process(content){
//     console.log("Downloaded data is",content)
// })

// writeFile("abcdef",function process(name){
//     console.log("file written with name ",name);
// })



// 1. Write a function to download data from a url ;

// function download(url, cb) {
//     setTimeout(function exec() {
//       console.log("downloading done", url);
//       const filename = "xyz";
//       cb(filename);
//     }, 5000);
//   }
  
//   download("www.xyz.com", function p(value) {
//     filename = value;
//     console.log(filename);
//     download("www.abc.com", function s(value) {
//       console.log("uploading the file..");
//     });
//   });
  
