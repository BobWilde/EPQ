function generate_grid() {
    grid_width = document.getElementById("grid_width").value;
    grid_height = document.getElementById("grid_height").value;
    table = document.getElementById("tbl");
    row = document.getElementById("row");

    // Draw the Grid:
    for (let i = 0; i < grid_height; i++) {
        for (let j = 0; j < grid_width; j++) {
            row.insertCell(0);
        }
        row=table.insertRow(0);
    }
    table.deleteRow(-1);
    table.insertRow(0);
    for (let j = 0; j < grid_width; j++) {
        row.insertCell(0);
    }


    //Generate blue cells
    for (let r = 1; r < (grid_height+1); r++){
        for (let c = 0; c < grid_width; c++){
            let random_number = Math.floor(Math.random() * 10);
            if(random_number === 1){
                let blue = document.getElementById('tbl').rows[r].cells[c];
                blue.style.backgroundColor = 'blue';
            }
        }
        if(r==grid_height){
            red();
        }
    }


}

function red() {

    //Generate one red cell
    random_height = Math.floor(Math.random() * grid_height + 1);
    random_width = Math.floor(Math.random() * grid_width);
    red = document.getElementById('tbl').rows[random_height].cells[random_width];
    red.style.backgroundColor = 'red';
    setTimeout(spread, 1000);
}

function convert_to_red() {
    let grid_width = document.getElementById("grid_width").value;
    let grid_height = document.getElementById("grid_height").value;
    grid_height --;
    let num_red = 0;
    for (let r = 1; r < (grid_height + 1); r++) {
        for (let c = 1; c < grid_width; c++){
            let check_dark_red = document.getElementById('tbl').rows[r].cells[c];
            if (check_dark_red.style.backgroundColor === 'darkred'){
                red = document.getElementById('tbl').rows[r].cells[c];
                red.style.backgroundColor = 'red';
                num_red++;
                continue;
            }
        }
    }
        setTimeout(spread, 200);setTimeout(spread, 200);setTimeout(spread, 200);setTimeout(spread, 200);
}

function check_for_red() {
    let grid_width = document.getElementById("grid_width").value;
    let grid_height = document.getElementById("grid_height").value;
    grid_height --;
    for (let r = 1; r < (grid_height + 1); r++) {
        for (let c = 1; c < grid_width; c++){
            let check_red = document.getElementById('tbl').rows[r].cells[c];
            if (check_red.style.backgroundColor === 'red') {
                check_direction();
            }
            if(r===(grid_height) && c===grid_width){
                convert_to_red();
            }
        }
    }
    convert_to_red();
}

function check_direction(){

    //Checks which direction the virus can spread
    let north;
    let east;
    let south;
    let west;
    let red_location;
    for (let r = 1; r < (grid_height + 1); r++) {
        for (let c = 1; c < grid_width; c++) {
            let check_red = document.getElementById('tbl').rows[r].cells[c];
            if (check_red.style.backgroundColor === 'red') {
                red_location=[c,r-1];

                //check if space below the red is clear
                if(red === document.getElementById('tbl').rows[grid_height].cells[random_width]){
                    south = true;
                } else {
                    let check_south = document.getElementById('tbl').rows[random_height + 1].cells[random_width];
                    if (check_south.style.backgroundColor === 'blue' || check_south.style.backgroundColor === 'red') {
                        south = true;
                    }
                    if (check_south.style.backgroundColor !== 'blue') {
                        south = false;
                    }
                }

                //check if space above the red is clear
                if(red === document.getElementById('tbl').rows[1].cells[random_width]){
                    north = true;
                } else {
                    let check_north = document.getElementById('tbl').rows[random_height - 1].cells[random_width];
                    if (check_north.style.backgroundColor === 'blue') {
                        north = true;
                    }
                    if (check_north.style.backgroundColor !== 'blue') {
                        north = false;
                    }
                }

                //check if the space on the right is clear
                if(red === document.getElementById('tbl').rows[random_height].cells[grid_width-1]){
                    east = true;
                } else {
                    let check_east = document.getElementById('tbl').rows[random_height].cells[random_width + 1];
                    if (check_east.style.backgroundColor === 'blue') {
                        east = true;
                    }
                    if (check_east.style.backgroundColor !== 'blue') {
                        east = false;
                    }
                }

                //check if the space on the left is clear
                if(red === document.getElementById('tbl').rows[random_height].cells[0]){
                    west = true;
                } else {
                    let check_west = document.getElementById('tbl').rows[random_height].cells[random_width - 1];
                    if (check_west.style.backgroundColor === 'blue') {
                        west = true;
                    }
                    if (check_west.style.backgroundColor !== 'blue') {
                        west = false;
                    }
                }

                return([north,east,south,west,red_location[0],red_location[1]]);

            }
        }
    }
}

function spread(){

    let red_location;
    //Generate a R0 value value
    let R = 4;


    let go_north;
    let go_east;
    let go_south;
    let go_west;
    let directions = (check_direction());

    for(let i=1; i<=R;i++){
        let direction = Math.ceil(Math.random() * 4);
        if(direction===1){
            go_north=true;
        }
        else if(direction===2){
            go_south=true;
        }
        else if(direction===3){
            go_east=true;
        }
        else if(direction===4){
            go_west=true;
        }
    }

    if(directions[0]===false && go_north===true){
        let dark_red = document.getElementById('tbl').rows[(directions[5])].cells[(directions[4])];
        dark_red.style.backgroundColor = 'DarkRed';
    }
    if(directions[1]===false && go_east===true){
        let dark_red = document.getElementById('tbl').rows[(directions[5]+1)].cells[(directions[4]+1)];
        dark_red.style.backgroundColor = 'DarkRed';
    }
    if(directions[2]===false && go_south===true){
        let dark_red = document.getElementById('tbl').rows[(directions[5]+2)].cells[(directions[4])];
        dark_red.style.backgroundColor = 'DarkRed';
    }
    if(directions[3]===false && go_west===true){
        let dark_red = document.getElementById('tbl').rows[(directions[5]+1)].cells[(directions[4]-1)];
        dark_red.style.backgroundColor = 'DarkRed';
    }
    let red = document.getElementById('tbl').rows[(directions[5]+1)].cells[(directions[4])];
    red.style.backgroundColor = 'blue';
    setTimeout(check_for_red, 200);

}
