import { Link } from 'react-router-dom';
import img from '../../../../../assets/images/banner/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg'
import {BiLogoGoogle} from 'react-icons/bi'
import {PiTwitterLogo} from 'react-icons/pi'
import {BsInstagram} from 'react-icons/bs'
import {ImLinkedin2} from 'react-icons/im'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <Link to="/login"><img className='w-24 h-24 rounded-full' src={img} alt="" /></Link>
                <p className='text-xl font-bold text-secondary'>Good Evening</p>
                <p className='text-'>Edwin Diaz is a software and web technologies <br /> engineer, a life coach trainer who is also a serial .</p>
                <div className='flex gap-3 border-2'>
                   <BiLogoGoogle className='text-2xl'></BiLogoGoogle>
                   <PiTwitterLogo className='text-2xl'></PiTwitterLogo>
                   <BsInstagram className='text-xl mt-1'></BsInstagram>
                   <ImLinkedin2 className='text-2xl'></ImLinkedin2>
                </div>
            </aside>
            <nav>
                <header className="footer-title">About</header>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Market</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">About</a>
            </nav>
            <nav>
                <header className="footer-title">Support</header>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accesbility</a>
            </nav>
        </footer>
    );
};

export default Footer;