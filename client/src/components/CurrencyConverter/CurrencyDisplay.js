import React from "react";
import './style.css';

function CurrencyDisplay(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;
  return (
    <div>
      <select className="selector_spreader" value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <hr/>
      <p className="subtitle" onChange={onChangeAmount}>{amount}</p>
    </div>
  );
}

export default CurrencyDisplay;
