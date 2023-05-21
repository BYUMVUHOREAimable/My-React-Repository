

const CounterComponent = () => {
    let data = [
        { names: "James Smith" },
        { names: "Joe Doe" },
        { names: "Adam Kenny" },
    ]
    let listItem = data.map(item => <li key={item.names} style={{ listStyleType: "none" }}> Good morning {item.names}</li >)
    return <div>
        <h1>Counter: <span style={{ color: "red" }}>1</span></h1>
        <h2>Greet people</h2>
        <ul>
            {listItem}
        </ul>
    </div>
}
export default CounterComponent