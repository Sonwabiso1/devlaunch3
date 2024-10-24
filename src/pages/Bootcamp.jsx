import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BootcampDetails = () => {
  const { bootcampId } = useParams();  // get the bootcampId from the URL
  const [bootcamp, setBootcamp] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data for the specific bootcamp using bootcampId
  useEffect(() => {
    const fetchBootcampData = async () => {
      try {
        const response = await fetch(`https://api.example.com/bootcamps/${bootcampId}`);
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
        <img src={bootcamp.image} alt={bootcamp.name} />
        <div className="bootcamp-description">
          <h2>{bootcamp.name}</h2>
          <p>{bootcamp.description}</p>
          <p><strong>Location:</strong> {bootcamp.location}</p>
          <p><strong>Website:</strong> <a href={`http://${bootcamp.website}`} target="_blank" rel="noopener noreferrer">{bootcamp.website}</a></p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="secondary-nav">
        <div className="secondary-nav-list">
          <ul>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#financing">Financing</a></li>
            <li><a href="#application">Application Process</a></li>
          </ul>
        </div>
      </section>

      <section id="secondary-nav-items">
        <div className="courses-description">
          <h3>{bootcamp.name} Courses</h3>
          {bootcamp.courses.map((course, idx) => (
            <div key={idx}>
              <h4>{course.name}</h4>
              <p><strong>Overview:</strong> {course.overview}</p>
              <ul>
                <li>Duration: {course.duration}</li>
                <li>Financing Options: {course.financing}</li>
                <li>Format: {course.format}</li>
                <li>Campus: {course.campus}</li>
                <li>Prerequisite: {course.prerequisite}</li>
                <li>Tech Stack: {course.techstack}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BootcampDetails;