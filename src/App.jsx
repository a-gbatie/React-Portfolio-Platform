import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  const projects = [
    {
      id: 1,
      title: "Personal Website",
      description: "A website showcasing my work",
    },
    {
      id: 2,
      title: "Weather App",
      description: "An app that displays weather information",
    },
    {
      id: 3,
      title: "Shopping Cart",
      description: "A React shopping cart application",
    },
  ];

  return (
    <div className="App">
      <h1>Personal Project Showcase App</h1>

      <ProjectForm />
      <SearchBar />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;