import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../App';

const Submit = () => {
    return(
        <motion.main className="content" initial="initial" animate="in" exit="out" variants={pageVariants} style={{marginTop: "10rem"}}>
            <iframe title="gangshit" src="https://docs.google.com/forms/d/e/1FAIpQLScktcb0tx0mrfHNzxMda4UaAnpMwgTVJipL3PxCfQx2fmRVIw/viewform?embedded=true" width="100%" height="100%">Wird geladen…</iframe>

        </motion.main>
    )
}

export default Submit