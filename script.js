const ghpages = require('gh-pages');
const options = {
    branch: 'gh-pages',
    repo: 'git@github.com:tfhandx/dxA.git',
    tag: 'init',
    message: 'auto push init',
    user: {
        name: 'Tengfei Han',
        email: 'tfhan@dxhain.com'
    }
}
console.log(`Contents in dist folder is publishing to remote branch GH pages,please  wait a moment `)
ghpages.publish('dist', options, function (err) {
    console.log(`Contents in dist folder have been published to remote branch GH pages,please open this link  https://tfhandx.github.io/dxA/ on the browser `)
});