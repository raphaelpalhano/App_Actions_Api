const writter = function(path, value){
    const fs = require('fs');
    const object = {
       "urlBase": value
    }

    const data = JSON.stringify(object)

    fs.writeFileSync(path, data, 'utf8', function (err){
       if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");

    })
}

export default writter;