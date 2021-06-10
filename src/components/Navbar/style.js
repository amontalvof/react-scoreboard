import styled from 'styled-components';
import { Application, Sidebar } from 'react-rainbow-components';
import Price from '../../assets/icons/price';
import { GiSoccerBall } from 'react-icons/gi';

export const NavbarContainer = styled(Application)`
    width: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    background-color: white;
`;

export const Top = styled.div`
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledLogo = styled(Price)`
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
`;

export const StyledIcon = styled(GiSoccerBall)`
    width: 32px;
    height: 32px;
`;

export const Bar = styled(Sidebar)`
    width: 100%;
`;
