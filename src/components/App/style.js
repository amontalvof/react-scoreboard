import styled from 'styled-components';
import soccer from '../../assets/images/soccer.jpg';

export const AppContainer = styled.div`
    display: flex;
    background-image: url(${soccer});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    box-sizing: border-box;
    overflow: auto;
`;
