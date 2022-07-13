import './projectCard.scss'

const ProjectCard = ({
  projectLink,
  projectImg,
  projectDetails,
  projectTitle,
  github,
}) => {
  return (
    <section className="card">
      <h1>{projectTitle}</h1>
      <div className="card-details">
        <p>{projectDetails}</p>
        <a
          className="github-link"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          Github repository
        </a>
      </div>
      <a target="_blank" href={projectLink} rel="noreferrer">
        <img src={projectImg} alt={`${projectImg}`} />
      </a>
    </section>
  )
}

export default ProjectCard
