const smart = true;
const beauty = false;
const sameReligion = false;

if(smart === true && sameReligion === true){
    console.log("Jadi Nikah")
} else if ( smart === true && sameReligion === false ){
    console.log("gajadi nikah")
} else if (beauty === true &&  sameReligion === false){
    console.log("gajadi nikah")
} else if (beauty === true && sameReligion === true){
    console.log("mikir-mikir")
} else {
    console.log("cari yang lain")
}


const merdeka = 1944

if ( merdeka >= 1945 ){
    console.log('sudah merdeka')
} else if (merdeka < 1945){
    console.log('belum merdeka')
} else {
    console.log('gatau')
}

const nilai = 59

if (nilai > 80){
    console.log('Excellent')
} else if ( nilai > 59 && nilai < 81){
    console.log("Good Job")
} else if ( nilai > 49 && nilai < 60){
    console.log("Kamu Ngulang!!")
} else {
    console.log('Kamu tidak naik kelas!!!')
}