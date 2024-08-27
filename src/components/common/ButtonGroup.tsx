import { ReactElement } from 'react'
import styles from '../../css/common/ButtonGroup.module.css'
import { ButtonOption } from '../../types/ButtonGroup.types'

interface Props {
	options: ButtonOption[]
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
