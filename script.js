const cells = Array.from(document.querySelectorAll(".cell"))
const radio_admin = document.getElementById("admin")
const radio_user = document.getElementById("user")
const finish = document.getElementById("finish")

radio_admin.checked = true; 
let roll = "admin";
let class_color = "text-red-600"

// Setting one just radioButton
radio_admin.addEventListener("click", (e) => {
    roll = "admin"
    radio_user.checked = false
    class_color = "text-red-600"
})

radio_user.addEventListener("click", (e) => {
    roll = "user";
    radio_admin.checked = false
    class_color = "text-neutral-900"
})

// Setting the color for the numbers - admin or user
cells.forEach(cell => {
    cell.addEventListener("click", (e) => {
        if (roll = "admin") {
            cell.classList.remove("text-neutral-900")
            cell.classList.remove("text-red-600")
            cell.classList.add(class_color)
        } else {
            cell.classList.remove("text-red-600")
            cell.classList.remove("text-neutral-900")
            cell.classList.add(class_color)
        }
    })
});

//Validating if the Sudoku is correct
finish.addEventListener("click", (e) => {
    let solved = true
    let row_increment
    let col_increment

    for (let i = 0; i < 9; i++) {
        row_increment = i%3 == 0? i*9 : row_increment + 3;
        // console.log(row_increment+i)
        solved = verifyCells(cells.slice(i, i+9))
        // solved = verifyCells([
        //     cells[0+row_increment],
        //     cells[1+row_increment],
        //     cells[2+row_increment],
        //     cells[9+row_increment],
        //     cells[10+row_increment],
        //     cells[11+row_increment],
        //     cells[18+row_increment],
        //     cells[19+row_increment],
        //     cells[20+row_increment],
        // ])
        // solved = verifyCells([
        //     cells[0+i],
        //     cells[3+i],
        //     cells[6+i],
        //     cells[27+i],
        //     cells[30+i],
        //     cells[33+i],
        //     cells[54+i],
        //     cells[57+i],
        //     cells[60+i],
        // ])
    }
    // NOTA: NO ALCANCÉ A HACER LAS VALIDACIONES POR FILA Y COLUMNA
    if (solved == true) {
        alert("Sudoku resuelto")
    } else {
        alert("Sudoku no resuelto")
    }
})

function verifyCells(cells) {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    cells.forEach(cell => {
        numbers = numbers.filter(number => number !== parseInt(cell.value))
    });
    return numbers.length == 0? true : false;
}