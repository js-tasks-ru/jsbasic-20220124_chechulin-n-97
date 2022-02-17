function highlight(table) {
  let rows = table.rows

  for (let i = 1; i < rows.length; i++) {
    let row = rows[i]
    let status = row.cells[3]
    let gender = row.cells[2]
    let age = row.cells[1]

    if (status.getAttribute('data-available') === 'true') {
      row.classList.add('available')
    }
    else if (status.getAttribute('data-available') === 'false') {
      row.classList.add('unavailable')
    }
    else {
      row.hidden = true
    }

    if (gender.innerHTML === 'm') {
      row.classList.add('male')
    }
    else {
      row.classList.add('female')
    }

    if (age.innerHTML < 18) {
      row.setAttribute('style', 'text-decoration: line-through')
    }
  }
}
