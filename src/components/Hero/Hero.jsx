import headphone from "../../assets/headphone.png";
import headphone2 from "../../assets/headphone2.png";
import headphone3 from "../../assets/headphone3.png";
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
  ];
  return (
    <>
      <section className="bg-brandDark text-white">
        <div className="container bg-red-500 grid grid-cols-2 md:grid-cols-1 min-h-[500px]">
          {/* brand */}
          {/* hero image */}
          {/* whatsapp */}
        </div>
      </section>
    </>
  );
};

export default Hero;
