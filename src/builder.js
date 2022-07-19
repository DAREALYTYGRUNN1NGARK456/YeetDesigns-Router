/*
@param {Object} data The data to the pages route

@param {String} data.path The endpoint to the page

@param {String} data.explain an optional descriptions
*/
class Builder {
    constructor(data) {
        this.path = data ? data.path: ''
        this.explain = data ? data.explan: null
    }
/*
@param {String} path The endpoint
*/


    setPath(path) {
        this.path = path
        return this
    }
        /*
@param {String} explain an explanation of the endpoint
*/
    setExplan(explan) {
        this.explan = explan
        return this
    }
}

module.exports = Builder