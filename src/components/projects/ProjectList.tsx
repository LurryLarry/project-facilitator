import { ReactElement } from 'react'
import ProjectCard from './ProjectCard'
import { Project, ProjectState } from '../../types/Project.types'
import styles from '../../css/projects/ProjectList.module.css'

interface Props {
	projects: Project[]
	selectedProjectIds: number[]
	selectedState: ProjectState | null
	onClick: (projectId: number, state: ProjectState) => void
}

const ProjectList = ({ projects, selectedProjectIds, selectedState, onClick }: Props): ReactElement => {
	return (
		<div className={styles.container}>
			{projects.map((project) => {
				const isSelected = selectedProjectIds.includes(project.id)
				const isSelectable = project.state !== 'Finished' && (selectedState === null || selectedState === project.state)

				return (
					<ProjectCard
						key={project.id}
						name={project.name}
						state={project.state}
						isSelected={isSelected}
						isSelectable={isSelectable}
						onClick={onClick}
						projectId={project.id}
					/>
				)
			})}
		</div>
	)
}

export default ProjectList
