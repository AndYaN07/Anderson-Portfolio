document.addEventListener("DOMContentLoaded", () => {
  const projectsGrid = document.getElementById("projects-grid");
  const modal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalTech = document.getElementById("modal-tech");
  const modalDescription = document.getElementById("modal-description");
  const modalChallenge = document.getElementById("modal-challenge");
  const modalNote = document.getElementById("modal-note");
  const modalLink = document.getElementById("modal-link");

  if (!projectsGrid || !modal || !Array.isArray(projectsData)) {
    return;
  }

  const buildProjectCard = (project) => {
    const article = document.createElement("article");
    article.className = "proyecto";

    const techLine = project.tech.join(", ");
    const imageWarning = project.imagePlaceholder
      ? `<p class="placeholder-warning">${project.placeholderNote}</p>`
      : "";

    const repoAction = project.link
      ? `<a class="btn-link" href="${project.link}" target="_blank" rel="noopener noreferrer">Repositorio</a>`
      : `<span class="btn-disabled">Repositorio pendiente</span>`;

    article.innerHTML = `
      <img src="${project.image}" alt="${project.imageAlt}" />
      <h3>${project.title}</h3>
      <p class="proyecto-tech"><strong>Tech:</strong> ${techLine}</p>
      <p>${project.summary}</p>
      ${imageWarning}
      <div class="proyecto-actions">
        ${repoAction}
        <button type="button" class="btn-secondary" data-project-id="${project.id}">
          Ver detalle técnico
        </button>
      </div>
    `;

    return article;
  };

  const openModal = (project) => {
    modalImage.src = project.image;
    modalImage.alt = project.imageAlt;
    modalTitle.textContent = project.title;
    modalTech.textContent = `Tech: ${project.tech.join(", ")}`;
    modalDescription.textContent = project.description;
    modalChallenge.textContent = project.challenge;
    modalNote.textContent = project.imagePlaceholder ? project.placeholderNote : "";

    if (project.link) {
      modalLink.style.display = "inline-flex";
      modalLink.href = project.link;
      modalLink.textContent = "Ver repositorio";
    } else {
      modalLink.style.display = "none";
      modalLink.href = "#";
    }

    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  projectsData.forEach((project) => {
    const card = buildProjectCard(project);
    projectsGrid.appendChild(card);
  });

  projectsGrid.addEventListener("click", (event) => {
    const detailsButton = event.target.closest("[data-project-id]");
    if (!detailsButton) {
      return;
    }

    const selectedProject = projectsData.find(
      (project) => project.id === detailsButton.dataset.projectId
    );
    if (selectedProject) {
      openModal(selectedProject);
    }
  });

  modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    const isModalOpen = !modal.classList.contains("hidden");
    if (isModalOpen && event.key === "Escape") {
      closeModal();
    }
  });
});
