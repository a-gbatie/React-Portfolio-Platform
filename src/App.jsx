import { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([
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
  ]);
  const [search, setSearch] = useState("");

  function addNewProject(newProject) {
    setProjects((prevProjects) => [
      ...prevProjects,
      { ...newProject, id: crypto.randomUUID() },
    ]);
  }

  const filteredProjects = projects.filter((project) => project.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App">
      <h1>Personal Project Showcase App</h1>

      <ProjectForm addNewProject={addNewProject} />
      <SearchBar search={search} setSearch={setSearch} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
