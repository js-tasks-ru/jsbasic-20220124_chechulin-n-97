function makeDiagonalRed(table) {
  let rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }
}
