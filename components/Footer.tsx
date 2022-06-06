export default function Footer({ contact }: any) {
	return (
		<footer className="bg-text py-20 text-white">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="font-semibold text-3xl">
					Lindebergs <br />
					Blomsterhandel
				</h2>
				<div
					className="mt-4"
					dangerouslySetInnerHTML={{
						__html: contact,
					}}
				/>
			</div>
		</footer>
	);
}
