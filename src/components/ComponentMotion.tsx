import{  FC, ReactNode } from 'react';
import {easeIn, easeInOut, motion} from 'framer-motion'
interface Props {
    timing?: typeof easeInOut;
    duration: number;
    children: ReactNode
}
const ComponentMotion:FC<Props> = ({timing=easeIn, duration, children}) => {
  return (
    <motion.div initial={{opacity:0, scale:0.95}}
    animate ={{opacity:1, scale:1}}
    transition={{duration, ease: timing}}>
{children}
    </motion.div>
  )
}

export default ComponentMotion