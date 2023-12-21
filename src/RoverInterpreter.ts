import {Rover} from "./Rover";

export class RoverInterpreter {
    static InterpréterSur(commande: string, rover: Rover) : Rover {
        if(commande.length > 1) {
            rover = RoverInterpreter.InterpréterSur(commande[0], rover);
            return RoverInterpreter.InterpréterSur(commande.substring(1) ,rover);
        }

        if(commande == 'A')
            return rover.Avancer();

        if(commande == 'R')
            return rover.Reculer();

        if(commande == 'G')
            return rover.TournerAGauche();

        if(commande == 'D')
            return rover.TournerADroite();

        return rover;
    }
}