import { navigationMenuMap } from "@/utils/navigationMenuMap";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
	const [currentPath, setCurrentPath] = useState<string>("");

	useEffect(() => {
		setCurrentPath(window.location.pathname);
	}, []);

	return (
		<>
			{/* MAIN NAV */}
			<div className="z-2 relative h-[90px] justify-center bg-[#FCFBF9] text-gray-800 border-b-[5px] border-gray-800 p-5">
				{/* VERTICAL ALIGN DIV */}
				<div className="absolute top-[50%] m-0 flex translate-y-[-50%]">
					<div className="inline">
						<h2 className="bold ml-3 inline cursor-pointer ">
							Elijah Posnikov
						</h2>
					</div>
				</div>
				<div className="invisible absolute left-[50%] top-[50%] inline translate-x-[-50%]  translate-y-[-50%] navBar:visible">
					{navigationMenuMap.map((nav) => (
						// <div className='inline' key={nav.id}>
						<div
							key={nav.id}
							className={`inline border-[2px] border-gray-800 ml-[50px] pl-[25px] pt-[10px] pb-[10px] pr-[25px] cursor-pointer ${
								currentPath === nav.href &&
								`visited-link-border bg-yellow-400 border-none `
							}`}
						>
							<Link
								// onClick={() => router.push(nav.href)}
								href={nav.href}
								key={nav.id}
								className={`text-[16px] font-semibold`}
							>
								{nav.title.toLocaleUpperCase()}
							</Link>
						</div>
						// </div>
					))}
				</div>
			</div>
		</>
	);
};

export default NavBar;
