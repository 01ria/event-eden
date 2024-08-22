import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img
        src="https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/master/pass/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg"
        alt="restaurant"
      />
      <div className="item">
        <h3>Meet Dreams</h3>
        <div>
          <h1>Design your perfect day!</h1>
          <p>
            We believe that it is all about the BIG DREAMS and the small
            details!
          </p>
          <p>
            EventEden aims to make every event memorable and hassle-free for
            its clients.
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
