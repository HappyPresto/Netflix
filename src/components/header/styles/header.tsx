import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const BackgroundS = styled.div<{src: any}>`
    display: flex;
    flex-direction: column;
    background: url(${({src}) => (src === 1 ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`)}) top left / cover no-repeat;
`;

export const ButtonS = styled(ReactRouterLink)<{to:any}>`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background-color: #f40612;
    }
`;

export const FrameS = styled.div``;

export const ContainerS = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const LogoS = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (max-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;
