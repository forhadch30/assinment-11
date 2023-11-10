import img from '../../../../assets/images/services/andrew-neel-fkalryO4dUI-unsplash.jpg'
import img1 from '../../../../assets/images/services/fabian-irsara-67l-QujB14w-unsplash.jpg'
import img2 from '../../../../assets/images/services/linkedin-sales-solutions-YDVdprpgHv4-unsplash.jpg'
import img3 from '../../../../assets/images/services/kaleidico-RDYdOvk8ats-unsplash.jpg'
import img4 from '../../../../assets/images/services/kobu-agency-7okkFhxrxNw-unsplash.jpg'
import img5 from '../../../../assets/images/services/jason-goodman-LR5CYw3AQNo-unsplash (1).jpg'
import {IoMdArrowRoundForward} from 'react-icons/io'
import { Link } from 'react-router-dom'
const Market = () => {
    
    return (
        <div className='mt-5 mb-5'>
            <h2 className="text-3xl font-bold text-orange-600 text-center">Market</h2>
            <p className="text-4xl font-bold text-center">Our Market Area</p>
            <p className='text-[#737373] text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
            <div className="card w-74 bg-base-100 shadow-xl border-2">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Do you need to optimize your product titles for your online marketplaces</h2>
                    <div className="card-actions justify-end">
                       <Link to="/login"><button><IoMdArrowRoundForward className='text-[#FF3811]'></IoMdArrowRoundForward></button></Link>
                    </div>
                </div>
            </div>
            <div className="card w-74 bg-base-100 shadow-xl border-2">
                <figure className="px-10 pt-10">
                    <img src={img1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">How to write excellent product titles for your marketplaces</h2>
                    <div className="card-actions justify-end">
                   <Link to="/login"> <button><IoMdArrowRoundForward className='text-[#FF3811]'></IoMdArrowRoundForward></button></Link>
                    </div>
                </div>
            </div>
            <div className="card w-74 bg-base-100 shadow-xl border-2">
                <figure className="px-10 pt-10">
                    <img src={img2} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">you have to bear in mind that you have to optimize them both for customers</h2>
                    <div className="card-actions justify-end">
                   <Link to="/login"> <button><IoMdArrowRoundForward className='text-[#FF3811]'></IoMdArrowRoundForward></button></Link>
                    </div>
                </div>
            </div>
            <div className="card w-74 bg-base-100 shadow-xl border-2">
                <figure className="px-10 pt-10">
                    <img src={img3} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">The prospective client was engaged and asking some great questions. Hereos a little window into</h2>
                    <div className="card-actions justify-end">
                   <Link to="/login"> <button><IoMdArrowRoundForward className='text-[#FF3811]'></IoMdArrowRoundForward></button></Link>
                    </div>
                </div>
            </div> 
            <div className="card w-74 bg-base-100 shadow-xl border-2">
                <figure className="px-10 pt-10">
                    <img src={img4} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">you will get better the more you try, so do not be discouraged if you canot immediately find</h2>
                    <div className="card-actions justify-end">
                   <Link to="/login"> <button><IoMdArrowRoundForward className='text-[#FF3811]'></IoMdArrowRoundForward></button></Link>
                    </div>
                </div>
            </div>
            <div className="card w-74 bg-base-100 shadow-xl border-2">
                <figure className="px-10 pt-10">
                    <img src={img5} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Every marketplace is different and has different rules and criteria. What works for one channel may</h2>
                    <div className="card-actions justify-end">
                   <Link to="/login"> <button><IoMdArrowRoundForward className='text-[#FF3811]'></IoMdArrowRoundForward></button></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Market;