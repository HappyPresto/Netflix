import React from 'react';
import { ContainerS, Inner, Item, PaneS, TitleS, SubTitleS, ImageS } from './styles/jumbotron';

interface IJumbotron {
  direction: string;
}

interface IImage {
  src: string;
  alt: string;
}

const Jumbotron: React.FC<IJumbotron> = ({ children, direction, ...restProps }) => {
  return (
    <Item {...restProps}>
      <Inner>{children}</Inner>
    </Item>
  );
};

const Container: React.FC = ({ children, ...restProps }) => {
  return <ContainerS {...restProps}>{children}</ContainerS>;
};

const Pane: React.FC = ({ children, ...restProps }) => {
  return <PaneS {...restProps}>{children}</PaneS>;
};

const Title: React.FC = ({ children, ...restProps }) => {
  return <TitleS {...restProps}>{children}</TitleS>;
};

const SubTitle: React.FC = ({ children, ...restProps }) => {
  return <SubTitleS {...restProps}>{children}</SubTitleS>;
};

const Image: React.FC<IImage> = ({ ...restProps }) => {
  return <ImageS {...restProps} />;
};

export default Object.assign(Jumbotron, { Container, Pane, Title, SubTitle, Image });
