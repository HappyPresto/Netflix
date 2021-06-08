import styled from 'styled-components/macro';

export const TitleS = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin: 0 56px;
`;

export const ContainerS = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;
  width: 100%;

  > ${TitleS} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const GroupS = styled.div<{flexDirection: string}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection === 'row' ? 'row' : 'column'};
  align-items: center;
  margin: 30px 0;

  > ${ContainerS}:first-of-type {
    @media (min-width: 1100px) {
      //margin-top: -150px;
    }
  }
`;


export const SubTitleS = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none; 
`;

export const TextS = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const FeatureTitleS = styled(TitleS)`
  margin-left: 0;
  margin-bottom: 20px;
`;

export const FeatureTextS = styled.p`
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const FeatureS = styled.div<{src: any}>`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  bacgkground-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${TitleS} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }

    ${FeatureTextS} {
      font-size: 14px;
    }
  }
`;

export const FeatureCloseS = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const MaturityS = styled.div<{rating: any}>`
    background-color: ${({ rating }) => rating >= 15 ? 'red' : 'green'};
    border-radius: 15px;
    width: 20px;
    padding: 5px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    font-size: 12px;
`;

export const ContentS = styled.div`
    margin: 56px;
    max-width: 500px;
    line-height: normal;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 1000px) {
      margin: 30px;
      max-width: none;
    }
`;

export const MetaS = styled.div`
  display: none;
  position: absolute; 
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

export const EntitiesS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ItemS = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    position: relative;
    cursor: pointer;
    transition: transform ease 0.2s;
    width: calc(100% / 6);

    &:hover {
      transform: scale(1.3);
      z-index: 1;
    }

    @media (min-width: 1200px) {
      &:hover ${MetaS}, &:hover ${TextS}, &:hover ${SubTitleS}{
        display: block;
        z-index: 100;
      }
    }

    @last-of-type {
      margin-right: 56px;

      @media (max-width: 1000px) {
        margin-right: 30px;
      }
    }
`;

export const ImageS = styled.img<{src: any}>`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;