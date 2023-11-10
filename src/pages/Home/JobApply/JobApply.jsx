import { Link } from "react-router-dom";
const JobApply = ({jobapply}) => {
    const {img,title,price} = jobapply;
    return (
        <div>
            <Link to="/login">
                <h2 className="text-2xl font-bold text-center">Job Apply</h2>
            </Link>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p></p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApply;