import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../App';

const Submit = () => {
    return(
        <motion.main className="content" initial="initial" animate="in" exit="out" variants={pageVariants}>
            <div>Submit</div>
        </motion.main>
    )
}

export default Submit