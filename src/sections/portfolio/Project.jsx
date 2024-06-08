import Card from '../../components/card/Card';

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img loading="lazy" height="180" src={project.image} alt={project.title} />
      </div>
      <p className="portfolio__title">{project.title}</p>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        <a
          href={project.demo}
          className="btn sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>

        {project.isShowGitBtn ??
         <a
          href={project.github}
          className="btn sm primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>}

      </div>
    </Card>
  );
};

export default Project;