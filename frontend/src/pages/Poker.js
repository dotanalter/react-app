import React, {useState} from 'react'
import A from '../cards/A.png'
import cardback from '../cards/cardback.png'

function Poker() {
    const [show,setShow] = useState(false)
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front"> 
                    <img src={cardback}/>
                </div>
                <div className="flip-card-back">
                    <img src={A}/>
                </div>
            </div>
            {(show === false) ? <button>show</button> : <button>hide</button>}

        </div>
    )
}
export default Poker 