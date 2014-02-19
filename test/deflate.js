/*global describe, it*/


'use strict';


var zlib = require('zlib');

var pako    = require('../index');
var helpers = require('./helpers');
var testDeflate = helpers.testDeflate;


var samples = helpers.loadSamples();


describe('Deflate defaults', function () {

  it('deflate', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, {}, done);
  });

  it('deflate raw', function(done) {
    testDeflate(zlib.createDeflateRaw, pako.deflateRaw, samples, {}, done);
  });

  it('deflate raw (level 0)', function(done) {
    testDeflate(zlib.createDeflateRaw, pako.deflateRaw, samples, { level: 0 }, done);
  });

  // OS_CODE can differ. Probably should add param to compare function
  // to ignore some buffer positions
  it.skip('gzip', function(done) {
    testDeflate(zlib.createGzip, pako.gzip, samples, {}, done);
  });
});


describe('Deflate levels', function () {

  it('level 9', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { level: 9 }, done);
  });
  it('level 8', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { level: 8 }, done);
  });
  it('level 7', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { level: 7 }, done);
  });
  it('level 6', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { level: 6 }, done);
  });
  it('level 5', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { level: 5 }, done);
  });
  it('level 4', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { level: 4 }, done);
  });
  it('level 3', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { level: 3 }, done);
  });
  it('level 2', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { level: 2 }, done);
  });
  it('level 1', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { level: 1 }, done);
  });
  it('level 0', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { level: 0 }, done);
  });

});


describe('Deflate windowBits', function () {

  it('windowBits 15', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { windowBits: 15 }, done);
  });
  it('windowBits 14', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { windowBits: 14 }, done);
  });
  it('windowBits 13', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { windowBits: 13 }, done);
  });
  it('windowBits 12', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { windowBits: 12 }, done);
  });
  it('windowBits 11', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { windowBits: 11 }, done);
  });
  it('windowBits 10', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { windowBits: 10 }, done);
  });
  it('windowBits 9', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { windowBits: 9 }, done);
  });
  it('windowBits 8', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { windowBits: 8 }, done);
  });

});


describe('Deflate memLevel', function () {

  it('memLevel 9', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { memLevel: 9 }, done);
  });
  it('memLevel 8', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { memLevel: 8 }, done);
  });
  it('memLevel 7', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { memLevel: 7 }, done);
  });
  it('memLevel 6', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { memLevel: 6 }, done);
  });
  it('memLevel 5', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { memLevel: 5 }, done);
  });
  it('memLevel 4', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { memLevel: 4 }, done);
  });
  it('memLevel 3', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { memLevel: 3 }, done);
  });
  it('memLevel 2', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { memLevel: 2 }, done);
  });
  it('memLevel 1', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { memLevel: 1 }, done);
  });

});


describe.skip('Deflate strategy', function () {

  it('Z_DEFAULT_STRATEGY', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { strategy: 0 }, done);
  });
  it('Z_FILTERED', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { strategy: 1 }, done);
  });
  it('Z_HUFFMAN_ONLY', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { strategy: 2 }, done);
  });
  it('Z_RLE', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { strategy: 3 }, done);
  });
  it('Z_FIXED', function(done) {
    testDeflate(zlib.createDeflate, pako.deflate, samples, { strategy: 4 }, done);
  });

});