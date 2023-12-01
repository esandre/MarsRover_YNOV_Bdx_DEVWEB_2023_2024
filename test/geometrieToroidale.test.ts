import {RoverBuilder} from "./utilities/RoverBuilder";
import {PlanèteToroïdale} from "../src/PlanèteToroïdale";

describe("Sur une planète toroïdale, on revient toujours à son point de départ", () => {
    test("ETANT DONNE une planète toroïdale de taille 1 " +
        "QUAND le rover avance " +
        "ALORS rien ne se passe", () =>{
        let planète = new PlanèteToroïdale(1);
        let roverInitial = new RoverBuilder()
            .SurLaPlanète(planète)
            .Build();

        let roverAprèsMouvement = roverInitial.Avancer();

        expect(roverAprèsMouvement.Position).toEqual(roverInitial.Position);
    });
});