import React from "react";
import "./Description.css";

export default function Description() {
    return (
        <div className="description-container">
            <main>
                <div className="container">
                <img src="https://st2.depositphotos.com/3591429/6006/i/450/depositphotos_60063963-stock-photo-people-discussing-about-us.jpg" alt="" />
                    <h1>About Us</h1>
                    <p>Welcome to our e-Gove platform! We are dedicated to providing efficient and transparent services to citizens. Our mission is to simplify government processes and enhance accessibility through technology.</p>
                </div>
                <div className="container">
                    <h2>Our Vision</h2>
                    <p>We envision a future where government services are easily accessible to all citizens, fostering trust and engagement.</p>    
                    <img src="https://thumbs.dreamstime.com/b/our-vision-background-light-bulb-words-drawn-blackboard-chalkboard-business-concept-40008857.jpg" alt="" />
                </div> 
                <div className="container">
                    <img src="https://previews.123rf.com/images/xicro/xicro1612/xicro161200073/66695058-conceptual-image-word-our-mission-on-wooden-background-alphabet-word-on-the-right.jpg" alt="" />
                    <h2>Our Mission</h2>
                    <p>Our mission is to leverage technology to streamline government services, ensuring transparency and efficiency.</p>
                </div>
            </main>
        </div>
    );
}