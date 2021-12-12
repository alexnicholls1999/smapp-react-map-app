import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import ZoomIn from '../Atoms/ZoomIn'
import ZoomOut from '../Atoms/ZoomOut'
import './molecules.sass';

function ZoomControl({...props}) {

    return (
        <div className="zoom-control">
            <ZoomIn {...props} />
            <ZoomOut {...props} />   
        </div>
    )
}

export default ZoomControl
