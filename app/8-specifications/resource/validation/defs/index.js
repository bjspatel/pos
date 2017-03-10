/**
 * All validation definitions
 */
(function() {

    'use strict';

    function minlength(property, value, lengthValue) {

        let message = `"${property}": "${value}" length is not
            greater than or equal to ${lengthValue}`;
        if(value.toString().length < lengthValue) {
            return {
                property,
                message
            };
        }
    }

    function float(property, value) {

        let regex = /^(\d+)(\.\d+)?$/;
        let message = `"${property}": "${value}" is not a number`;
        if(!regex.test(value.toString())) {
            return {
                property,
                message
            };
        }
    }

    function integer(property, value) {

        let regex = /^\d+$/;
        let message = `"${property}": "${value}" is not a whole number`;
        if(!regex.test(value.toString())) {
            return {
                property,
                message
            };
        }
    }

    function alphabet(property, value) {

        let regex = /^[A-Za-z]+$/;
        let message = `"${property}": "${value}" contains characters other than letters`;
        if(!regex.test(value.toString())) {
            return {
                property,
                message
            };
        }
    }

    function name(property, value) {

        let regex = /^[A-Za-z0-9\_\-&\. ]+$/;
        let message = `"${property}": "${value}" contains characters other than letters, digits and "_-&.`;
        if(!value || !regex.test(value.toString())) {
            return {
                property,
                message
            };
        }
    }

    function timestamp(property, value) {

        let regex = /^\d{4}-\d{2}-\d{2}$/;
        let message = `"${property}": "${value}" is not valid date format`;
        if(regex.test(value.toString())) {
            return {
                property,
                message
            };
        }
    }

    function email(property, value) {
        let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        let message = `"${property}": "${value}" is not valid email`;
        if(!regex.test(value.toString())) {
            return {
                property,
                message
            };
        }
    }

    function password(property, value) {

        let regex = /^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).{0,}$/;
        let message = `"${property}": "${value}" does not contain atleast 1 letter and 1 digit`;
        if(!regex.test(value.toString())) {
            return {
                property,
                message
            };
        }
    }

    function set(property, value, setValues) {

        let message = `"${property}": "${value}" is not from "${setValues.join('", "')}"`;
        if(setValues.indexOf(value) < 0) {
            return {
                property,
                message
            };
        }
    }

    module.exports = {
        minlength,
        float,
        integer,
        alphabet,
        name,
        timestamp,
        email,
        password,
        set
    };
})();
