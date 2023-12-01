import {Position} from "./Position";
import {PlanèteInterface} from "./Planète.interface";

export class PlanèteToroïdale implements PlanèteInterface {
    private readonly _taille: number;

    constructor(taille: number) {
        this._taille = taille;
        if(taille <= 0) throw new Error("La taille d'une planète toroïdale doit au moins être de 1");
    }

    public Normaliser(destination: Position) : Position {
        return destination.modulo(this._taille);
    }
}