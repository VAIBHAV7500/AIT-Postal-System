const fs = require('fs');
const http = require('http');
const url = require('url');

const json=fs.readFileSync(`${__dirname}/data/data.json`,'utf-8');

const laptopData = JSON.parse(json);

//console.log(laptopData);
const server = http.createServer((req,res)=>{
    const pathName = url.parse(req.url,true).pathname;
    const id = url.parse(req.url,true).query.reg_no;
  //  console.log(pathName);
   // console.log(id);
    if(pathName=== '/' && id === undefined)
    {
        res.writeHead(200,{"Content-type":"text/html"});
        let cards;
        fs.readFile(`${__dirname}/main.html`,'utf-8',(err,data)=>{
            res.end(data);
        });
    }
    else if(pathName === '/')
    {
        res.writeHead(200,{"Content-type":"text/html"});
        fs.readFile(`${__dirname}/template/template-detail.html`,'utf-8',(err,data)=>{
            for(let i=0;i<laptopData.length;i++)
            {
                const laptop = laptopData[i];
               // console.log(laptop);
                if(laptop.reg == id)
                {
                    let output=data.replace(/{%NAME%}/g,laptop.Name);
                     output = output.replace(/{%BRANCH%}/g,laptop.Branch);
                    output = output.replace(/{%REGISTRATION%}/g,laptop.reg);
                    output = output.replace(/{%EMAIL%}/g,laptop.email);
                    
                    var data = laptop.email;

                    console.log(data);

                    fs.writeFile(`${__dirname}/temp.txt`, data, function(err, data){

                    if (err) console.log(err);

                    console.log("Successfully Written to File.");

                    });
                    
                    res.end(output); 
                } 
            }
            res.end("Record is not in the database!!");           
        });
    }
   /* else if(pathName === '/detail')
    {
        const id1 = url.parse(req.url,true).query.id;
        console.log(id1);
           for(let i=0;i<laptopData.length;i++)
            {
                const laptop = laptopData[i];
                //console.log(laptop);
                if(laptop.reg == id1)
                {
                    var data = laptop.email;
                    console.log(data);
                    fs.writeFile(`${__dirname}/temp.txt`, data, function(err, data){
                    if (err) console.log(err);
                    console.log("Successfully Written to File.");
                    });
                    fs.readFile(`${__dirname}/template/template-success.html`,'utf-8',(err,data)=>{
            		let output = data.replace(/{%NAME%}/g,laptop.Name);
            		res.end(output);
        	    });
                } 
            }
        res.end("Success");
    }*/
});
port = 1337;
server.listen(port,'127.0.0.1',()=>{
    console.log("Started listening at " + port);
})
