import React, { useState } from 'react';

function ToDo () 
{
    const [ newTask, setNewTask ] = useState( '' );

    return (
        <>
            <form>
                <label htmlFor="task">New Task:</label>
                <input 
                    type="text" 
                    id="task" 
                    onChange={e => { setNewTask( e.target.value ) } } 
                    value={ newTask } 
                />
                <p>
                    <strong>Current Task Value:</strong>
                    <em> {newTask}</em>
                </p>
                <input type="submit" value="Add To-Do" />
            </form>
            <ul></ul>
        </>
    );
}

export default ToDo;