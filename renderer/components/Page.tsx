import Head from "next/head";
import { description as defaultDescription } from "@config";

/**
 * Adds SEO tags to a page
 * @param props.title - The Title in the browser
 * @param props.description - The description of the page.
 */

import { FC } from "react";

const Page: FC<{ title: string; description?: string }> = ({ title, description, children }) => (
	<>
		<Head>
			<title>{title} - Voxis</title>
			<meta property="og:title" content={title} />
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			<meta name="description" content={description ?? defaultDescription} />
			<meta property="og:description" content={description ?? defaultDescription} />
		</Head>
		{children}
	</>
);
export default Page;
