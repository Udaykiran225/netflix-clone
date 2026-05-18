function renderRows() {
  const container = document.getElementById("rowsContainer");

  container.innerHTML = categories
    .map(
      (cat, ci) => `

    <div class="mb-8">

      <h3 class="text-lg md:text-xl font-semibold mb-3">
        ${cat.title}
      </h3>

      <div class="row-scroll flex gap-3">

        ${cat.items
          .map(
            (item, i) => `

          <div
  class="card-item w-40 md:w-56 cursor-pointer"
  onclick="openModal(${ci}, ${i})"
>

  <!-- Poster -->
  <img
    src="${item.image}"
    alt="${item.title}"
    class="w-full h-56 md:h-80 object-cover rounded"
  >

  <!-- Movie Name -->
  <h4 class="mt-2 text-sm md:text-base font-semibold text-white">
    ${item.title}
  </h4>

</div>

        `,
          )
          .join("")}

      </div>

    </div>

  `,
    )
    .join("");
}
