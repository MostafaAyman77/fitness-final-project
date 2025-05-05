import React from "react";
import { Container, Row, Col, Card, Button, Accordion, Badge} from "react-bootstrap";
import "./styles.css";

const Membership = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="membership-hero text-center text-white py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="display-4 text-center fw-bold">Premium Memberships</h1>
              <p className="lead">Join the FitMaker community and unlock unlimited access to all our premium services.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Membership Plans */}
      <Container className="py-5">
        <h2 className="text-center text-light fw-bold mb-5">Choose Your Membership</h2>
        <Row>
          {[
            {
              title: "Basic",
              price: "$29",
              period: "per month",
              features: [
                "Access to gym facilities",
                "Basic equipment usage",
                "2 group classes per week",
                "Fitness assessment"
              ],
              color: "white",
              textColor: "dark"
            },
            {
              title: "Premium",
              price: "$59",
              period: "per month",
              features: [
                "Everything in Basic",
                "Unlimited group classes",
                "Access to premium equipment",
                "Monthly fitness assessment",
                "Nutrition guidance"
              ],
              popular: true,
              color: "danger",
              textColor: "white"
            },
            {
              title: "Elite",
              price: "$99",
              period: "per month",
              features: [
                "Everything in Premium",
                "2 personal training sessions/month",
                "Custom workout plan",
                "Priority booking",
                "Recovery zone access",
                "Nutrition coaching"
              ],
              color: "black",
              textColor: "white"
            }
          ].map((plan, index) => (
            <Col lg={4} key={index} className="mb-4">
              <Card className={`membership-card h-100 shadow border-0 bg-${plan.color} text-${plan.textColor}`}>
                {plan.popular && (
                  <div className="ribbon">
                    <span className="ribbon-text">POPULAR</span>
                  </div>
                )}
                <Card.Header className={`text-center border-0 pt-4 bg-${plan.color}`}>
                  <h3 className="fw-bold">{plan.title}</h3>
                </Card.Header>
                <Card.Body className="text-center">
                  <div className="price-container mb-4">
                    <span className="currency">$</span>
                    <span className="price-value">{plan.price.replace("$", "")}</span>
                    <span className="price-period">{plan.period}</span>
                  </div>
                  <ul className="feature-list">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2">
                        <i className="feature-check">✓</i> {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer className={`text-center border-0 pb-4 bg-${plan.color}`}>
                  <Button 
                    variant={plan.color === "danger" ? "light" : "danger"} 
                    size="lg" 
                    className="px-4"
                  >
                    Select Plan
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center text-light mt-4">
          <p>Need a custom membership? <a href="#contact" className="text-danger">Contact us</a> for corporate rates and special packages.</p>
        </div>
      </Container>

      {/* Membership Benefits */}
      <div className="text-white py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Membership Benefits</h2>
          <Row className="g-4">
            {[
              {
                title: "State-of-the-Art Facilities",
                description: "Access to our premium gym facilities with the latest equipment and technology."
              },
              {
                title: "Expert Trainers",
                description: "Work with certified fitness professionals who will guide you to reach your goals."
              },
              {
                title: "Group Classes",
                description: "Join a variety of group fitness classes from HIIT to yoga and everything in between."
              },
              {
                title: "Exclusive Content",
                description: "Get access to members-only workout videos, nutrition guides, and recipes."
              },
              {
                title: "Community Support",
                description: "Be part of a motivating community that keeps you accountable and inspired."
              },
              {
                title: "Mobile App",
                description: "Track your progress, book classes, and access workouts on the go with our mobile app."
              }
            ].map((benefit, index) => (
              <Col className="bg-dark" md={6} lg={4} key={index}>
                <div className="benefit-card p-4">
                  <div className="benefit-icon bg-danger mb-3"></div>
                  <h4 className="fw-bold">{benefit.title}</h4>
                  <p className="mb-0">{benefit.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Member Testimonials */}
<Container className="py-5">
  <h2 className="text-center text-light fw-bold mb-5">What Our Members Say</h2>
  <Row>
    {[1, 2, 3].map((testimonial, index) => (
      <Col md={4} key={index} className="mb-4">
        <Card className="h-100 bg-dark text-white shadow-sm border-0 p-4 text-center">
          <Card.Body className="p-0">
            {/* Avatar Icon */}
            <i className="bi bi-person bg-danger rounded-circle text-white w-100  p-1 px-3 fs-2"></i>

            {/* Stars */}
            <div className="py-2 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-danger">★</span>
              ))}
            </div>

            {/* Testimonial */}
            <Card.Text className="fst-italic mb-3">
              "Joining FitMaker was the best decision I've made for my health. The community is amazing and the facilities are top-notch!"
            </Card.Text>

            {/* Member Info */}
            <p className="fw-bold mb-0">Member Name {index + 1}</p>
            <small className="text-muted">Member since 2023</small>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>



      {/* Call to Action */}
      <div className="cta-section bg-danger text-white py-5">
        <Container className="text-center">
          <h2 className="fw-bold mb-4">Ready to Transform Your Fitness Journey?</h2>
          <p className="lead mb-4">Join FitMaker today and start your path to a healthier lifestyle.</p>
          <Button variant="light" size="lg" className="me-3">Join Now</Button>
        </Container>
      </div>
    </>
  );
};

export default Membership;