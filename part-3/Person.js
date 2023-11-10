const Person = (props) => {
    const maxLength = 6
    let vote;
    if(props.age >= 18){
        vote = "please go vote!"
    }
    else {
        vote = "you must be 18"
    }
    return (
        <div>
            <p>
                Learn some information about this person:
            </p>
            <ul>
                <li>Name: {(props.name).slice(0,maxLength)}</li>
                <li>Age: {props.age}</li>

            <ul>
                Hobbies: {props.hobbies.map(h=> (
                    <li>{h}</li>
                )
                )
}
            </ul>
            </ul>
            <h3>{vote}</h3>
        </div>
    )
}

// If the person’s name is longer than 8 characters, only display the first six characters of their name.

// Add a property called hobbies to your *Person* component that accepts an array of hobbies (an array of strings). Your Person component should list each one of these hobbies as an *li*.

// Add an *App* component that renders at least three copies of the *Person* component on the page.