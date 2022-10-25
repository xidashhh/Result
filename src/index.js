"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Football_elsoCsapatGol, _Football_masodikCsapatGol, _Calvinball_winner;
class Football {
    constructor(elsoCsapat, elsoCsapatGol, masodikCsapat, masodikCsapatGol, date) {
        _Football_elsoCsapatGol.set(this, void 0);
        _Football_masodikCsapatGol.set(this, void 0);
        this.elsoCsapat = elsoCsapat;
        __classPrivateFieldSet(this, _Football_elsoCsapatGol, elsoCsapatGol, "f");
        this.masodikCsapat = masodikCsapat;
        __classPrivateFieldSet(this, _Football_masodikCsapatGol, masodikCsapatGol, "f");
        this.date = date;
        if (elsoCsapatGol > masodikCsapatGol) {
            this.winner = elsoCsapat;
        }
        else {
            this.winner = masodikCsapat;
        }
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        return "Football match: " + __classPrivateFieldGet(this, _Football_elsoCsapatGol, "f") + "-" + __classPrivateFieldGet(this, _Football_masodikCsapatGol, "f");
    }
}
_Football_elsoCsapatGol = new WeakMap(), _Football_masodikCsapatGol = new WeakMap();
class Marathon {
    constructor(winner, date, futottIdo) {
        this.winner = winner;
        this.date = date;
        this.futottIdo = futottIdo;
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        return "Marathon: " + Math.floor(this.futottIdo / 60) + " min(s) " + this.futottIdo % 60 + " sec";
    }
}
class Calvinball {
    constructor(winner, date) {
        _Calvinball_winner.set(this, void 0);
        __classPrivateFieldSet(this, _Calvinball_winner, winner, "f");
        this.date = date;
        this.veletlenSzam = Math.floor(Math.random() * 90) + 11;
    }
    get winner() {
        return __classPrivateFieldGet(this, _Calvinball_winner, "f");
    }
    set winner(winner) {
        if (this.winner == "Calvin" || this.winner == "Hobbes") {
            __classPrivateFieldSet(this, _Calvinball_winner, winner, "f");
        }
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        return "Calvinball: " + this.veletlenSzam + " points";
    }
}
_Calvinball_winner = new WeakMap();
let eredmenyek = [
    new Football('MTK Budapest', 2, 'Ferencvarosi Torna Club', 1, new Date("2002-02-28")),
    new Football('MTK Budapest', 2, 'Ferencvarosi Torna Club', 1, new Date("2022-01-01")),
    new Marathon('Minden Áron', new Date('2002-02-28'), 121),
    new Marathon('Minden Áron', new Date('2021-05-15'), 121),
    new Calvinball('Minden Áron', new Date('2021-05-15')),
    new Calvinball('Minden Áron', new Date('2022-05-15')),
];
for (let eredmeny of eredmenyek) {
    eredmeny.result();
}
