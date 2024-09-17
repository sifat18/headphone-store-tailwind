import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'
import blog4 from '../../assets/blog4.jpg'
import { UpdateFollower } from 'react-mouse-follower';
const Blogs = () => {
    const data=[{
        id:1,
        title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image:blog1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, turpis in consectetur rutrum, mauris dolor commodo nunc, id hendrerit sapien nunc sed velit.',
        link:"#"
    },
{
    id:2,
        title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image:blog2,
        desc:'Ut vel neque et massa tristique scelerisque. Sed eleifend, diam vel dignissim tempus, metus eros ullamcorper est, vitae fermentum lectus lectus ac nunc.',
        link:"#"
    },
    {
        id:3,
        title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image:blog3,
        desc:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sagittis, mauris id fermentum mollis, mauris velit consectetur arcu, vel ultricies neque velit nec velit.',
        link:"#"
    },
    {
        id:4,
        title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image:blog4,
        desc:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sagittis, mauris id fermentum mollis, mauris velit consectetur arcu, vel ultricies neque velit nec velit.',
        link:"#"
    },
  
]
  return <section>
    <div className="container py-14">
        <h1 className='text-3xl font-bold text-center font-poppins pb-8'>Blogs</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            {data?.map(i=>{
                return(
                    <UpdateFollower key={i.id} mouseOptions={{
                        backgroundColor:'black',
                        zIndex:9999,
                        followSpeed:1.5,
                        text:"read",
                        textFontSize:2,
                        scale:5,
                        
                    }}>
                    <div className='flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300' key={i?.id}>
                        <img src={i?.image} alt="" />
                        <div className='space-y-2'>
                            <h1 className='text-lg font-bold font-poppins line-clamp-2'>
                                {i?.title}
                            </h1>
                            <p className="line-clamp-2">{i?.desc}</p>
                        </div>
                        </div>
                        </UpdateFollower>
                );
            })}
        </div>
    </div>
  </section>;
};

export default Blogs;
