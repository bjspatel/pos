'use strict'

function EquiptJSON(data) {
    this.data = data
}

EquiptJSON.prototype.set = function(path, value, dataObj) {
    let tempObj = dataObj || this.data
    if(typeof path === 'string') {
        path = path.split('.')
    }
    const lastField = path.pop()
    for(let fieldName of path) {
        tempObj[fieldName] = tempObj[fieldName] || {}
        tempObj = tempObj[fieldName]
    }
    tempObj[lastField] = value
    path.push(lastField)
}

EquiptJSON.prototpye.get = function(path, dataObj) {
    dataObj = dataObj || this.data
    if(typeof path === 'string') {
        path = path.split('.')
    }
    return path.reduce(function(prev, curr) {
        return prev ? prev[curr] : undefined
    }, dataObj)
}

EquiptJSON.prototype.delete = function(path, dataObj) {
    dataObj = dataObj || this.data
    if(typeof path === 'string') {
        path = path.split('.')
    }
    const lastField = path.pop()
    const parentObj = this.get(path, dataObj)
    if(!parentObj) {
        return
    }
    delete parentObj[lastField]

    for(let index = path.length-1; index >= 0; index--) {
        let currPath   = path.slice(0, index)
        let currField  = path[index]
        let currParent = getDeep(currPath, dataObj)
        if(_.isEmpty(currParent[currField])) {
            delete currParent[currField]
        } else {
            break
        }
    }
    path.push(lastField)
}

EquiptJSON.prototype.setFromSrc = function(path, srcObj) {
    const value = this.get(path, srcObj)
    this.set(path, dataObj, value)
}

module.exports = EquiptJSON
