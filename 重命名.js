const fs = require('fs')
const path = require('path')
fs.readdir(path.join(__dirname,'./img'),(err,res) => {
    // console.log(res);
    res.forEach((element,i) => {
    //    fs.readFile(path.join(__dirname,'img',element),(err,data) => {
    //        console.log(data);
    //        fs.writeFile(path.join(__dirname,'./img2/'+ 'pic' + i + path.extname(element)),data,(err) => {
    //            if(err) return console.log(err.message);
    //            console.log('重命名成功');
    //        })
    //    }) 

        fs.copyFile(path.join(__dirname,'/img/' + element),path.join(__dirname,'/img3/'+ 'pic' + i + path.extname(element)),(err) => {
            if(err) return console.log(err.message);
            console.log('重命名成功');
        })
    });
})
