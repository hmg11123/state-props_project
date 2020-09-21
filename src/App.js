import React from "react";
import coffee from "./image/coffee.jpg"
import Button from "./Button"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prodect: "해이즐넛",
      basket: [],
      amount: 0
    }
  }
  render() {
    return (
      <div className="App">

        <img src={coffee} />
        <div className="bottom-bar">
          <div className="buy_input">
            <Button name={`장바구니에 담기`} action={() => this._basket(0)} />
            <Button name={`사기`} action={this._buy} />
          </div>
          <div className="board">
            <ul>
              <li className="menu">메뉴</li>
              <li className="state">{this.state.basket}</li>
            </ul>
            <ul>
              <li className="amount">수량</li>
              <li className="state">{this.state.amount}개</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  _basket = async () => {
    const { basket, prodect, amount } = this.state;
    if (basket != prodect) {
      await this.setState({
        basket: prodect
      })
    }
    await this.setState((state) => {
      return { amount: this.state.amount + 1 }
    })

    alert("장바구니에 추가되었습니다")
  }

  _buy = () => {
    const { basket, prodect, amount } = this.state;
    if (0 < basket.length) {
      alert(`${prodect} ${amount}개 구매 되었습니다`)
      this.setState({
        basket: [],
        prodect: "해이즐넛",
        amount: 0
      })
    } else {
      alert("장바구니에 담은것이 없습니다")
    }
  }

}

export default App;