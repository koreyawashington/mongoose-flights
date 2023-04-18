const React = require("react");


function Index(props){
    const { flights } = props;

    
        return (
            <div>
                <nav>
                    <a href="/flights/new">Create a new flight</a>
                </nav>
    
                <h1>Flight Board</h1>
    
                <ul>
                    {
                        flights.map((flights, i) => {
                           return (
                            <li key={flights._id}>
                                <b>Airline:</b> {flights.airline} {' '}
                                <br />
                                <b>Flight Number:</b> {flights.flightNo} {' '}
                                <br />
                                <b>Date:</b> {new Date(Date(flights.departs)).toLocaleDateString()}
                                <br />
                            </li>
                           ) 
                        })
                    }
                </ul>
            </div>
        )
    }
    module.exports = Index
    

