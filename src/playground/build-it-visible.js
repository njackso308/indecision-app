let visibility = false

const toggleVisibility = () => {
  visibility = !visibility
  render()
}

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  )

  ReactDOM.render(jsx, document.getElementById('app'))
}

render()

// const appRoot = document.getElementById('app')

// let buttonText = 'Show details'
// let hide = true

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onShowDetails}>{buttonText}</button>
//       <p hidden={hide}>Some weird details</p>
//     </div>
//   )

//   ReactDOM.render(template, appRoot)
// }

// const onShowDetails = () => {
//   if (buttonText !== 'Show details') {
//     buttonText = 'Show details'
//     hide = true
//     render()
//   } else {
//     buttonText = 'Hide details'
//     hide = false
//     render()
//   }
// }

// render()