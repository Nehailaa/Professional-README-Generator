
//  Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ## Table of Contents
  - [Name](#userName)
  - [GitHub Username](#github)
  - [About Me](#about)
  - [Motivation](#motivation)
  - [Description](#description)
  - [Languages](#languages)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Collaborators](#credits)
  - [License](#license)
  - [Additional Information](#additional-info)

  ## Name
  ${data.userName}

  ## GitHub Username
  ${data.github}

  ## About Me
  ${data.about}

  ## Motivation
  ${data.motivation}

  ## Description
  ${data.description}

  ## Languages
  ${data.languages}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Collaborators
  ${data.credits}

  ## License
  ${data.license}

  ## Additional Information
  - GitHub Link: ${data.link}
  - Email: ${data.email}`;
}

module.exports = generateMarkdown;