export default function calculateRSI(closes: number[], period: number = 14) {
    if (closes.length < period) {
        throw new Error("Not enough data points to calculate RSI");
    }

    let gains = [];
    let losses = [];

    // حساب الأرباح والخسائر اليومية
    for (let i = 1; i < closes.length; i++) {
        let difference = closes[i] - closes[i - 1];
        if (difference >= 0) {
            gains.push(difference);
            losses.push(0);
        } else {
            gains.push(0);
            losses.push(Math.abs(difference));
        }
    }

    // حساب المتوسط الأولي للأرباح والخسائر لفترة الـ 14 يوم
    let averageGain = gains.slice(0, period).reduce((a, b) => a + b, 0) / period;
    let averageLoss = losses.slice(0, period).reduce((a, b) => a + b, 0) / period;

    let rs = averageGain / averageLoss;
    let rsi = 100 - (100 / (1 + rs));

    let rsiArray = [rsi];

    // تحديث المتوسط المتحرك للأرباح والخسائر
    for (let i = period; i < gains.length; i++) {
        averageGain = ((averageGain * (period - 1)) + gains[i]) / period;
        averageLoss = ((averageLoss * (period - 1)) + losses[i]) / period;

        // تجنب القسمة على الصفر
        if (averageLoss === 0) {
            rsi = 100;
        } else {
            rs = averageGain / averageLoss;
            rsi = 100 - (100 / (1 + rs));
        }

        rsiArray.push(rsi);
    }

    return rsiArray;
}