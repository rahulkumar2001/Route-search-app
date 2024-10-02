import * as React from 'react';
import UseAutocomplete from '../component/drop-down/auto-complete';
import UnstyledButtonsIntroduction from '../component/button/index';
import fetchData from '../axios';
import MetroRouteDetails from '../component/metro-route-details';


export default function HomePage() {
    const [value, setValue] = React.useState(null);
    const [routeData, setRouteData] = React.useState()
    const [valueSecond, setValueSecond] = React.useState(null);

    const [recommandStation, setRecommandStation] = React.useState([])
    const [recommandStationSecond, setRecommandStationSecond] = React.useState([])

    const onChangeHander = async (selectValue) => {        
        if(!selectValue.length) return
       const recommandation =  await fetchData(`/metro/recommand-station?search=${selectValue}`)
        const updatedStations = recommandation?.map(station => {
            return {
              ...station,
              label: station.station_name, // Rename station_name to label
            };
          });
          setRecommandStation(updatedStations)
    }

    const onChangeHanderSecond = async (selectValue) => {
        if(!selectValue.length) return
       const recommandation =  await fetchData(`/metro/recommand-station?search=${selectValue}`)
        const updatedStations = recommandation?.map(station => {
            return {
              ...station,
              label: station.station_name, // Rename station_name to label
            };
          });
          setRecommandStationSecond(updatedStations)
    }

    const onClick = () => {
        console.log('Clicked', value , valueSecond);
        // Check if both dropdowns have selected values
        if (value && valueSecond) {
            // Prepare the data with the selected objects
            const selectedData = {
                fromStation: value,      // Object selected in the "From" dropdown
                toStation: valueSecond,  // Object selected in the "To" dropdown
            };

            // Call the API with the selected values
            fetchData(`/metro/station-route/${value.station_code}/${valueSecond.station_code}`)
            .then(data => {
                console.log('Route and fare data:', data);
                setRouteData(data)
                // Do something with the response, like displaying the route and fare
            })
            .catch(error => {
                console.error('Error calculating route:', error);
            });
        } else {
            console.log('Please select both stations');
        }
    };
  


    return (
        <div className='main'>
            <div className='center'>
                <label className='label' for="first-name">Plan Your Journey</label>
                <UseAutocomplete
                    data={recommandStation}
                    onChangeHander={onChangeHander}
                    value={value}
                    setValue={setValue}
                    label={"From"}
                />
                <UseAutocomplete
                    data={recommandStationSecond}
                    onChangeHander={onChangeHanderSecond}
                    value={valueSecond}
                    setValue={setValueSecond}
                    label={"To"}
                />
                <div className='submit-button'>
                    <UnstyledButtonsIntroduction onClick={onClick} disabled={value && valueSecond ? false : true} text={'Show Route & Fare'} />
                </div>
            </div>
                {routeData ? <MetroRouteDetails routeData={routeData} /> : null}
        </div>
    );
}

