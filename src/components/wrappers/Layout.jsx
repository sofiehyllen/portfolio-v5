import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function Layout() {
	return (
		<div className="min-h-screen p-5 pt-7 bg-primary bg-light bg-no-repeat bg-cover bg-fixed dark:bg-dark md:p-12 md:mt-0">
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
