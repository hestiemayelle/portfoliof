import React, { useState, useEffect } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import axios from "axios";
import client from "../../../api/axios";

const ListExperiences = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client.get(
      "https://hestie-portfolio-backend.onrender.com/experiences"
    ).then((response)=>{
      setData(response.data);
    }).catch((err)=>{
      console.log("Experience error: ", err)
    });
    
  }, []);
  return data.map((skills) => {
    return (
      <div key={skills._id} className="experience__backend">
        <h3>{skills.name}</h3>
        {/* <h4 className="experience_description">{d.description}</h4> */}
        <div className="experience__content">
          {skills.experience.map((skill) => {
            return (
              <article key={skill._id} className="experience__details">
                <BsPatchCheckFill className="experience__details__icon" />
                <div className="title__level">
                  <h4>{skill.skillName}</h4>
                <small className="text-light">{skill.skillLevel}</small>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  });
};
export default ListExperiences;
