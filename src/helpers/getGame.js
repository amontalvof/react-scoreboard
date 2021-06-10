const getGame = (sport, gameNumber) => {
    return sport.find((item) => item.id === gameNumber);
};

export default getGame;
