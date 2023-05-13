import Link from "next/link";
import React from "react";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Policy", href: "/policy" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-white via-zinc-600/20 to-white">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			<div className="container mx-auto py-8 animate-fade-in">
				<h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
				<p className="mb-4 text-sm text-zinc-500 ">We take your privacy seriously and want you to feel comfortable using our game. This policy explains how we collect, use, and share your information, including with our advertising partner, Admob.</p>
				<h2 className="text-xl font-bold mb-2">Information We Collect</h2>
				<p className="mb-4 text-sm text-zinc-500 ">We may collect the following types of information:</p>
				<ul className="list-disc ml-8 mb-4 text-sm text-zinc-500 ">
					<li>Anonymous usage data such as device type, operating system, and gameplay patterns in order to improve the game and user experience</li>
					<li>Your advertising identifier (such as your Google Advertising ID) to display personalized ads in the game via Admob</li>
				</ul>
				<h2 className="text-xl font-bold mb-2">How We Use Your Information</h2>
				<p className="mb-4 text-sm text-zinc-500 ">We may use your information in the following ways:</p>
				<ul className="list-disc ml-8 mb-4 text-sm text-zinc-500 ">
					<li>To analyze usage patterns and improve the game and user experience</li>
					<li>To display personalized ads in the game via Admob</li>
					<li>To send you updates and promotional materials related to the game, with your consent</li>
				</ul>
				<h2 className="text-xl font-bold mb-2">Data Sharing and Security</h2>
				<p className="mb-4 text-sm text-zinc-500 ">We do not share your personal information with third parties except as required by law. However, Admob may collect and use your information according to their own privacy policy.</p>
				<h2 className="text-xl font-bold mb-2">Changes to this Policy</h2>
				<p className="mb-4 text-sm text-zinc-500 ">We reserve the right to modify this policy at any time. Any changes will be posted on our website and will be effective immediately upon posting.</p>
				<h2 className="text-xl font-bold mb-2">Contact Us</h2>
				<p className="mb-4 text-sm text-zinc-500 ">If you have any questions or concerns about our privacy policy or Admob's privacy practices, please contact us at <a href="mailto:info@yourgame.com">support@talkdy.com</a>.</p>
			</div>
		</div>
	);
}