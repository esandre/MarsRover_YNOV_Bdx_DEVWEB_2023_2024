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

    test("ETANT DONNE une planète toroïdale de taille 2 " +
        "QUAND le rover avance 1 fois " +
        "ALORS il est dans une position équivalente au même rover sur une planète infinie", () =>{
        let planèteTestée = new PlanèteToroïdale(2);

        let roverTesté = new RoverBuilder()
            .SurLaPlanète(planèteTestée)
            .Build();

        let roverTémoin = new RoverBuilder().Build();

        let roverTestéAprèsMouvement = roverTesté.Avancer();
        let roverTémoinAprèsMouvement = roverTémoin.Avancer();

        expect(roverTestéAprèsMouvement.Position).toEqual(roverTémoinAprèsMouvement.Position);
    });

    test.each([[0], [-1]])("Une planète toroïdale est au moins de taille 1",
        (taille: number) => {
                expect(() => new PlanèteToroïdale(taille)).toThrow()
    })
});