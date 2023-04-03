import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import { memo, useCallback, useEffect, useState } from "react";
import Geocode from "react-geocode";
import { getUsers } from "@/api/userApi";

interface InputProps {
  branch: LatLng;
  address: LatLng;
}

interface LatLng {
  lat: number;
  lng: number;
}

const APIKEY = import.meta.env.VITE_GOOGLE_KEY;
Geocode.setApiKey(APIKEY!);

function DeliveryMap({ branch, address }: InputProps) {
  console.log("address", address.lat, address.lng);
  console.log("branch", branch.lat, branch.lng);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: APIKEY!,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const OPTIONS = {
    minZoom: 4,
    maxZoom: 12,
  };

  const [source, setSource] = useState<LatLng | null>(null);
  const [destination, setDestination] = useState<LatLng | null>(null);
  const [path, setPath] = useState<LatLng[]>([]);

  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  useEffect(() => {
    // Geocode.fromAddress(branch).then(
    //   (response) => {
    //     const { lat, lng } = response.results[0].geometry.location;
    //     setSource({ lat, lng });
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
    setSource({lat: branch.lat, lng: branch.lng})
    setDestination({ lat: address.lat, lng: address.lng });
  }, [branch, address]);

  // useEffect(() => {
  //   Geocode.fromAddress(address).then(
  //     (response) => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //       setDestination({ lat, lng });
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }, [address]);

  useEffect(() => {
    if (source && destination) {
      setPath([source, destination]);
    }
  }, [source, destination]);

  const center =
    source && destination
      ? {
          lat: (source.lat + destination.lat) / 2,
          lng: (source.lng + destination.lng) / 2,
        }
      : { lat: 0, lng: 0 };

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      if (map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
      }
    },
    [center]
  );

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="deliveryMap">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={9}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={OPTIONS}
      >
        {source && (
          <Marker position={{ lat: source.lat, lng: source.lng }} label="A" />
        )}
        {destination && (
          <Marker
            position={{ lat: destination.lat, lng: destination.lng }}
            label="B"
          />
        )}
        {path.length > 0 && (
          <Polyline
            path={path}
            options={{
              strokeColor: "#FF0000",
              strokeOpacity: 1,
              strokeWeight: 2,
            }}
          />
        )}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default memo(DeliveryMap);
