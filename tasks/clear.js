const del = require("del")

// Configuration
const path = require("../config/path.js")

// deleted public dirrectory on every build
const clear = () => {
        return del(path.root)
}

module.exports = clear;