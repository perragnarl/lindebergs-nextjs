import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

type MapProps = {
	zoom: number;
	lat: number;
	lng: number;
};




export default function Map({ zoom, lat, lng }: MapProps) {
	console.log(lat, lng);
	const GoogleMapsWrapper = withGoogleMap((prop: any) => (
		<GoogleMap defaultZoom={zoom} defaultCenter={{ lat, lng }}>
			<Marker position={{ lat, lng }} />
		</GoogleMap>
	));

	return (
		<GoogleMapsWrapper
			containerElement={
				<div style={{ height: `500px`, width: "500px" }} />
			}
			mapElement={<div style={{ height: `100%` }} />}
		/>
	);
}
