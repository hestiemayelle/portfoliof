import React from 'react'
import CV from '.././../assets/LETTRE2.pdf'
const CTA = () => {
return (
<div className='cta'>
<a href={CV} download className='btn'>Download CV</a>
<a href="#contact" className='btn btn-primary'>Let's discuss</a>
</div>
)
}
export default CTA //this line indicates that this component can be imported and used