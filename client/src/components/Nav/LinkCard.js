import React from 'react'

export default function LinkCard(props) {
  
  const styles = {
    linkstyle: {
      fontSize: '2.5vh',
    
    }
  }
  return (
    <div className="card-body" style={{ paddingTop:'10px', paddingBottom:'10px', paddingLeft:5}}>
        <a href={props.linkAddress} className="card-link" style={styles.linkstyle}>{props.name}</a>
    </div>
  )
}
