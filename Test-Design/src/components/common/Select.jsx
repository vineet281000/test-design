import downArrowIcon from '../../assets/down-arrow.svg'
import '../../styles/common.css'

function Select (props) {
    const {value} = props
    return(
        <>
            <select className="select">
                <option>{value}</option>
            </select>
            <span className='down-icon'>
                <img src={downArrowIcon} />
            </span>
        </>
    )
}

export default Select