// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ## Table of Contents
  - [Name](#userName)
  - [GitHub Name](#github)
  - [About Me](#about)
  - [Motivation](#motivation)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Collaborators](#credits)
  - [Additional Information](#additional-info)

  ## Name
  ${data.userName}

  ## GitHub Name
  ${data.github}

  ## About Me
  ${data.about}

  ## Motivation
  ${data.motivation}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Collaborators
  ${data.credits}

  ## Additional Information
  - GitHub Link: ${data.link}
  - Email: ${data.email}`;
}

module.exports = generateMarkdown;