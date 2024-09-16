import headphone4 from "../../assets/headphone4.png";
import { motion } from "framer-motion";
import { UpdateFollower } from 'react-mouse-follower';
export const fadeUp=(delay)=>{
  return{
    hidden:{
      opacity: 0,
      y: 100,
    },
    show:{
      opacity: 1,
      y: 0,
      transition: { duration: 0.5,delay:delay, ease: "easeInOut" },
    }
  }
}
const Banner = () => {

  return (
    <>
      <section>
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
          {/* banner image */}
          <div>
            <motion.img
              initial={{
                opacity: 0,
                x: -100,
                rotate: -180,
              }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8,delay:"0.2", ease: "easeInOut" }}
              src={headphone4}
              alt=""
              className="w-[300px] md:w-[400px]"
            />
          </div>
          {/* banner text */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[450p">
              <motion.h1 variants={fadeUp(0.2)}
              initial='hidden'
              whileInView='show'
              className="text-3xl lg:text-4xl font-semibold font-poppins">
                The Latest Headphones With the latest technology
              </motion.h1>
              <motion.p variants={fadeUp(0.2)}
              initial='hidden'
              whileInView='show'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                assumenda non tempore quod ex illo quisquam natus distinctio
                cumque ab voluptatem qui delectus consequatur nisi minus
                voluptatum magnam, hic accusantium?
              </motion.p>
              <UpdateFollower mouseOptions={{
                backgroundColor:"white",
                zIndex:9999,
                followSpeed:0.5,
                mixBlendMode:"difference",
                scale:5
              }}>
              <motion.button variants={fadeUp(0.2)}
              initial='hidden'
              whileInView='show' className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white">
                Shop now
              </motion.button>
              </UpdateFollower>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
