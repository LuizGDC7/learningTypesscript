"use strict";
let funcionario = {
    supervisores: ["Alan", "Josué", "Cleiton"],
    baterponto: (x) => {
        if (x <= 8) {
            return "Ponto normal";
        }
        return "Fora do horário";
    }
};
console.log(funcionario.baterponto(8));
