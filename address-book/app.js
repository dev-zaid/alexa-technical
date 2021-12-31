const fs = require("fs");
const { exit } = require("process");
const rl = require("readline");
const r = rl.createInterface({ input: process.stdin, output: process.stdout });

console.log("Welcome to the address directory.\n");
console.log("Please choose one of the following options :\n");

main();

function main(){
    r.question("Enter  \n(1) - Add address  \n(2) - Delete address \n(3) - View address \n(4) - Exit", 
    (option)=>{ 
        choosefunc(option);
    });
}

function choosefunc(opt){
    switch (opt){
        case '1':
            add();
            break;
        case '2':
            del();
            break;
        case '3':
            show();
            break;
        case '4':
            exitDirectory();
            break;
        default: console.log("Enter a Valid Input.\n"); 
        main();
    }     
};