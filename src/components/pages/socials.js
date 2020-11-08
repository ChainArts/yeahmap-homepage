import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../App';

const Socials = () => {
    return(
        <motion.main className="content" initial="initial" animate="in" exit="out" variants={pageVariants}>
            <div>Socials</div>
        </motion.main>
    )
}

export default Socials