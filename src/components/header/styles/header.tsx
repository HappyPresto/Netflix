import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const BackgroundS = styled.div<{src: any, dontShowOnSmallViewPort: boolean}>`
    display: flex;
    flex-direction: column;
    background: url(${({src}) => (src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`)}) top left / cover no-repeat;

    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none`}
    }
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

export const FeatureS = styled(ContainerS)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px) {
        display: none;
    }
`;

export const FeatureCallOutS = styled.h2`
    color: white;
    font-size: 50px;
    font-weight: bold;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0 0 20px 0;
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

export const TextS = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`;

export const LinkS = styled.p<{active: any}>`
    color: white;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === "true" ? "700" : "normal")}
    cursor: pointer; 

    &:hover {
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;