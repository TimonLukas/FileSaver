# FileSaver
A small node utility which backups every change to a file so defect versions won't erase all your progress

## Installation
```bash
> git clone https://github.com/TimonLukas/FileSaver.git
> npm install
```

## Usage
To print usage details, simply execute the main script:
```bash
npm run start
```

To actually have the script do what it's supposed to do:
```bash
npm run start --input [INPUT] --output [OUTPUT]
```

## Tests
To execute the tests, run
```bash
npm run test
npm run cover
```

I do know that not everything is thoroughly tested, especially the file handling. I did try to automate it, but somehow you simply can't listen to changes made to a file by Node itself. Sorry I guess.

## Motivation
I wrote this tool since I, and many of my colleagues, have often lost files when editing them (and I am not talking about code, more graphics and the like) - especially when you save and a corrupt file is written. Also I wanted to try TDD, which I did as far as I could.