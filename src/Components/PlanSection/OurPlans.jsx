import React from 'react';
import Heading from "../Heading/Heading";
import styles from "./ourPlans.module.css"

const OurPlans = () => {
    const monthlyPlans = [
        {
            id: 1,
            package: "PRO PLAN",
            description: "Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign Up Right Now!",
            feature: ["Access to All Of Our Exercise Videos ", "Progress Tracking", "Supportive Online Community",
                "Advanced, Personalized Workout Plans", "Comprehensive Nutrition Coaching",
                "Access to Advanced Workout Programs", "Body Composition Analysis"
            ],
            price: "99",
            currency: "USDT"
        },
        {
            id: 2,
            package: "CUSTOM PLAN",
            description: "Experience a fully tailored fitness experience with our Custom Plan. Work one-on-one with a dedicated trainer to achieve your goals.",
            feature: ["Access to All Of Our Exercise Videos ", "Progress Tracking", "Supportive Online Community",
                "Fully Customized Workout and Nutrition Plan", "Weekly Check-ins with Your Trainer",
                "Access to All Platform Features", "Exclusive Gear Discounts"
            ],
            price: "149",
            currency: "USDT"
        },
        {
            id: 3,
            package: "BEGINNER PLAN",
            description: "Start your fitness journey with our Beginner Plan. Build a strong foundation with basic workouts and essential nutrition guidance.",
            feature: ["Access to All Of Our Exercise Videos ", "Progress Tracking", "Supportive Online Community",
                "Personalized Workout Plans", "Basic Nutrition Guidance", "Access to Group Fitness Classes"
            ],
            price: "49",
            currency: "USDT"
        }
    ];

    return (
        <div className={`${styles["plans-container"]} py-5 text-white w-75 mx-auto`}>
            <Heading
                headOne="Our"
                headTwo="Plans"
                headingParagraph="Select the plan that suits your fitness goals and let our expert coaches guide you every step of the way."
            />
            <div className={`plan-toggle-button mb-4 text-center`}>
            </div>
            <div className={`row row-cols-1 row-cols-md-3 g-4`}>
                {monthlyPlans.map((plan) => (
                    <div key={plan.id} className={`${styles["plan-container"]} col`}>
                        <div className={`${styles["plan-card"]} h-100 p-2 d-flex flex-column justify-content-between`}>
                            <div className={`${styles["plan-header"]} text-center`}>
                                <p className={`${styles.label}`}>Package</p>
                                <h3 className= {`${styles["plan-title"]} fs-2`}>{plan.package}</h3>
                            </div>
                            <div className={`${styles["plan-body"]}`}>
                                <p className={`${styles.label} text-center`}>Description</p>
                                <p className={`${styles["plan-description"]}`}>{plan.description}</p>
                                <p className={`${styles["label"]} text-center`}>Features</p>
                                <ul className={`features-list`}>
                                    {plan.feature.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`plan-footer position-relative d-flex flex-column justify-content-between`}>
                                <div className={`price-section text-center`}>
                                    <span className={`${styles.price}`}>{plan.price}</span>
                                    <sub className={`currency`}>/{plan.currency}</sub>
                                </div>
                                <div className={`text-center`}>
                                <button className={`choose-plan-button my-2`}>Choose This Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurPlans;