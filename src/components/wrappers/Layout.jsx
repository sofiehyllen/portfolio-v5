import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function Layout() {
	return (
		<div className="min-h-screen p-12 bg-light bg-no-repeat bg-cover dark:bg-dark">
			<Header />
			<Outlet />
		</div>
	);
}
