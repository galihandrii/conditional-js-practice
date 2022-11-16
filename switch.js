

const key = "murid";
switch (key) {
    case 'guru':
    console.log("guru mengajar")
    break;
    case 'pelaut':
    console.log('pelaut berlayar');
    break;
    case 'polisi':
    console.log("polisi menilang");
    break;
    default:
        console.log("gatau ngapain")
}

let belly ="hungry"
let reaction;

switch (belly){
    case "hungry":
    reaction = "eat"
    break;
    case "empty belly":
    reaction = "belly hurt"
    break;
    case "full":
     reaction = "sleepy";   
     break;
    default:
    reaction = "fall asleep";
     break;
}
console.log(reaction)


//===================TERNARY OPERATOR ======================
let button = true

button === false ? console.log('tampilkan sidebar') : console.log('hilangkan sidebar');
//print hilangkan sidebar
