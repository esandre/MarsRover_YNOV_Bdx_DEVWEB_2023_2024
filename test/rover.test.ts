import {Rover} from "../src/Rover";
import {Orientation} from "../src/Orientation";

describe('Un Rover peut avancer', () => {
    test.each([
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1]
    ])('ETANT DONNE un Rover orienté Nord atterrissant en (latitude, longitude) ' +
        'QUAND on le fait avancer ' +
        'ALORS sa latitude augmente de 1 ' +
        'ET sa longitude reste la même', (latitude, longitude) => {
        let rover = new Rover(latitude, longitude, Orientation.Nord)

        rover = rover.Avancer();

        expect(rover.Position.Latitude).toBe(latitude + 1);
        expect(rover.Position.Longitude).toBe(longitude);
    });

    test.each([
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1]
    ])('ETANT DONNE un Rover orienté Sud atterrissant en (latitude, longitude) ' +
        'QUAND on le fait avancer ' +
        'ALORS sa latitude diminue de 1 ' +
        'ET sa longitude reste la même', (latitude, longitude) => {
        let rover = new Rover(latitude, longitude, Orientation.Sud)

        rover = rover.Avancer();

        expect(rover.Position.Latitude).toBe(latitude - 1);
        expect(rover.Position.Longitude).toBe(longitude);
    });

    test.each([
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1]
    ])('ETANT DONNE un Rover orienté Nord atterrissant en (latitude, longitude) ' +
        'QUAND on le fait reculer ' +
        'ALORS sa latitude diminue de 1 ' +
        'ET sa longitude reste la même', (latitude, longitude) => {
        let rover = new Rover(latitude, longitude, Orientation.Nord)

        rover = rover.Reculer();

        expect(rover.Position.Latitude).toBe(latitude - 1);
        expect(rover.Position.Longitude).toBe(longitude);
    });
});