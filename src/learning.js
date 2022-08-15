import React from "react";
/**
 *
 * class based component syntax
 *
 * class [className] extends React.Component {
 *
 * render(){
 * return (
 * HTML comes
 * <>
 *<h1>I am Shekhar</h1>
 * <h1>I am Abhinay</h1>
 *   </>
 *
 * )
 *
 * }
 * }
 */

class classComponent extends React.Component {
  render() {
    return (
      //  HTML comes
      <>
        <h1>I am Shekhar</h1>
        <h1>I am Abhinay</h1>
      </>
    );
  }
}

/**
 * functional component syntax
 * function functionName(props){
 * return (
 * <>
 * <h1>I am shekhar</h1>
 * <h1>I am abhinay</h1>
 * </>
 *
 * )
 *
 * }
 */

// 1st style
function functionName(props) {
  return (
    <>
      <h1>I am shekhar</h1>
      <h1>I am abhinay</h1>
    </>
  );
}

// 2nd style
const functionName = (props) => {
  // javascript related to calculation
  return (
    <>
      <h1>I am shekhar</h1>
      <h1>I am abhinay</h1>
    </>
  );
};

// 3rd style
const functionName = (props) => (
  // javascript related to calculation
  <>
    <h1>I am shekhar</h1>
    <h1>I am abhinay</h1>
  </>
);

// map function

const arr = [1, 2, 3];

// 1st style
const displayArr = (props) => (
  <>
    {arr.map((entry) => {
      // javascript related to calculation
      let result = entry + Math.random();
      return <h1>{result}</h1>;
    })}
  </>
);

// 2nd style
const displayArrSecondStyle = (props) => (
  <>
    {arr.map((entry) => (
      <h1>{entry}</h1>
    ))}
  </>
);
