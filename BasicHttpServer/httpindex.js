const http = require("http"); // required the http module
const PORT = 3000;
//using the createServer() function we can actually create a basic http server using http module.
//this function returns a server object , and takes a callback as an argument.
//this function created a server object but don't start the server

const server = http.createServer(function listener(request, response) {
  /**
   * request -> we will able to details of incoming http request -> object
   * response -> we will able tp configure what response we need to
   *            for an incoming http request -> object
   */
  //this callback is a kind of listener function that is going to collect
  // every http request that we will make to our server
  //todo ...

  //   console.log("Incoming request details " , request);
  //   console.log("Incoming  response details " ,response);

  if (request.url == "/home") {
    // if we make on /home this if block will be executed
    console.log(request.method);
    response.write("Welcome to http home");
    response.end("Completed");
    //response.end("Welcome to home ....");

    //how can we send an HTML code , or JSON from this setup ?
  }
  console.log("Request received");
});

server.listen(PORT, function exec() {
  // once we successfully boot up the server on the given port , this callback is
  // executed
  console.log(`Server is Up and running on PORT : ${PORT}`);
});
  