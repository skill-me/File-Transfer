
import express from "express";
import fs from "fs";
import path from 'path';
import cors from 'cors';

// Use import.meta.url directly if you want the path as a URL string
const __dirname = (path.dirname(new URL(import.meta.url).pathname)); // Outputs the directory path of the current module
console.log(__dirname);

const app = express();

app.use(express.json());
app.use(cors());


app.get("/files", function(req,res){
    fs.readdir(__dirname, (err,data)=>{
        res.send(data);
})})

app.post("/database", (req,res)=>{
    console.log(req.body)
    let filename = req.body.file;
    console.log(filename);
    res.download(__dirname + "/" + filename, (err)=>{if (err) {
        console.error('Error in downloading the file:', err)}});
    console.log(__dirname + "/" + filename, filename)

})

app.listen(8080, ()=> {
    console.log("server is running correctly")
});