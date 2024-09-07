import { MdMenu } from 'react-icons/md';
import { SlEarphones } from 'react-icons/sl';

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
<div className="bg-brandDark text-white py-6 font-varela">
<nav className='container flex justify-between items-center'>
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
                    <a href={item.link} className='inline-block text-sm px-3 py-2 uppercase'>{item.title}</a>
                </li>
            ))}
            <button className='text-xl ps-14'>
            <SlEarphones/>
            </button>
        </ul>
    </section>
    {/* hamburger section */}
    <div >
    <section className="md:hidden">
        <MdMenu className='text-4xl'/>
    </section>
    </div>
  </nav>
  </div>
</>
};

export default Navbar;
