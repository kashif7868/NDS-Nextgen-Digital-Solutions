import { useNavigate } from "react-router-dom";
import "../assets/css/notfound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-wrapper">
      <div className="notfound-container">
        <div className="notfound-code">404</div>
        <div className="notfound-divider" />
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-desc">
          Yeh page exist nahi karta ya move ho gaya hai.
          <br />
          Ghar wapas chalte hain!
        </p>
        <button className="notfound-btn" onClick={() => navigate("/")}>
          ← Home Par Jao
        </button>
      </div>
    </div>
  );
};

export default NotFound;