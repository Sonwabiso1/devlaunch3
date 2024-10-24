import React from "react";
import Sonwabiso from  "../assets/sonwabiso.jpg";
import Nikitha from  "../assets/nikitha.jpg";
import Robyn from   "../assets/robyn.jpg";
import Du from "../assets/du.jpg";
import Monica from "../assets/monica.jpg";
import Absa from "../assets/absa_logo.png";
import Capaciti from  "../assets/capaciti_logo.jpg";
import  '../styles/home.css';





const Home = () => {
    return (
        <main>
        {/* <!-- Introduction Section --> */}
        <section className="introduction">
            <h2>Welcome to DevLaunch</h2>
            <p>Your go-to hub for discovering the best tech bootcamps around South Africa. We understand that finding the right bootcamp may be overwhelming, especially with so many options available. That's why we've created a one-stop platform that simplifies your search, making it easier for you to find the perfect program that matches your career goals.</p>
        </section>

        {/* <!-- Mission Section --> */}
        <section className="mission">
            <h2>We believe in you</h2>
            <p>Our mission is to connect aspiring developers, data scientists, UX designers, and tech enthusiasts with the bootcamps that will help them thrive in the industry. We aggregate the best bootcamps, offering detailed reviews, ratings, and insider insights so you can make informed decisions.</p>
        </section>

        {/* <!-- Vision Section --> */}
        <section className="vision">
            <h2>Vision</h2>
            <p>We believe that education is the key to unlocking your potential in the tech industry. Our vision is to empower individuals by providing the tools and knowledge they need to succeed in a rapidly evolving digital landscape. We aim to make tech education accessible to everyone.</p>
        </section>

        {/* <!-- Team Section --> */}
        <section className="team">
            <h2>Our Team</h2>
            <div className="team-members">
                <div className="member">
                    <img className="avatar" src={Sonwabiso} alt="Sonwabiso Maloni" width="150" height="100" />
                    <h3>Sonwabiso Maloni</h3>
                    <p>Backend Developer & Sales</p>
                </div>
                <div className="member">
                    <img className="avatar" src={Robyn} alt="Robyn Paulsen" width="150" height="100" />
                    <h3>Robyn Paulsen</h3>
                    <p>Backend Developer</p>
                </div>
                <div className="member">
                    <img className="avatar" src={Nikitha} alt="Nikitha Mbokotwana" width="150" height="100" />
                    <h3>Nikitha Mbokotwana</h3>
                    <p>Project Manager</p>
                </div>
                <div className="member">
                    <img className="avatar" src={Du} alt="Du-Wayne Freslaar" width="150" height="100" />
                    <h3>Du-Wayne Freslaar</h3>
                    <p>Frontend Developer</p>
                </div>
                <div className="member">
                    <img className="avatar" src={Monica} alt="Monica Ndlovu" width="150" height="100" />
                    <h3>Monica Ndlovu</h3>
                    <p>Frontend Developer</p>
                </div>
            </div>
        </section>

        {/* <!-- Sponsors Section --> */}
        <section className="sponsors">
            <h2>Sponsors</h2>
            <div className="sponsor-logos">
                <img src={Absa} alt="ABSA Logo" />
                <img src={Capaciti} alt="Capaciti Logo" />
            </div>
        </section>
    </main>
    );
}

export default Home;
