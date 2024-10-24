import React from "react";
import "../styles/MainReview.css"
// import { Link } from "react-router-dom";

export default function Review() {
  // const id = 1695109843452; // Hardcoded ID, replace with prop or dynamic value if needed
  // const [bootcamp, setBootcamp] = useState([]); // Hook to store bootcamp data
  // const [error, setError] = useState(null); // Hook to store errors

  // useEffect(() => {
  //   const fetchBootcamp = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:5000/api/bootcamps/${id}`);
  //       if (!response.ok) {
  //         throw new Error("Network response not ok");
  //       }
  //       const data = await response.json();
  //       setBootcamp(data);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };
  //   fetchBootcamp();
  // }, [id]); // Added id as a dependency in useEffect

  // if (error) {
  //   return <div>Data fetching failed: {error}</div>;
  // }

  return (
    <div>
      <main> {/* Opening main tag */}
        <h1>DevLaunch Reviews</h1>
        <p><b>Overall Experience</b></p>
        <div className="review-container">
          <h3><b>Latest reviews</b></h3>
          <div className="container1">
            <h2>⭐⭐⭐</h2>
            <p>I found the service extremely quick and efficient.</p>
            <p>The reason I gave three stars is to leave room for growth.</p>
            <h3>Shane Filan</h3>
            <p className="date">9 June 2024</p>
          </div>
          <div className="container2">
            <h2>⭐⭐⭐⭐⭐</h2>
            <p>My kid used to procrastinate on his future, but this is so quick that there's no more excuses.</p>
            <h3>Sarah Harris</h3>
            <p className="date">27 June 2024</p>
          </div>
          <div className="container3">
            <h2>⭐⭐⭐⭐⭐</h2>
            <p>The service definitely saves time. Highly recommended.</p>
            <h3>David Morenas</h3>
            <p className="date">5 November 2023</p>
          </div>
        </div>

        <hr />
        <h2><b>Bootcamp Reviews</b></h2>
        <div className="bootcamp-review">
          <div className="bootcamp1">
            <img src="./src/assets/wethinkcode-logo.png" alt="wethinkcode" />
            <p>wethinkcode</p>
            <h3>⭐⭐⭐⭐⭐</h3>
            <h4><b>Jonathan Hugo</b></h4>
            <p>5 days ago</p>
            <p>WeThinkCode really is the epitome of success makers. I am very grateful for their programs.</p>
            <button>Learn more</button>
          </div>
          <div className="bootcamp2">
            <img src="./src/assets/codespaceLogo.jpg" alt="Codespace" />
            <p>Codespace Academy</p>
            <h3>⭐⭐⭐⭐⭐</h3>
            <h4><b>John Murray</b></h4>
            <p>5 days ago</p>
            <p>Codespace Academy taught me what happens on the other side of discipline and hard work. Codespace made me believe in my ability to be more than I ever believed I could be.</p>
            <button>Learn more</button>
          </div>
          <div className="bootcamp3">
            <img src="./src/assets/uwc_logo.png" alt="uwc" />
            <p>UWC</p>
            <h3>⭐⭐⭐⭐⭐</h3>
            <h4><b>Stewart Langley</b></h4>
            <p>7 days ago</p>
            <p>In spite of strike, staff still so helpful. Attending this university made me feel taken care of. I became more than I thought I could be.</p>
            <button>Learn more</button>
          </div>
        </div>

        <hr />
        <h1>Tell us what you think</h1>
        <h2>Our site</h2>
        <form>
          <div className="row">
            <div className="col-25">
              <label htmlFor="name">Name:</label>
            </div>
            <div className="col-75">
              <input type="text" id="name" name="name" className="review-input" required />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="jobtitle">Job Title (if applicable):</label>
            </div>
            <div className="col-75">
              <input type="text" id="jobtitle" name="jobtitle" className="review-input" required />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="role">Role:</label>
            </div>
            <div className="col-75">
              <select id="role" name="role" className="review-input">
                <option value="1">Student</option>
                <option value="2">Graduate</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="linkedin">LinkedIn URL:</label>
            </div>
            <div className="col-75">
              <input type="text" id="linkedin" name="linkedin" className="review-input" />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="rating">Rating:</label>
            </div>
            <div className="col-75">
              <select id="rating" name="rating" className="review-input">
                <option value="1">⭐ (very poor)</option>
                <option value="2">⭐⭐ (poor)</option>
                <option value="3">⭐⭐⭐ (average)</option>
                <option value="4">⭐⭐⭐⭐ (good)</option>
                <option value="5">⭐⭐⭐⭐⭐ (excellent)</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="review">Review:</label>
            </div>
            <div className="col-75">
              <textarea id="review" name="review" rows="4" cols="50" className="review-input" placeholder="Write your review here..."></textarea>
            </div>
          </div>
          <br />
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </main> {/* Closing main tag */}
    </div>
  );
}
