var moment = require("moment");

const daysArray = [
  { 01: "um" },
  { 02: "dois" },
  { 03: "três" },
  { 04: "quatro" },
  { 05: "cinco" },
  { 06: "seis" },
  { 07: "sete" },
  { 08: "oito" },
  { 09: "nove" },
  { 10: "dez" },
  { 11: "onze" },
  { 12: "doze" },
  { 13: "treze" },
  { 14: "quatorze" },
  { 15: "quinze" },
  { 16: "dezesseis" },
  { 17: "dezessete" },
  { 18: "dezoito" },
  { 19: "dezenove" },
  { 20: "vinte" },
  { 21: "vinte e um" },
  { 22: "vinte e dois" },
  { 23: "vinte e três" },
  { 24: "vinte e quatro" },
  { 25: "vinte e cinco" },
  { 26: "vinte e seis" },
  { 27: "vinte e sete" },
  { 28: "vinte e oito" },
  { 29: "vinte e nove" },
  { 30: "trinta" },
  { 31: "trinta e um" },
];

const arrayAuxYear = [
  { 1: "cento" },
  { 2: "duzentos" },
  { 3: "trezentos" },
  { 4: "quatrocentos" },
  { 5: "quinhentos" },
  { 6: "seiscentos" },
  { 7: "setecentos" },
  { 8: "oitocentos" },
  { 9: "novecentos" },
];

const arrayAuxEndYear = [
  { 01: "um" },
  { 02: "dois" },
  { 03: "três" },
  { 04: "quatro" },
  { 05: "cinco" },
  { 06: "seis" },
  { 07: "sete" },
  { 08: "oito" },
  { 09: "nove" },
  { 10: "dez" },
  { 11: "onze" },
  { 12: "doze" },
  { 13: "treze" },
  { 14: "quatorze" },
  { 15: "quinze" },
  { 16: "dezesseis" },
  { 17: "dezessete" },
  { 18: "dezoito" },
  { 19: "dezenove" },
  { 20: "vinte" },
  { 21: "vinte e um" },
  { 22: "vinte e dois" },
  { 23: "vinte e três" },
  { 24: "vinte e quatro" },
  { 25: "vinte e cinco" },
  { 26: "vinte e seis" },
  { 27: "vinte e sete" },
  { 28: "vinte e oito" },
  { 29: "vinte e nove" },
  { 30: "trinta" },
  { 31: "trinta e um" },
  { 32: "trinta e dois" },
  { 33: "trinta e tres" },
  { 34: "trinta e quatro" },
  { 35: "trinta e cinco" },
  { 36: "trinta e seis" },
  { 37: "trinta e sete" },
  { 38: "trinta e oito" },
  { 39: "trinta e nove" },
  { 40: "quarenta" },
  { 41: "quarenta e um" },
  { 42: "quarenta e dois" },
  { 43: "quarenta e tres" },
  { 44: "quarenta e quatro" },
  { 45: "quarenta e cinco" },
  { 46: "quarenta e seis" },
  { 47: "quarenta e sete" },
  { 48: "quarenta e oito" },
  { 49: "quarenta e nove" },
  { 50: "cinquenta" },
  { 51: "cinquenta e um" },
  { 52: "cinquenta e dois" },
  { 53: "cinquenta e tres" },
  { 54: "cinquenta e quatro" },
  { 55: "cinquenta e cinco" },
  { 56: "cinquenta e seis" },
  { 57: "cinquenta e sete" },
  { 58: "cinquenta e oito" },
  { 59: "cinquenta e nove" },
  { 60: "sessenta" },
  { 61: "sessenta e um" },
  { 62: "sessenta e dois" },
  { 63: "sessenta e tres" },
  { 64: "sessenta e quatro" },
  { 65: "sessenta e cinco" },
  { 66: "sessenta e seis" },
  { 67: "sessenta e sete" },
  { 68: "sessenta e oito" },
  { 69: "sessenta e nove" },
  { 70: "setenta" },
  { 71: "setenta e um" },
  { 72: "setenta e dois" },
  { 73: "setenta e tres" },
  { 74: "setenta e quatro" },
  { 75: "setenta e cinco" },
  { 76: "setenta e seis" },
  { 77: "setenta e sete" },
  { 78: "setenta e oito" },
  { 79: "setenta e nove" },
  { 80: "oitenta" },
  { 81: "oitenta e um" },
  { 82: "oitenta e dois" },
  { 83: "oitenta e tres" },
  { 84: "oitenta e quatro" },
  { 85: "oitenta e cinco" },
  { 86: "oitenta e seis" },
  { 87: "oitenta e sete" },
  { 88: "oitenta e oito" },
  { 89: "oitenta e nove" },
  { 90: "noventa" },
  { 91: "noventa e um" },
  { 92: "noventa e dois" },
  { 93: "noventa e tres" },
  { 94: "noventa e quatro" },
  { 95: "noventa e cinco" },
  { 96: "noventa e seis" },
  { 97: "noventa e sete" },
  { 98: "noventa e oito" },
  { 99: "noventa e nove" },
];

let date = "09/30/2022";

if(!moment(date).isValid()){
    console.log('Data inválida')
}

let dateArray = date.split("/");

let day;
let year = dateArray[2];
let yearExtension;

daysArray.forEach((element) => {
  let key = Object.keys(element);
  let value = Object.values(element);

  // Pega dia por extenso
  if (key[0] == parseInt(dateArray[1])) {
    day = value;
  }

  // Pega primeiro digito do ano por extenso
  if (key[0] == parseInt(year[0])) {
    yearExtension = `${value} mil`;
  }
});

// Pega mês por extenso
let month = moment(date).locale("pt-br").format("MMMM");

// Pega resto do ano por extenso
arrayAuxYear.forEach((element) => {
  let keys = Object.keys(element);
  let values = Object.values(element);
  if (keys[0] == year[1]) {
    yearExtension += ` ${values[0]}`;
  }
});

arrayAuxEndYear.forEach((element) => {
  let keys = Object.keys(element);
  let values = Object.values(element);
  let endDigitYear = `${year[2]}${year[3]}`
  if(keys[0] == endDigitYear){
    yearExtension += ` ${values[0]}`
  }
});
let dateExtension = `${day} de ${month} de ${yearExtension}`;
console.log(dateExtension);
