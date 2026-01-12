let nome = "Arthur";
let quantExp = 5000;
let nivel = "";

if (quantExp <= 1000){
    nivel = 'Ferro';
}else if (quantExp <= 2000){
    nivel = 'Bronze';
}else if (quantExp <= 5000){
    nivel = 'Prata';
}else if (quantExp <= 7000){
    nivel = 'Ouro';
}else if (quantExp <= 8000){
    nivel = 'Platina';
}else if (quantExp <= 9000){
    nivel = 'Ascendente';
}else if (quantExp <= 10000){
    nivel = 'Imortal';
}else{
    nivel = 'Radiante';
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel);

