import { ReactElement } from 'react'
import styles from '../../css/common/ButtonGroup.module.css'
import { ButtonOptions } from '../../types/ButtonGroup.types'

interface Props {
	options: ButtonOptions[]
}
const ButtonGroup = ({ options }: Props): ReactElement => {
	return (
		<div className={styles.container}>
			{options.map((option, index) => (
				<button key={index} onClick={option.onClick} disabled={option.disabled}>
					{option.label}
				</button>
			))}
		</div>
	)
}

export default ButtonGroup
