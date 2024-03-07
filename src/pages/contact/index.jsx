import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import phoneIcon from "../../assets/phone.png";
import mailIcon from "../../assets/mail.png";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="left" style={{ marginLeft: "35px", marginTop: "70px" }}>
        <span>Home</span> / <span>Contact</span>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap", marginLeft: "10px", marginTop: "50px" }}>
          <div style={{ width: "600px", height: "200px", backgroundColor: "#FFFFFF", marginLeft: "250px", marginRight: "50px", marginBottom: "250px", display: "flex", alignItems: "center", padding: "20px", position: "relative", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <img src={phoneIcon} alt="Phone Icon" style={{ width: "50px", height: "50px", position: "absolute", top: "10px", left: "10px" }} />
            <p style={{ position: "absolute", top: "25px", left: "70px", fontWeight: "bold" }}>Call To Us</p>
            <p style={{ position: "absolute", top: "70px", left: "30px" }}>We are available 24/7, 7 days a week.</p>
            <p style={{ position: "absolute", top: "100px", left: "30px" }}>Phone: +628080808880</p>
            <hr style={{ position: "absolute", top: "150px", left: "0", width: "100%", borderTop: "1px solid black" }} />
          </div>
          <div style={{ width: "600px", height: "200px", backgroundColor: "#FFFFFF", marginRight: "10px", marginBottom: "250px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", padding: "20px", position: "relative" }}>
            <img src={mailIcon} alt="Mail Icon" style={{ width: "50px", height: "50px", position: "absolute", top: "20px", left: "20px" }} />
            <div style={{ position: "absolute", top: "38px", left: "80px", fontWeight: "bold" }}>Write To Us</div>
            <div style={{ position: "absolute", top: "90px", left: "40px" }}>Emails: customer@exclusive.com</div>
            <hr style={{ position: "absolute", top: "150px", left: "0", width: "100%", borderTop: "1px solid black" }} />
        </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;