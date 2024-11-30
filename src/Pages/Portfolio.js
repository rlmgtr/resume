import css from './CSS/Portfolio.css'
import html from '../images/About/html.jpg'
import csstyle from '../images/About/csstyle.jpg'
import js from '../images/About/js.jpg'
import reactJS from '../images/About/reactJS.jpg'
import webStudio from '../images/Portfolio/webStudio.jpg'
import weaApp from '../images/Portfolio/weaApp.jpg'
import slimMom from '../images/Portfolio/slimMom.jpg'
import expTracker from '../images/Portfolio/expTracker.jpg'
import myPortf from '../images/Portfolio/myPortf.jpg'


const Porftolio = () => {
  return (
    <div className='portfolioStyle'>
      

<div className='portHeader'>PROJECTS</div>

    <div className='classProjects'>

<div className='projectCard'>
<div className='projNameAndTech' >
<li>WebStudio</li>
<ul className='techUsed'>
<li><img src={html} width={20} height={20} className='techUsedLi'/></li>
<li><img src={csstyle} width={20} height={20} className='techUsedLi'/> </li>
</ul>
</div>
<div className='projectCardImg'>
<img src={webStudio}  className='projImg' width={360} height={210} alt="sample image"/> 

</div> 
<div className='projInfo'>My first HTML & CSS project. Its responsive and simple. <a href="https://rlmgtr.github.io/goit-markup-hw-07/" target='_blank'>See Project</a></div>

</div>

<div className='projectCard'>
<div className='projNameAndTech' >
<li>Weather App</li>
<ul className='techUsed'>
<li><img src={html} width={20} height={20} className='techUsedLi'/></li>
<li><img src={csstyle} width={20} height={20} className='techUsedLi'/> </li>
<li><img src={js} width={20} height={20} className='techUsedLi'/> </li>
</ul>
</div>
<div className='projectCardImg'>
<img src={weaApp}  className='projImg' width={360} height={210} alt="sample image"/> 

</div> 
<div className='projInfo'>This is a group project. An application accessble to web browsers that let the users check current and 5-day weather forecast. <a href="https://rlmgtr.github.io/GoIT-JS-teamProject-WeatherAPP-Group3/" target="_blank" >See Project</a></div>

</div>

<div className='projectCard'>
<div className='projNameAndTech' >
<li>Expenses Tracker</li>
<ul className='techUsed'>
<li> <img src={html} width={20} height={20} className='techUsedLi'/></li>
<li> <img src={csstyle} width={20} height={20} className='techUsedLi'/> </li>
<li> <img src={reactJS} width={20} height={20} className='techUsedLi'/> </li>
</ul>
</div>
<div className='projectCardImg'>
<img src={expTracker}  className='projImg' width={360} height={210} alt="sample image"/> 

</div> 
<div className='projInfo'>A challenging proejct for me. This website allows the user to create an account monitor expenses. <a href="https://logarithms17.github.io/slim-mom-fullstack/calculator" target='_blank'>See Project</a></div>

</div>

<div className='projectCard'>
<div className='projNameAndTech' >
<li>Slim Mom</li>
<ul className='techUsed'>
<li><img src={html} width={20} height={20} className='techUsedLi'/></li>
<li><img src={csstyle} width={20} height={20} className='techUsedLi'/> </li>
</ul>
</div>
<div className='projectCardImg'>
<img src={slimMom}  className='projImg' width={360} height={210} alt="sample image"/> 

</div> 
<div className='projInfo'>This is another group project. A web-based app made especially for moms who wish to work out and monitor their diet and weight. <a href="https://logarithms17.github.io/slim-mom-fullstack/calculator" target="_blank">See Project</a></div>

</div>


<div className='projectCard'>
<div className='projNameAndTech' >
<li>rlcm.Tech</li>
<ul className='techUsed'>
<li><img src={html} width={20} height={20} className='techUsedLi'/></li>
<li><img src={csstyle} width={20} height={20} className='techUsedLi'/> </li>
<li> <img src={reactJS} width={20} height={20} className='techUsedLi'/> </li>
</ul>
</div>
<div className='projectCardImg'>
<img src={myPortf}  className='projImg' width={360} height={210} alt="sample image"/> 

</div> 
<div className='projInfo'>My Website Portfolio.</div>
</div>





</div>  
</div>
  )
}

export default Porftolio
