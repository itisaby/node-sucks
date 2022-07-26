const fs = require('fs');
console.log("start")
//it's an asynchronous methods
//it has callback function
// fs.readFile('./Content/fist.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log(data);
//     }
// }
// );
// fs.readFile('./Content/second.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log(data);
//     }
// }
// );

fs.readFile('./Content/new.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    } else {
       const first =data;
        fs.readFile('./Content/second.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            } else {
                const second = data;
                fs.writeFile('./Content/new1.txt', first + second + "ARNAfggnfgB", { flag: 'a' }, 
                (err, data)=>{
                    if(err){
                        console.log(err);
                        return;
                    }else{
                        console.log("done with this task");
                    }
                }
                );  //append to the file
            }
        }
        );

    }
}
);
console.log("end");