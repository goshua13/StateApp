import React from 'react';
import {Utah, Idaho, California, NewYork, NewJersey, Texas} from './common';

const PageDetail = ({content}) => {
    return(
        <div className='container'>
            {content === 'utah' && <Utah />}
            {content === 'california' && <California />}
            {content === 'idaho' && <Idaho />}
            {content === 'newyork' && <NewYork />}
            {content === 'newjersey' && <NewJersey />}
            {content === 'texas' && <Texas />}
        </div>
    )
}
export default PageDetail;
