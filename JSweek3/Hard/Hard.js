let pii = (function () {
    let name = 'Brandon'
    let _ssn = '000-000-0000';
    getssn = function () {
        return _ssn;
    }
    getname = function () {
        return name;
    }
    return {
        getname: name
    }
    return {
        getssn: getssn
        //   returning the object literal here
    }
}());
console.log(pii.getname);
console.log(pii._ssn);


