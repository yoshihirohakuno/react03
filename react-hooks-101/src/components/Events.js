import React from 'react' 
import Event from './Event'


const Events = ({state,dispatch}) => {
    return(
        <>
        <h4>Event一覧</h4>
        <table className="table table-hover">
        <thead>
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
            </tr>  
        </thead>
        <tbody>
            {state.map((event,index) => (<Event key={index} event={event} dispatch={dispatch}/>))}
        </tbody>  
        </table>
        </>
    )
}

export default Events