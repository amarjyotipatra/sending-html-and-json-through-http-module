const http=require('http')
const server=http.createServer(function listener(request,response){
   //We can write multiple response.write() function and it will be executes as streams

   //HTML
    response.writeHead(200,{'Content-Type':'text/html'})
    console.log("server got hit");
    response.end('<html><h1>Hello World</h1></html>')

    //JSON
    // const data={msg:'Hello World as json'}
    // response.writeHead(200,{'Content-Type':'application/json'})
    // response.end(JSON.stringify(data))
})
server.listen(3333,function exec(){
    console.log("Server is up and running");
})