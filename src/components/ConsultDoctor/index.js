import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const ConsultDoctor = () => (
  <div>
    <Header />
    <div className="consult-container">
      <div className="consult-card">
        <div>
          <h1> Dr. Adarsh </h1>
          <p>Anu Multi-speciality Hospitals, Vijayawada</p>
          <button type="button" className="button">
            {" "}
            Book an appointment
          </button>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-photo/portrait-male-doctor-gp-with-stethoscope-wearing-white-coat-standing-office_562859-2474.jpg"
            className="feature-image"
            alt="adarsh"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default ConsultDoctor;
