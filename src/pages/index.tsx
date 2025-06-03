import { Montserrat } from "next/font/google";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className={montserrat.className}>
			<Navbar />
			<main>
				<Hero />
				<Projects />
			</main>
			<Footer />
		</div>
	);
}