import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BootcampDetails = () => {
    const { bootcampId } = useParams(); // Get bootcampId from URL
    const [bootcamp, setBootcamp] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch data for the specific bootcamp
    useEffect(() => {
        const fetchBootcampData = async () => {
            try {
                const response = await fetch("/bootcamps.json"); // Change to correct path
                const data = await response.json();
                const foundBootcamp = data.find(b => b.id === parseInt(bootcampId)); // Find the bootcamp by ID
                setBootcamp(foundBootcamp);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching bootcamp data:", error);
                setLoading(false);
            }
        };
        
        fetchBootcampData();
    }, [bootcampId]);

    if (loading) {
        return <p>Loading bootcamp details...</p>;
    }

    if (!bootcamp) {
        return <p>Bootcamp not found!</p>;
    }

    return (
        <div>
            <section id="bootcamp-content">
                <img src={bootcamp.logo} alt={bootcamp.name} />
                <div className="bootcamp-description">
                    <h2>{bootcamp.name}</h2>
                    <p><strong>Location:</strong> {bootcamp.location}</p>
                    <p><strong>Contacts:</strong> {bootcamp.contacts}</p>
                </div>
            </section>
        </div>
    );
};

export default BootcampDetails;
