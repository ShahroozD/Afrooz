
import React from "react";
import "./styles/main.scss";

const Layout = ({children, name, static_files="."}) => {

    return (
      <html lang="en">
        <head>
          <title>Static sample</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Static sample" />
          <meta content="initial-scale=1, minimum-scale=1, width=device-width" name="viewport"></meta>
          <link rel="icon" type="image/png" href="./imgs/favicon.png"></link>
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href={`${static_files}/css/${name}.css`}></link>
        </head>
        <body className="new_code">
          {children}
          {!!name?<script src={`${static_files}/script/${name}-script.js`}></script>:""}
        </body>
      </html>
    );
}

export default Layout;