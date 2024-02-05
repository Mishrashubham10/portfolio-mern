import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className='h-[35vh] shadow-lg flex flex-col justify-center bg-accent-3 sm:flex'>
      <div className="footerTop flex items-center py-5 justify-between px-5">
        <p>Full Stack Developer</p>
        <p>shubhammishra10101998@gmail.com</p>
        <p>India</p>
      </div>
      <hr className='hr' />
      <div className="footerBottom flex items-center justify-between py-5 px-5">
        <h3 className='text-xl font-bold'>shubham@dev</h3>
        <div className="footerLinks flex gap-4">
          <Link to="mailTo:shubhammishra10101998@gmail.com" className='footerLink'>
            <p className='hover:text-sky-700'>Email</p>
          </Link>
          <Link to="" className='footerLink'>
            <p className='hover:text-sky-700'>Linkdin</p>
          </Link>
          <Link to="" className='footerLink'>
            <p className='hover:text-sky-700'>Twitter</p>
          </Link>
          <Link to="" className='footerLink'>
            <p className='hover:text-sky-700'>GitHub</p>
          </Link>
          <Link to="" className='footerLink'>
            <p className='hover:text-sky-700'>Instagram</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;