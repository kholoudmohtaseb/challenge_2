
function JsonToCsv() {
    // Read the csv file using default fs npm package.
    const fs = require("fs");
    csv = fs.readFileSync("CSV_file.csv")

    // Convert the data to String and split it in an array 
    var array = csv.toString().split("\r");

    // All the rows of the CSV will be converted to JSON objects which will be added to array
    let result = [];

    let headers = array[0].split(", ")

    for (let i = 1; i < array.length - 1; i++) {

        // Create an empty object to later add values of the current row to it Declare string str as current array value to change the delimiter and store the generated string in a new string s
        let obj = {}

        let str = array[i]
        let s = ''

        // get the comma seprated values of a cell in quotes " " 
        for (let j in headers) {
            if (properties[j].includes(", ")) {
                obj[headers[j]] = properties[j]
                    .split(", ").map(item => item.trim())
            }
            else obj[headers[j]] = properties[j]
        }

        result.push(obj)
    }

    // Convert the resultant array to json and  
    let json = JSON.stringify(result);
    fs.writeFileSync('output.json', json);
}

