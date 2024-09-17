import { FaPhone,FaFacebook, FaInstagram, FaTelegram, FaGoogle } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Cards from '../../assets/credit-cards.webp'
const Footer = () => {
  return (
    <>
      <footer className="bg-primary py-12 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {/* company */}
            <div className="space-y-4">
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
            </div>
          
            {/* link */}
            <div className="space-y-4">
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
            </div>
            {/* scoial  */}
            <div className="space-y-4">
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
            </div>
            {/* copyright */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
