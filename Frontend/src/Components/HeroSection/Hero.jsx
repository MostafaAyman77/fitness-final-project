import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import fitMan from "../../Assets/images/fitman.png.jpg";

const Hero = () => {
  return (
    <section className="bg-[#0f0f0f] text-white min-h-screen py-12">
      <Container fluid="md">
        <Row className="align-items-center">
          {/* LEFT */}
          <Col md={6} className="text-center text-md-start">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Achieve Your{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                FITNESS GOALS
              </span>
              <br /> With FitMaker
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto md:mx-0">
              Join The Fitmaker Community And Transform Your Fitness Journey. Our Expert Coaches And Personalized Programs Are Designed To Help You Achieve Your Goals And Exceed Your Expectations. Ready To Make A Change?
            </p>

            <div className="d-flex justify-center justify-md-start gap-4">
              <Button variant="danger" className="px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition">
                Start Your Journey
              </Button>
              <Button variant="outline-warning" className="px-6 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
                Explore Programs
              </Button>
            </div>
          </Col>

          {/* RIGHT */}
          <Col md={6} className="text-center text-md-start position-relative">
            <div className="position-absolute w-100 h-100 bg-gradient-to-tr from-orange-600 to-red-500 rounded-circle blur-[120px] z-0"></div>
            <img
              src={fitMan}
              alt="Fit Man"
              className="position-relative z-10 w-[300px] md:w-[400px]"
            />
            <div className="position-absolute top-10 left-6 bg-black bg-opacity-80 text-white px-3 py-2 rounded-md text-sm z-20">
              +80 <br />
              <span className="text-gray-400 text-xs">Coaches</span>
            </div>
            <div className="position-absolute top-10 right-6 bg-black bg-opacity-80 text-white px-3 py-2 rounded-md text-sm z-20">
              +1300 <br />
              <span className="text-gray-400 text-xs">Positive Reviews</span>
            </div>
            <div className="position-absolute bottom-10 left-6 bg-black bg-opacity-80 text-white px-3 py-2 rounded-md text-sm z-20">
              +1000 <br />
              <span className="text-gray-400 text-xs">Workout Videos</span>
            </div>
            <div className="position-absolute bottom-10 right-6 bg-black bg-opacity-80 text-white px-3 py-2 rounded-md text-sm z-20">
              +1500 <br />
              <span className="text-gray-400 text-xs">Trainers</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;