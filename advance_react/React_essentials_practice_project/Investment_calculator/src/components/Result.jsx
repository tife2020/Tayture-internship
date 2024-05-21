import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";


function Result({ inputValues }) {
  const annualData = calculateInvestmentResults(inputValues);


  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
      {}
        {annualData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(data.valueEndOfYear - (inputValues.initialInvestment + (data.annualInvestment*data.year)))}</td>
            <td>{formatter.format(inputValues.initialInvestment + (data.annualInvestment*data.year))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Result;
