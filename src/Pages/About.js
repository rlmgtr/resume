import css from './CSS/About.css';
import lss from '../images/lss.jpg';
import educ from '../images/educ.jpg';
import call from '../images/call.jpg';

const About = () => {
  return (
    <div>

      <div className="aboutCard">
        Luis Magtira
      </div>

      <div className='aboutEduc'>
        <div className='aboutTitle'>Education</div>
      
      <div className='educList'>
        <div className='educCard'>
          <ul>
          <li>GoIT</li>
          <li><img drc="diploma.jpg" alt="bsit diploma"/></li>
          </ul>
          
          <ul>
          <li>Fullstack</li>
          <li>Graduation Year</li>
          </ul>
        </div>

        <div className='educCard'>
          <ul>
          <li>GoIT</li>
          <li><img drc="diploma.jpg" alt="bsit diploma"/></li>
          </ul>
          
          <ul>
          <li>Education Degree</li>
          <li>Graduation Year</li>
          </ul>
        </div>

        
        <div className='educCard'>
          <ul>
          <li>CMU</li>
          <li><img drc="diploma.jpg" alt="bsit diploma"/></li>
          </ul>
          
          <ul>
          <li>BSIT</li>
          <li>Graduation Year</li>
          </ul>
        </div>
</div>
      </div>


      <div className='aboutWork'>
        <div className='aboutTitle'>Work Experience</div>
<div className='workList'>
        
        <div className='workCard'>
          <ul>
          <li> <img src={lss} width={200} height={150} alt="workimage" /></li>
          </ul>

          <ul>
          <li>Learning Solutions Specialist</li>
          <li>Rex Education</li>
          <li>June 2020 - Present</li>
          </ul>
        </div>


        <div className='workCard'>
          <ul>
          <li><img src={educ} width={200} height={150} alt="workimage" /></li>
          </ul>

          <ul>
          <li>Senior High School Faculty</li>
          <li>AdU | PCCr | IS </li>
          <li>June 2017 - November 2022</li>
          </ul>
        </div>


        <div className='workCard'>
          <ul>
          <li><img src={call} width={150} height={150} alt="workimage" /></li>
          </ul>

          <ul>
          <li>Customer Service Representative</li>
          <li>Concentrix | Convergys Ph</li>
          <li>September 2011 - May 2017</li>
          </ul>
        </div>


       


        
  </div>
      
      
      
      
      
      </div>

    </div>
  );
};

export default About;
