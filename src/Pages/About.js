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
        <div className='aboutTitle'>Work Experiences</div>


<div className='workList'>
        
        <div className='workCardContainer'>

          <div className='workCaption'>
            I have been a Product Support Specialist for an LMS product since 2020
          </div>

          <div className='workCardImg'>
          <img src={lss} width={150} height={150} alt="workimage" className='abtImg'/>
          </div>

          <div className='workCardInfo'>
          This job has enhanced my knowledge of user experience and interfaces.
          </div>
        </div>  
       
        <div className='workCardContainer'>

        <div className='workCaption'>
        I was a Research and ICT SHS teacher from 2017 to 2020.
          </div>

          <div className='workCardImg'>
          <img src={educ} width={150} height={150} alt="workimage" className='abtImg'/>
          </div>

          <div className='workCardInfo'>
          This profession made me a better researcher and a more eager learner.
          </div>
        </div>


        


        <div className='workCardContainer'>

        <div className='workCaption'>
        I worked as a TSR and CSR in 2011 to 2017
          </div>

          <div className='workCardImg'>
          <img src={call} width={150} height={150} alt="workimage" className='abtImg' />
          </div>

          <div className='workCardInfo'>
          I gained knowledge in troubleshooting and communication.
          </div>
        </div>

  </div>




  <div className='aboutEduc'>

        <div className='aboutTitle'>Education</div>
      
      <div className='educList'>

        <div className='eduCardContainer'>
          <div className='eduCardImg' >
          <img src={goit} width={150} alt="bsit diploma"/>
          </div>

          <div className="eduCardInfo">
          <li>GoIT Philippines IT Bootcamp</li><p></p>
          <li>Full-Stack Web Development  </li><p></p>
          <li>October 2023 - October 2024</li><p></p>
          </div>
        </div>

        <div className='eduCardContainer'>
          <div className='eduCardImg' >
          <img src={cmu} width={150} alt="bsit diploma" />
          </div>
          <div className="eduCardInfo">
          <li>City of Malabon University</li><p></p>
          <li>B.S. in Information Technology</li><p></p>
          <li>June 2008 - April 2012</li><p></p>
          </div>
        </div>

        
        <div className='eduCardContainer'>
          <div className='eduCardImg' >
          <img src={pnu} width={150} alt="bsit diploma" className='abtImg'/>
          </div>
          <div className="eduCardInfo">
          <li>GoIT Philippines IT Bootcamp</li><p></p>
          <li>Full Stack Web Development  </li><p></p>
          <li>October 2023 - October 2024</li><p></p>
          </div>
        </div>

        <div className='eduCardContainer'>
          <div className='eduCardImg' >
          <img src={ntc} width={150} alt="bsit diploma" className='abtImg'/>
          </div>
          <div className="eduCardInfo">
          <li>GoIT Philippines IT Bootcamp</li><p></p>
          <li>Full Stack Web Development  </li><p></p>
          <li>October 2023 - October 2024</li><p></p>
          </div>
        </div>


</div>
      </div>

      
      
      
      
      </div>

    </div>
  );
};

export default About;
