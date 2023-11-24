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
    ])('ETANT DONNE un Rover orienté Est atterrissant en (latitude, longitude) ' +
        'QUAND on le fait avancer ' +
        'ALORS sa longitude augmente de 1 ' +
        'ET sa longitude reste la même', (latitude, longitude) => {
        let rover = new Rover(latitude, longitude, Orientation.Est)

        rover = rover.Avancer();

        expect(rover.Position.Latitude).toBe(latitude);
        expect(rover.Position.Longitude).toBe(longitude + 1);
    });

    test.each([
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1]
    ])('ETANT DONNE un Rover orienté Ouest atterrissant en (latitude, longitude) ' +
        'QUAND on le fait avancer ' +
        'ALORS sa longitude diminue de 1 ' +
        'ET sa longitude reste la même', (latitude, longitude) => {
        let rover = new Rover(latitude, longitude, Orientation.Ouest)

        rover = rover.Avancer();

        expect(rover.Position.Latitude).toBe(latitude);
        expect(rover.Position.Longitude).toBe(longitude - 1);
    });

    test.each([
        [Orientation.Nord, 0, 0],
        [Orientation.Nord, 1, 0],
        [Orientation.Nord, 0, 1],
        [Orientation.Nord, 1, 1],
        [Orientation.Sud, 0, 0],
        [Orientation.Sud, 1, 0],
        [Orientation.Sud, 0, 1],
        [Orientation.Sud, 1, 1],
        [Orientation.Est, 0, 0],
        [Orientation.Est, 1, 0],
        [Orientation.Est, 0, 1],
        [Orientation.Est, 1, 1],
        [Orientation.Ouest, 0, 0],
        [Orientation.Ouest, 1, 0],
        [Orientation.Ouest, 0, 1],
        [Orientation.Ouest, 1, 1],
    ])('ETANT DONNE un Rover orienté {orientation} atterrissant en (latitude, longitude) ' +
        'QUAND on le fait reculer ' +
        'ALORS le résultat est le même qu\'en avançant dans la direction opposée ', (orientation, latitude, longitude) => {
        let roverTesté = new Rover(latitude, longitude, orientation)
        let roverTémoin = new Rover(latitude, longitude, orientation.opposé())

        roverTesté = roverTesté.Reculer();
        roverTémoin = roverTémoin.Avancer();

        expect(roverTesté.Position).toEqual(roverTémoin.Position);
    });
});