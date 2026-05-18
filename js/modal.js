function openModal(ci, i) {
  const item = categories[ci].items[i];

  document.getElementById("modalTitle").textContent = item.title;
  document.getElementById("modalMeta").textContent =
    `${item.match} Match • ${item.year}`;

  document.getElementById("modalDesc").textContent = item.desc;

  const modal = document.getElementById("modal");

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  lucide.createIcons();
}

function closeModal() {
  const modal = document.getElementById("modal");

  modal.classList.add("hidden");
  modal.classList.remove("flex");
}
