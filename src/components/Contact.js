import React, { Component } from "react";

export default class Contact extends Component {
    render() {
      return (
        <>
          <h1>Contactame</h1>
          <p>Puedes encontrar informacion sobre mi en las siguientes redes.</p>
          <ul>
            <li>
              <strong>GitHub</strong>:{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/erikfloresq"> erikfloresq </a>
            </li>
            <li>
              <strong>Twitter</strong>:{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/erikfloresq"> erikfloresq </a>
            </li>
          </ul>
        </>
        );
    }
}