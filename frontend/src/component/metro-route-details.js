import React from 'react';

// export default function MetroRouteDetails({ data }) {
//     const { total_time, fare, stations, route } = data;

//     return (
//         <div className="metro-route-container">
//             {/* Time, Fare, and Station Count Section */}
//             <div className="header">
//                 <div className="time">
//                     <span className="bold-text">{total_time}</span>
//                 </div>
//                 <div className="fare">
//                     <span className="bold-text">Fare: ₹{fare}</span>
//                 </div>
//                 <div className="stations">
//                     <span className="bold-text">Stations: {stations}</span>
//                 </div>
//             </div>

//             {/* Route Details */}
//             <div className="route-details">
//                 {route.map((leg, legIndex) => (
//                     <div key={legIndex} className="leg">
//                         <div className="line-header">
//                             <span className="line-name">Line: {leg.line} ({leg.path_time})</span>
//                         </div>
//                         <div className="stations-list">
//                             {leg.path.map((station, stationIndex) => (
//                                 <div key={stationIndex} className="station">
//                                     <span>{station.name}</span>
//                                     {station.status && (
//                                         <span className="station-status">({station.status})</span>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                         {leg.station_interchange_time > 0 && (
//                             <div className="interchange">
//                                 <span>Change here: {leg.station_interchange_time} minutes</span>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>

//             <div className="footer-note">
//                 <p>*Time shown is estimated travel time only (subject to change). Passengers are advised to keep extra time to travel.</p>
//             </div>
//         </div>
//     );
// }


const RouteComponent = ({ routeData }) => {
  return (
    <div className="route-container">
      {/* Header */}
      <div className="route-header">
        <div className="route-time">
          <h3>{routeData.total_time}</h3>
          <span>Travel Time</span>
        </div>
        <div className="route-fare">
          <h3>₹{routeData.fare}</h3>
          <span>Fare</span>
        </div>
        <div className="route-stations">
          <h3>{routeData.stations}</h3>
          <span>Stations</span>
        </div>
      </div>

      {/* Route Lines */}
      <div className="route-details">
        {routeData.route.map((line, index) => (
          <div key={index} className={`line ${line.line.toLowerCase().replace(/\s/g, '-')}`}>
            <h4>{line.line} ({line.path_time})</h4>
            <ul className="station-list">
              {line.path.map((station, idx) => (
                <li key={idx}>
                  <span className="station">{station.name}</span>
                </li>
              ))}
            </ul>
            {/* Optional: Display transfer time if any */}
            {line.station_interchange_time > 0 && (
              <div className="interchange">
                <span>Change here, transfer time: {line.station_interchange_time} mins</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteComponent;

