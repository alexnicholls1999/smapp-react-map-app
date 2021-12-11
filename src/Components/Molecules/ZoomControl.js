import { useMap } from 'react-leaflet';
import useZoom from '../../react-hooks/useZoom';
import ZoomIn from '../Atoms/ZoomIn'
import ZoomOut from '../Atoms/ZoomOut'
import './molecules.sass';

function ZoomControl() {

    const map = useMap()
    const { zoom, handleZoomIn, handleZoomOut } = useZoom(map)

    return (
        <div className="zoom-control">
            <ZoomIn handleZoomInClick={handleZoomIn}/>
            <ZoomOut handleZoomOutClick={handleZoomOut}/>   
        </div>
    )
}

export default ZoomControl
