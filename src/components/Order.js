import { motion } from "framer-motion";

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
			mass: 0.4,
			damping: 8,
			when: "beforeChildren",
		},
	},
};

const childVariant = {
	init: {
		opacity: 0,
	},
	end: {
		opacity: 1,
	},
};

const Order = ({ pizza }) => {
	return (
		<motion.div
			variants={containerVariants}
			initial="init"
			animate="end"
			className="container order"
		>
			<h2>Thank you for your order :)</h2>
			<motion.p variants={childVariant}>
				You ordered a {pizza.base} pizza with:
			</motion.p>
			<motion.div variants={childVariant}>
				{pizza.toppings.map((topping) => (
					<div key={topping}>{topping}</div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Order;
