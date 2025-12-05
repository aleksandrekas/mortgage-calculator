import "./results.css"


export default function Results(){

    return(
        <div className="resultsContainer">
            <h1>Your results</h1>
            <p>Your results are shown below based on the information you provided.To adjust the results,edit the form and click "calculate repayements" again</p>
            <div className="innerResultsContainer">
                <p>Your monthly repayments</p>
                <div className="monthly">£150000</div>
                <div className="total">
                    <p>Total you'll repay over the term</p>
                    <h3>£1523000</h3>
                </div>
            </div>
        </div>
    )
}