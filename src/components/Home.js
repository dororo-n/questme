import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<motion.div
			className="home container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.5, duration: 1.4 }}
		>
			<h2>Welcome to Pizza Joint</h2>
			<Link to="/base">
				<motion.button
					whileHover={{
						scale: 1.1,
						textShadow: "0px 0px 8px rgb(255, 255, 255)",
						boxShadow: "0px 0px 8px rgb(255, 255, 255)",
					}}
				>
					Create Your Pizza
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default Home;