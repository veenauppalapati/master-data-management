import React from 'react'

export default function LinkCard(props) {
  
  const styles = {
    linkstyle: {
      fontSize: '2.5vh',
    }
  }

  return (
    <div className="card-body" style={{marginBottom:10, backgroundColor:props.backgroundColor}}>
        <a href={props.linkAddress} className="card-link" style={styles.linkstyle } 
        onClick={props.activeTabBackgroundColor}>
        {props.name}</a>
    </div>
  )
}
