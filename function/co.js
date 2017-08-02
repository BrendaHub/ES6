'use strict'

// var fs = require('fs')
// function readFile(path, cb) {
//     fs.readFile(path, {encoding:'utf8'},cb)
// }

// readFile('a.js', function(err, dataA){
//     console.log(dataA)
//     readFile('b.js', function(err, dataB){
//         console.log(dataB)
//         readFile('c.js',function(err, dataC){
//             console.log(dataC)
//         })
//     })
// })

var fs = require('fs')
var co = require('co')

function readFile(path){
    return function(cb){
        fs.readFile(path, {encoding:'utf8'},cb)
    }
}

co(function* (){
    var dataA = yield readFile('a.js')
    console.log(dataA)
    var dataB = yield readFile('b.js')
    console.log(dataB)
    var dataC = yield readFile('c.js')
    console.log(dataC)
}).catch(function(err){
    console.log(err)
})