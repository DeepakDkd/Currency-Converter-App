import React, { useId } from "react";

function InputBox({
    label,
    amount,
    placehold,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false    ,
}) {
    const id = useId();

    return (
        <>
            <div className="container">

                <div>
                    <h3>{label}</h3>
                    <input type="number"
                        id="id"
                        placeholder={placehold}
                        disabled={amountDisabled}
                        value={amount}
                        autoFocus
                        onChange={
                            (e) => onAmountChange && onAmountChange(Number(e.target.value))
                        } />
                </div>
                <div>
                    <h3>Currency</h3>
                    <select name="" id="" value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}>
                        {
                            currencyOptions.map((currency) =>
                                <option key={currency}>{currency}</option>
                            )
                        }
                    </select>
                </div>

            </div>
        </>
    )
}
export default InputBox;