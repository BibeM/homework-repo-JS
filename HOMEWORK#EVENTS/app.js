console.log("It is working!");

const rowNumberInput = document.querySelector("#rownumber");
const columNumberInput = document.querySelector("#columnumber");
const createtableEl = document.querySelector("#tableBtn");
const tableContainerEl = document.querySelector(".table-container");

function createTable(inputOne, inputTwo) {
  let table = "";
  for (let i = 0; i < inputOne; i++) {
    let tableRow = "";
    for (let j = 0; j < inputTwo; j++) {
      tableRow += `<td>Row: ${i + 1} , Column: ${j + 1} </td>`;
    }
    tableRow = `<tr>${tableRow}</tr>`;
    table += tableRow;
  }

  tableContainerEl.innerHTML = table;
}
createtableEl.addEventListener("click", function () {
  const rowNumber = Number(rowNumberInput.value);
  const columnNumber = Number(columNumberInput.value);
  if (rowNumber <= 0 || columnNumber <= 0) {
    alert("Invalid input!");
    return;
  }
  createTable(rowNumber, columnNumber);
});
