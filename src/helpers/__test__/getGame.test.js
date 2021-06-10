import getGame from '../getGame';
import data from '../../data/games.json';

const sport = data['soccer'];
describe('getGame', () => {
    test('should return the game information', () => {
        const result = getGame(sport, 'game-Soccer-1');
        expect(result).toEqual({
            id: 'game-Soccer-1',
            title: 'Game Soccer 1',
            categories: [
                {
                    id: 'categoryUnder10',
                    title: 'Category Under 10',
                    team1: 'Team Soccer 1',
                    team2: 'Team Soccer 2',
                },
                {
                    id: 'categoryUnder15',
                    title: 'Category Under 15',
                    team1: 'Team Soccer 1',
                    team2: 'Team Soccer 2',
                },
                {
                    id: 'categoryOver15',
                    title: 'Category Over 15',
                    team1: 'Team Soccer 1',
                    team2: 'Team Soccer 2',
                },
            ],
        });
    });
});
