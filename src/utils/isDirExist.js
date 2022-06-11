const fs = require('fs');
const path = require('path');
function isDirExist(ProjectName) {
    return new Promise((resolve, reject) => {
        fs.access(path.resolve(process.cwd(), ProjectName), fs.constants.F_OK, (err) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
}
module.exports = isDirExist;