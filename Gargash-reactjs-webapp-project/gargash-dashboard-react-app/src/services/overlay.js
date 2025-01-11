import {
    setDefaults,
    fromLatLng,
} from "react-geocode";

setDefaults({
    key: import.meta.env.VITE_GoogleMapsAPIKey, // Your API key here.
    language: "en", // Default language for responses.
    region: "en", // Default region for responses.
});

import redIcon from '/red.svg'
import blueIcon from '/blue.svg'
import greenIcon from '/green.svg'

export function overlayBuilder(allTrackers, name, data) {
    return {
        id: name,
        data,
        pickable: true,
        getPosition: (d) => d.coordinates,
        getIcon: d => ({
            url: d.iconUrl,
            width: 24,
            height: 24,
            anchorY: 0
        }),
        getSize: d => d.iconSize,
        sizeScale: 1,
        onHover: ({ object, x, y }) => {
            const el = document.getElementById("tooltip");
            if (object) {
                const { sourceId } = object;
                const vehicle = allTrackers.find(
                    (item) => item.source.id === sourceId
                );

                const status = el.querySelector('.status');
                status.textContent = `${object.status}`;

                const speed = el.querySelector('.speedometer');
                speed.textContent = `${object.speed} km/h`;

                // const driver = el.querySelector('.driver');
                // driver.textContent = `${vehicle.label}`;
                
                fromLatLng(object.coordinates[1], object.coordinates[0])
                    .then(({ results }) => {
                        const locationDiv = el.querySelector('.map-container > div:first-child');

                        // Update the location text with the formatted address
                        locationDiv.textContent = `Current location: ${results[0].formatted_address}`;
                    })
                    .catch(console.error);

               

                el.style.opacity = 1;
                el.style.left = x + 190 + "px";
                el.style.top = y + 30 + "px";
                el.classList.add("active");
            } else {
                el.style.opacity = 0.0;
                el.classList.remove("active");
            }
        },
        transitions: {
            getPosition: {
                // FIX this should be based on speed over distance and perhaps add navigation api for accuracy of point transition
                duration: 2000,
                easing: t => t * (2 - t)
            }
        }
    }
}

export function objectBuilder(d, newD) {
    return {
        key: Math.floor(Math.random() * 10000000000),
        name: newD ? "a" : "XXX",
        code: "XX",
        address: "XXXX",
        exits: 1234,
        status:  carState(d.state.connection_status, d.state.movement_status, true),
        speed: d.state.gps.speed,
        sourceId: d.state.source_id,
        iconUrl: carState(d.state.connection_status, d.state.movement_status),
        iconSize: 20,
        coordinates: [d.state.gps.location.lng, d.state.gps.location.lat],
    };
}

function carState(connection, movement, stringBool) {
    const statusKey = `${connection}_${movement}`.toUpperCase();

    let status, string

    switch (statusKey) {
        case 'OFFLINE_MOVING':
            status = redIcon;
            string =  'Idle'
            break;
        case 'OFFLINE_PARKED':
            status = blueIcon
            string =  'Parked'
            break;
        case 'ACTIVE_MOVING':
            status =  greenIcon
            string =  'Moving'
            break;
        default:
            status = redIcon
            string = 'Parked'
            break;
    }
    if(stringBool){
        return string
    }
    return status
}