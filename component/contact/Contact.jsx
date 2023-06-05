import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
import axios from "axios"

const Contact = () => {
const form = useRef();
const sendEmail = (e) => {
e.preventDefault();
emailjs.sendForm('service_tvzfuev', 'template_dynebi4', form.current,
'Go0mRprxhKQ8sohWJ')
e.target.reset()
.then(result => {
    // Do something with the result
    return anotherPromiseFunction(result);
  })
  .then(anotherResult => {
    // Do something with the anotherResult
    return yetAnotherPromiseFunction(anotherResult);
  })
  .then(yetAnotherResult => {
    // Do something with the yetAnotherResult
  })
  .catch(error => {
    // Handle the error here
    console.error(error);
  });
};
const submit= async(e)=>{
    e.preventDefault()
    setMsg('');
    setName('');
    setEmail('');
  
    try {
  
        await axios.post("http://localhost:3002/", {
          name,
          email,
          msg
        })
  
    }
    catch(e) {
      console.log(e)
    }
  
    openModalBtnn()
  }
return (
<section id="contact">
<h5>Get in touch</h5>
<h2>Contact me</h2>
<div className="container contact__container">
<div className="contact__options">
<article className='contact__option'>
<MdOutlineEmail className='contact__option__icon'/>
<h4>Email</h4>
<p>mayellematho@gmail.com</p>
<a href='mailto:mayellematho@gmail.com' target='_blank'>send a
message</a>
</article>
<article className='contact__option'>
<AiOutlineLinkedin className='contact__option__icon'/>
<h4>LinkedIn</h4>
<h5>Profile</h5>
<a href='https://www.linkedin.com/in/brown-djomo-844b96164/'
target='_blank'>Tape me on LinkedIn</a>
</article>
<article className='contact__option'>
<BsWhatsapp className='contact__option__icon'/>
<h4>Whatsapp</h4>
<p>+237671314556</p>
<a href='https://web.whatsapp.com/send?phone=+237671314556'
target='_blank'>Whatsapp me</a>
</article>
</div>
<form ref={form} onSubmit={sendEmail}>
<input type="text" name='name' placeholder='full name' required/>
<input type="email" name='email' placeholder='your email' required/>
<textarea name="message" id="message" cols="30" rows="10"
placeholder='your message' required></textarea>
<button type="submit" className='btn btn-primary'>send message</button>
</form>
</div>
</section>
)
}
export default Contact