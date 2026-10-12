import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React, { Component } from "react";

// Critical path — loaded immediately
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

// Below-the-fold — lazy loaded after initial paint
const About      = lazy(() => import("./components/About.jsx"));
const Skill      = lazy(() => import("./components/Skill.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Project    = lazy(() => import("./components/Project.jsx"));
const Footer     = lazy(() => import("./components/Footer.jsx"));

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

// Minimal skeleton shown while lazy sections load
const SectionFallback = () => (
  <div style={{ minHeight: "100vh", backgroundColor: "#000" }} />
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Skill />
        <Experience />
        <Project />
        <Footer />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
