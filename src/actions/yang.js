const chalk = require('chalk');
module.exports = async (name) => {
    console.log(chalk.blue(`感谢你`), chalk.white.bgYellow.bold(`${name}`));
    console.log(chalk.yellow(`Yang的博客：www.yuque.com/boyyang`));
    console.log(chalk.red(`努力努力再努力`));
}