import { useState } from "react";
import headphone from "../../assets/headphone.png";
import headphone2 from "../../assets/headphone2.png";
import headphone3 from "../../assets/headphone3.png";
import {FaWhatsapp} from "react-icons/fa";
const Hero = () => {
  const info = [
    {
      id: 1,
      image: headphone,
      title: "Headphones wireless",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi sint nemo, nisi dolore a, id eos dolores iste maiores iusto facilis possimus nulla. Recusandae esse accusantium modi nam autem!",
      price: 20,
      modal: "Modal Brown",
      bgColor: "#8b5958",
    },
    {
      id: 2,
      image: headphone2,
      title: "Headphones wireless",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi sint nemo, nisi dolore a, id eos dolores iste maiores iusto facilis possimus nulla. Recusandae esse accusantium modi nam autem!",
      price: 20,
      modal: "Lime Green",
      bgColor: "#638153",
    },
    {
      id: 3,
      image: headphone3,
      title: "Headphones wireless",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi sint nemo, nisi dolore a, id eos dolores iste maiores iusto facilis possimus nulla. Recusandae esse accusantium modi nam autem!",
      price: 20,
      modal: "Ocean Blue",
      bgColor: "#5d818c",
    },
  ];
  const [activeData, setActiveData] = useState(info[0]);
  return (
    <>
      <section className="bg-brandDark text-white font-varela">
        <div className="container  grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          {/* brand */}
          <div className="flex flex-col justify-center xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <h1 className="text-3xl lg:text-6xl font-bold font-varela">
                {activeData?.title}
              </h1>
              <p className="text-sm leading-loose text-white/80">
                {activeData?.subtitle}
              </p>
              <button
                style={{
                  backgroundColor: activeData?.bgColor,
                }}
                className="px-4 py-2 inline-block font-normal rounded-sm"
              >
                Buy and Listen
              </button>
              {/* heaphone separator */}
              <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase text-sm">Top Headphones for you</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>
              {/* headphonme swatyches  */}
              <div className="grid grid-cols-3 gap-4">
                {info?.map(i=>{
                  return (
                    <div className="grid grid-cols-2 place-items-center cursor-pointer" key={i.id} >
                    <div>
                      <img
                        className="w-[200px]"
                        src={i.image}
                        alt={i.title}
                      />
                     </div>
                     <div className="space-y-2">
                     <p className="text-base font-bold">{i?.price}</p>
                     <p className=" text-nowrap text-xs font-normal">{i?.modal}</p>
                     </div>
                    </div>

                  )
                })}
              </div>
            </div>
          </div>
          {/* hero image */}
          <div className="flex flex-col justify-end items-center"><img src={activeData?.image} alt="" className="w-[300px] md:w-[400px] xl:w-[500px]"/></div>
          {/* whatsapp */}
          <div><a href="">
            <FaWhatsapp className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] z-[99999] mix-blend-difference"/>
            </a></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
