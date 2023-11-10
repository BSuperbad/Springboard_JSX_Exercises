const App = () => (
    <div>
        <Person age={18} name="Jordanzia" hobbies={["drawing", "painting"]}/>
        <Person age = {12} name = "Frank" hobbies ={["playing"]}/>
        <Person age = {47} name = "Georgina" hobbies ={["working", "hiking", "working out", "road trips"]}/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))