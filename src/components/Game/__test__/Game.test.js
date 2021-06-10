import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Game from '../index';

const categories = [
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
];

const component = mount(
    <MemoryRouter>
        <Game categories={categories} />
    </MemoryRouter>
);

describe('Game', () => {
    test('should render a card per category', () => {
        const cardTitles = component.find('h2');
        const checkCards = categories.every((item, index) => {
            return item.title === cardTitles.at(index).text();
        });
        expect(checkCards).toBe(true);
    });
});
