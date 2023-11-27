import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/usecurrencyinfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState()
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState()

  const data = useCurrencyInfo(from)
  let options = Object.keys(data)

  function swap() {
    let tmp1 = from
    setFrom(to)
    setTo(tmp1)

    setAmount("")
    setConvertedAmount(0)

  }
  function convert() {
    setConvertedAmount(amount * data[to])
  }

  return (
    <>
      <h1>Currency converter using React JS</h1>
      <form action=""
        onSubmit={(e) => {
          (e.preventDefault())
          convert()
        }}>

        <InputBox label="From" amount={amount} placehold="Enter Amount" currencyOptions={options} onCurrencyChange={(currency) => setFrom(currency)} onAmountChange={(amount) => setAmount(amount)} selectedCurrency={from} />
        <button onClick={swap}>SWAP 🔃</button>

        <InputBox label="To" placehold="0" currencyOptions={options} amount={convertedAmount} onCurrencyChange={(currency) => setTo(currency)} selectedCurrency={to}  amountDisabled />

        <button type='submit'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </form >
    </>
  )
}

export default App
