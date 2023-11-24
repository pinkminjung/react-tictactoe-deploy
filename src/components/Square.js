import React from "react"
import './Square.css'

// export default class Square extends Component {
    // State를 공유하기 위해 부모 컴포넌트로 이동 (부모 컴포넌트에서 보관)
    // constructor(props) {
    //     super(props); // super를 사용해야 this를 사용할 수 있음
    //     this.state = { // constructor에서 어떤 것일 기억하기 위해서는 state를 사용
    //         value: null
    //     }
    // }
const Square = ({onClick, value}) => {
    return (
        <button className="square" onClick = {onClick}>
            {value}
        </button>
    )
}

export default Square