import React, { useState, useEffect } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import axios from "axios";

const ListExperiences = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getExperiences();
  }, []);

  const getExperiences = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/experience/experiences"
    );
    setData(response.data.experience);
  };
  return data.map((d) => {
    return (
      <div key={d._id} className="experience__backend">
        <h3>{d.title}</h3>
        <h4 className="experience_description">{d.description}</h4>
        <div className="experience__content">
          {d.skills.map((s) => {
            return (
              <article key={s._id} className="experience__details">
                <BsPatchCheckFill className="experience__details__icon" />
                <div className="title__level">
                  <h4>{s.name}</h4>
                <small className="text-light">{s.level}</small>
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
