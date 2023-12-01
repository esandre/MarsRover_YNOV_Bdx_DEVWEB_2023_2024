import {Position} from "./Position";

export class Orientation{
    static Nord: Orientation = new Orientation(new Position(0, 1));
    static Sud: Orientation = new Orientation(new Position(0, -1));
    static Est: Orientation = new Orientation(new Position(1, 0));
    static Ouest: Orientation = new Orientation(new Position(-1, 0));

    private _vecteur: Position;

    private constructor(vecteur: Position){
        this._vecteur = vecteur;
    }

    public SuivanteHoraire() : Orientation{
        if(this == Orientation.Nord) return Orientation.Est;
        if(this == Orientation.Est) return Orientation.Sud;
        if(this == Orientation.Sud) return Orientation.Ouest;
        return Orientation.Nord;
    }

    public appliquer(position: Position): Position {
        return this._vecteur.add(position);
    }

    public opposé() {
        if(this == Orientation.Nord) return Orientation.Sud;
        if(this == Orientation.Sud) return Orientation.Nord;
        if(this == Orientation.Est) return Orientation.Ouest;
        return Orientation.Est;
    }
}