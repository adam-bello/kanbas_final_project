function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];
    const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
    const evenNumbers = numberArray1.filter(a => a % 2 === 0);
    const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

    console.log('Filter function')
    console.log(numbersGreaterThan2)
    console.log(evenNumbers)
    console.log(oddNumbers)

    return(
        <div>
            <h4>Filter function</h4>
            numbersGreaterThan2 = { numbersGreaterThan2 } <br/>
            evenNumbers = { evenNumbers } <br/>
            oddNumbers = { oddNumbers }
        </div>
    )
}

export default FilterFunction