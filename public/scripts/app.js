'use strict';

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Hey. These are some details you can now see!'
      )
    )
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();

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
