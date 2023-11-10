import { useEffect, useState } from "react";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-5">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-orange-600">Service</h2>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div>
                {services.map(service =><Services></Services>)}
            </div>
        </div>
    );
};

export default Services;