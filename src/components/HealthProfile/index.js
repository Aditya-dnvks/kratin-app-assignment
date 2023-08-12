import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const HealthProfile = () => (
  <div>
    <Header />
    <div className="profile-container">
      <h1 className="main-heading">
        {" "}
        Your Weekly Health Report as per Elder Link{" "}
      </h1>
      <p className="profile-description">
        {" "}
        After analyzing data from our Elder Link smartwatch below points are to
        be noted{" "}
      </p>
      <div className="features-container">
        <div className="features-card">
          <div>
            <h1> Heart Rate</h1>
            <p>
              Your Average Heart rate/ Pulse rate for last week is 85bpm. <br />
              Should Improve your Blood Pressure
            </p>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/red-medical-heartbeat-line-vector-heart-shape-graphic-health-charity-concept_53876-111265.jpg"
              className="feature-image"
              alt="heart-rate"
            />
          </div>
        </div>
        <div className="features-card">
          <div>
            <h1> Water Saturation </h1>
            <p>
              You drank 3liters of water/day on an average last week. You should
              focus on improving water consumption
            </p>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/bottle-water-concept-illustration_114360-2183.jpg"
              className="feature-image"
              alt="water"
            />
          </div>
        </div>
        <div className="features-card">
          <div>
            <h1> Sleep time</h1>
            <p>
              You slept for 8.5 hours/day on an average last week. Keep it up
            </p>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/flat-person-sleeping-bed-background_23-2148152504.jpg"
              className="feature-image"
              alt="sleep"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default HealthProfile;
