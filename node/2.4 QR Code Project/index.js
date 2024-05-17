/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import * as fs from "fs";
import { stringify } from "querystring";

const question = [
  {
    type: "input",
    name: "url",
    message: "Enter your URL, e.g abc.com : ",
  },
];

// get an input from a user
inquirer
.prompt(question)
.then((answer) => {
    // METHOD 1

    // creates the svg qr image object 
    var qr_svg = qr.image(answer.url, { type: "svg" });
    // this pipes the SVG data directly to a svg file
    qr_svg.pipe(fs.createWriteStream("AfternoonSession.svg"));
    
    // creates the png qr image object 
    // default type is 'png' so need to specify the object with property value pair type: 'png'
    var qr_svg = qr.image(answer.url);
    // this pipes the png data directly to a png file
    qr_svg.pipe(fs.createWriteStream("AfternoonSession.png"));


    // METHOD 2

    
    // Using the synchronous imageSync method to get the SVG data as a string:
    var svg_string = qr.imageSync(answer.url, { type: "svg" });
    // cretinng the png file and writing the string png data as the file's content
    fs.writeFile('AfternoonSession.svg', svg_string , (err) => {
        if (err) throw err;
        console.log("The .svg file has been saved!");
    })

    // Using the synchronous imageSync method to get the png data as a string:
    // default type is 'png'
    var png_string = qr.imageSync(answer.url);
    // cretinng the png file and writing the string png data as the file's content
    fs.writeFile('AfternoonSession.png', png_string , (err) => {
        if (err) throw err;
        console.log("The .png file has been saved!");

    })

})
.catch((error) =>{
    if (error.isTtyError){
        console(`Prompt couldn't be rendered in the current environment`)
    }else{
        console.log(`Something else went wrong`)
    }
})
