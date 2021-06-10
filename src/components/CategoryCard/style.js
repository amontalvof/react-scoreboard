import styled from 'styled-components';
import { Card, Button } from 'react-rainbow-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1.5rem;
`;

export const TimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 1.5rem;
`;

export const Title = styled.h3`
    text-transform: capitalize;
    font-size: 1rem;
`;

export const Description = styled.h4`
    font-size: 0.8rem;
    color: gray;
    text-decoration: underline;
`;

export const StyledCard = styled(Card)`
    margin: 0.5rem 0.5rem 2rem;
`;
export const StyledButton = styled(Button)`
    margin: 0.1rem;
`;
