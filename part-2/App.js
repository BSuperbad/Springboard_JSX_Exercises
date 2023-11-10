const App = () => (
    <div>
        <Tweet 
        username="FirstUser1"
        name="Tom"
        date="11-10-23"
        message = "yo, how's it going?!"
         />
        <Tweet 
        username="Tom2"
        name="TomTwo"
        date="11-10-23"
        message = "Too many Toms"
         />
        <Tweet 
        username="Tom3"
        name="Tommy"
        date="11-10-23"
        message = "Alright, my kinda people!"
         />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))