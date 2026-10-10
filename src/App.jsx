import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <div className="App">
      <h1>Personal Project Showcase App</h1>

      <ProjectForm />
      <SearchBar />
      <ProjectList />
    </div>
  );
}

export default App;