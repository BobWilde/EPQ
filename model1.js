function run(){
    generate_grid();
}

function generate_grid() {

    //GENERATE GRID

    grid_width = document.getElementById("grid_width").value;
    grid_height = document.getElementById("grid_height").value;
    table = document.getElementById("tbl");
    row = document.getElementById("row");

    // Draw the Grid:
    for (let i = 0; i < grid_height; i++) {
        for (let j = 0; j < grid_width; j++) {
            row.insertCell(0);
        }
        row = table.insertRow(0);
    }
    table.deleteRow(-1);
    table.insertRow(0);
    for (let j = 0; j < grid_width; j++) {
        row.insertCell(0);
    }



    //GENERATE RED

    let random_height = Math.floor(Math.random() * grid_height + 1);
    let random_width = Math.floor(Math.random() * grid_width);
    let red = document.getElementById('tbl').rows[random_height].cells[random_width];
    red.style.backgroundColor = 'red';
}





function wave(){


    let red_position=find_red();



    if (red_position===0){
        let grid_width = document.getElementById("grid_width").value;
        let grid_height = document.getElementById("grid_height").value;
        for (let r = 1; r < (grid_height); r++) {
            for (let c = 0; c < (grid_width-1); c++) {
                let check_red = document.getElementById('tbl').rows[r].cells[c];
                if (check_red.style.backgroundColor === 'darkred') {
                    red = document.getElementById('tbl').rows[r].cells[c];
                    red.style.backgroundColor = 'red';
                }
            }
        }
    }

    let random_direction_one = Math.ceil(Math.random() * 4);
    let random_direction_two = Math.ceil(Math.random() * 4);
    let random_direction_three = Math.ceil(Math.random() * 4);





    if(random_direction_one === 1 || random_direction_two ===1 || random_direction_three ===1){
        red = document.getElementById('tbl').rows[red_position[0] + 1].cells[red_position[1]];
        red.style.backgroundColor = 'darkred';
        setTimeout(blue(red_position[0] + 1,red_position[1]), 3000);
    }

    if(random_direction_one === 1 || random_direction_two ===1 || random_direction_three ===1){
        red = document.getElementById('tbl').rows[red_position[0] - 1].cells[red_position[1]];
        red.style.backgroundColor = 'darkred';
    }

    if(random_direction_one === 1 || random_direction_two ===1 || random_direction_three ===1){
        red = document.getElementById('tbl').rows[red_position[0]].cells[red_position[1] + 1];
        red.style.backgroundColor = 'darkred';
    }

    if(random_direction_one === 1 || random_direction_two ===1 || random_direction_three ===1){
        red = document.getElementById('tbl').rows[red_position[0]].cells[red_position[1] - 1];
        red.style.backgroundColor = 'darkred';
    }

    red = document.getElementById('tbl').rows[red_position[0]].cells[red_position[1]];
    red.style.backgroundColor = 'darkred';
}



function find_red(){

    let grid_width = document.getElementById("grid_width").value;
    let grid_height = document.getElementById("grid_height").value;
    let red_position = new Array(0);
    for (let r = 1; r < (grid_height); r++) {
        for (let c = 0; c < (grid_width-1); c++) {
            let check_red = document.getElementById('tbl').rows[r].cells[c];
            if (check_red.style.backgroundColor === 'red') {
                red_position.push(r); //r is not zero based, c is.
                red_position.push(c);
                return(red_position);
            }
        }
    }
    return(0);
}




function blue(){


}

function test(){
    for (let i=0; i<100000; i++){
        setTimeout(wave, 1);
    }
}
