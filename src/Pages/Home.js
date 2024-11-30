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
import qImg1 from '../images/Home/qImg1.jpg'
import qImg2 from '../images/Home/qImg2.jpg'
import qImg3 from '../images/Home/qImg3.jpg'



const Home = () => {
  return (
<div>

    <div className='homeWrapper'>

<div className='meImg'> <img src={me2} height={650} width={500} className='homeImg'/>
</div>


<div className='techandQuotes'>
<div className="techs">


<div className='intro'>Thank you for visiting my website portfolio. My name is Luis, I am aspiring to be Junior Web Developer. Feel free to browse my portfolio. I made it a bit interactive, kindly hover or click most elements if you're on mobile to learn more. Thank you!</div>

<ul className='tech-list'>


<li>
<div className="tech-item">
<img src={mongoDB} width={60} height={60} alt='mongoDB' className='techImg'/> 
</div>
</li>

<li>
<div className="tech-item">    
<img src={expressJS} width={60} height={60} alt='expressJS' className='techImg'/> 
</div>
</li>

<li>
<div className="tech-item">
<img src={reactJS} width={60} height={60} alt='reactJS' className='techImg'/> 
</div>
</li>

<li>
<div className="tech-item">
<img src={nodeJS} width={60} height={60} alt='nodeJS' className='techImg'/> 
</div>
</li>


<li>
<div className="tech-item">
<img src={js} width={60} height={60} alt='JS' className='techImg'/> 
</div>
</li>

<li>
<div className="tech-item">
<img src={csstyle} width={60} height={60} alt='CSS' className='techImg'/> 
</div>
</li>


<li>
<div className="tech-item">
<img src={html} width={60} height={60} alt='html' className='techImg'/> 
</div>
</li>
</ul>
  </div>
  
  <div className='quotes'>

<div className='quoteIntro'>
 My insights about programming: 
</div>
  
  <li className='quote'>
    <div className='qImgContainer'><img src={qImg1} width={50} className='qImg'/></div>
    <div className='qWords'>Continious practice and research are essential elements to be an efficient programmer.</div>
  </li>

  <li className='quote'>
  <div className='qImgContainer' ><img src={qImg2} width={50} className='qImg'/></div>
  <div className='qWords'>One of the important mindset to learn more is to always acknowledge that you know less.</div>
     </li>

  <li className='quote'>
  <div className='qImgContainer'><img src={qImg3} width={50} className='qImg'/></div>
  <div className='qWords'>Coding is not easy - but is very fulfilling.</div>
  </li>

</div>
</div>
  </div>
  </div>
  )
}

export default Home
