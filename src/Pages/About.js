import css from './CSS/About.css';
import lss from '../images/lss.jpg';
import educ from '../images/educ.jpg';
import call from '../images/call.jpg';
import goit from '../images/goit.jpg';
import pnu from '../images/pnu.jpg';
import ntc from '../images/ntc.jpg';
import cmu from '../images/cmu.jpg';
const About = () => {
  return (
    <div>

  

      <div className='aboutWork'>
        <div className='aboutTitle'>Work Experience</div>
<div className='workList'>
        
        <div className='workCardContainer'>
          <ul className='workCard' >
          <li> <img src={lss} width={200} height={150} alt="workimage" /></li>
          <li>Learning Solutions Specialist</li>
          <li>Rex Education</li>
          <li>June 2020 - Present</li>
          </ul>
          </div>
      


        
          <ul className='workCard'>
          <li><img src={educ} width={200} height={150} alt="workimage" /></li>
          <li>Senior High School Faculty</li>
          <li>AdU | PCCr | IS </li>
          <li>June 2017 - November 2022</li>
          </ul>
        


       
          <ul className='workCard'>
          <li><img src={call} width={150} height={150} alt="workimage" /></li>
          
          <li>Customer Service Representative</li>
          <li>Concentrix | Convergys Ph</li>
          <li>September 2011 - May 2017</li>
          </ul>
       

  </div>




  <div className='aboutEduc'>
        <div className='aboutTitle'>Education</div>
      
      <div className='educList'>
        
        <div className='eduCardContainer'>
          <ul className='educCard'>
          <li><img src={goit} width={200} alt="bsit diploma"/></li>
          <li>GoIT</li>
          <li>Fullstack</li>
          <li>Graduation Year</li>
          </ul>
        </div>

        <div className='educCard'>
          <ul>
          <li>GoIT</li>
          <li><img src={cmu} width={200} alt="bsit diploma"/></li>
          </ul>
          
          <ul>
          <li>Education Degree</li>
          <li>Graduation Year</li>
          </ul>
        </div>

        
        <div className='educCard'>
          <ul>
          <li>CMU</li>
          <li><img src={pnu}  width={200} alt="bsit diploma"/></li>
          </ul>
          
          <ul>
          <li>BSIT</li>
          <li>Graduation Year</li>
          </ul>
        </div>

        <div className='educCard'>
          <ul>
          <li>CMU</li>
          <li><img src={ntc} width={200} alt="bsit diploma"/></li>
          </ul>
          
          <ul>
          <li>BSIT</li>
          <li>Graduation Year</li>
          </ul>
        </div>


</div>
      </div>

      
      
      
      
      </div>

    </div>
  );
};

export default About;
