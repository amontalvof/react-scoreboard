import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CounterInput, RenderIf } from 'react-rainbow-components';
import Countdown from 'react-countdown';
import formatDate from '../../helpers/formatDate';
import {
    Container,
    TeamContainer,
    Title,
    TimeContainer,
    Description,
    StyledCard,
    StyledButton,
} from './style';

const containerStyles = {
    maxWidth: 150,
};

const ninetyMinutesInMilliseconds = 5400000;

const CategoryCard = (props) => {
    const { team1, team2, title } = props;
    const clockRef = useRef();
    const [counterTeam1, setCounterTeam1] = useState(0);
    const [counterTeam2, setCounterTeam2] = useState(0);
    const [startTime, setStartTime] = useState();

    const handleClick = () => {
        setStartTime(new Date());
        clockRef.current.start();
    };

    const handlePause = () => clockRef.current.pause();

    useEffect(() => {
        clockRef.current.pause();
    }, []);

    return (
        <StyledCard
            title={title}
            actions={
                <>
                    <StyledButton size="small" onClick={handleClick}>
                        Start
                    </StyledButton>
                    <RenderIf isTrue={startTime instanceof Date}>
                        <StyledButton size="small" onClick={handlePause}>
                            Pause
                        </StyledButton>
                    </RenderIf>
                </>
            }
        >
            <Container>
                <TeamContainer>
                    <Title>{team1}</Title>
                    <CounterInput
                        placeholder="Only numbers"
                        style={containerStyles}
                        label="Score"
                        labelAlignment="center"
                        value={counterTeam1}
                        onChange={setCounterTeam1}
                        min={0}
                    />
                </TeamContainer>
                <TeamContainer>
                    <Title>{team2}</Title>
                    <CounterInput
                        placeholder="Only numbers"
                        style={containerStyles}
                        label="Score"
                        labelAlignment="center"
                        value={counterTeam2}
                        onChange={setCounterTeam2}
                        min={0}
                    />
                </TeamContainer>
                <TimeContainer>
                    <Description>Start Time:</Description>
                    {startTime instanceof Date
                        ? formatDate(startTime.getTime())
                        : 'empty'}
                    <Description>End Time:</Description>
                    {startTime instanceof Date
                        ? formatDate(
                              startTime.getTime() + ninetyMinutesInMilliseconds
                          )
                        : 'empty'}
                    <Description>Remaining Time:</Description>
                    <Countdown
                        ref={clockRef}
                        daysInHours
                        date={Date.now() + ninetyMinutesInMilliseconds}
                    />
                </TimeContainer>
            </Container>
        </StyledCard>
    );
};

CategoryCard.propTypes = {
    team1: PropTypes.string.isRequired,
    team2: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default CategoryCard;
