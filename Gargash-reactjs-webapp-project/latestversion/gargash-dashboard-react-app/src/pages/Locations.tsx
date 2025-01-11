import { useEffect, useRef, useState } from 'react';
import { GoogleMapsOverlay as DeckOverlay } from '@deck.gl/google-maps';
import { useAuth0 } from '@auth0/auth0-react';
import { handleWebSocket, settingLayer } from '../services/map';
import { fetchData } from '../services/trackers';
import { subscribeEvent } from '../services/webSocketLoad';
import { VehicleSummaryOverlay } from '../components/VehicleSummaryOverlay';
import { useOutletContext } from 'react-router-dom';
import { MobileVehicleSummaryOverlay } from '../components/MobileVehicleSummaryOverlay';
import { MobileVehicleSummary } from '../components/MobileVehicleSummary';
import { MapPanZoomControlOverlay } from '../components/MapPanZoomControlOverlay';

const allTrackers = await fetchData();

const GOOGLE_MAP_ID = import.meta.env.VITE_GoogleMapsMapId;
const hashAccount1 = import.meta.env.VITE_hashAccount1;

function Locations() {
  const defaultCityCenter = { lat: 25.15, lng: 55.35 };
  const defaultZoomLevel = 10.5;
  const ref = useRef();
  const overlayRef = useRef(null);
  const { filterVisible } = useOutletContext() as boolean;
  const [map, setMap] = useState(null);
  const [mobileVehicleSummaryVisible, setMobileVehicleSummaryVisible] = useState(false);
  const [webSocketData, setWebSocketData] = useState(null);
  const [zoomValue, setZoomValue] = useState<number | undefined>(defaultZoomLevel);
  const [centerValue, setCenterValue] = useState(defaultCityCenter);
  const [panXValue, setPanXValue] = useState<number | undefined>(0);
  const [panYValue, setPanYValue] = useState<number | undefined>(0);
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  // INIT USEFFECT TO LOAD DATA
  useEffect(() => {
    // Setting map instance
    if (ref.current && isAuthenticated && !map) {
      // Check if `map` is not already initialized
      const mapInstance = new window.google.maps.Map(ref.current, {
        mapId: GOOGLE_MAP_ID,
        disableDefaultUI: true,
        clickableIcons: false
      });
      setMap(mapInstance);
      mapInstance.setCenter(defaultCityCenter);
      mapInstance.setZoom(defaultZoomLevel);
      setTimeout(() => {
        subscribeEvent(new handleWebSocket(setWebSocketData), hashAccount1);
      }, 500);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (map) {
      map.setZoom(zoomValue);
    }
  }, [zoomValue]);

  useEffect(() => {
    if (map) {
      map.setCenter(centerValue);
    }
  }, [centerValue]);

  useEffect(() => {
    if (map) {
      map.panBy(panXValue, 0);
    }
  }, [panXValue]);

  useEffect(() => {
    if (map) {
      map.panBy(0, panYValue);
    }
  }, [panYValue]);

  // HANDLES LAYER UPDATE BASED ON MAP
  useEffect(() => {
    if (!overlayRef.current) {
      overlayRef.current = new DeckOverlay();
      overlayRef.current.setMap(map);
    }

    const updateLayers = () => {
      if (overlayRef.current) {
        settingLayer(overlayRef, allTrackers, webSocketData);
      }
    };

    updateLayers();

    return () => {
      if (overlayRef.current) {
        overlayRef.current.finalize();
        overlayRef.current = null;
      }
    };
  }, [map]);

  // HANDLES LAYER CHANGE BASED ON DAT
  useEffect(() => {
    const updateLayers = () => {
      if (overlayRef.current) {
        settingLayer(overlayRef, allTrackers, webSocketData);
      }
    };

    updateLayers();
  }, [webSocketData]);

  useEffect(() => {
    const test = true;

    if (!isLoading && !isAuthenticated && test) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:flex-1 relative" style={{ height: '100vh', width: '100wh' }}>
      {isAuthenticated && (
        <div ref={ref} className="md:flex-1" style={{ height: '100vh', width: '100wh' }} />
      )}
      {isAuthenticated && (
        <>
          <VehicleSummaryOverlay filterVisible={filterVisible} />
          <MobileVehicleSummaryOverlay setIsVisible={setMobileVehicleSummaryVisible} />
          <MobileVehicleSummary
            isVisible={mobileVehicleSummaryVisible}
            setIsVisible={setMobileVehicleSummaryVisible}
          />
          <MapPanZoomControlOverlay
            zoomValue={zoomValue}
            setZoomValue={setZoomValue}
            panX={panXValue}
            panY={panYValue}
            setPanX={setPanXValue}
            setPanY={setPanYValue}
            setCenterValue={setCenterValue}
          />
        </>
      )}
    </div>
  );
}

export default Locations;
