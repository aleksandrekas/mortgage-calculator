import './calculator.css'
import { useState } from 'react';


export default function Calculator(){
    const [type,setType] = useState('')



    function setFocus(e:React.FocusEvent<HTMLInputElement>){
        const input = e.currentTarget;
        const parent = input.closest(".inputContainer")
        const label = parent?.querySelector(".inputLabel");

        parent?.classList.add('focused')
        label?.classList.add('focused')
    }
    function loseFocus(e:React.FocusEvent<HTMLInputElement>){
        const input = e.currentTarget;
        const parent = input.closest(".inputContainer")
        const label = parent?.querySelector(".inputLabel");

        parent?.classList.remove('focused')
        label?.classList.remove('focused')
    }


    function selectType(type:string){
        setType(type)
    }


    return(
        <div className="calculator">
            <div className="headerDiv">
                <h3>Mortgage Calculator</h3>
                <button className="clearBtn">Clear All</button>
            </div>
            <div className="inputs">
                <div className="amount_child" id='amount'>
                    <label htmlFor="amount">Mortgage Amount</label>
                    <div className="inputContainer">
                        <div className="inputLabel">£</div>
                        <input onFocus={(e)=>{setFocus(e)}} onBlur={(e)=>{loseFocus(e)}} type="text" name="amount" />
                    </div>
                    <p className="error">This field is required</p>
                </div>
                <div className="amount_child" id='term'>
                    <label htmlFor="amount">Mortgage Term</label>
                    <div className="inputContainer">
                        <input onFocus={(e)=>{setFocus(e)}} onBlur={(e)=>{loseFocus(e)}} type="text" name="amount" />
                        <div className="inputLabel">years</div>
                    </div>
                    <p className="error">This field is required</p>
                </div>
                <div className="amount_child" id='rate'>
                    <label htmlFor="amount">Interest Rate</label>
                    <div className="inputContainer">
                        <input onFocus={(e)=>{setFocus(e)}} onBlur={(e)=>{loseFocus(e)}} type="text" name="amount" />
                        <div className="inputLabel">%</div>
                    </div>
                    <p className="error">This field is required</p>
                </div>
            </div>
            <div className="typeBtns">
                <label>Mortgage Type</label>
                <div onClick={()=>{selectType('repayment')}} className={type === 'repayment'?'repayment selected' : 'repayment'}>
                    <div  className={type === 'repayment'?'circle activated' : 'circle'}>
                        <div className="innerCircle"></div>
                    </div>
                    Repayment
                </div>
                <div onClick={()=>{selectType('interest')}} className={type === 'interest'?'interest selected' : 'interest'}>
                    <div className={type === 'interest'?'circle activated' : 'circle'}>
                        <div className="innerCircle"></div>
                    </div>
                    Interest Only
                </div>
            </div>
            <button className="calculate">
                <img src="src\assets\images\icon-calculator.svg" alt="calculator" />
                Calculate Repayments
            </button>
        </div>
    )
}