declare module 'blueimp-load-image' {
  export default function loadImage(url: File | Blob | string,
    callback: (img: HTMLImageElement | HTMLCanvasElement | Event) => void, { }): any;
}

declare module 'ndarray-gemm' {
  import ndarray from 'ndarray';
  export default function matrixProduct(c: ndarray.NdArray, a: ndarray.NdArray, b: ndarray.NdArray, alpha?: number,
    beta?: number): void;
}

declare module 'ndarray-ops' {
  import ndarray from 'ndarray';
  export function assign<T extends ndarray.Data = ndarray.Data<number>>(dest: ndarray.NdArray<T>,
    src: ndarray.NdArray<T>): ndarray.NdArray<T>;
  export function assigns<T extends ndarray.Data = ndarray.Data<number>>(dest: ndarray.NdArray<T>,
    val: ndarray.Data<T>): ndarray.NdArray<T>;

  // add[,s,eq,seq] - Addition, +
  export function add(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function adds(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function addeq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function addseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // sub[,s,eq,seq] - Subtraction, -
  export function sub(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function subs(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function subeq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function subseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // mul[,s,eq,seq] - Multiplication, *
  export function mul(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function muls(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function muleq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function mulseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // div[,s,eq,seq] - Division, /
  export function div(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function divs(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function diveq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function divseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // mod[,s,eq,seq] - Modulo, %
  export function mod(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function mods(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function modeq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function modseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // band[,s,eq,seq] - Bitwise And, &
  export function band(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function bands(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function bandeq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function bandseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // bor[,s,eq,seq] - Bitwise Or, &
  export function bor(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function bors(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function boreq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function borseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // bxor[,s,eq,seq] - Bitwise Xor, ^
  export function bxor(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function bxors(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function bxoreq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function bxorseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // lshift[,s,eq,seq] - Left shift, <<
  export function lshift(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function lshifts(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function lshifteq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function lshiftseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // rshift[,s,eq,seq] - Signed right shift, >>
  export function rshift(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function rshifts(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function rshifteq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function rshiftseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // rrshift[,s,eq,seq] - Unsigned right shift, >>>
  export function rrshift(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function rrshifts(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function rrshifteq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function rrshiftseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // lt[,s,eq,seq] - Less than, <
  export function lt(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function lts(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function lteq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function ltseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // gt[,s,eq,seq] - Greater than, >
  export function gt(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function gts(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function gteq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function gtseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // leq[,s,eq,seq] - Less than or equal, <=
  export function leq(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function leqs(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function leqeq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function leqseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // geq[,s,eq,seq] - Greater than or equal >=
  export function geq(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function geqs(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function geqeq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function geqseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // eq[,s,eq,seq] - Equals, ===
  export function eq(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function eqs(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function eqeq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function eqseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // neq[,s,eq,seq] - Not equals, !==
  export function neq(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function neqs(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function neqeq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function neqseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // and[,s,eq,seq] - Boolean And, &&
  export function and(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function ands(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function andeq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function andseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // or[,s,eq,seq] - Boolean Or, ||
  export function or(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function ors(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function oreq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function orseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // max[,s,eq,seq] - Maximum, Math.max
  export function max(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function maxs(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function maxeq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function maxseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // min[,s,eq,seq] - Minimum, Math.min
  export function min(dest: ndarray.NdArray, arg1: ndarray.NdArray, arg2: ndarray.NdArray): ndarray.NdArray;
  export function mins(dest: ndarray.NdArray, arg1: ndarray.NdArray, scalar: number): ndarray.NdArray;
  export function mineq(dest: ndarray.NdArray, arg1: ndarray.NdArray): ndarray.NdArray;
  export function minseq(dest: ndarray.NdArray, scalar: number): ndarray.NdArray;

  // not[,eq] - Boolean not, !
  export function not(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function noteq(dest: ndarray.NdArray): ndarray.NdArray;

  // bnot[,eq] - Bitwise not, ~
  export function bnot(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function bnoteq(dest: ndarray.NdArray): ndarray.NdArray;

  // neg[,eq] - Negative, -
  export function neg(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function negeq(dest: ndarray.NdArray): ndarray.NdArray;

  // recip[,eq] - Reciprocal, 1.0/
  export function recip(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function recipeq(dest: ndarray.NdArray): ndarray.NdArray;

  // abs[,eq] - Absolute value, Math.abs
  export function abs(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function abseq(dest: ndarray.NdArray): ndarray.NdArray;

  // acos[,eq] - Inverse cosine, Math.acos
  export function acos(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function acoseq(dest: ndarray.NdArray): ndarray.NdArray;

  // asin[,eq] - Inverse sine, Math.asin
  export function asin(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function asineq(dest: ndarray.NdArray): ndarray.NdArray;

  // atan[,eq] - Inverse tangent, Math.atan
  export function atan(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function ataneq(dest: ndarray.NdArray): ndarray.NdArray;

  // ceil[,eq] - Ceiling, Math.ceil
  export function ceil(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function ceileq(dest: ndarray.NdArray): ndarray.NdArray;

  // cos[,eq] - Cosine, Math.cos
  export function cos(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function coseq(dest: ndarray.NdArray): ndarray.NdArray;

  // exp[,eq] - Exponent, Math.exp
  export function exp(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function expeq(dest: ndarray.NdArray): ndarray.NdArray;

  // floor[,eq] - Floor, Math.floor
  export function floor(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function flooreq(dest: ndarray.NdArray): ndarray.NdArray;

  // log[,eq] - Logarithm, Math.log
  export function log(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function logeq(dest: ndarray.NdArray): ndarray.NdArray;

  // round[,eq] - Round, Math.round
  export function round(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function roundeq(dest: ndarray.NdArray): ndarray.NdArray;

  // sin[,eq] - Sine, Math.sin
  export function sin(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function sineq(dest: ndarray.NdArray): ndarray.NdArray;

  // sqrt[,eq] - Square root, Math.sqrt
  export function sqrt(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function sqrteq(dest: ndarray.NdArray): ndarray.NdArray;

  // tan[,eq] - Tangent, Math.tan
  export function tan(dest: ndarray.NdArray, arg: ndarray.NdArray): ndarray.NdArray;
  export function taneq(dest: ndarray.NdArray): ndarray.NdArray;
}
