import { Link } from "react-router-dom";
import LanguageButton from "./buttons/LanguageButton";
import Navigation from "./Navigation";
import ThemeButton from "./buttons/ThemeButton";
import { IoIosRocket } from "react-icons/io";
import { useTranslation } from "react-i18next";
import MobileLogo from "../assets/mobile_logo.svg";
import { BsToggles } from "react-icons/bs";

export default function Header() {
	const { t } = useTranslation("navigation");

	return (
		<header className="flex justify-between">
			<div className="flex space-x-5 items-center md:items-end md:space-x-16">
				<Link to="/" className="flex text-4xl font-bold text-accent">
					<img
						src={MobileLogo}
						className="size-8 shrink-0 rounded-lg md:hidden"
					/>
					<IoIosRocket className="hidden mr-2 shrink-0 md:inline-block" />
					<span className="hidden shrink-0 md:inline-block">
						sofie hyllen
					</span>
				</Link>
				<Navigation />
			</div>
			<button
				className="p-2 bg-secondary rounded-md md:hidden"
				onClick={() =>
					document.getElementById("my_modal_3").showModal()
				}
			>
				<BsToggles className="size-5" />
			</button>
			<dialog
				id="my_modal_3"
				className="modal [&::backdrop]:backdrop-blur-sm [&::backdrop]:bg-black/30 md:hidden"
			>
				<div className="modal-box min-w-full min-h-screen rounded-none bg-primary/95 p-5 pt-28">
					<form method="dialog">
						<button className="size-9 pt-1 bg-secondary rounded-md absolute right-5 top-10 text-lg">
							✕
						</button>
					</form>
					<h3 className="font-bold text-5xl pb-10">
						{t("controls")}
					</h3>
					<div className="flex space-x-16">
						<ThemeButton />
						<LanguageButton />
					</div>
				</div>
			</dialog>
			<div className="hidden md:flex space-x-7">
				<ThemeButton />
				<LanguageButton />
			</div>
		</header>
	);
}
