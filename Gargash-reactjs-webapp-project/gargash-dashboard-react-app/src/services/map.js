
import { IconLayer } from "deck.gl";
import { overlayBuilder } from "./overlay";
import { objectBuilder } from "./overlay";

export function settingLayer(
    overlayRef,
    allTrackers,
    webSocketGroup1,
    webSocketGroup2
  ) {
    overlayRef.current.setProps({
      layers: [
        new IconLayer(
          overlayBuilder(allTrackers, "icon-layer-group-1", webSocketGroup1)
        ),
        new IconLayer(
          overlayBuilder(allTrackers, "icon-layer-group-2", webSocketGroup2)
        ),
      ],
    });
  }

export function handleWebSocket(updateState) {
  return (data) => {
    updateState((prevWebSocketGroup) => {
      if (!prevWebSocketGroup) {
        const transformDataAddingFields = data.map((d) => {
          return objectBuilder(d);
        });
        return transformDataAddingFields;
      } else {
        const updatedData = prevWebSocketGroup.map((prevData) => {
          const newData = data.find(
            (d) => d.state.source_id === prevData.sourceId
          );
          return newData ? objectBuilder(newData, true) : prevData;
        });

        return updatedData;
      }
    });
  };
}