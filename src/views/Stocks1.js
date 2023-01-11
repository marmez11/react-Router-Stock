import React from "react";
import { Link } from "react-router-dom";
import stocks_data from "../data";

const Stocks = (props) => {
    return (
        <div className="stock1">
            <div className="company_label"><h2>Company Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Change:</h2></div>
            <hr />
            {stocks_data.map((stock) => {
                const { symbol, name, lastPrice, change, open} = stock;
                return (<div className="company_data">
                        <h2><i><Link to={`/stocks/${symbol}`}>{name}&nbsp;({symbol})</Link></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        ${open}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${lastPrice} ({change.toFixed(2)}%)</h2>
                        <hr /></div>
                );
            })}
        </div>
    );
};

export default Stocks;