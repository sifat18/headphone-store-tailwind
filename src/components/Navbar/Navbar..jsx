
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
return <nav>
    {/* logo section */}
    <sction>
        <a href="#">
            Playing / <span>Market</span>
        </a>
    </sction>
    {/* menu section */}
    <section>
        <ul>
            {menu.map((item)=>(
                <li key={item.id}>
                    <a href={item.link}>{item.title}</a>
                </li>
            ))}
        </ul>
    </section>
    {/* hamburger section */}
  </nav>;
};

export default Navbar;
