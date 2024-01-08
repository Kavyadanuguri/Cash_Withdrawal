// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {response: 2000}

  minusValue = value => {
    this.setState(prevState => ({response: prevState.response - value}))
  }

  render() {
    const {response} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="container1">
          <div className="con1">
            <p className="p1">S</p>
            <h1 className="h1">Sarah Williams</h1>
          </div>
          <div className="con2">
            <p className="h2">Your Balance</p>
            <div className="con3">
              <p className="h3">{response}</p>
              <p className="p2">in Rupees</p>
            </div>
          </div>
          <div>
            <p className="h3">Withdraw</p>
            <p className="h2">CHOOSE SUM (IN RUPEES)</p>
            <ul className="flex-container">
              {denominationsList.map(each => (
                <DenominationItem
                  itemDetails={each}
                  key={each.id}
                  minusValue={this.minusValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
