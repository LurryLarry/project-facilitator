import { ReactElement } from 'react'
import styles from '../../css/common/ButtonGroup.module.css'
import { ButtonOptions } from '../../types/ButtonGroup.types'

interface Props {
	actions: ButtonOptions[]
}
const ButtonGroup = ({ actions }: Props): ReactElement => {
	return (
		<div className={styles.container}>
			{actions.map((action, index) => (
				<button key={index} onClick={action.onClick} disabled={action.disabled}>
					{action.label}
				</button>
			))}
		</div>
	)
}

export default ButtonGroup
