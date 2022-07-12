import { useState } from 'react'
import './projectCard.scss'

const ProjectCard = ({
  projectLink,
  projectImg,
  projectDetails,
  projectTitle,
}) => {
  const [viewMore, toggleViewMore] = useState(false)

  return (
    <section className="card">
      <h1>{projectTitle}</h1>
      <a target="_blank" href={projectLink} rel="noreferrer">
        <img src={projectImg} alt={`${projectImg}`} />
      </a>
      <div className="card-details">
        <button
          className="flat-button"
          onClick={() => toggleViewMore(!viewMore)}
        >
          {!viewMore ? 'View Details' : 'Hide Details'}
        </button>
        {viewMore && <p className="show-card-details">{projectDetails}</p>}
      </div>
    </section>
  )
}

export default ProjectCard
