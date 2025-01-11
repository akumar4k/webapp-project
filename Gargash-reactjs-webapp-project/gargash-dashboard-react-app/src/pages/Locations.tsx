import { useEffect, useRef, useState } from "react";
import { GoogleMapsOverlay as DeckOverlay } from "@deck.gl/google-maps";
import { useAuth0 } from "@auth0/auth0-react";
import { handleWebSocket, settingLayer } from "../services/map";
import { fetchData } from "../services/trackers";
import { subscribeEvent } from "../services/webSocketLoad";

const allTrackers = await fetchData();

const GOOGLE_MAP_ID = import.meta.env.VITE_GoogleMapsMapId;
const hashAccount1 = import.meta.env.VITE_hashAccount1;

function Locations({ center, zoom }) {
  const ref = useRef();
  const overlayRef = useRef(null);

  const [map, setMap] = useState(null);
  const [webSocketGroup1, setWebSocketGroup1] = useState(null);
  const [webSocketGroup2, setWebSocketGroup2] = useState(null);

  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  // INIT USEFFECT TO LOAD DATA
  useEffect(() => {
    // Setting map instance
    if (ref.current && isAuthenticated && !map) {
      // Check if `map` is not already initialized
      const mapInstance = new window.google.maps.Map(ref.current, {
        mapId: GOOGLE_MAP_ID,
        disableDefaultUI: true,
        clickableIcons: false,
      });
      setMap(mapInstance);
      mapInstance.setCenter(center);
      mapInstance.setZoom(zoom);

      setTimeout(() => {
        subscribeEvent(new handleWebSocket(setWebSocketGroup1), hashAccount1);
      }, 500);
    }
  }, [isAuthenticated]);

  // HANDLES LAYER UPDATE BASED ON MAP
  useEffect(() => {
    if (!overlayRef.current) {
      overlayRef.current = new DeckOverlay();
      overlayRef.current.setMap(map);
    }

    const updateLayers = () => {
      if (overlayRef.current) {
        settingLayer(overlayRef, allTrackers, webSocketGroup1, webSocketGroup2);
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
        settingLayer(overlayRef, allTrackers, webSocketGroup1, webSocketGroup2);
      }
    };

    updateLayers();
  }, [webSocketGroup1, webSocketGroup2]);

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
    <>
      {isAuthenticated && (
        <div
          ref={ref}
          className="md:flex-1"
          style={{ height: "100vh", width: "100wh" }}
        />
      )}
    </>
  );
}

export default Locations;
