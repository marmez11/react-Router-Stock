
export const priceLoader = async ({ params }) => {
    const symbol = params.symbol;
    const apiKey = "5faa93c18c5ed65b59b9bc5af76bc559";
    return (await fetch(
        `https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=${apiKey}`)).json();
    }
        
    