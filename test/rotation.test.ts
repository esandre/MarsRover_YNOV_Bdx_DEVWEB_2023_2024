import {Rover} from "../src/Rover";
import {Orientation} from "../src/Orientation";
import {RoverBuilder} from "./utilities/RoverBuilder";

describe('Un Rover peut tourner', () => {
    test("ETANT DONNE un rover orienté Nord" +
        "QUAND il tourne a droite et avance" +
        "ALORS son comportement est le même qu'un Rover orienté Est faisant de même", () => {
        let roverTesté = new RoverBuilder()
            .Orienté(Orientation.Nord)
            .Build();

        let roverTémoin = new RoverBuilder()
            .Orienté(Orientation.Est)
            .Build();

        roverTesté = roverTesté.TournerADroite().Avancer();
        roverTémoin = roverTémoin.Avancer();

        expect(roverTesté.Position).toEqual(roverTémoin.Position);
    });
});