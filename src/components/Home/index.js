import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Nurturing Elderly Lives, Every Day.</h1>
      </div>
      <div className="features-container">
        <h1 className="sub-heading">Our Services</h1>
        <div className="features-card left">
          <div>
            <h1> Elder Link Smart Watch </h1>
            <p>
              Introducing "Elder Link Vital Watch" – Your Companion for Healthy
              Aging with user-friendly interface and a range of advanced
              features such as health monitoring, SOS emergency assistance, and
              personalized support.
            </p>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-photo/appointment-businessman-getting-ready-appointment_259150-56988.jpg"
              className="feature-image"
              alt="smart-watch"
            />
          </div>
        </div>
        <div className="features-card right">
          <div>
            <img
              src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg"
              className="feature-image"
              alt="todo"
            />
          </div>
          <div>
            <h1> Todo Check </h1>
            <p>
              {" "}
              A Todo tracker Application where you can keep track of things!!
              Now you cannot miss your appointment with your doctor or forget
              your medication. Don't forget to save your tasks!!
            </p>
          </div>
        </div>
        <div className="features-card left">
          <div>
            <h1> Health Profile </h1>
            <p>
              Based on the data from our Smartwatch "Elder Link" we have
              prepared some customized suggestions to improve your health and
              fitness.
            </p>
          </div>

          <div>
            <img
              src="https://img.freepik.com/free-vector/abstract-healthcare-medical-vector-poster-design_1017-11952.jpg"
              className="feature-image"
              alt="health-profile"
            />
          </div>
        </div>
        <div className="features-card right">
          <div>
            <img
              src="https://img.freepik.com/free-vector/cartoon-meal-planner_52683-83666.jpg"
              className="feature-image"
              alt="diet-plan"
            />
          </div>
          <div>
            <h1> Weekly Diet Plan</h1>
            <p>
              {" "}
              After analyzing your health profile our doctors have created a
              weekly diet plan for the current month. Make sure to follow it to
              keep your health safe
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Home;
