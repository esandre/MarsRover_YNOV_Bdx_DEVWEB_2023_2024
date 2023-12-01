import {Rover} from "../src/Rover";
import {Orientation} from "../src/Orientation";
import {RoverBuilder} from "./utilities/RoverBuilder";

describe('Un Rover peut tourner', () => {
    test.each([
        [Orientation.Nord, Orientation.Est],
        [Orientation.Est, Orientation.Sud],
        [Orientation.Sud, Orientation.Ouest],
        [Orientation.Ouest, Orientation.Nord],
    ])("ETANT DONNE un rover orienté {orientationTestée}" +
        "QUAND il tourne a droite et avance" +
        "ALORS son comportement est le même qu'un Rover orienté {orientationSuivanteHoraire} faisant de même",
        (orientationTestée: Orientation, orientationSuivanteHoraire: Orientation) => {

        let roverTesté = new RoverBuilder()
            .Orienté(orientationTestée)
            .Build();

        let roverTémoin = new RoverBuilder()
            .Orienté(orientationSuivanteHoraire)
            .Build();

        roverTesté = roverTesté.TournerADroite().Avancer();
        roverTémoin = roverTémoin.Avancer();

        expect(roverTesté.Position).toEqual(roverTémoin.Position);
    });
});