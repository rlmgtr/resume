import css from './CSS/Home.css'
import mongoDB from '../images/About/mongoDB.jpg';
import expressJS from '../images/About/expressJS.jpg';
import reactJS from '../images/About/reactJS.jpg';
import nodeJS from '../images/About/nodeJS.jpg';
import js from '../images/About/js.jpg';
import csstyle from '../images/About/csstyle.jpg';
import html from '../images/About/html.jpg';
import sampleme from '../images/About/sampleme.jpg'




const Home = () => {
  return (
    <div className='homeWrapper'>




      <div>Hi! my name is Luis. You Junior Programmer.
      </div>



<div>
  <img src={sampleme} alt="me"/>
</div>


<div className="techs">


<ul className='tech-list'>


<li>
<div className="tech-item">
<img src={mongoDB} width={75} height={75} alt='mongoDB'/> 
</div>
</li>




<li>
<div className="tech-item">
    
<img src={expressJS} width={75} height={75} alt='expressJS'/> 
</div>
</li>

<li>
<div className="tech-item">
<img src={reactJS} width={75} height={75} alt='reactJS'/> 
</div>
</li>

<li>
<div className="tech-item">
<img src={nodeJS} width={75} height={75} alt='nodeJS'/> 
</div>
</li>


<li>
<div className="tech-item">
<img src={js} width={75} height={75} alt='JS'/> 
</div>
</li>

<li>
<div className="tech-item">
<img src={csstyle} width={75} height={75} alt='CSS'/> 
</div>
</li>


<li>
<div className="tech-item">
<img src={html} width={75} height={75} alt='html'/> 
</div>
</li>




</ul>




</div>









    </div>
  )
}

export default Home
