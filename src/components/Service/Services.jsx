import React from "react";
import Icon1 from '../../icons/obj1.png';
import Icon2 from '../../icons/obj2.png';
import Icon3 from '../../icons/obj3.png';
const Services = () => {
    const data=[
        {
            id:1,
            title: 'Service 1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit eget odio tristique faucibus. Sed pharetra, nunc sit amet pharetra pulvinar, justo neque tristique velit, at aliquet lectus nunc vel sapien.',
            icon: Icon1,
            link: '#',
            delay:0.2,
        },
        {
            id:2,
            title: 'Service 2',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit eget odio tristique faucibus. Sed pharetra, nunc sit amet pharetra pulvinar, justo neque tristique velit, at aliquet lectus nunc vel sapien.',
            icon: Icon2,
            link: '#',
            delay:0.8,
        },
        {
            id:3,
            title: 'Service 3',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit eget odio tristique faucibus. Sed pharetra, nunc sit amet pharetra pulvinar, justo neque tristique velit, at aliquet lectus nunc vel sapien.',
            icon: Icon3,
            link: '#',
            delay:1.1,
        }
    ]
  return <div>Services</div>;
};

export default Services;
