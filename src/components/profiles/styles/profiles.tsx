import styled from 'styled-components/macro';

export const ContainerS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 80%;
`;

export const TitleS = styled.h1`
    width: 100%;
    color: white;
    font-size: 48px;
    text-align: center;
    font-weight: 500;
`;

export const ListS = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
`;

export const PictureS = styled.img`
    wudth: 100%;
    max-width: 150px;
    height: auto;
    border: 3px solid black;
    cursor: pointer;
`;

export const NameS = styled.p`
    color: #808080;
    text-overflow: ellipsis;
    font-size: 16px;

    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }
`;

export const ItemS = styled.li`
    max-height: 200px;
    max-width: 200px;
    text-align: center;
    margin-right: 30px;
    
    &:hover > ${PictureS} {
        border: 3px solid white;
    }

    &:hover ${NameS} {
        font-weight: bold;
        color: white;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;