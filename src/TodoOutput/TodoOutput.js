import React from 'react';

const todoOutput = (props) => {
  const styles = {
    background: '#eee',
    margin: '0 auto',
    padding: '10px',
    textAlign: 'left',
    borderLeft: '3px solid #ddd',
    marginBottom: '5px',
    maxWidth: '350px'
  }
  return(
    <div className="todo-output">
      {
        props.item.map((itemVal) =>{
          return <p style={styles}> {itemVal} </p>
        })
      }
    </div>
  )
}

export default todoOutput;