
//Ensure HTML document is loaded before starting the script
document.addEventListener("DOMContentLoaded", () => {
    // Wait for a file to be uploaded before calculating vacuum path
    let inputField = document.getElementById("info");
    inputField.addEventListener("change", (event) => readFile(event));
});

// Call on readFile after we recieve a .txt file from the user
function readFile(event) {
    //file will be the uploaded file from the user
    //check to make sure that the file exists
    if (event.target.files[0].type !== "text/plain") {
        fileError();
    }
    else {
        let file = event.target.files[0];
        //fileReader will extract the text from the file
        let fileReader = new FileReader();
        //fileReader.onload catches the successful async read
        fileReader.onload = (event) => {
            let fileText = event.target.result;
            fileText = fileText.split("\n"); //an array of the file contents
            calculatePath(fileText);
        };
        //async method for reading our file
        fileReader.readAsText(file);
        //error handler if reading the file fails
        fileReader.onerror = () => {
            console.log("unable to read file");
        };
    }
}

function calculatePath(fileText) {
    let xRoom = parseInt(fileText[0].split(" ")[0]);
    let yRoom = parseInt(fileText[0].split(" ")[1]);
    let xVacuum = parseInt(fileText[1].split(" ")[0]);
    let yVacuum = parseInt(fileText[1].split(" ")[1]);
    document.getElementById("start").innerText = `Starting Position: ${xVacuum}, ${yVacuum}`;
    let dirt = fileText.slice(2, fileText.length -1);
    let directions = fileText[fileText.length-1];
    //create an empty room array of0 to represent the vacuum positions
    const zeros = (m, n) => [...Array(m)].map(() => Array(n).fill(0));
    let room = zeros(yRoom, xRoom);

    //adding dirt spots to our room
    dirt.forEach(spot => {
        let x = parseInt(spot.split(" ")[0]);
        let y = parseInt(spot.split(" ")[1]);
        room[y][x] = "dirty";
    });

    let dirtCount = 0;

    for(let i = 0; i < directions.length; i++) {
        if (directions[i] ==="N" && yVacuum < yRoom-1) {
            yVacuum += 1;
        }
        else if (directions[i] === "E" && xVacuum < xRoom-1) {
            xVacuum += 1;
        }
        else if (directions[i] === "S" && yVacuum > 0) {
            yVacuum -= 1;
        }
        else if (directions[i] === "W" && xVacuum > 0) {
            xVacuum -= 1
        }

        if (room[yVacuum][xVacuum] === "dirty"){
            dirtCount += 1;
            room[yVacuum][xVacuum] = "clean";
        };
    };
    console.log(`${xVacuum} ${yVacuum}\n${dirtCount}`); //solution

    document.getElementById("end").innerText = `Ending Position: ${xVacuum}, ${yVacuum}`
    document.getElementById("dirt").innerText = `Dirt Cleaned: ${dirtCount}`;


};

//file upload error message
function fileError() {
    document.getElementById("errorMessage").innerText = "Invalid Input, please select a .txt file";
};