import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// India-only GeoJSON
const geoUrl =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/india.geojson";

const cityProjects = [
  { city: "Udaipur", state: "Rajasthan", coordinates: [73.7125, 24.5854], projects: ["The Leela Palace Udaipur"] },
  { city: "Rewari", state: "Haryana", coordinates: [76.6181, 28.1974], projects: ["Pragati One Logistic Park"] },
  { city: "Yakubpur", state: "Haryana", coordinates: [76.667, 28.2], projects: ["Pragati Two Yakubpur"] },
  { city: "Gorakhpur", state: "Uttar Pradesh", coordinates: [83.3683, 26.7606], projects: ["Bliss Hotel"] },
  { city: "Noida", state: "Uttar Pradesh", coordinates: [77.4126, 28.5355], projects: ["Crown Plaza Noida"] },
  { city: "New Delhi", state: "Delhi/NCR", coordinates: [77.209, 28.6139], projects: ["Hilton Hotel New Delhi"] },
  { city: "Chanakya Puri", state: "Delhi/NCR", coordinates: [77.191, 28.5828], projects: ["Rooms Renovation Package"] },
  { city: "Zirakpur", state: "Punjab", coordinates: [76.7735, 30.6795], projects: ["Ananta Aspire"] },
  { city: "Hyderabad", state: "Telangana", coordinates: [78.4867, 17.385], projects: ["Godrej Sales Office"] },
  { city: "Indore", state: "Madhya Pradesh", coordinates: [75.8577, 22.7196], projects: ["Pipliyapala Lakefront Revival Project"] },
];

const ClientsMap = () => {
  return (
    <div>
      <h2 className="text-center mb-6">Project Distribution by Location</h2>
      <ReactTooltip id="map-tooltip" place="top" effect="solid" />

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 1200, center: [78.9629, 22.5937] }} // India center
        width={800}
        height={800}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
          }
        </Geographies>

        {cityProjects.map((city, i) => (
          <Marker
            key={i}
            coordinates={city.coordinates}
            data-tooltip-id="map-tooltip"
            data-tooltip-content={
              <div>
                <strong>{city.city}, {city.state}</strong>
                <ul style={{ margin: "4px 0", paddingLeft: "18px" }}>
                  {city.projects.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            }
          >
            <circle r={6} fill="#10D3C3" stroke="#fff" strokeWidth={2} />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default ClientsMap;
