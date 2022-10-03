import React, { FunctionComponent as FC } from "react";
import Head from "next/head";
export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Head>
				<title>What to play?</title>
				<meta
					name='description'
					content="Don't know what to play? Let an app choose for you!"
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>{children}</main>
		</>
	);
};
