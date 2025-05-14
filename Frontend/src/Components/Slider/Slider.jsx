import { useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import SliderItem from "./SliderItem";
import SliderButton from "./SliderButton";
import SliderIndicator from "./SliderIndicator";
import "./Slider.css";
import gym1 from "../../Assets/images/gym1.png";
import gym2 from "../../Assets/images/gym2.png";
import gym3 from "../../Assets/images/gym3.png";
import gym4 from "../../Assets/images/gym4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    id: 1,
    name: "Sam Cole",
    role: "Personal Trainer",
    imgSrc: gym1,
  },
  {
    id: 2,
    name: "John Doe",
    role: "Yoga Instructor",
    imgSrc: gym2,
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "Nutrition Expert",
    imgSrc: gym3,
  },
  {
    id: 4,
    name: "Mike Johnson",
    role: "Physical Therapist",
    imgSrc: gym4,
  },
  {
    id: 5,
    name: "Laura Brown",
    role: "Health Coach",
    imgSrc: gym1,
  },
  {
    id: 6,
    name: "Emma White",
    role: "Fitness Specialist",
    imgSrc: gym2,
  },
  {
    id: 7,
    name: "Chris Green",
    role: "Strength Coach",
    imgSrc: gym3,
  },
  {
    id: 8,
    name: "Olivia Lee",
    role: "Pilates Expert",
    imgSrc: gym4,
  },
  {
    id: 9,
    name: "Stan Lee",
    role: "Pilates Expert",
    imgSrc: gym1,
  },
  {
    id: 10,
    name: "Robert Di Nero",
    role: "Pilates Expert",
    imgSrc: gym2,
  },
  {
    id: 11,
    name: "Chris Evans",
    role: "Pilates Expert",
    imgSrc: gym3,
  },
];

function Slider() {
  const ref = useRef();
  const [visibleCount, setVisibleCount] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderItemsCount = Math.ceil(items.length / visibleCount);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 576) {
        setVisibleCount(1);
      } else if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else if (window.innerWidth < 992) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const getItemsForSlide = (startIndex) => {
    return items.slice(startIndex, startIndex + visibleCount);
  };

  return (
    <section className="bg-main py-5">
      <div className="container d-flex flex-column align-items-center gap-4">
        <div className="w-100 d-flex justify-content-center justify-content-sm-between align-items-center flex-wrap gap-3">
          <h2 className="text-white fw-bold m-0 p-0">
            Meet Our <span className="text-red">Trainers</span>
          </h2>
          <div className="d-flex flex-column gap-2.5">
            <div className="d-flex justify-content-center align-items-center gap-2.5">
              <SliderButton
                onClick={() => {
                  ref.current?.prev();
                }}
                icon={
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="text-white"
                    style={{ verticalAlign: "middle" }}
                  />
                }
              />
              <SliderButton
                onClick={() => {
                  ref.current?.next();
                }}
                icon={
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-white"
                    style={{ verticalAlign: "middle" }}
                  />
                }
              />
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2.5">
              {Array.from({ length: sliderItemsCount }).map((_, i) => {
                return <SliderIndicator key={i} active={currentIndex === i} />;
              })}
            </div>
          </div>
        </div>
        <p className="text-white m-0 p-0">
          At This Part you can See Few Of The Many Positive reviews Of Our
          Customers.
        </p>
        <Carousel
          ref={ref}
          activeIndex={currentIndex}
          onSelect={(n) => {
            setCurrentIndex(n);
          }}
          indicators={false}
          controls={false}
          className="w-100"
        >
          {Array.from({ length: sliderItemsCount }).map((_, slideIndex) => {
            const startIndex = slideIndex * visibleCount;
            const slideItems = getItemsForSlide(startIndex);
            return (
              <Carousel.Item key={slideIndex}>
                <SliderItem items={slideItems} number={12 / visibleCount} />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <button className="d-flex align-items-center gap-2 px-3 py-2 bg-transparent text-orange border border-orange rounded-4">
          <span>View All</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}

export default Slider;
