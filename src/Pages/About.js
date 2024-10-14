import css from './CSS/About.css';

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
        <div className='aboutTitle'>Work Exp</div>
<div className='workList'>
        
        <div className='workCard'>
          <ul>
          <li><img src="work.jpg" alt="workimage"/></li>
          </ul>

          <ul>
          <li>LSS</li>
          <li>Company</li>
          <li>Work year</li>
          </ul>
        </div>


        <div className='workCard'>
          <ul>
          <li><img src="work.jpg" alt="workimage"/></li>
          </ul>

          <ul>
          <li>Faculty</li>
          <li>Company</li>
          <li>Work year</li>
          </ul>
        </div>


        <div className='workCard'>
          <ul>
          <li><img src="work.jpg" alt="workimage"/></li>
          </ul>

          <ul>
          <li>CSR</li>
          <li>Company</li>
          <li>Work year</li>
          </ul>
        </div>


       


        
  </div>
      
      
      
      
      
      </div>

    </div>
  );
};

export default About;
