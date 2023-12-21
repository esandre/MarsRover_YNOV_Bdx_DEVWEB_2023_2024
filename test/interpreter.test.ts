import {RoverBuilder} from "./utilities/RoverBuilder";
import {RoverInterpreter} from "../src/RoverInterpreter";
import {Rover} from "../src/Rover";

const idempotence: (rover: Rover) => Rover = rover => rover;
const avancerLambda: (rover: Rover) => Rover = rover => rover.Avancer();
const reculerLambda: (rover: Rover) => Rover = rover => rover.Reculer();
const gaucheLambda: (rover: Rover) => Rover = rover => rover.TournerAGauche();
const droiteLambda: (rover: Rover) => Rover = rover => rover.TournerADroite();

describe('Un Rover recevant une commande se comporte ' +
    'comme s\'il avait été appelé directement', () => {
    test.each([
        ['?', idempotence],
        ['A', avancerLambda],
        ['R', reculerLambda],
        ['G', gaucheLambda],
        ['D', droiteLambda],
    ])("ETANT DONNE un Rover ET son interpréteur " +
        "QUAND on envoie la commande '%s' " +
        "ALORS le résultat est équivalent à un appel direct",
        (commande, actionEquivalente: (rover: Rover) => Rover) => {
        let rover = new RoverBuilder().Build();

        let roverAprèsCommande = RoverInterpreter.InterpréterSur(commande, rover);

        let roverTémoin = new RoverBuilder().Build();
        roverTémoin = actionEquivalente(roverTémoin);
        expect(roverAprèsCommande).toEqual(roverTémoin);
    });

    test.each([
        ['??', idempotence],
        ['AA', avancerLambda, avancerLambda],
        ['RR', reculerLambda, reculerLambda],
        ['GG', gaucheLambda, gaucheLambda],
        ['DD', droiteLambda, droiteLambda],
    ])("ETANT DONNE un Rover ET son interpréteur " +
        "QUAND on envoie la commande '%s' " +
        "ALORS le résultat est équivalent à un appel direct",
        (commande, ...actionsEquivalentes: ((rover: Rover) => Rover)[]) => {
            let rover = new RoverBuilder().Build();

            let roverAprèsCommande = RoverInterpreter.InterpréterSur(commande, rover);

            let roverTémoin = new RoverBuilder().Build();

            for(let actionEquivalente of actionsEquivalentes)
                roverTémoin = actionEquivalente(roverTémoin);

            expect(roverAprèsCommande).toEqual(roverTémoin);
        })
});