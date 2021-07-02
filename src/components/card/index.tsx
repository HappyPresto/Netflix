import React, { useState, useContext, createContext } from 'react';
import { ContainerS, TitleS, SubTitleS, GroupS, TextS, FeatureS, FeatureTitleS, FeatureTextS, FeatureCloseS, MaturityS, ContentS, MetaS, EntitiesS, ItemS, ImageS } from './styles/card';

interface ICardContext {
  showFeature: boolean;
  setShowFeature: any;
  itemFeature: any;
  setItemFeature: any;
}

const FeatureContext = createContext<Partial<ICardContext>>({}); 

const Card: React.FC = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <ContainerS {...restProps}>{children}</ContainerS>
    </FeatureContext.Provider>
  )
};

const Group: React.FC<{flexDirection: string}> = ({ flexDirection, children, ...restProps }) => {
  return <GroupS flexDirection={flexDirection} {...restProps}>{children}</GroupS>
};

const Text: React.FC = ({ children, ...restProps }) => {
  return <TextS {...restProps}>{children}</TextS>
};

const Title: React.FC = ({ children, ...restProps }) => {
  return <TitleS {...restProps}>{children}</TitleS>
};

const SubTitle: React.FC = ({ children, ...restProps }) => {
  return <SubTitleS {...restProps}>{children}</SubTitleS>
};

const Entities: React.FC = ({ children, ...restProps }) => {
  return <EntitiesS {...restProps}>{children}</EntitiesS>
};

const Meta: React.FC = ({ children, ...restProps }) => {
  return <MetaS {...restProps}>{children}</MetaS>
};

const Item: React.FC<{item?: any}> = ({ item, children, ...restProps }) => {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  
  return <ItemS 
      onClick={() => {
        setItemFeature(item)
        setShowFeature(true)
      }}
      {...restProps}
    >
      {children}
    </ItemS>
};

const Feature: React.FC<{category: any}> = ({ children, category, ...restProps }) => {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

  return showFeature ? (
    <FeatureS src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} {...restProps}>
      <ContentS>
        <FeatureTitleS>{itemFeature.title}</FeatureTitleS>
        <FeatureTextS>{itemFeature.description}</FeatureTextS>
        <FeatureCloseS onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureCloseS>

        <GroupS flexDirection="column">
          <MaturityS rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</MaturityS>
          <FeatureTextS>
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureTextS>
        </GroupS>
        {children}
      </ContentS>
    </FeatureS>
  ) : null;
}

const Image: React.FC<{src?: any}> = ({ src, ...restProps }) => {
  return <ImageS src={src !== undefined ? src : "#"} {...restProps} />
};


export default Object.assign(Card, {Group, Title, SubTitle, Text, Item, Feature, Meta, Image, Entities});