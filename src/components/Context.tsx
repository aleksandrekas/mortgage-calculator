import { useState,createContext } from "react"

export const ResultsContext = createContext< any | null >(null)




export default function Context({children}:{children:React.ReactNode}){
    const [results,setResults] = useState({
        monthlyPay:0,
        totalPay:0,
        monthlyInterest:0,
        totalInterest:0,
        type:"repayment"
    })


    return(
        <ResultsContext.Provider value={{results,setResults}}>
            {children}
        </ResultsContext.Provider>
    )
}