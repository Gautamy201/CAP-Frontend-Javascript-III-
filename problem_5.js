function tolowerCase (){
    let newArry = []

    for (let i = 0 ; i<arry.length ; i++){
        let convert = arry[i].toLowerCase();
        newArry.push(convert)
    }
    
    return newArry
}

let arry = ["MA", "SA", "I", "SCH", "OOL"]

console.log(tolowerCase(arry))