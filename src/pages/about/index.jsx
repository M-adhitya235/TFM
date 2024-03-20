import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import profile1 from '../../assets/adit.jpg';
import profile2 from '../../assets/andin.jpg';
import profile3 from '../../assets/raihan.png';
import profile4 from '../../assets/cynthia.jpg';
import profile5 from '../../assets/manahati.jpg';
import profile6 from '../../assets/yossi.jpg';

function About() {
    const [showProfiles, setShowProfiles] = React.useState(false);
  
    const toggleProfiles = () => {
      setShowProfiles(!showProfiles);
    };
  
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center flex-wrap mt-8">
          <div className="grid grid-cols-3 gap-4">
            {showProfiles && (
              <>
                <ProfileBox 
                  image={profile1} 
                  name="Muhammad Adhitya" 
                  jobdest="Developer"
                  linkedin="https://www.linkedin.com/in/adhitya"
                  instagram="https://www.instagram.com/m._.adhitya"
                  whatsapp="+6285246958010"
                />
                <ProfileBox 
                  image={profile2} 
                  name="Adinia Amaliah" 
                  jobdest="Designer"
                  linkedin="https://www.linkedin.com/in/andin"
                  instagram="https://www.instagram.com/adiniaamaliah"
                  whatsapp="+6285705426811"
                />
                <ProfileBox 
                  image={profile3} 
                  name="Raihan Ramadhani" 
                  jobdest="Designer"
                  linkedin="https://www.linkedin.com/in/raihan"
                  instagram="https://www.instagram.com/raihan1r_"
                  whatsapp="+6281237493533"
                /><ProfileBox 
                  image={profile4} 
                  name="Cynthia Putri Siregar" 
                  jobdest="Designer"
                  linkedin="https://www.linkedin.com/in/cynthia"
                  instagram="https://www.instagram.com/cynthiaps._"
                  whatsapp="+6281325946952"
                />
                <ProfileBox 
                  image={profile5} 
                  name="Manahati Lombu" 
                  jobdest="Designer"
                  linkedin="https://www.linkedin.com/in/manahati"
                  instagram="https://www.instagram.com/manahati_lombu"
                  whatsapp="+6282364402436"
                />
                <ProfileBox 
                  image={profile6} 
                  name="Yossi Ezra Afriani" 
                  jobdest="Designer"
                  linkedin="https://www.linkedin.com/in/yossi-ezra-afriani-880865277"
                  instagram="https://www.instagram.com/ysszr_"
                  whatsapp="+6282358773432"
                />
              </>
            )}
          </div>
        </div>
        <Footer />
        <button onClick={toggleProfiles}>Toggle Profiles</button>
      </>
    );
  }
  

export default About;