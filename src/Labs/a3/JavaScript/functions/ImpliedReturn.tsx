function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return (
        <div>
            <h4>Implied Return</h4>
            fourTimesFive = { fourTimesFive }<br />
            multiply(4, 5) = { multiply(4, 5) }<br />
        </div>
    )
}

export default ImpliedReturn;