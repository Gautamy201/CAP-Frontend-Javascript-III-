function calu_avg(){
    let sumOf = 0

    for (let i = 0 ; i < arry.length ; i++){
    sumOf+=Number(arry[i])
    }

    let result = sumOf / arry.length ;

    return result ;
}

let arry = [1,2,3,4,5,6,7,8];

console.log(calu_avg(arry));