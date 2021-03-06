import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
	init: {
		opacity: 0,
		x: "100vw",
	},
	end: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			delay: 0.5,
		},
	},
};

const Toppings = ({ addTopping, pizza }) => {
	let toppings = [
		"mushrooms",
		"peppers",
		"onions",
		"olives",
		"extra cheese",
		"tomatoes",
	];

	return (
		<motion.div
			variants={containerVariants}
			initial="init"
			animate="end"
			className="toppings container"
		>
			<h3>Step 2: Choose Toppings</h3>
			<ul>
				{toppings.map((topping) => {
					let spanClass = pizza.toppings.includes(topping)
						? "active"
						: "";
					return (
						<motion.li
							whileHover={{
								originX: 0,
								scale: 1.3,
								color: "#f8e112",
							}}
							transition={{ type: "spring", stiffness: 300 }}
							key={topping}
							onClick={() => addTopping(topping)}
						>
							<span className={spanClass}>{topping}</span>
						</motion.li>
					);
				})}
			</ul>

			<Link to="/order">
				<motion.button
					whileHover={{
						scale: 1.1,
						textShadow: "0px 0px 8px rgb(255, 255, 255)",
						boxShadow: "0px 0px 8px rgb(255, 255, 255)",
					}}
				>
					Order
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default Toppings;
