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

const nextVairants = {
	init: {
		x: "-100vw",
	},
	end: {
		x: 0,
		transition: { type: "spring", stiffness: 60 },
	},
};

const Base = ({ addBase, pizza }) => {
	const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

	return (
		<motion.div
			variants={containerVariants}
			initial="init"
			animate="end"
			className="base container"
		>
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map((base) => {
					let spanClass = pizza.base === base ? "active" : "";
					return (
						<motion.li
							whileHover={{
								originX: 0,
								scale: 1.3,
								color: "#f8e112",
							}}
							transition={{ type: "spring", stiffness: 300 }}
							key={base}
							onClick={() => addBase(base)}
						>
							<span className={spanClass}>{base}</span>
						</motion.li>
					);
				})}
			</ul>

			{pizza.base && (
				<motion.div variants={nextVairants} className="next">
					<Link to="/toppings">
						<motion.button
							whileHover={{
								scale: 1.1,
								textShadow: "0px 0px 8px rgb(255, 255, 255)",
								boxShadow: "0px 0px 8px rgb(255, 255, 255)",
							}}
						>
							Next
						</motion.button>
					</Link>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Base;
