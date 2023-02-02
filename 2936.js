var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const vezesPorcaoCurupira = lines.shift();
const vezesPorcaoBoitata = lines.shift();
const vezesPorcaoBoto = lines.shift();
const vezesPorcaoMapin = lines.shift();
const vezesPorcaoIara = lines.shift();

const qtnPorcaoCurupira = 300;
const qtnPorcaoBoitata = 1500;
const qtnPorcaoBoto = 600;
const qtnPorcaoMapin = 1000;
const qtnPorcaoIara = 150;

var total = 225;

function calculaQtnPorcao(teste, qtnPorcao) {
   total = total + teste * qtnPorcao;
}

calculaQtnPorcao(vezesPorcaoCurupira, qtnPorcaoCurupira);
calculaQtnPorcao(vezesPorcaoBoitata, qtnPorcaoBoitata);
calculaQtnPorcao(vezesPorcaoBoto, qtnPorcaoBoto);
calculaQtnPorcao(vezesPorcaoMapin, qtnPorcaoMapin);
calculaQtnPorcao(vezesPorcaoIara, qtnPorcaoIara);

console.log(total, "\n");
