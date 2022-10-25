interface Results{
    winner: String;
    date: Date;

    toString() : string;
    result() : void;
    
}

class Football implements Results {
    date: Date;
    elsoCsapat: string;
    #elsoCsapatGol: number;
    masodikCsapat: string;
    #masodikCsapatGol: number;
    winner : string;

    constructor(elsoCsapat: string, elsoCsapatGol: number, masodikCsapat: string, masodikCsapatGol:number, date:Date){
        this.elsoCsapat = elsoCsapat;
        this.#elsoCsapatGol = elsoCsapatGol;
        this.masodikCsapat = masodikCsapat   
        this.#masodikCsapatGol = masodikCsapatGol;
        this.date = date;

        if (elsoCsapatGol > masodikCsapatGol) {
            this.winner = elsoCsapat;
        }
        else {
            this.winner = masodikCsapat;
        }
    }

    result():void {
        console.log(this.toString())
    }
    toString(): string {
        return "Football match: " + this.#elsoCsapatGol + "-" + this.#masodikCsapatGol;
    }
}

class Marathon implements Results {
    winner: string;
    date: Date;
    futottIdo: number;

    constructor(winner: string, date: Date, futottIdo:number){
        this.winner = winner;
        this.date = date;
        this.futottIdo = futottIdo;
    }

    result(){
        console.log(this.toString());
    }
    
    toString(){
        return "Marathon: " + Math.floor(this.futottIdo/60) + " min(s) " + this.futottIdo%60 + " sec"
    }
}

class Calvinball implements Results {
    #winner: string;
    date: Date;
    veletlenSzam: number;
    constructor(winner:string, date:Date){
        this.#winner = winner;
        this.date = date;
        this.veletlenSzam = Math.floor(Math.random() * 90) + 11;
    }

    get winner() {
        return this.#winner;
    }

    set winner(winner:string) {
        if (this.winner == "Calvin" || this.winner == "Hobbes") {
            this.#winner = winner;
        }
        else {
            this.#winner = "Hibas Adat!"
        }
    }

    result(){
        console.log(this.toString());
    }
    
    toString(){
        return "Calvinball: " + this.veletlenSzam + " points" + this.#winner;
    }
}

let eredmenyek: Results[] = [
    new Football('MTK Budapest', 2, 'Ferencvarosi Torna Club', 1, new Date("2002-02-28")),
    new Football('MTK Budapest', 2, 'COME ON ENGLAND', 1, new Date("2022-01-01")),
    new Marathon('Minden Áron', new Date('2002-02-28'), 121),
    new Marathon('Ton Halas', new Date('2021-05-15'), 121),
    new Calvinball('Techno Kolos', new Date('2021-05-15')),
    new Calvinball('Calvin', new Date('2022-05-15')),
];

for (let eredmeny of eredmenyek){
    eredmeny.result();
}