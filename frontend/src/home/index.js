import * as React from 'react';
import UseAutocomplete from '../component/drop-down/auto-complete';
import UnstyledButtonsIntroduction from '../component/button/index';
import fetchData from '../axios';


export default function HomePage() {
    const [value, setValue] = React.useState(null);
    const [valueSecond, setValueSecond] = React.useState(null);

    const [recommandStation, setRecommandStation] = React.useState([])
    const [recommandStationSecond, setRecommandStationSecond] = React.useState([])

    const onChangeHander = async (selectValue) => {
        if(!selectValue.length) return
       const recommandation =  await fetchData(`/metro/recommand-station?search=${selectValue}`)
        const updatedStations = recommandation.map(station => {
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
        const updatedStations = recommandation.map(station => {
            return {
              ...station,
              label: station.station_name, // Rename station_name to label
            };
          });
          setRecommandStationSecond(updatedStations)
    }

    const onClick = () => {

    }
  


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
        </div>
    );
}

