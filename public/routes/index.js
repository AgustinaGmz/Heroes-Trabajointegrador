const express = require('express')
const router = express.Router();

module.exports = function() {
    router.get('/babbage')
    router.get('/berners-lee')
    router.get('/clarke')
    router.get('/hamilton')
    router.get('/hopper')
    router.get('/lovelace')
    router.get('/turning')
}