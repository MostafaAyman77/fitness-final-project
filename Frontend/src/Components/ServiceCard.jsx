
import React from "react";

const ServiceCard = ({title, image, link}) => {

    return (
        <div className={`card service-card h-100 border-0 position-relative`}>
            <img src={image} className={`service-image`} alt={title} />
            <a href={link} className={`btn service-btn text-white position-absolute bottom-0 fs-6 p-3 mx-auto`}>Learn More →</a>
        </div>
    );
};

export default ServiceCard;
