/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var f32 = require( '@stdlib/number-float64-base-to-float32' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var floor = require( '@stdlib/math-base-special-floor' );


// VARIABLES //

// Blocksize for pairwise summation (NOTE: decreasing the blocksize decreases rounding error as more pairs are summed, but also decreases performance. Because the inner loop is unrolled eight times, the blocksize is effectively `16`.):
var BLOCKSIZE = 128;


// MAIN //

/**
* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.
*
* ## Method
*
* -   This implementation uses pairwise summation, which accrues rounding error `O(log2 N)` instead of `O(N)`. The recursion depth is also `O(log2 N)`.
*
* ## References
*
* -   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050](https://doi.org/10.1137/0914050).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} sum
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
*
* var v = snansumpw( 5, x, 2, 1 );
* // returns 5.0
*/
function snansumpw( N, x, strideX, offsetX ) {
	var ix;
	var s0;
	var s1;
	var s2;
	var s3;
	var s4;
	var s5;
	var s6;
	var s7;
	var M;
	var s;
	var n;
	var i;

	if ( N <= 0 ) {
		return 0.0;
	}
	ix = offsetX;
	if ( strideX === 0 ) {
		if ( isnanf( x[ ix ] ) ) {
			return 0.0;
		}
		return N * x[ ix ];
	}
	if ( N < 8 ) {
		// Use simple summation...
		s = 0.0;
		for ( i = 0; i < N; i++ ) {
			if ( isnanf( x[ ix ] ) === false ) {
				s = f32( s + x[ ix ] );
			}
			ix += strideX;
		}
		return s;
	}
	if ( N <= BLOCKSIZE ) {
		// Sum a block with 8 accumulators (by loop unrolling, we lower the effective blocksize to 16)...
		s0 = ( isnanf( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += strideX;
		s1 = ( isnanf( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += strideX;
		s2 = ( isnanf( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += strideX;
		s3 = ( isnanf( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += strideX;
		s4 = ( isnanf( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += strideX;
		s5 = ( isnanf( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += strideX;
		s6 = ( isnanf( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += strideX;
		s7 = ( isnanf( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += strideX;

		M = N % 8;
		for ( i = 8; i < N-M; i += 8 ) {
			s0 = ( isnanf( x[ ix ] ) ) ? s0 : f32( s0 + x[ ix ] );
			ix += strideX;
			s1 = ( isnanf( x[ ix ] ) ) ? s1 : f32( s1 + x[ ix ] );
			ix += strideX;
			s2 = ( isnanf( x[ ix ] ) ) ? s2 : f32( s2 + x[ ix ] );
			ix += strideX;
			s3 = ( isnanf( x[ ix ] ) ) ? s3 : f32( s3 + x[ ix ] );
			ix += strideX;
			s4 = ( isnanf( x[ ix ] ) ) ? s4 : f32( s4 + x[ ix ] );
			ix += strideX;
			s5 = ( isnanf( x[ ix ] ) ) ? s5 : f32( s5 + x[ ix ] );
			ix += strideX;
			s6 = ( isnanf( x[ ix ] ) ) ? s6 : f32( s6 + x[ ix ] );
			ix += strideX;
			s7 = ( isnanf( x[ ix ] ) ) ? s7 : f32( s7 + x[ ix ] );
			ix += strideX;
		}
		// Pairwise sum the accumulators:
		s = f32( f32( f32(s0+s1) + f32(s2+s3) ) + f32( f32(s4+s5) + f32(s6+s7) ) ); // eslint-disable-line max-len

		// Clean-up loop...
		for ( i; i < N; i++ ) {
			if ( isnanf( x[ ix ] ) === false ) {
				s = f32( s + x[ ix ] );
			}
			ix += strideX;
		}
		return s;
	}
	// Recurse by dividing by two, but avoiding non-multiples of unroll factor...
	n = floor( N/2 );
	n -= n % 8;
	return f32( snansumpw( n, x, strideX, ix ) + snansumpw( N-n, x, strideX, ix+(n*strideX) ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = snansumpw;
