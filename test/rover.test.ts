import {Rover} from "../src/Rover";

describe('Un Rover peut avancer', () => {
    test.each([
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1]
    ])('ETANT DONNE un Rover atterrissant en (latitude, longitude) ' +
        'QUAND on le fait avancer ' +
        'ALORS sa latitude augmente de 1 ' +
        'ET sa longitude reste la même', (latitude, longitude) => {
        let rover = new Rover(latitude, longitude)

        rover = rover.Avancer();

        expect(rover.Position.Latitude).toBe(latitude + 1);
        expect(rover.Position.Longitude).toBe(longitude);
    });

    test.each([
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1]
    ])('ETANT DONNE un Rover atterrissant en (latitude, longitude) ' +
        'QUAND on le fait reculer ' +
        'ALORS sa latitude diminue de 1 ' +
        'ET sa longitude reste la même', (latitude, longitude) => {
        let rover = new Rover(latitude, longitude)

        rover = rover.Reculer();

        expect(rover.Position.Latitude).toBe(latitude - 1);
        expect(rover.Position.Longitude).toBe(longitude);
    });
});