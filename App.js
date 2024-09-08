/* 

React.createElement(object) => HTML(Browser understands)
*/
import React from "react";
import ReactDOM from "react-dom/client";
//This is how react element is create using react
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");

//jsx is a javascript syntax, which is easier to create react elements
//jsx - is not HTML in js, jsx is HTML like or XML like syntax
//This is how react element is create using jsx
//Normal React element
// const heading = <h1 className="heading">Namaste React using JSX🚀</h1>;

// React components - 2 types
// 1. class based component - Old way
// 2. functional component - New way
// React functional component =>
// it's a normal js function, which return some jsx elements.
// eg: code-
// const HeadingComponent = () =>{return (<h1 className="heading">Namaste React using JSX🚀</h1>)}

// React functional component
// const HeadingComponent = () => {
//   return <h1 className="heading">Namaste React using JSX🚀</h1>;
// };

// Assignment 03
// const title = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", { className: "heading" }, "Heading 1"),
//   React.createElement("h2", { className: "heading" }, "Heading 2"),
//   React.createElement("h3", { className: "heading" }, "Heading 3"),
// ]);

const HeaderComponent = () => {
  return (
    <nav className="navContainer">
      <a href="#" className="userLogo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </a>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <a href="#" className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          fill="currentColor"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            stroke-width="5"
            fill="#4CAF50"
          />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            fill="white"
            font-size="20px"
            dy=".3em"
          >
            LOGO
          </text>
        </svg>
      </a>
    </nav>
  );
};

const TitleComponent1 = () => {
  return <h1 className="heading">Heading 1</h1>;
};

const TitleComponent2 = () => {
  return <h2 className="heading">Heading 2</h2>;
};

const TitleComponent3 = () => {
  return <h3 className="heading">Heading 3</h3>;
};

const Title = () => {
  return (
    <div className="title">
      <TitleComponent1 />
      <TitleComponent2 />
      <TitleComponent3 />
    </div>
  );
};

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Title />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(<App />);
root.render(<App />);

//Old Code
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", { id: "heading1" }, "This ia Namaste React🚀"),
//     React.createElement("h2", { id: "heading2" }, "I m an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { id: "heading3" }, "I m an h1 tag"),
//     React.createElement("h2", { id: "heading4" }, "I m an h2 tag"),
//   ])
// );
// // jsx
// // console.log(parent);+ //return object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
