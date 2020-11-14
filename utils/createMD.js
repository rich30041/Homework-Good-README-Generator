function createMD(data) {
    return `
# **${data.title}**

${data.License}

## Description 
${data.description}

## Table of Contents	 
	* [Description](#description)
	* [Installation](#installation)
	* [Usage](#usage)
	* [Contributing](#contributing)
	* [Tests](#tests)
	* [License](#license)
	* [Questions](#questions) 

## Installation  	
${data.install}

## Usage			
${data.usage}

## Contributing	
${data.contrib} 

## Tests			
${data.tests}

## License 		
${data.license} 
    
## Questions 
	Reach out to me with any questions at ${data.email}

`;
}

module.exports = createMD;

