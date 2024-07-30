// rafce
const App = () => {
  const name = 'John'
  const x = 10
  const y = 20
  const names = ['Brad', 'Mary', 'Joe', 'Sara']
  const loggedIn = true
  const styles = {
    color: 'red', 
    fontSize: '55px',
  }

  // we can't use class; we've to use className

  return ( //one rule we must remember is that we can return only a single element.
   <div>
     <div className='text-5xl'>App</div> 
     {/* <p style={{color: 'red', fontSize: '24px'}} >Hello {name}</p> */}
     <p style={styles} > Hello {name}</p>
     <p>The sum of {x} & {y} is {x+y}</p>
     <ul>
      {names.map((name, index)=>(
        <li key = {index} >{name}</li>
      ))}
     </ul>

     { loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1> }
   </div>
  )
}

// We can also do this
/*
const App = () => {
  return ( //one rule we must remember is that we can return only a single element.
   <>
     <div className='text-5xl'>App</div> 
     <p>Hello World</p>
   </>
  )
}
*/

export default App