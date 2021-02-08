import React, { useState, useContext, createContext } from 'react';
import { ContainerS, TitleS, ItemS, InnerS, HeaderS, BodyS } from './styles/accordion';

interface IToggleContext {
    toggleShow: Boolean;
    setToggleShow: any;
}

const ToggleContext = createContext<Partial<IToggleContext>>({}); // Partial - allow create Context without default values

const Accordion: React.FC = ({children, ...restProps}) => {
    return (
        <ContainerS {...restProps}>
            <InnerS>{children}</InnerS>
        </ContainerS>
    );
};

const Title: React.FC = ({children, ...restProps}) => {
    return <TitleS {...restProps}>{children}</TitleS>
};

const Item: React.FC = ({children, ...restProps}) => {
    const [toggleShow, setToggleShow] = useState<boolean>(false);
    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <ItemS {...restProps}>{children}</ItemS>
        </ToggleContext.Provider>
    );
};

const Header: React.FC = ({children, ...restProps}) => {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return (
        <HeaderS 
            onClick={() => setToggleShow(() => !toggleShow)} 
            {...restProps}
        >
            {children}
            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close" />
            ) : (
                <img src="/images/icons/add.png" alt="Open" />
            )}
        </HeaderS>
    )
};

const Body: React.FC = ({children, ...restProps}) => {
    const { toggleShow } = useContext(ToggleContext);

    return toggleShow ? <BodyS {...restProps}>{children}</BodyS> : null;
};

export default Object.assign(Accordion, {Title, Item, Header, Body});