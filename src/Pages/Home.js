import css from './CSS/Home.css'
import mongoDB from '../images/About/mongoDB.jpg';
import expressJS from '../images/About/expressJS.jpg';
import reactJS from '../images/About/reactJS.jpg';
import nodeJS from '../images/About/nodeJS.jpg';
import js from '../images/About/js.jpg';
import csstyle from '../images/About/csstyle.jpg';
import html from '../images/About/html.jpg';
import me from '../images/Home/me.png';
import me2 from '../images/Home/me2.png';

const homeBg = {
  
};


const Home = () => {
  return (
    <div className='homeWrapper' style={homeBg}>

<div className='meImg'> <img src={me2} height={800} width={600} /></div>



<div className="techs">


<ul className='tech-list'>


<li>
<div className="tech-item">
<img src={mongoDB} width={75} height={75} alt='mongoDB' className='techImg'/> 
</div>
</li>




<li>
<div className="tech-item">
    
<img src={expressJS} width={75} height={75} alt='expressJS' className='techImg'/> 
</div>
</li>

<li>
<div className="tech-item">
<img src={reactJS} width={75} height={75} alt='reactJS' className='techImg'/> 
</div>
</li>

<li>
<div className="tech-item">
<img src={nodeJS} width={75} height={75} alt='nodeJS' className='techImg'/> 
</div>
</li>


<li>
<div className="tech-item">
<img src={js} width={75} height={75} alt='JS' className='techImg'/> 
</div>
</li>

<li>
<div className="tech-item">
<img src={csstyle} width={75} height={75} alt='CSS' className='techImg'/> 
</div>
</li>


<li>
<div className="tech-item">
<img src={html} width={75} height={75} alt='html' className='techImg'/> 
</div>
</li>


</ul>




</div>









    </div>
  )
}

export default Home
