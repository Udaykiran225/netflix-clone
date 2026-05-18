renderRows();

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});

lucide.createIcons();
