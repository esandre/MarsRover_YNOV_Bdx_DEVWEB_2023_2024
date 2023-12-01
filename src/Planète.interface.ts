import {Position} from "./Position";

export interface PlanèteInterface {
    Normaliser(coordonnées: Position): Position;
}