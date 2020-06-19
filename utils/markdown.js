function generateMarkdown(data, answers) {
return `![](${data.avatar_url})
${data.githubName} 
## ${data.email || answers.Email}

# Title
---
 ${answers.titleName} 

## Description
---
${answers.description} 

##Table Of Contents 
---
* [Installation](Installation)
* [Usage](Usage)
* [License](License)
* [Badges](Badges)
* [Contributing](Contributing)
* [tests](tests)
* [Questions](Questions)
    
## Installation
---
${answers.Installation}

## Usage
---
${answers.Usage}

## License
---
${answers.License}

## Contributing 
---
 ${answers.Contributing}

## Test
---
${answers.Tests}

## Questions
---
${answers.Questions}`


}

module.exports = generateMarkdown;
