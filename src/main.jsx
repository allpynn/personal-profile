import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hero from "./components/Hero.jsx";
import Skill from "./components/Skill.jsx";
import Project from "./components/Project.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";

import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
    this.setState({ info });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, color: "red", backgroundColor: "black", minHeight: "100vh" }}>
          <h1>React Crashed!</h1>
          <p>{this.state.error?.toString()}</p>
          <pre style={{ fontSize: 12, color: "white" }}>{this.state.info?.componentStack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>

      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Project />
      <Footer />
    </ErrorBoundary>
  </StrictMode>
);
