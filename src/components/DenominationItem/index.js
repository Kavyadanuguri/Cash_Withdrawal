// Write your code here
import './index.css'

const DenominationItem = props => {
  const {itemDetails, minusValue} = props
  const {value} = itemDetails
  const onDecrement = () => {
    minusValue(value)
  }
  return (
    <div>
      <li className="list-container">
        <button onClick={onDecrement} type="button" className="button">
          {value}
        </button>
      </li>
    </div>
  )
}

export default DenominationItem
