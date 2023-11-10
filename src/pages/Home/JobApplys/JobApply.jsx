import { Link } from "react-router-dom";

const JobApply = ({ jobapply }) => {
    const { title, img} = jobapply;
    return (
        <div className="card w-96 mt-8 bg-base-100 shadow-xl mb-5">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="card-actions">
                  <Link to="/login"><button className="py-2 px-4 bg-secondary rounded text-white">Add Job</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobApply;
