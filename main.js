const team = {
    _players: [{
        firstName: 'John', lastName: 'Doe', age: 23}, {
        firstName: 'Sarah', lastName: 'Poop', age: 22}, {
        firstName: 'Hello', lastName: 'Name', age: 19}
        ],
    _games: [{
        opponent: 'eagles', teamPoints: 54, opponentPoints: 5}, {
        opponent: 'snakes', teamPoints: 60, opponentPoints: 34}, {
        opponent: 'dragons', teamPoints: 56, opponentPoints: 63}
    ],
    get games() {
        return this._players;
    },
    get players() {
        return this._players;
    }

};