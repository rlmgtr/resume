import css from './CSS/Contact.css'

const Contact = () => {
  return (
<div>


   <div className="contactIntro">
      Hello, I am seeking for employment as a Junior or assistant Junior Web Developer. I hope you will provide me an oppurtunity to contribute and grow at the same time in programming industry. 

      Should you have further question you can send me a message
    </div>

    <div className='contactInfo'>


    <div className='contactItems'>
  <div className='contactchan'>Email</div>
  <div className='contactDet'>
    <a href='mailto:sirluismagtira@gmail.com'>sirluismagtira@gmail.com</a>
  </div>
</div>


  <div className='contactItems'>
    <div className='contactchan'>Phone</div>
    <div className='contactDet'> <a href="callto:+1234567890">Call or SMS me +63 905 780 2975 </a>
    </div>
  </div>

  <div className='contactItems'>
  <div className='contactchan'>LinkedIn Account</div>
  <div className='contactDet'>
    <a href="https://www.linkedin.com/in/rlmagtira" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/rlmagtira</a>
  </div>
</div>


<div className='please'>
contact me, please?
</div>
  
</div>






















    </div>
  )
}

export default Contact
