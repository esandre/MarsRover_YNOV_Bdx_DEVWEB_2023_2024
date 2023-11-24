import {Rover} from "../src/Rover";

describe('Un Rover peut avancer', () => {
    test('ETANT DONNE un Rover atterrissant en (0, 0)' +
        'QUAND on le fait avancer ' +
        'ALORS il passe en (0, 1)', () => {
        let rover = new Rover(0, 0)

        rover = rover.Avancer();

        expect(rover.Position.Latitude).toBe(1);
        expect(rover.Position.Longitude).toBe(0);
    });
});