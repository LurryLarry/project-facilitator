export interface Project {
	id: number
	name: string
	state: ProjectState
}

export type ProjectState = 'Launched' | 'Finished' | 'Not started'
