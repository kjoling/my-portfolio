import Loader from 'react-loaders'
import './index.scss'
import { projectInfo } from '../../assets/projectInfo/projectInfo'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <>
      <div className="projects-page">
        {projectInfo.map((project, idx) => (
          <ProjectCard
            projectTitle={project.title}
            projectImg={project.img}
            projectDetails={project.details}
            projectLink={project.link} //edit links to actual project pages
            key={idx}
          />
        ))}
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default Projects
