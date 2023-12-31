function generateREADME(response) {
  return `
# ${response.title}
![GitHub license](${renderlicenseBadge(response.license)})
## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Link to the Video
https://drive.google.com/file/d/1KQxBK33Q8E_X0wzVYBGU9oU4D8DfL0mE/view
## Installation
${response.installation}

## Usage
${response.usage}

## license

![GitHub license](${renderlicenseBadge(response.license)})

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
For additional questions, you can reach me through:

- GitHub: [${response.username}](https://github.com/${response.username})
- Email: ${response.email}
`;
}
function renderlicenseBadge(license) {
  return `https://img.shields.io/badge/license-${license}-red`
}


module.exports = generateREADME;
