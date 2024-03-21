import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import phoneIcon from "../../assets/phone.png";
import mailIcon from "../../assets/mail.png";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar isDashboard={true} isLoggedIn={true} />
      <div className="flex justify-start mt-20 ml-8">
        <span className="mx-1">Home</span>
        <span className="mx-1">/</span>
        <span className="mx-1">Contact</span>
      </div>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
          <div className="contact-box p-6 bg-white shadow-md">
            <img src={phoneIcon} alt="Phone Icon" className="w-12 h-12 mb-4" />
            <p className="font-bold mb-2">Call To Us</p>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +62 888 333 445</p>
            <hr className="my-4" />
          </div>
          <div className="contact-box p-6 bg-white shadow-md">
            <img src={mailIcon} alt="Mail Icon" className="w-12 h-12 mb-4" />
            <p className="font-bold mb-2">Write To Us</p>
            <p>Email: customer@exclusive.com</p>
            <hr className="my-4" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
