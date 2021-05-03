import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
import { BrowseContainer } from '../containers/browse';

const Browse: React.FC = () => {
    const { series }: any = useContent('series');
    const { films }: any = useContent('films');

    const slides = selectionFilter({series, films});

    return (
        <BrowseContainer slides={slides} />
    );
}

export default Browse;