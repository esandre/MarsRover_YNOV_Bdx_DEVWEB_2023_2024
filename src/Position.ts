export class Position{
    constructor(longitude: number, latitude: number) {
        this.Longitude = longitude;
        this.Latitude = latitude;
    }

    Latitude: number;
    Longitude: number;

    public add(position: Position) : Position {
        return new Position(this.Longitude + position.Longitude, this.Latitude + position.Latitude);
    }

    public modulo(number: number) {
        let longitude = this.moduloEntier(this.Longitude, number);
        let latitude = this.moduloEntier(this.Latitude, number);

        return new Position(longitude, latitude);
    }

    private moduloEntier(num: number, mod: number) : number {
        const valeurRéduiteSignée = (num % mod) % -mod;
        const valeurNonSignée = valeurRéduiteSignée + mod;
        return valeurNonSignée % mod;
    }
}