import { useEffect, useState } from "react";
import JobApply from "./JobApply";
import Marquee from "react-fast-marquee";

const JobApplys = () => {
    const [jobapplys, setjobapplys] = useState([])
    
    useEffect(()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data =>setjobapplys(data))
    },[])

    return (
        <div>
            <div className="text-center space-y-5">
                <Marquee gradient={20} pauseOnClick={true} speed={50} className="bg-gray-300"><h2 className="text-5xl font-bold">Web Development and Digital Marketing Jobs</h2></Marquee>
             <p className="text-xl font-medium">Web development digital marketing <br /> and graphics design. Job apply</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                   jobapplys.map(jobapply=><JobApply key={jobapply._id} jobapply={jobapply}></JobApply>) 
                }
            </div>
        </div>
    );
};

export default JobApplys;