import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../App';

const About = () => {
    return(
        <motion.main className="content" initial="initial" animate="in" exit="out" variants={pageVariants}>
        <span>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor nisl lacus, ac convallis leo convallis in. Sed rutrum, est vitae sollicitudin sodales, nulla ante posuere orci, ac mattis urna risus sit amet nisi. Fusce pellentesque tortor elit, a molestie justo fermentum eu. Praesent dictum ullamcorper erat, vel condimentum leo mattis at. Suspendisse ligula turpis, fringilla ac pellentesque volutpat, auctor vitae felis. Sed feugiat pulvinar tellus, sed dignissim orci elementum a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at tempus odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus sit amet vulputate arcu, et volutpat ipsum. Donec nec ullamcorper velit. Ut a interdum leo.
        
        Suspendisse pulvinar id turpis id porta. Curabitur odio augue, auctor eu tempor nec, interdum eget dui. Curabitur fringilla lectus vitae libero consectetur eleifend. Cras volutpat at libero non ullamcorper. Quisque imperdiet suscipit mauris. Suspendisse eleifend eros vitae arcu egestas, nec pulvinar magna tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ut magna mauris. Mauris pellentesque metus eget convallis varius. Integer tincidunt consectetur laoreet. Nunc mattis ipsum ut metus venenatis, sit amet convallis nisl scelerisque. Aenean dui ligula, egestas et lacus ac, tincidunt interdum urna. Vestibulum et auctor sapien. Aliquam viverra erat urna, eget rutrum velit tempus non. Ut convallis justo euismod massa consequat elementum.
         </span>
    
        </motion.main>
    )
}

export default About