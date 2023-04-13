import {
	navigationMenuMap,
	navigationMenuSocialLinksMap,
} from "@/utils/navigationMenuMap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";

interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
	const [currentPath, setCurrentPath] = useState<string>("");

	const router = useRouter();

	useEffect(() => {
		setCurrentPath(window.location.pathname);
	}, []);

	return (
		<>
			{/* MAIN NAV */}
			<div className="z-2 relative h-[90px] justify-center bg-[#FCFBF9] text-gray-800 border-b-[5px] border-gray-800 p-5">
				{/* VERTICAL ALIGN DIV */}
				<div className="absolute top-[50%] m-0 flex translate-y-[-50%]">
					<Link className="inline" href="/">
						<h2 className="bold ml-3 hover:custom-text-link-border hover:text-yellow-500 transition ease-in-out delay-150 inline cursor-pointer ">
							Elijah Posnikov
						</h2>
					</Link>
				</div>
				<div className="h-[100%] justify-center items-center flex absolute left-[50%] top-[50%] translate-x-[-50%]  translate-y-[-50%]">
					{navigationMenuMap.map((nav) => (
						<Link
							// onClick={() => router.push(nav.href)}
							// className="bg-red-400"
							href={nav.href}
							key={nav.id}
							className={`hover:bg-yellow-400 transition ease-in-out delay-150 hover:visited-link-border inline border-[2px] text-[16px] font-semibold border-gray-800 ml-[25px] mr-[25px] pl-[25px] pt-[10px] pb-[10px] pr-[25px] cursor-pointer ${
								currentPath === nav.href &&
								`visited-link-border bg-yellow-400`
							}`}
						>
							{nav.title.toLocaleUpperCase()}
						</Link>
					))}
				</div>
				<div className="absolute top-[50%] right-10 mt-0 flex translate-y-[-50%]">
					{navigationMenuSocialLinksMap.map((nav) => (
						<a className="mr-5" href={nav.href} key={nav.id}>
							{nav.icon}
						</a>
					))}
				</div>
			</div>
		</>
	);
};

export default NavBar;
