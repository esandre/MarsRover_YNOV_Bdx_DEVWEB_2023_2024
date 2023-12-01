import {Position} from "./Position";
import {PlanèteInterface} from "./Planète.interface";

export class PlanèteToroïdale implements PlanèteInterface {
    constructor(taille: number) {
        
    }

    public Normaliser(destination: Position) : Position {
        return destination.modulo(1);
    }
}