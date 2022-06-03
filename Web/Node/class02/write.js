const fs = require('fs');
//sample디렉토리가 있는지 체크
const isDir = fs.existsSync('./sample');
if(isDir === false) {
    fs.mkdirSync('./sample');
}
const filename = './sample/sample.txt';
const isFile = fs.existsSync(filename);
if(isFile === false) {
   fs.open(filename, 'w', function(err){
      if(err) throw err;
      ws();
   });   
} else {
    ws();
}

function ws(){
   fs.writeFile(filename, 'sample입니다.' , (err)=>{
      if(err) throw err;
      console.log('파일에 내용을 썼습니다.');
   });
}

/*  fileExists를 비동기형으로 직접 제작
async function fileExists(filename) {
    try{
       await fs.promises.access(filename);
       return true;
    }catch( err ) {
       if(err.code === 'ENOENT') {
          return false;
       }else{
           throw err;
       }
    }
}

console.log(fileExists(filename));
*/
   