import { Icon } from '@iconify/react';
import '../../styles/common.css'

function Select (props) {
    const {value} = props
    return(
        <>
            <select className="select">
                <option>{value}</option>
            </select>
            <span className='down-icon'>
            <Icon icon="bx:chevron-down" width={36} opacity={0.32} />
            </span>
        </>
    )
}

export default Select