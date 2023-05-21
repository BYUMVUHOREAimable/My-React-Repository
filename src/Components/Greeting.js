const Greeting = () => {
    let names = "RCA Devs"
    let myDiv = <div>We are learning React magics</div>
    return <div>
        <h1>Hello {names}, Good morning</h1>
        {myDiv}
    </div>
}
export default Greeting