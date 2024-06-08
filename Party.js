function houseParty(arr) {
    let not = []
    let guests = []
    let namesArr = []
    let finalArr = []
    let finalForPrintNot = []
    let already =[]
    let alreadyFinal=[]
    for (let command of arr) {
        let newArr = command.split(` `);
        if (newArr.includes(`not`)) {
            not.push(newArr[0])
        } else {
            guests.push(newArr[0])
        }
        console.log()
    }
    for (let i = 0; i < guests.length; i++) {
        namesArr.push(guests[i])
    }
    for (let i = 0; i < not.length; i++) {
        if (!not[i].includes(guests[i])){
        finalForPrintNot.push(not[i]);
        }
    }
    for( let i = 0; i<namesArr.length; i++){
        if(!finalArr.includes(namesArr[i])&& !not.includes(namesArr[i])){
            finalArr.push(namesArr[i])
        }else{
            alreadyFinal.push(namesArr[i])
        }
    }
for (let i=0; i<finalArr.length; i++){
    if (!already.includes(finalArr[i])){
        already.push(finalArr[i])
    }else if(already.includes(finalArr[i])){
alreadyFinal.push(finalArr[i])
    }

}
if (finalForPrintNot.length!==0){
console.log(`${finalForPrintNot} is not in the list!`)
for (let i=0; i<finalArr.length;i++){
console.log(finalArr[i]);
}
}else if (finalForPrintNot.length===0 && alreadyFinal.length>0){
    console.log (`${alreadyFinal} is already in the list!`)
    for (let i=0; i<finalArr.length;i++){
        console.log(finalArr[i]);
    }
} else {
    for (let i=0; i<finalArr.length;i++){
        console.log(finalArr[i]);
}
}
}
//houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!','Annie is going!','Tom is going!','Gergina is going!','Garry is going!','Jerry is going!']);
