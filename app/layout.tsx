import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";

export const metadata: Metadata = {
	title: "Airbnb Clone | Next.js & TailwindCSS",
	description: "An Airbnb clone built with Next.js & TailwindCSS by Greg Sithole",
	verification: {
		google: process.env.NEXT_GOOGLE_SITE_VERIFICATION,
	}
};

const font = Nunito({
	subsets: ["latin"],
})

export default function RootLayout({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<meta name="google-site-verification" content="rDWv0xfIKAwr_Ze9m926uCafvUvFE6MsPwIrxzm2cnI" />
			<body className={font.className}>
				<ClientOnly>
					<RegisterModal />
					<Navbar />
				</ClientOnly>
				{children}
			</body>
		</html>
	);
}
