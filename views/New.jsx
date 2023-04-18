const React = require('react')

function New() {
    return (
        <div>
            <h1>Create New Flight</h1>

            <form action="/flights" method="POST">
                Airline: <input type="text" name="airline" />
                <br />

                Flight Number: <input type="number" name="flightNo"/>
                <br />

                Departs: <input type="datetime-local" name="departs" />
                <br />
                <br />

                <input type="submit" name="" value="Create New Flight" />
            </form>
        </div>
    )
}

module.exports = New;
