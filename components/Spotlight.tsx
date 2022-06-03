export default function Spotlight({ items }: any) {
	return (
		<div className="flex justify-between flex-wrap gap-14">
			{items.map((item: any) => (
				<div key={item.titel} className="w-full md:w-1/4 flex flex-col gap-4 items-center">
					<img src={item.bild.url} alt="" className="w-full max-w-xs" />
					<h2 className="text-2xl font-normal">{item.titel}</h2>
					<p className="max-w-md text-center">{item.paragraf}</p>
				</div>
			))}
		</div>
	);
}
