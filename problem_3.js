function findOdd(num){
    for(let i=0;i<=num;i++){
        if(i % 2 != 0){
            console.log("This is odd Numer - "+i)
        }
    }
}

let num= 7;

console.log(findOdd(num))