import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function SliderItem({ items, number }) {
  return (
    <div className="row">
      {items.map((item, i) => {
        return (
          <div key={i} className={`col-${number}`}>
            <div className="slider-inner rounded-4">
              <img src={item.imgSrc} className="w-100 rounded-top-4" alt={item.name} />
              <div className="bg-grey py-2 px-2.5 rounded-bottom-4">
                <h4 className="text-white fw-bold ">{item.name}</h4>
                <p className="text-light-grey fw-medium">{item.role}</p>
                <Link to={`/coach/${item.id}`} className="text-white d-flex align-items-center gap-2 text-decoration-none position-relative">
                  <span className="link-spotlight"></span>
                  <span>Learn More</span>
                  <FontAwesomeIcon icon={faArrowRightLong} className="text-red"/>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
