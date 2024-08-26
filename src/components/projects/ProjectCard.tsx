import { ReactElement } from 'react'
import styles from '../../css/projects/ProjectCard.module.css'
import { ProjectState } from '../../types/Project.types'

interface Props {
	name: string
	state: ProjectState
	isSelectable: boolean
	isSelected: boolean
	projectId: number
	onClick: (projectId: number, state: ProjectState) => void
}

const ProjectCard = ({ name, state, isSelected, isSelectable, projectId, onClick }: Props): ReactElement => {
	const getStateClass = (): string => {
		switch (state) {
			case 'Launched':
				return styles.launched
			case 'Finished':
				return styles.finished
			case 'Not started':
				return styles.notStarted
			default:
				return ''
		}
	}

	const containerClassNames = [
		styles.container,
		!isSelectable ? styles.notSelectable : '',
		isSelected ? styles.selected : '',
		getStateClass(),
	].join(' ')

	return (
		<div className={containerClassNames} onClick={() => onClick(projectId, state)}>
			<div className={styles.name}>{name}</div>
			<div className={styles.state}>{state}</div>
		</div>
	)
}

export default ProjectCard
