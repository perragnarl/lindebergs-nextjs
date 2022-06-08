export default function Section({ id, background, title, children }: any) {
	return (
		<section id={id} className={`py-16 md:py-24 ${background ? 'bg-section' : ''}`}>
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl md:text-5xl text-center pb-10">{title}</h2>
				<span className="block h-[6px] bg-contrast w-11 mb-12 md:mb-20 mx-auto" />
				{children}
			</div>
		</section>
	);
}
