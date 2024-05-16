export default function calculateSMA(prices: number[], period: number) {
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