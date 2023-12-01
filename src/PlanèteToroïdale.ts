import {Position} from "./Position";
import {PlanèteInterface} from "./Planète.interface";

export class PlanèteToroïdale implements PlanèteInterface {
    private readonly _taille: number;

    constructor(taille: number) {
        if(taille <= 0) throw new Error("La taille d'une planète toroïdale doit au moins être de 1");

        this._taille = taille;
    }

    public Normaliser(destination: Position) : Position {
        return destination.modulo(this._taille);
    }
}