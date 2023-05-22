import React from 'react'
import './services.css'
import ListServices from './listServices'


export const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <ListServices />
      </div>
    </section>
  );
}
export default Services;