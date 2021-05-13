import React from 'react';
import { SpinnerS, LockBodyS, ReleaseBodyS, PictureS } from './styles/loading';

const Loading = ({ src, ...restProps }: any) => {
    return (
        <SpinnerS>
            <LockBodyS />
            <PictureS src={`/images/users/${src}.png`} />
        </SpinnerS>
    )
};

const ReleaseBody: React.FC = () => {
    return <ReleaseBodyS />
};

export default Object.assign(Loading, {ReleaseBody});