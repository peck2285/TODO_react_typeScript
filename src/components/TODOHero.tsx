import React from "react";
import "./TODOHero.css";
import { TODOHeroProps } from "../models/Interface";

const TODOHero: React.FC<TODOHeroProps> = ({ totalTasks, completedTasks }) => {
  return (
    <section className="todohero_section">
      <div>
        <p>Task Done</p>
        <p>Keep it up</p>
      </div>
      <div>
        {totalTasks}/{completedTasks}
      </div>
    </section>
  );
};

export default TODOHero;
