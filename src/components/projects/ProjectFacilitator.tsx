import { ReactElement, useEffect, useState } from 'react'
import ProjectList from './ProjectList'
import { Project, ProjectState } from '../../types/Project.types'
import { ButtonOptions } from '../../types/ButtonGroup.types'
import ButtonGroup from '../common/ButtonGroup'
import styles from '../../css/projects/ProjectFacilitator.module.css'

const PROJECTS: Project[] = [
	{ id: 1, name: 'Travel to Mars', state: 'Launched' },
	{ id: 2, name: 'Launching satellite', state: 'Finished' },
	{ id: 3, name: 'Study: growing plants on Mars', state: 'Not started' },
	{ id: 4, name: 'Study: new human generation on Mars', state: 'Not started' },
]

const ProjectFacilitator = (): ReactElement => {
	const [projects, setProjects] = useState<Project[]>(PROJECTS)
	const [selectedProjectIds, setSelectedProjectIds] = useState<number[]>([])
	const [selectedState, setSelectedState] = useState<ProjectState | null>(null)

	const isLaunchAllowed = selectedProjectIds.length > 0 && selectedState !== 'Launched' && selectedState !== 'Finished'
	const isFinishAllowed = selectedProjectIds.length > 0 && selectedState === 'Launched'

	useEffect(() => {
		if (selectedProjectIds.length === 0) {
			setSelectedState(null)
		}
	}, [selectedProjectIds])

	const handleSelect = (projectId: number, state: ProjectState): void => {
		setSelectedState(state)
		setSelectedProjectIds((prevIds) => {
			if (prevIds.includes(projectId)) {
				return prevIds.filter((id) => id !== projectId)
			} else {
				return [...prevIds, projectId]
			}
		})
	}

	const handleLaunch = (): void => {
		setProjects((prevProjects) =>
			prevProjects.map((project) =>
				selectedProjectIds.includes(project.id) ? { ...project, state: 'Launched' } : project
			)
		)
		setSelectedProjectIds([])
		setSelectedState(null)
	}

	const handleFinish = (): void => {
		setProjects((prevProjects) =>
			prevProjects.map((project) =>
				selectedProjectIds.includes(project.id) ? { ...project, state: 'Finished' } : project
			)
		)
		setSelectedProjectIds([])
		setSelectedState(null)
	}

	const options: ButtonOptions[] = [
		{ label: 'Launch project', onClick: handleLaunch, disabled: !isLaunchAllowed },
		{ label: 'Finish project', onClick: handleFinish, disabled: !isFinishAllowed },
	]

	return (
		<div className={styles.container}>
			<ProjectList
				projects={projects}
				onClick={handleSelect}
				selectedProjectIds={selectedProjectIds}
				selectedState={selectedState}
			/>
			<ButtonGroup options={options} />
		</div>
	)
}

export default ProjectFacilitator
