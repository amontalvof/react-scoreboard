import React from 'react';
import PropTypes from 'prop-types';
import CategoryCard from '../CategoryCard';
import { GamesContainer } from './style';

const Game = ({ categories }) => {
    return (
        <GamesContainer>
            {categories.map((category) => {
                return (
                    <CategoryCard
                        key={category.id}
                        title={category.title}
                        team1={category.team1}
                        team2={category.team2}
                    />
                );
            })}
        </GamesContainer>
    );
};

Game.propTypes = {
    categories: PropTypes.array,
};

Game.defaultProps = {
    categories: [],
};

export default Game;
