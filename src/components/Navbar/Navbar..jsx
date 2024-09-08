import { MdMenu } from 'react-icons/md';
import { SlEarphones } from 'react-icons/sl';
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from 'framer-motion';

const Navbar = () => {
const menu=[
    {
        title: 'Home',
        link: '#',
        id:1
    },
    {
        title: 'About',
        link: '#',
        id:2
    },
    {
        title: 'Categories',
        link: '#',
        id:3
    },
    {
        title: 'Contact',
        link: '#',
        id:4
    }
]
return <>
<div className="bg-brandDark text-white py-8 font-varela">
<motion.nav
initial={{opacity: 0}}
animate={{opacity: 1}}
transition={{duration: 1,delay: 0.2}}
className='container flex justify-between items-center'>
    {/* logo section */}
    <section>
        <a href="#" className='text-xl font-bold uppercase'>
            Playing / <span className='font-extralight  text-white/70'>Market</span>
        </a>
    </section>
    {/* menu section */}
    <section className='hidden md:block'>
        <ul className='flex items-center gap-8 '>
            {menu.map((item)=>(
                <li key={item.id}>
                     <UpdateFollower
      className="sample"
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 9999,
        followSpeed: 1.2,
        scale:5,
        mixBlendMode: 'difference',
      }}
    >
            <a href={item.link} className='inline-block text-sm px-3 py-2 uppercase'>{item.title}</a>
    </UpdateFollower>
        
                </li>
            ))}
             <UpdateFollower
      className="sample"
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 9999,
        followSpeed: 1.2,
        scale:5,
        mixBlendMode: 'difference',
      }}
    >
            <button className='text-xl ps-14'>
            <SlEarphones/>
            </button>
            </UpdateFollower>
        </ul>
    </section>
    {/* hamburger section */}
    <div >
    <section className="md:hidden">
        <MdMenu className='text-4xl'/>
    </section>
    </div>
  </motion.nav>
  </div>
</>
};

export default Navbar;
