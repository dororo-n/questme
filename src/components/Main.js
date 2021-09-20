import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const headerVariant = {
	init: {
		y: "-50",
		opacity: 0,
	},
	end: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			type: "spring",
			stiffness: 50,
		},
	},
};

const newListVariants = {
	init: {
		opacity: 0,
	},
	end: {
		opacity: 1,
		transition: {
			delay: 1,
		},
	},
};

const codeVariants = {
	init: {
		opacity: 0,
	},
	end: {
		opacity: 1,
		transition: {
			delay: 2,
			when: "beforeChildren",
		},
	},
};

const formVariants = {
	init: {
		y: "-50",
		opacity: 0,
	},
	end: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			type: "tween",
		},
	},
};

const Main = () => {
	const [code, setCode] = useState("");

	return (
		<div className="home container">
			<motion.h2
				variants={headerVariant}
				initial="init"
				animate="end"
				style={{ margin: "2em" }}
			>
				Welcome to QuestME
			</motion.h2>
			<motion.div variants={newListVariants} initial="init" animate="end">
				Are you here to make a{" "}
				<Link to="/home" className="new-list-link">
					new questions list?
				</Link>
			</motion.div>
			<motion.div
				variants={codeVariants}
				initial="init"
				animate="end"
				style={{ marginTop: "5em" }}
			>
				Or maybe you snatched some link already (=①ω①=)...
				<motion.form variants={formVariants} action="">
					<input
						value={code}
						onChange={(e) => setCode(e.target.value)}
						placeholder="pssst... here"
						className="list-code"
						spellCheck="false"
						maxLength="13"
					/>
				</motion.form>
			</motion.div>
		</div>
	);
};

export default Main;
