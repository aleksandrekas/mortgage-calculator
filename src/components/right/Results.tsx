import "./results.css"
import { ResultsContext } from "../Context"
import { useContext } from "react"


export default function Results(){

    const {results,setResults} = useContext(ResultsContext)


    function format(num:number){
        return new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP"}).format(num,)
    }

    return(
        <div className="resultsContainer">
            <h1>Your results</h1>
            <p>Your results are shown below based on the information you provided.To adjust the results,edit the form and click "calculate repayements" again</p>
            <div className="innerResultsContainer">
                <p>{`Your monthly ${results.type === 'repayment'? "repayments":"interest"}`}</p>
                <div className="monthly">{results.type === 'repayment'? format(results.monthlyPay) : format(results.monthlyInterest)}</div>
                <div className="total">
                    <p>{`Total ${results.type === 'repayment'? "":"interest"} you'll repay over the term`}</p>
                    <h3>{results.type === 'repayment'? format(results.totalPay) : format(results.totalInterest)}</h3>
                </div>
            </div>
        </div>
    )
}