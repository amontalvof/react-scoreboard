import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../index';

const component = mount(
    <MemoryRouter>
        <Navbar />
    </MemoryRouter>
);

const textButtons = ['Soccer', 'Water Polo', 'Chess'];

describe('Navbar', () => {
    test('should display 3 buttons', () => {
        const buttons = component.find('button');
        const checkButtons = textButtons.every(
            (item, index) => item === buttons.at(index).text()
        );
        expect(checkButtons).toBe(true);
    });
});
