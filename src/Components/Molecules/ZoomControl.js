import ZoomIn from '../Atoms/ZoomIn'
import ZoomOut from '../Atoms/ZoomOut'
import './molecules.sass';

function ZoomControl() {
    return (
        <div className="zoom-control">
            <ZoomIn />
            <ZoomOut />   
        </div>
    )
}

export default ZoomControl
