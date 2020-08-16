export const Lerp = ({ start, end, amount }) => {
    amount = amount < 0 ? 0 : amount
    amount = amount > 1 ? 1 : amount
    return start + ((end - start) * amount)
}