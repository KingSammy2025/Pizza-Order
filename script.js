// Inputs & InnerHTMl

// .innerHTML command:
//  1. Gets the conetns of an HTML element.  E.g. <p>Click <a>here</a> <p>
// The InnerHTML of the paragraph is Click <a>here</a>
// The innerHTMLL of the anchor <a> is: here
//  2. Sets the content of an HTML element.

// document.getElementById("btn").addEventListener("click", showContent);
// function showContent() {
//   document.getElementById("output").innerHTML =
//     "Welcome to my <a href =''> Pizzeria</a>. Order below.";
//   alert(innerHTML);
// }

// value command: retrieves the content of an <input> element.
//  *IMPORTANT*  value command should ALWAYS be used within a  function

document.getElementById("order-btn").addEventListener("click", getOrder);
function getOrder() {
  let topping1 = document.getElementById("top1-input").value;
  let topping2 = document.getElementById("top2-input").value;
  let size = document.getElementById("size-input").value;

  // Processing: Make output statement
  let output = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 20 minutes`;

  // Output: Display the output in the "Your Order" section of the website
  document.getElementById("order-output").innerHTML = output;
}
