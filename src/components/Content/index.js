import React, { useState, useEffect, useMemo } from 'react';
import {
    useParams,
    useHistory,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';
import { Picklist, Option } from 'react-rainbow-components';
import Game from '../Game';
import data from '../../data/games.json';
import getGame from '../../helpers/getGame';
import { ContentContainer, PickerContainer, Title } from './style';

const containerStyles = {
    width: '200px',
};

const Content = () => {
    const { sportName } = useParams();
    const { push } = useHistory();
    const initialSelectedState = useMemo(() => {
        return {
            value: {
                name: data[sportName][0].id,
                label: data[sportName][0].title,
            },
        };
    }, [sportName]);

    const initialGameData = data[sportName][0];

    const [selectedGame, setSelectedGame] = useState(initialSelectedState);
    const [gameData, setGameData] = useState(initialGameData);
    const newSportName = sportName === 'polo' ? 'water polo' : sportName;

    useEffect(() => {
        setSelectedGame(initialSelectedState);
    }, [sportName, initialSelectedState]);

    useEffect(() => {
        const {
            value: { name },
        } = selectedGame;
        const game = getGame(data[sportName], name);
        setGameData(game);
        push(`/sport/${sportName}/${selectedGame.value.name}`);
    }, [selectedGame, sportName, push]);

    const { categories } = gameData || { categories: [] };

    const FinalGames = () => {
        return <Game categories={categories} />;
    };

    return (
        <ContentContainer>
            <PickerContainer>
                <Title>{newSportName}</Title>
                <Picklist
                    style={containerStyles}
                    onChange={(value) => setSelectedGame({ value })}
                    value={selectedGame.value}
                    label="Select Game"
                    hideLabel
                >
                    <Option name="header" label="Your games" variant="header" />
                    {data[sportName].map((item) => {
                        return (
                            <Option
                                key={item.id}
                                name={item.id}
                                label={item.title}
                            />
                        );
                    })}
                </Picklist>
            </PickerContainer>
            <Switch>
                <Route
                    path="/sport/:sportName/:gameId"
                    component={FinalGames}
                />
                <Redirect
                    from="/sport/:sportName"
                    to={`/sport/:sportName/${selectedGame.value.name}`}
                />
            </Switch>
        </ContentContainer>
    );
};

export default Content;
