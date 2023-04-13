import NavBar from "../NavBar/NavBar";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="h-[100%] m-0 min-h-[100%] text-gray-800 bg-[#FCFBF9] p-0">
			<div>
				<NavBar />
			</div>
			<div className="layout-container">{children}</div>
		</div>
	);
};

export default Layout;
