import { useEffect } from "react";
import { useState } from "react";
import MarketCard from "./MarketCard";

const Market = () => {
    const [market, setMarket] = useState([])
    useEffect(() => {
        fetch('market.json')
            .then(res => res.json())
            .then(data => setMarket(data))
    }, [])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-orange-600">Market</h2>
                <p className="text-3xl font-bold">Our Market Area</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Market;