function stringSwip () {
    let newstr = "" ;

    for (let i = 0 ; i < str.length ; i++) {
        if (str[i] == str[i].toLowerCase()) {
            newstr+=str[i].toUpperCase()
        }
        else if (str[i] == str[i].toUpperCase()) {
        newstr+=str[i].toLowerCase()
        }
    }
    return newstr ;
}

let str = "Test"


console.log(stringSwip(str))