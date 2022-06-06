import Logo from "./Logo";

const Header = ({ introduction }: any) => {	
	return (
		<header
			className="relative bg-header py-12 text-center"
		>
		<div className="absolute opacity-10 w-full h-full top-0 left-0" style={{backgroundImage: `url('${introduction.monster.url}')`}} />
			<div className="max-w-7xl mx-auto px-4 relative z-20 flex flex-col justify-center items-center gap-4">
				<Logo />
				<h2 className="mt-16 text-3xl">{introduction.titel}</h2>
				<p className="max-w-md">{introduction.paragraph}</p>
				<a
					href={`tel:${introduction.phone}`}
					className="hover:text-black underline underline-offset-2"
				>
					{introduction.phone}
				</a>
				<a
					href="#om-oss"
					className="bg-contrast py-3 mt-4 px-6 text-base uppercase font-semibold tracking-wider"
				>
					Mer om oss
				</a>
			</div>
		</header>
	);
};

export default Header;
