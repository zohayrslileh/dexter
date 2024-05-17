export default function calculateStochastic(closes: number[], highs: number[], lows: number[], period = 14, smoothD = 3) {
    if (closes.length < period || highs.length < period || lows.length < period) {
        throw new Error("Not enough data points to calculate Stochastic");
    }

    let stochasticK = [];
    for (let i = 0; i <= closes.length - period; i++) {
        let currentClose = closes[i + period - 1];
        let highestHigh = Math.max(...highs.slice(i, i + period));
        let lowestLow = Math.min(...lows.slice(i, i + period));

        let k = ((currentClose - lowestLow) / (highestHigh - lowestLow)) * 100;
        stochasticK.push(k);
    }

    // حساب %D
    let stochasticD = calculateSMA(stochasticK, smoothD);

    return {
        K: stochasticK,
        D: stochasticD
    };
}

// حساب SMA للمساعدة في حساب %D
function calculateSMA(prices: number[], period: number) {
    let smaArray = [];
    for (let i = 0; i <= prices.length - period; i++) {
        let sum = 0;
        for (let j = i; j < i + period; j++) {
            sum += prices[j];
        }
        smaArray.push(sum / period);
    }
    return smaArray;
}
