import styled from 'styled-components/macro';

export const ContainerS = styled.div`
    display: flex;
    padding: 70px 56px;
    margin: auto;
    max-width: 1000px;
    flex-direction: column;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const ColumnS = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const RowS = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 15px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const LinkS = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;
`;

export const TitleS = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const TextS = styled.p`
    font-size: 13px;
    color: #757575;
    margin-bottom: 40px;
`;

export const BreakS = styled.p`
    flex-basis: 100$;
    height: 0;
`;