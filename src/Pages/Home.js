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





const Home = () => {
  return (
    <div className='homeWrapper'>

<div className='meImg'> <img src={me2} height={800} width={600} /></div>



<div className="techs">


<div className='intro'>Hey there! My name is Luis, and I'm an aspiring Junior Web Developer. Feel free to browse my portfolio. I made it a bit interactive, so enjoy hovering or clicking most elements if you're on mobile to learn more. Thank you!</div>

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

<div>
  When learning how to code,  aside from programming languages I also learned about the following: 
</div>

<div className='quotes'>
  
  <li className='quote'>
    <div className='qImg'>image here</div>
    <div className='qWords'>Continious practice and research are essential elements to be an efficient programmer</div>
    
  </li>

  <li className='quote'>
  <div className='qImg'>image here</div>
  <div className='qWords'>One of the important mindset to learn more is to always acknowledge that you know less</div>
     </li>

  <li className='quote'>
  <div className='qImg'>image here</div>
  <div className='qWords'>I realize that coding is never easy - But heck! It is really fulfilling</div>
  </li>

</div>


  </div>



  </div>
  )
}

export default Home
