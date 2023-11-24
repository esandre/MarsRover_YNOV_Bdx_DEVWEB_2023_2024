import {Rover} from "../src/Rover";
import {Orientation} from "../src/Orientation";

describe('Un Rover peut tourner', () => {
    test("ETANT DONNE un rover orienté Nord" +
        "QUAND il tourne a droite et avance" +
        "ALORS son comportement est le même qu'un Rover orienté Est faisant de même", () => {
        let roverTesté = new Rover(0, 0, Orientation.Nord);
        let roverTémoin = new Rover(0, 0, Orientation.Est);

        roverTesté = roverTesté.TournerADroite().Avancer();
        roverTémoin = roverTémoin.Avancer();

        expect(roverTesté.Position).toEqual(roverTémoin.Position);
    });
});