import React from "react";
import "./Style.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Landing from "./Components/Landing";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio</Link>} scroll>
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/Me">About Me</Link>
            <Link to="/Work">My Work</Link>
            <Link to="/Connect">Let's Connect!</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Alex Grassl</Link>}>
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/Me">About Me</Link>
            <Link to="/Work">Projects</Link>
            <Link to="/Connect">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"></div>
          <Landing />
        </Content>
      </Layout>
    </div>
  );
}

export default App;