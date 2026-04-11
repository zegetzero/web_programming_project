// Dan | Start
// Inventory search + average price display

function calculateAverage(rows) {
  let total = 0;
  for (let i = 0; i < rows.length; i++) {
    const priceText = rows[i].children[4].innerText;
    total += Number(priceText.replace(/[^0-9.]/g, ""));
  }
  if (rows.length === 0) return 0;
  return (total / rows.length).toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
  const tbody = document.querySelector(".inventory-table tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));
  const searchBox = document.getElementById("searchBox");
  const avgLabel = document.getElementById("avgPrice");

  avgLabel.innerText = "Average price: $" + calculateAverage(rows);

  searchBox.addEventListener("input", function () {
    const q = searchBox.value.toLowerCase();
    rows.forEach(function (row) {
      row.style.display = row.innerText.toLowerCase().includes(q) ? "" : "none";
    });
  });
});
// Dan | End