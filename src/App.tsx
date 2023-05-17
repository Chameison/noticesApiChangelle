import { useState } from "react";

import "./assets/global.css";
import Notice from "./components/Notice";
import { ArticleNyTimes, GithubLogo } from "@phosphor-icons/react";

function App() {
  return (
    <>
      <header className="header">
        <a>
          <ArticleNyTimes size={68} color="#f56f5b" />
        </a>
      </header>
      <div className="container">
        <div className="header-section">
          <h1>Seja bem-vindo ao Portal de Noticias Global. </h1>
          <p>Aproveite e acesse o conteúdo e as fontes!</p>
        </div>
        <Notice />
      </div>
      <footer className="footer">
        <a href="https://github.com/Chameison">
          {" "}
          <GithubLogo size={28} />
          Git Hub
        </a>
      </footer>
    </>
  );
}

export default App;
