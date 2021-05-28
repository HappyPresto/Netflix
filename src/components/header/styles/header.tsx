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

export const FrameS = styled.div``;

export const PictureS = styled.div<{src: any}>`
    background: url(${({src}) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`;

export const GroupS = styled.div`
    display: flex;
    align-items: center;
`;

export const DropdownS = styled.div`
    display: none;
    background-color: black;
    position: absolute;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;

    ${GroupS}:last-of-type ${LinkS} {
        cursor: pointer;
    }

    ${GroupS} {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0;
        }
        ${LinkS}, ${PictureS} {
            cursor: default
        }
    }

    p {
        margin-left: 10px;
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
`;

export const SearchS = styled.div`
    display: flex;
    align-items: center;

    svg {
        color: white;
        cursor: pointer;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

export const SearchIconS = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`;

export const SearchInputS = styled.input<{active: boolean}>`
    background-color: #44444459;
    color: white;
    border: 1px solid white;
    transition: width 0.5s;
    font-size: 14px;
    margin-left: ${({ active }) => (active === true ? '10px' : '0')};
    padding: ${({ active }) => (active === true ? '0 10px' : '0')};
    opacity: ${({ active }) => (active === true ? '1' : '0')};
    width: ${({ active }) => (active === true ? '200px' : '0')};
`;

export const PlayButtonS = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 5px;
    max-width: 130px;
    font-size: 20px;
    margin-top: 30px;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: #ff1e1e;
        color: white;
    }
`;

export const ProfileS = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${DropdownS} {
        display: flex;
        flex-direction: column;
    }
`;

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