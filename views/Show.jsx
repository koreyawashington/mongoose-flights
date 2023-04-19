const React = require('react')


function Show(props){
    const {Flight} = props
    console.log(Flight);
    return(
        <div>
            <h1>Scheduled Flights</h1>
            <h2>{Flight.airline}</h2>
            <h3>{Flight.flightNo}</h3>
            <h4>{Flight.departs}</h4>
            <h5>{Flight.timestamps}</h5>
            <br/>
            <a href='/flights'>Go Back Home</a>
        </div>
    )
}