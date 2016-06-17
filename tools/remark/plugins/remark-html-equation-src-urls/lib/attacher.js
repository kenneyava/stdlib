'use strict';

// MODULES //

var stdlib = require( './stdlib.js' );
var copy = require( stdlib+'@stdlib/utils/copy' );
var isObject = require( stdlib+'@stdlib/utils/is-object' ); // TODO: plain object
var isString = require( stdlib+'@stdlib/utils/is-string' ).isPrimitive;
var transformerFactory = require( './transformer.js' );
var defaults = require( './defaults.json' );


// ATTACHER //

/**
* Attach a plugin to a remark processor in order to insert rawgit URLs for SVG equations into Markdown HTML equation elements.
*
* @param {Remark} remark - remark instance
* @param {Options} [options] - plugin options
* @param {string} [options.dir="./docs/img/"] - resource directory
* @returns {Function} transformer
*/
function attacher( remark, options ) {
	var opts = copy( defaults );
	if ( arguments.length > 1 ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
		}
		if ( options.hasOwnProperty( 'dir' ) ) {
			if ( !isString( options.dir ) ) {
				throw new TypeError( 'invalid option. `dir` option must be a string primitive. Value: `' + options.dir + '`.' );
			}
			opts.dir = options.dir;
		}
	}
	return transformerFactory( opts );
} // end FUNCTION attacher()


// EXPORTS //

module.exports = attacher;
