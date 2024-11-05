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
          <div className='workCardImg'>
          <img src={educ} width={180} height={180} alt="workimage" />
          </div>

          <div className='workCardInfo'>
          <li>Customer Service Representative</li>
          <li>Concentrix | Convergys Ph</li>
          <li>September 2011 - May 2017</li>
          </div>
        </div>  
       
        <div className='workCardContainer'>
          <div className='workCardImg'>
          <img src={lss} width={180} height={180} alt="workimage" />
          </div>

          <div className='workCardInfo'>
          <li>Customer Service Representative</li>
          <li>Concentrix | Convergys Ph</li>
          <li>September 2011 - May 2017</li>
          </div>
        </div>


        <div className='workCardContainer'>
          <div className='workCardImg'>
          <img src={call} width={180} height={180} alt="workimage" />
          </div>

          <div className='workCardInfo'>
          <li>Customer Service Representative</li>
          <li>Concentrix | Convergys Ph</li>
          <li>September 2011 - May 2017</li>
          </div>
        </div>

  </div>




  <div className='aboutEduc'>

        <div className='aboutTitle'>Education</div>
      
      <div className='educList'>

        <div className='eduCardContainer'>
          <div className='eduCardImg' >
          <img src={goit} width={180} alt="bsit diploma"/>
          </div>

          <div className="eduCardInfo">
          <li>GoIT Philippines IT Bootcamp</li><p></p>
          <li>Full-Stack Web Development  </li><p></p>
          <li>October 2023 - October 2024</li><p></p>
          </div>
        </div>

        <div className='eduCardContainer'>
          <div className='eduCardImg' >
          <img src={cmu} width={180} alt="bsit diploma"/>
          </div>
          <div className="eduCardInfo">
          <li>City of Malabon University</li><p></p>
          <li>B.S. in Information Technology</li><p></p>
          <li>June 2008 - April 2012</li><p></p>
          </div>
        </div>

        
        <div className='eduCardContainer'>
          <div className='eduCardImg' >
          <img src={pnu} width={180} alt="bsit diploma"/>
          </div>
          <div className="eduCardInfo">
          <li>GoIT Philippines IT Bootcamp</li><p></p>
          <li>Full Stack Web Development  </li><p></p>
          <li>October 2023 - October 2024</li><p></p>
          </div>
        </div>

        <div className='eduCardContainer'>
          <div className='eduCardImg' >
          <img src={ntc} width={180} alt="bsit diploma"/>
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
