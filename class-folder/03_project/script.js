function mainTable() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
 
  if (num1 <= 0 || num2 <= 0) {
    alert(num1 < 0 ? (num2 < 0 ? "Number 1 & Number 2 both negative" : "Number 1 is negative") : num2 < 0 ? "Number 2 is negative" : "");
  } else {
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = ""; // Clear previous table if any

    const table = document.createElement("table");

    for (let i = 1; i <= num1; i++) {
      const tr = document.createElement("tr"); // Create new row for each iteration
      for (let j = 1; j <= num2; j++) {
        const td = document.createElement("td"); // Create new cell
        let mul = i * j;
        td.textContent = mul; // Set the text content of the cell
        tr.appendChild(td); // Append cell to row
      }
      table.appendChild(tr); // Append row to table
    }

    tableContainer.appendChild(table); // Append table to container
  }
}
