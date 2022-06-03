export default function Partners({ partners }: any) {
	return (
		<div className="flex flex-wrap gap-14 justify-center">
			{partners.map((item: any) => (
				<div key={item.url} className="w-full md:w-1/5 flex justify-center items-center">
					<img src={item.url} alt="" className="max-w-[200px] max-h-[200px]" />
				</div>
			))}
		</div>
	)
}