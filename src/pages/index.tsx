import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/ui/common/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<Layout>
			<p>ello</p>
		</Layout>
	);
}
