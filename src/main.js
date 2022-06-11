
const program = require('commander');
const path = require('path')

const commandLists = [{
    name: 'create',
    type: '<ProjectName>',
    alias: 'c',
},
{
    name: 'yang',
    alias: 'y',
    type: '<YourName>',
}
]

for (let item in commandLists) {
    let actions = require(path.resolve(__dirname, `./actions/${commandLists[item].name}`))
    program.command(commandLists[item].name)
        .argument(commandLists[item].type)
        .alias(commandLists[item].alias)
        .action(
            actions
        )
}

program.parse(process.argv)
