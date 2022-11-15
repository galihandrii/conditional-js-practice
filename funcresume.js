/*function namaOrang(param){
    return `Hi ${param}`
}
const panggilAbdul = namaOrang('Abdul')
console.log(panggilAbdul)
const panggilJamet = namaOrang('Jamet')
console.log(panggilJamet)


function pengurangan(param1,param2) {
    const kureng = param1 - param2;
    return kureng;
}

const kureng1 = pengurangan(10,4);
console.log(kureng1);
const kureng2 = pengurangan(7,4);
console.log(kureng2);
const kureng3 = pengurangan(4,4);
console.log(kureng3);
const kureng4 = pengurangan(8,4);
console.log(kureng4);*/

function stringLength (check){
const checkLength = check.length;
return checkLength;
}

const length1 = stringLength("Aldi Taher")
console.log(length1);

function average(a,b,c,d,e,f,g,h,i,j){
    const total = a+b+c+d+e+f+g+h+i+j
    const rataRata = total / arguments.length 
    return rataRata;
}
const rata1 = average(9,5,8,5,6,5,5,8,5,7)
console.log(rata1)


function dataType(type){
const coba = typeof type;
return coba
}

const type1 = dataType("budi")
const type2 = dataType(2)
const type3 = dataType(true)

console.log(type1,type2,type3);