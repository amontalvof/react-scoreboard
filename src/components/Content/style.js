import styled from 'styled-components';

export const ContentContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow: auto;
`;

export const PickerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px;
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: white;
    text-transform: capitalize;

    @media (max-width: 539px) {
        display: none;
    }
`;
