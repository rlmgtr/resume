import css from './CSS/Portfolio.css'
import html from '../images/About/html.jpg'
import csstyle from '../images/About/csstyle.jpg'
import js from '../images/About/js.jpg'
import reactJS from '../images/About/reactJS.jpg'
import webStudio from '../images/Portfolio/webStudio.jpg'
import weaApp from '../images/Portfolio/weaApp.jpg'
import slimMom from '../images/Portfolio/slimMom.jpg'
import expTracker from '../images/Portfolio/expTracker.jpg'


const Porftolio = () => {
  return (
    <div className='portfolioStyle'>
      
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
<div className='projInfo'>This is the first html css project I makde blah blah blah</div>
</div>

<div className='projectCard'>
<div className='projNameAndTech' >
<li>WebStudio</li>
<ul className='techUsed'>
<li><img src={html} width={20} height={20} className='techUsedLi'/></li>
<li><img src={csstyle} width={20} height={20} className='techUsedLi'/> </li>
<li><img src={js} width={20} height={20} className='techUsedLi'/> </li>
</ul>
</div>
<div className='projectCardImg'>
<img src={weaApp}  className='projImg' width={360} height={210} alt="sample image"/> 

</div> 
<div className='projInfo'>This is the first html css project I makde blah blah blah</div>
</div>

<div className='projectCard'>
<div className='projNameAndTech' >
<li>WebStudio</li>
<ul className='techUsed'>
<li> <img src={html} width={20} height={20} className='techUsedLi'/></li>
<li> <img src={csstyle} width={20} height={20} className='techUsedLi'/> </li>
<li> <img src={reactJS} width={20} height={20} className='techUsedLi'/> </li>
</ul>
</div>
<div className='projectCardImg'>
<img src={expTracker}  className='projImg' width={360} height={210} alt="sample image"/> 

</div> 
<div className='projInfo'>This is the first html css project I makde blah blah blah</div>
</div>

<div className='projectCard'>
<div className='projNameAndTech' >
<li>WebStudio</li>
<ul className='techUsed'>
<li><img src={html} width={20} height={20} className='techUsedLi'/></li>
<li><img src={csstyle} width={20} height={20} className='techUsedLi'/> </li>
</ul>
</div>
<div className='projectCardImg'>
<img src={slimMom}  className='projImg' width={360} height={210} alt="sample image"/> 

</div> 
<div className='projInfo'>This is the first html css project I makde blah blah blah</div>
</div>


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
<div className='projInfo'>This is the first html css project I makde blah blah blah</div>
</div>



</div>  
</div>
  )
}

export default Porftolio
