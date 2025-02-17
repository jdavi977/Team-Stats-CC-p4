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
    },
    addPlayer(newFirstName, newLastName, newAge) {
        const player = {firstName: newFirstName, lastName: newLastName, age: newAge}
        team._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {opponent: newOpponent, teamPoints: newTeamPoints, newOpponent: newOpponentPoints}
        team._games.push(game);
    }
};
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

team.addGame('Titans', 100, 98);
console.log(team._games);