let funcionario: {supervisores: string[], baterponto: (x:number) => string} = {

    supervisores: ["Alan", "Josué", "Cleiton"],

    baterponto: (x: number) => {
        if(x <= 8){
            return "Ponto normal";
        }
        return "Fora do horário";
    }


}

console.log(funcionario.baterponto(8))