import Head from "next/head";

export default function Home({ now }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Page - Homepage</title>
				<meta name="description" content="Page homepage description" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Welcome to homepage</h1>

				<p>Server time: {now}</p>
				<p>
					Adipiscing gravida blandit fringilla sed lorem ipsum auctor vulputate
					nam, himenaeos sociis erat inceptos aliquet eros placerat tristique
					libero condimentum, dictumst pellentesque vestibulum aptent cubilia
					rutrum faucibus dolor. Curabitur dictum molestie habitasse nam viverra
					tincidunt phasellus magnis blandit hendrerit volutpat, ante aptent est
					duis parturient sodales lobortis ad nisl a. Congue nulla facilisis
					Vestibulum elementum conubia curae convallis lacinia ornare tempus
					dictumst, turpis habitasse dignissim dui libero scelerisque senectus,
					phasellus euismod elit potenti dictum himenaeos fermentum.
				</p>
			</main>
		</div>
	);
}

export const getServerSideProps = async () => {
	return { props: { now: new Date().toISOString() } };
};
