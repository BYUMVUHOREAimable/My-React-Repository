let rIsBest = true
let bestFramework = <h2 style={{ color: "red" }}>Angular is the best</h2>
if (rIsBest) { bestFramework = <h2 style={{ color: "red" }}>React is the best</h2> }

const CheckingConditions = () => {

    return <div>
        {bestFramework}
    </div>
}
export default CheckingConditions