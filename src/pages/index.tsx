import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
	const chooseGame = () => alert(1);

	return (
		<button className={styles.start} onClick={chooseGame}>
			Start the generator
		</button>
	);
};

export default Home;
