type MapProps = {
	zoom: number;
	lat: number;
	lng: number;
};

export default function Map({ zoom, lat, lng }: MapProps) {
	return (
		<iframe className="w-full h-[600px] mb-6"
			src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA3aDP3tXu2iQGbSawtMKNlAucSmF9kQHQ&q=${lat},${lng}&zoom=${zoom}`}
		></iframe>
	);
}
