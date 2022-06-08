export default function Footer({ contact }: any) {
	return (
		<footer className="bg-text py-16 text-white">
			<div className="max-w-7xl mx-auto px-4 text-center">
				<h2 className="font-parisienne font-light text-5xl">
					Lindebergs <br />
					Blomsterhandel
				</h2>
				<div
					className="mt-10"
					dangerouslySetInnerHTML={{
						__html: contact,
					}}
				/>
			</div>
		</footer>
	);
}
