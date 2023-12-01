import {RoverBuilder} from "./utilities/RoverBuilder";
import {PlanèteToroïdale} from "../src/PlanèteToroïdale";
import {Orientation} from "../src/Orientation";
import {multiplyAndFlatten} from "./utilities/cartesianData";

const orientations = [Orientation.Nord, Orientation.Sud, Orientation.Est, Orientation.Ouest];

describe("Sur une planète toroïdale, on revient toujours à son point de départ", () => {
    test.each(
        multiplyAndFlatten([1, 2], orientations)
    )("ETANT DONNE une planète toroïdale de taille n = %s " +
        "ET un rover orienté %s " +
        "QUAND le rover avance n fois " +
        "ALORS rien ne se passe", (taille: number, orientation: Orientation) =>{
        let planète = new PlanèteToroïdale(taille);
        let roverInitial = new RoverBuilder()
            .SurLaPlanète(planète)
            .Orienté(orientation)
            .Build();

        let roverAprèsMouvement = roverInitial;
        for (let mouvements = 0; mouvements < taille; mouvements ++)
            roverAprèsMouvement = roverAprèsMouvement.Avancer();

        expect(roverAprèsMouvement.Position).toEqual(roverInitial.Position);
    });

    test.each(multiplyAndFlatten([2, 3], orientations),)(
        "ETANT DONNE une planète toroïdale de taille n = %s " +
        "ET un rover orienté %s " +
        "QUAND le rover avance n - 1 fois " +
        "ALORS il est dans une position équivalente au même rover ayant reculé",
        (taille: number, orientation: Orientation) =>{
        let planèteTestée = new PlanèteToroïdale(taille);

            let roverBuilder = new RoverBuilder()
                .SurLaPlanète(planèteTestée)
                .Orienté(orientation);

            let roverTesté = roverBuilder.Build();
            let roverTémoin = roverBuilder.Build().Reculer();

        for (let mouvements = 0; mouvements < taille - 1; mouvements ++) {
            roverTesté = roverTesté.Avancer();
        }

        expect(roverTesté.Position).toEqual(roverTémoin.Position);
    });

    test.each(multiplyAndFlatten([1, 2], orientations))("ETANT DONNE une planète toroïdale de taille n = %s " +
        "ET un rover orienté %s " +
        "QUAND le rover recule n fois " +
        "ALORS rien ne se passe",
        (taille: number, orientation: Orientation) =>{
        let planète = new PlanèteToroïdale(taille);
        let roverInitial = new RoverBuilder()
            .SurLaPlanète(planète)
            .Orienté(orientation)
            .Build();

        let roverAprèsMouvement = roverInitial;
        for (let mouvements = 0; mouvements < taille; mouvements ++)
            roverAprèsMouvement = roverAprèsMouvement.Reculer();

        expect(roverAprèsMouvement.Position).toEqual(roverInitial.Position);
    });

    test.each(multiplyAndFlatten([2, 3], orientations),)("ETANT DONNE une planète toroïdale de taille n = %s " +
        "ET un rover orienté %s " +
        "QUAND le rover recule n - 1 fois " +
        "ALORS il est dans une position équivalente au même rover ayant avancé",
        (taille: number, orientation: Orientation) =>{
            let planèteTestée = new PlanèteToroïdale(taille);

            let roverBuilder = new RoverBuilder()
                .SurLaPlanète(planèteTestée)
                .Orienté(orientation);

            let roverTesté = roverBuilder.Build();
            let roverTémoin = roverBuilder.Build().Avancer();

            for (let mouvements = 0; mouvements < taille - 1; mouvements ++)
                roverTesté = roverTesté.Reculer();

            expect(roverTesté.Position).toEqual(roverTémoin.Position);
        });

    test.each([[0], [-1]])("Une planète toroïdale est au moins de taille 1",
        (taille: number) => {
                expect(() => new PlanèteToroïdale(taille)).toThrow()
    })
});