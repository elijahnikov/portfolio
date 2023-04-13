import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const navigationMenuMap = [
	{
		id: 1,
		title: "ABOUT",
		href: "/about",
	},
	{
		id: 2,
		title: "EXPERIENCE",
		href: "/work",
	},
	{
		id: 3,
		title: "GET IN TOUCH",
		href: "/contact",
	},
];

export const navigationMenuSocialLinksMap = [
	{
		id: 1,
		icon: <AiFillLinkedin className="h-7 w-7 pl-[2px]" />,
		value: "linkedin",
		href: "https://www.linkedin.com/in/elijah-posnikov/",
	},
	{
		id: 2,
		icon: <AiFillGithub className="h-7 w-7 pl-[2px]" />,
		value: "github",
		href: "https://github.com/elijahnikov",
	},
];
