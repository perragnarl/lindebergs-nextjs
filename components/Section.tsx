export default function Section({ background, title, children }: any) {
	return (
		<section className={`py-24 ${background ? 'bg-section' : ''}`}>
			<div className="max-w-7xl mx-auto">
				<h2 className="text-5xl font-normal text-center pb-10">{title}</h2>
				<span className="block h-1 bg-contrast w-11 mb-20 mx-auto" />
				{children}
			</div>
		</section>
	);
}
