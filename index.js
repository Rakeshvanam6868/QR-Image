import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:"Type the url",
        name: "url"
    }
  ])
  .then((answers) => {
    var url=answers.url;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_url.png'));

    fs.writeFile("url.txt",url,(err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });