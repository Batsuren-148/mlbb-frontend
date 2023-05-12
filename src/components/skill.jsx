import React from "react";

function Skill({ skills }) {
    console.log(skills);
    return (
        <div>
            {skills.map((skill) => (
                <div key={skill.title}>
                    <h2>{skill.title}</h2>
                    <p>{skill.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default Skill;
