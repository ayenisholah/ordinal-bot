import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "NFTTOOLS ORDINAL BIDDING BOT",
	description: `
		Unlock seamless access to top NFT marketplaces like Blur, OpenSea, OpenSea Pro, MagicEden, Tensor, and more. Our high-performance API, powered by rotating proxies and API keys, ensures smooth and efficient interactions.

		Key Features:
		- Lightning-Fast Requests: Handle 64+ requests/second with ease
		- Crypto Payments Accepted: Simple and secure transactions
		- Unlimited Requests: Lifetime licenses for endless access
		- Private Plans: Tailored solutions with 16/32/64/128 requests/second
		- Ready-Made Bots: Pre-built in Node.js for instant deployment
		Join our Discord community to learn more and stay updated on the latest tools and features! https://discord.gg/Yezs2VDhBV
`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
