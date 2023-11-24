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

    test('ETANT DONNE un Rover atterrissant en (1, 1)' +
        'QUAND on le fait avancer ' +
        'ALORS il passe en (1, 2)', () => {
        let rover = new Rover(1, 1)

        rover = rover.Avancer();

        expect(rover.Position.Latitude).toBe(2);
        expect(rover.Position.Longitude).toBe(1);
    });
});