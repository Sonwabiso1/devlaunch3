import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/bootcamp.css"

const BootcampDetails = () => {
  const { bootcampId } = useParams();  // get the bootcampId from the URL
  const [bootcamp, setBootcamp] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data for the specific bootcamp using bootcampId
  useEffect(() => {
    const fetchBootcampData = async () => {
      try {
        const response = await fetch(`https://devlaunch-server.onrender.com/api/bootcamps/${bootcampId}`);
        const data = await response.json();
        setBootcamp(data);
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
          <p>{bootcamp.description}</p>
          <p><strong>Location:</strong> {bootcamp.location}</p>
          <p><strong>Website:</strong> <a href={`http://${bootcamp.website}`} target="_blank" rel="noopener noreferrer">{bootcamp.website}</a></p>
        </div>
      </section>
    </div>
  );
};

export default BootcampDetails;