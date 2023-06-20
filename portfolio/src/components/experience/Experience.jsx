import React from "react";
import "./experience.css";
import { MdVerified } from "react-icons/md";
import client from "../../api/axios";

const Experience = () => {
  const  [experienceData, setExperienceData] = React.useState([])

  React.useEffect(()=>{
    client.get("/experiences")
    .then((response)=>{
      const data = response.data
      setExperienceData(data);
    })
    .catch((error)=>{
      console.log("Experience Error: ",error)
    })
  },[])


  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        {
          experienceData.map((expi, index) => {
            return(
              <div className="experience_frontend">
                <h3>{expi.name}</h3> 
                <div className="experience__content">
                  {
                    expi.experience.map((skill, index)=>{
                      return (
                      
                          <article className="experience__details" key={index}>
                            <MdVerified className="experience__details__icon" />
                            <div>
                              <h4>{skill.skillName}</h4>
                              <small className="text-light">{skill.skillLevel}</small>
                            </div>
                          </article>
                        
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default Experience;
