const usage = [
  {
    header: 'FileSaver',
    content: 'A small lifesaver utility'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'input',
        typeLabel: '[underline]{file}',
        description: 'File which is watched for changes'
      },
      {
        name: 'output',
        typeLabel: '[underline]{directory}',
        description: 'Folder into which the files are written'
      }
    ]
  }
]

module.exports = {
  usage
}
