import { useState } from "react";

function ProjectForm({ addNewProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const newProject = {
      title: title.trim(),
      description: description.trim(),
    };

    addNewProject(newProject);

    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Project</h2>

      <label htmlFor="project-title">Title:</label>
      <input
        id="project-title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="project-description">Description:</label>
      <textarea
        id="project-description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default ProjectForm;