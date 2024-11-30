import css from './CSS/About.css';
import lss from '../images/About/lss.jpg'
import educ from '../images/About/educ.jpg';
import call from '../images/About/call.jpg';
import goit from '../images/About/goit.jpg';
import pnu from '../images/About/pnu.jpg';
import ntc from '../images/About/ntc.jpg';
import cmu from '../images/About/cmu.jpg';
const About = () => {




  return (
    <div className='aboutWrapper'>



  

      <div className='aboutWork'>
        <div className='aboutTitle'>WORK EXPERIENCES</div>


<div className='workList'>
        
        <div className='workCardContainer'>

          <div className='workCaption'>
            <li>EdTech Specialist</li>
            <li>2020 - Present</li>
          </div>

          <div className='workCardImg'>
          <img src={lss} width={180} height={180} alt="workimage" className='abtImg'/>
          </div>

          <div className='workCardInfo'>
          <li>Sales</li>
          <li>Training</li>
          <li>Data Analytics</li>
          
          </div>
        </div>  





       
        <div className='workCardContainer'>

        <div className='workCaption'>
        <li>Senior HS Teacher</li>
            <li>2017 - 2020</li>
          </div>

          <div className='workCardImg'>
          <img src={educ} width={180} height={180} alt="workimage" className='abtImg'/>
          </div>

          <div className='workCardInfo'>
          <li>ICT</li>
          <li>Research</li>
          <li>Social Sciences</li>
          </div>
        </div>


        


        <div className='workCardContainer'>

        <div className='workCaption'>
        <li>Call Center Agent</li>
            <li>2011 - 20217</li>
          </div>

          <div className='workCardImg'>
          <img src={call} width={180} height={180} alt="workimage" className='abtImg' />
          </div>

          <div className='workCardInfo'>
        <li>Customer Support</li>
        <li>Technical Support</li>
        <li>New Hire Mentor</li>
          </div>
        </div>

  </div>




  <div className='aboutEduc'>

        <div className='aboutTitle'>EDUCATION</div>
      
      <div className='educList'>

        <div className='eduCardContainer'>
          <div className='eduCardImg' >
          <img src={goit} width={190} alt="bsit diploma" className='abtImg'/>
          </div>

          <div className="eduCardInfo">
          <li>GoIT Philippines IT Bootcamp</li><p></p>
          <li>Full-Stack Web Development  </li><p></p>
          <li>October 2023 - October 2024</li><p></p>
          </div>
        </div>

        <div className='eduCardContainer'>
          <div className='eduCardImg' >
          <img src={cmu} width={190} alt="bsit diploma" className='abtImg' />
          </div>
          <div className="eduCardInfo">
          <li>City of Malabon University</li><p></p>
          <li>B.S. in Information Technology</li><p></p>
          <li>June 2008 - April 2012</li><p></p>
          </div>
        </div>

        
        <div className='eduCardContainer'>
          <div className='eduCardImg' >
          <img src={pnu} width={190} alt="bsit diploma" className='abtImg'/>
          </div>
          <div className="eduCardInfo">
          <li>Philippine Normal University</li><p></p>
          <li>MA in Educational Management  </li><p></p>
          <li>December 2017 - June 2021</li><p></p>
          </div>
        </div>

        <div className='eduCardContainer'>
          <div className='eduCardImg' >
          <img src={ntc} width={190} alt="bsit diploma" className='abtImg'/>
          </div>
          <div className="eduCardInfo">
          <li>National Teachers College</li><p></p>
          <li>Education Certification Program  </li><p></p>
          <li>June 2016 - April 2017</li><p></p>
          </div>
        </div>


</div>
      </div>

      
      
      
      
      </div>

    </div>
  );
};

export default About;
