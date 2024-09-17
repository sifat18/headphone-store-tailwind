import {FaPhone} from 'react-icons/fa'
import {FaMapLocation} from 'react-icons/fa6'
const Footer = () => {
  return <>
  <footer className="bg-primary py-12 text-white">
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
{/* company */}
<div className="space-y-4">
    <h1 className="text-3xl font-bold uppercase">Playing</h1>
    <p className="text-sm max-w-[300px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, a itaque. Odio quos praesentium assumenda a ipsum enim asperiores commodi sint nisi unde? In delectus autem ipsum rerum. Corrupti, error?</p>
    <div>
        <p className="flex items-center gap2"><FaPhone />+1 (123) 455-7650</p>
        <p className="flex items-center gap-2 mt-2">
<FaMapLocation /> Dhaka,Bangladesh
        </p>
    </div>
</div>
{/* link */}
{/* scoial  */}
{/* copyright */}
    </div>
     </div>
  
  </footer>
  
  </>;
};

export default Footer;
