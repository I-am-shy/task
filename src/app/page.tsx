import React from "react";

export default function Home() {
  // React 并不强制使用 JSX，也可以使用原生的 JavaScript

  // jsx/tsx语法
  // return (
  //   <>
  //     <div className="box-content h-32 w-32 p-4 border-4">
  //       <h1>Home</h1>
  //     </div>
  //   </>
  // );

  // 原生js/ts语法
  return React.createElement(
    'div',
    { className: 'box-content h-32 w-32 p-4 border-4' },
    React.createElement(
      'h1',
      null,
      'Home'
    ),
    ''
  );
}