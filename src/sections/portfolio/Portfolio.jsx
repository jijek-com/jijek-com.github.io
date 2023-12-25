import {useState} from 'react';

import ProjectsCategories from './ProjectsCategories';
import Projects from './Projects';

import portfolio from '../../lib/portfolio';

import './Portfolio.scss';

const Portfolio = () => {
    const [projects, setProjects] = useState(portfolio);

    const categories = portfolio.map((item) => item.category);
    const uniqueCategories = ["All", ...new Set(categories)];
  
    const filterProjecstHandler = (category) => {
      if (category === "All") {
        setProjects(portfolio);
        return;
      }
  
      const filterProjects = portfolio.filter(
        (project) => project.category === category
      );
      setProjects(filterProjects);
    };

    return (
        <section id="portfolio">
            <h2>Портфолио</h2>

            <div className="container portfolio__container">
                <ProjectsCategories
                categories={uniqueCategories}
                onFilterProjects={filterProjecstHandler}
                />
                <Projects projects={projects} />
            </div>
        </section>
    );
}

export default Portfolio;