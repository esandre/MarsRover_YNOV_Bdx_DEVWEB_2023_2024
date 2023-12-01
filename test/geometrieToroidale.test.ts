import {RoverBuilder} from "./utilities/RoverBuilder";
import {PlanèteToroïdale} from "../src/PlanèteToroïdale";

describe("Sur une planète toroïdale, on revient toujours à son point de départ", () => {
    test.each([[1], [2]])("ETANT DONNE une planète toroïdale de taille n = %s " +
        "QUAND le rover avance n fois " +
        "ALORS rien ne se passe", (taille: number) =>{
        let planète = new PlanèteToroïdale(taille);
        let roverInitial = new RoverBuilder()
            .SurLaPlanète(planète)
            .Build();

        let roverAprèsMouvement = roverInitial;
        for (let mouvements = 0; mouvements < taille; mouvements ++)
            roverAprèsMouvement = roverAprèsMouvement.Avancer();

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