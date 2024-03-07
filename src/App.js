
import './App.scss';
import React, {useState, useEffect} from 'react';
import Navbar from './components/theme/navbar';
import LocationSearchInput from './components/forms/LocationSearchInput';
import AddressLookup from './components/screens/AddressLookup';
import IncentiveViewer from './components/screens/IncentiveViewer';

function App() {

  const [screen, setScreen] = useState("address")
  const [incentiveData, setIncentiveData] = useState([])
  const [addressString, setAddressString] = useState(' ')

  const fetchIncentives = (lat, lng) => {
    fetch(`http://cleanfi-dev2.us-west-1.elasticbeanstalk.com/co-incentives/${lng}/${lat}/`)
      .then(response => response.json())
      .then(res => {
        setIncentiveData(res)
        setScreen('incentives')
      })
  }

  return (
    <div className='wrapper'>

     <Navbar/> 

      {screen == 'address' && 
        <AddressLookup
          onLocationSelect={({address, latLng}) => {
            setAddressString(address)
            fetchIncentives(latLng.lat, latLng.lng)
          }}
        />
      }
      {screen == 'incentives' && 
        <div>
        <IncentiveViewer
          data={incentiveData}
          onBack={() => setScreen('address')}
          address={addressString}
        />
        </div>
      }

    </div>
  );
}

export default App;
