import { useEffect, useState } from "react";
import JobApply from "./JobApply";

const Jobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('Market.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
                <div className="text-center space-y-5">
                    <h2 className="text-5xl font-bold">Web Development Digital Marketing<span className="text-red-400">?</span></h2>
                    <p className="text-xl font-medium">Web development digital marketing <br /> and graphics design. Job apply</p>
                </div>
            <div>
                {
                    jobs.map(jobapply=><JobApply key={jobapply._id} jobapply={jobapply}></JobApply>)
                }
            </div>
        </div>
    );
};

export default Jobs;