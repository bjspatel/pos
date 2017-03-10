(function() {
    'use strict';

    const _ = require('lodash');

    function getDeep(dataObj, path) {
        if(typeof path === 'string') {
            path = path.split('.');
        }
        return path.reduce(function(prev, curr) {
            return prev ? prev[curr] : undefined;
        }, dataObj);
    }

    function setDeep(dataObj, path, value) {
        let tempObj = dataObj;
        if(typeof path === 'string') {
            path = path.split('.');
        }
        const lastField = path.pop();
        for(let fieldName of path) {
            tempObj[fieldName] = tempObj[fieldName] || {};
            tempObj = tempObj[fieldName];
        }
        tempObj[lastField] = value;
        path.push(lastField);
    }

    function deleteDeep(dataObj, path) {

        if(typeof path === 'string') {
            path = path.split('.');
        }
        const lastField = path.pop();
        const parentObj = getDeep(dataObj, path);
        if(!parentObj) {
            return;
        }
        delete parentObj[lastField];

        for(let index = path.length-1; index >= 0; index--) {
            let currPath   = path.slice(0, index);
            let currField  = path[index];
            let currParent = getDeep(dataObj, currPath);
            if(_.isEmpty(currParent[currField])) {
                delete currParent[currField];
            } else {
                break;
            }
        }
        path.push(lastField);
    }

    function setDeepFromSrc(dataObj, path, srcObj) {
        const value = getDeep(srcObj, path);
        setDeep(dataObj, path, value);
    }

    module.exports = {
        getDeep,
        setDeep,
        deleteDeep,
        setDeepFromSrc
    };
})();