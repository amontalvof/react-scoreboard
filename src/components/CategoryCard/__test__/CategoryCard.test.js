import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Button } from 'react-rainbow-components';
import CategoryCard from '../index';

const component = mount(
    <MemoryRouter>
        <CategoryCard team1="testTeam1" team2="testTeam2" title="testTitle" />
    </MemoryRouter>
);

describe('CategoryCard', () => {
    test('should display all the game information', () => {
        const cardTitle = component.find('h2');
        const teamTitles = component.find('h3');
        const timeTitles = component.find('h4');
        const startButton = component.find(Button);

        expect(cardTitle.at(0).text()).toBe('testTitle');
        expect(teamTitles.at(0).text()).toBe('testTeam1');
        expect(teamTitles.at(1).text()).toBe('testTeam2');
        expect(timeTitles.at(0).text()).toBe('Start Time:');
        expect(timeTitles.at(1).text()).toBe('End Time:');
        expect(timeTitles.at(2).text()).toBe('Remaining Time:');
        expect(startButton.prop('children')).toBe('Start');
        startButton.simulate('click');
        const buttons = component.find(Button);
        expect(buttons.at(1).prop('children')).toBe('Pause');
    });
});
