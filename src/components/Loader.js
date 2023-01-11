//******************************************/
//*****   ENCODED by Gilliard Santos   *****/
//******************************************/

import spinner from './spinner.gif';

const LocationWorker = ({ lat, lng, onClick }) => {
    return (
        <div className="loader">
            <img src={ spinner } alt="Loading" />
            <h1>Fetching Data</h1>
        </div>
    )
}

export default LocationWorker
