import { FaPhone,FaFacebook, FaInstagram, FaTelegram, FaGoogle } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Cards from '../../assets/credit-cards.webp'
import { motion} from "framer-motion";
const Footer = () => {
  return (
    <>
      <footer className="bg-primary py-12 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {/* company */}
            <motion.div initial={{
                opacity: 0,
                y: 100,
              }} whileInView={{
                opacity: 1,
                y: 0,
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }}
             className="space-y-4">
              <h1 className="text-3xl font-bold uppercase">Playing</h1>
              <p className="text-sm max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia, a itaque. Odio quos praesentium assumenda a ipsum enim
                asperiores commodi sint nisi unde? In delectus autem ipsum
                rerum. Corrupti, error?
              </p>
              <div>
                <p className="flex items-center gap2">
                  <FaPhone />
                  +1 (123) 455-7650
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <FaMapLocation /> Dhaka,Bangladesh
                </p>
              </div>
            </motion.div>
          
            {/* link */}
            <motion.div initial={{
                opacity: 0,
                y: 100,
              }} whileInView={{
                opacity: 1,
                y: 0,
              }} transition={{
                duration: 0.6,
                delay: 0.4
              }}v className="space-y-4">
              <h1 className="text-3xl font-bold">Quick Links</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <ul className="space-y-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                  </div>
                  <div>

                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            {/* scoial  */}
            <motion.div initial={{
                opacity: 0,
                y: 100,
              }} whileInView={{
                opacity: 1,
                y: 0,
              }} transition={{
                duration: 0.6,
                delay: 0.6
              }} className="space-y-4">
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className=" flex items-center justify-center gap-3">

                <FaFacebook className="text-3xl hover:scale-105 duration-300"/>
                <FaInstagram className="text-3xl hover:scale-105 duration-300"/>
                <FaTelegram className="text-3xl hover:scale-105 duration-300"/>
                <FaGoogle className="text-3xl hover:scale-105 duration-300"/>
            </div>
            <div className="space-y-3">
                <p>Payment Methods</p>
                <img src={Cards  } alt="" className="w-[80%]" />
            </div>
            </motion.div>
            {/* copyright */}
            <p className="text-white text-center mt-8 border-t-2 pt-8">© 2024. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
