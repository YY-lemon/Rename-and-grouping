const fs = require('fs')
const path = require('path')
fs.readdir(path.join(__dirname,'./img/'),(err,res) => {
    // console.log(res);
    let png = [];
    let jpg = [];
    res.forEach(element => {
        if(element.indexOf('jpg') > -1) {
            jpg.push(element)
        } else if (element.indexOf('png') > -1) {
            png.push(element)
        }
    });
    console.log(jpg,png);
    jpg.forEach((item,i) => {
        // fs.readFile(path.join(__dirname,'./img/'+item),(err,data) => {
        //     fs.writeFile(path.join(__dirname,'./jpg/' + 'pic' + i + path.extname(item)),data,(err) => {
        //         if(err) return console.log(err.message);
        //     })
        // })
        fs.copyFile(path.join(__dirname,'./img/'+item),path.join(__dirname,'./jpg/' + 'pic' + i + path.extname(item)),(err) => {
            if(err) return console.log(err.message);
        })
    })
    png.forEach((item,i) => {
        // fs.readFile(path.join(__dirname,'./img/'+item),(err,data) => {
        //     fs.writeFile(path.join(__dirname,'./png/' + 'pic' + i + path.extname(item)),data,(err) => {
        //         if(err) return console.log(err.message);
        //     })
        // })
        fs.copyFile(path.join(__dirname,'./img/'+item),path.join(__dirname,'./png/' + 'pic' + i + path.extname(item)),(err) => {
            if(err) return console.log(err.message);
        })
    })
})