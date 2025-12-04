import './calculator.css'
import { useState } from 'react';
type InputsType = {
    amount:string
    term:string
    rate:string
}

type ErrorsType = {
    amount:boolean
    term:boolean
    rate:boolean
}


export default function Calculator(){
    const [type,setType] = useState('repayment')
    const [inputs,setInputs] = useState<InputsType>({
        amount:'',
        term:'',
        rate:''
    })
    const [errors,setErrors] = useState<ErrorsType>({
        amount:false,
        term:false,
        rate:false
    })


    function setFocus(e:React.FocusEvent<HTMLInputElement>){
        const input = e.currentTarget;
        const inputName = input.name as keyof ErrorsType;
        const parent = input.closest(".inputContainer")
        const label = parent?.querySelector(".inputLabel");
        if(!errors[inputName]){
            parent?.classList.add('focused')
            label?.classList.add('focused')
        }
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
    
    function handleKeydown(e:React.KeyboardEvent<HTMLInputElement>){
        const currInput = e.currentTarget
        const inputKey = currInput.name as keyof ErrorsType
        if(errors[inputKey]){
            setErrors((prev)=>({
                ...prev,
                [inputKey]:false
            }))
        }
    }

    function handleKeyUp(e:React.KeyboardEvent<HTMLInputElement>){
        const currInput = e.currentTarget
        const inputKey = currInput.name as keyof ErrorsType
        const parent = currInput.closest(".inputContainer")
        const label = parent?.querySelector(".inputLabel");

        if(!errors[inputKey]){
            parent?.classList.add('focused')
            label?.classList.add('focused')
        }


    }


    function handleInputValues(input:keyof InputsType,e:React.ChangeEvent<HTMLInputElement>){
        const targetValue = e.target.value

        if(!isNaN(Number(targetValue)) || targetValue === ''){
            setInputs((prev)=>({
                ...prev,
                [input]:targetValue
            }))
        }
    }

    function clearInputs(){
        setInputs({
            amount:'',
            rate:'',
            term:''
        })
    }


    function calculate(){
        const updatedErr:ErrorsType = {...errors};
        
        (Object.keys(inputs) as (keyof ErrorsType)[]).forEach(key => {
            updatedErr[key] = inputs[key] === ''
        });

        setErrors(updatedErr);
    }

    return(
        <div className="calculator">
            <div className="headerDiv">
                <h3>Mortgage Calculator</h3>
                <button onClick={clearInputs} className="clearBtn">Clear All</button>
            </div>
            <div className="inputs">
                <div className="amount_child" id='amount'>
                    <label htmlFor="amount">Mortgage Amount</label>
                    <div className={errors.amount? 'inputContainer error' : 'inputContainer'}>
                        <div  className={errors.amount? 'inputLabel error' : 'inputLabel'}>£</div>
                        <input 
                        onKeyDown={(e)=>{handleKeydown(e)}}
                        onKeyUp={(e)=>{handleKeyUp(e)}}
                        onFocus={(e)=>{setFocus(e)}} 
                        onBlur={(e)=>{loseFocus(e)}}
                        onChange={(e)=>{handleInputValues('amount',e)}}
                        value={inputs.amount} 
                        type="text" name="amount" />
                    </div>
                    <p style={{visibility:errors.amount? 'visible' : 'hidden' }} className="errortext">This field is required</p>
                </div>
                <div className="amount_child" id='term'>
                    <label htmlFor="term">Mortgage Term</label>
                    <div className={errors.term? 'inputContainer error' : 'inputContainer'}>
                        <input 
                        onKeyDown={(e)=>{handleKeydown(e)}}
                        onKeyUp={(e)=>{handleKeyUp(e)}}
                        onFocus={(e)=>{setFocus(e)}} 
                        onBlur={(e)=>{loseFocus(e)}} 
                        onChange={(e)=>{handleInputValues('term',e)}}
                        value={inputs.term} 
                        type="text" name="term" />
                        <div className={errors.term? 'inputLabel error' : 'inputLabel'}>years</div>
                    </div>
                    <p style={{visibility:errors.term? 'visible' : 'hidden' }} className="errortext">This field is required</p>
                </div>
                <div className="amount_child" id='rate'>
                    <label htmlFor="rate">Interest Rate</label>
                    <div className={errors.rate? 'inputContainer error' : 'inputContainer'}>
                        <input 
                        onKeyDown={(e)=>{handleKeydown(e)}}
                        onKeyUp={(e)=>{handleKeyUp(e)}}
                        onFocus={(e)=>{setFocus(e)}} 
                        onBlur={(e)=>{loseFocus(e)}} 
                        onChange={(e)=>{handleInputValues('rate',e)}}
                        value={inputs.rate} 
                        type="text" name="rate" />
                        <div className={errors.rate? 'inputLabel error' : 'inputLabel'}>%</div>
                    </div>
                    <p style={{visibility:errors.rate? 'visible' : 'hidden' }} className="errortext">This field is required</p>
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
            <button onClick={calculate} className="calculate">
                <img src="src\assets\images\icon-calculator.svg" alt="calculator" />
                Calculate Repayments
            </button>
        </div>
    )
}