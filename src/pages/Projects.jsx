import ProjectCard from "../components/projectCard/ProjectCard"

import { projectsDB } from "../helpers/projectsDB"

const Projects = () => {

  return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

					{projectsDB.map((projectCard, index) => {
						return (
							<ProjectCard 
								key={projectCard.id} 
								title={projectCard.title} 
								img={projectCard.img}
                index={index}
							/>
                    	)
                  	})}

                </ul>
            </div>
        </main> 
  )
}

export default Projects
