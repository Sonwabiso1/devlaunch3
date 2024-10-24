import React, { useEffect, useState } from "react";
import "../styles/bootcampWidgets.css"; // Adjusted import path

const BootcampWidgets = () => {
    const [bootcamps, setBootcamps] = useState([]);

    useEffect(() => {
        fetch("/bootcamps.json") // Fetching from public folder
            .then((response) => response.json())
            .then((data) => setBootcamps(data))
            .catch((error) => console.error("Error fetching bootcamps:", error));
    }, []);

    return (
        <section id="widgets">
            {bootcamps.length === 0 ? (
                <p>No bootcamps available</p>
            ) : (
                bootcamps.map((bootcamp) => (
                    <div key={bootcamp.id}>
                        <img src={bootcamp.logo} alt={`${bootcamp.name} Logo`} />
                        <h4>{bootcamp.name}</h4>
                        <p>⭐⭐⭐⭐⭐</p>
                        <ul>
                            <li>Tech stack: {bootcamp.techStack}</li>
                            <li>Online/ On-Site: {bootcamp.onlineOnsite}</li>
                            <li>Location: {bootcamp.location}</li>
                            <li>Contacts: {bootcamp.contacts}</li>
                        </ul>
                        <button>
                            <a href="/Pages/Bootcamp.html">Learn More</a>
                        </button>
                    </div>
                ))
            )}
        </section>
    );
};

export default BootcampWidgets;
