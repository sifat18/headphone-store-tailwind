
import Icon1 from '../../icons/obj1.png';
import Icon2 from '../../icons/obj2.png';
import Icon3 from '../../icons/obj3.png';
import { UpdateFollower } from 'react-mouse-follower';
import {AnimatePresence, motion} from "framer-motion";
import { fadeUp } from '../Banner/Banner';
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
  return <>
  <section className="bg-gray-100 font-poppins py-8">
    <div className="container">
        <motion.h1 variants={fadeUp(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-3xl font-bold text-center pb-10">Services </motion.h1>
   
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.map(i=>(
            <UpdateFollower key={i.id} mouseOptions={{
                backgroundColor:"white",
                followSpeed:.5,
                zIndex:9999,
                scale:5,
                rotate:360,
                backgroundElement:(
                    <motion.div >
                        <img src={i?.icon} alt=""  />
                    </motion.div>
                )
            }}>
                <motion.div variants={fadeUp(i?.delay)} initial='hidden' whileInView='show'className="flex flex-col justify-center items-center max-w-[300px] mx-auto p-5 shadow-lg rounded-xl bg-white">
                    <img src={i?.icon} alt="" className="w-[100px] mb-4"/>
                    <div className="space-y-2 text-center">
                        <h1 className="text-2xl font-bold">
                            {i?.title}
                        </h1>
                        <p className="text-center text-black/75 text-sm">{i?.desc}</p>
                    </div>
                </motion.div>

            </UpdateFollower>
        ))}
    </div>
    </div>
  </section>
  
  </>;
};

export default Services;
