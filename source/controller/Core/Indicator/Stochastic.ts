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

// مثال للاستخدام
const closePrices = [44.34, 44.09, 44.15, 43.61, 44.33, 44.83, 45.10, 45.42, 45.84, 46.08, 45.89, 46.03, 45.61, 46.28, 46.28, 46.00, 46.03, 46.41, 46.22, 45.64];
const highPrices = [45.00, 44.50, 44.20, 44.00, 44.50, 45.50, 46.00, 46.50, 46.80, 47.00, 46.50, 47.00, 46.80, 47.10, 47.10, 46.90, 47.00, 47.20, 46.80, 46.50];
const lowPrices = [44.00, 43.50, 43.10, 42.90, 43.50, 44.00, 44.50, 45.00, 45.50, 46.00, 45.50, 45.80, 45.30, 46.00, 46.00, 45.80, 45.90, 46.10, 45.50, 45.00];

const stochasticResult = calculateStochastic(closePrices, highPrices, lowPrices);
console.log('Stochastic %K:', stochasticResult.K);
console.log('Stochastic %D:', stochasticResult.D);
