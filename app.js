(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS
//
// For some reason, tabs can appear in href protocols and it still works.
// So '\tjava\tSCRIPT:alert("!!!")' and 'javascript:alert("!!!")' are the same
// in practice. That is why _VirtualDom_RE_js and _VirtualDom_RE_js_html look
// so freaky.
//
// Pulling the regular expressions out to the top level gives a slight speed
// boost in small benchmarks (4-10%) but hoisting values to reduce allocation
// can be unpredictable in large programs where JIT may have a harder time with
// functions are not fully self-contained. The benefit is more that the js and
// js_html ones are so weird that I prefer to see them near each other.


var _VirtualDom_RE_script = /^script$/i;
var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;


function _VirtualDom_noScript(tag)
{
	return _VirtualDom_RE_script.test(tag) ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return _VirtualDom_RE_on_formAction.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return _VirtualDom_RE_js.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return _VirtualDom_RE_js_html.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlJson(value)
{
	return (typeof _Json_unwrap(value) === 'string' && _VirtualDom_RE_js_html.test(_Json_unwrap(value)))
		? _Json_wrap(
			/**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		) : value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		$elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}


function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $author$project$App$InitialiseTime = function (a) {
	return {$: 'InitialiseTime', a: a};
};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $author$project$App$GotMasters = function (a) {
	return {$: 'GotMasters', a: a};
};
var $author$project$App$Enum = F3(
	function (id, value, sort) {
		return {id: id, sort: sort, value: value};
	});
var $elm_community$json_extra$Json$Decode$Extra$andMap = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$App$decodeEnums = $elm$json$Json$Decode$list(
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm$json$Json$Decode$field, '_fesort', $elm$json$Json$Decode$int),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm$json$Json$Decode$field, '_feval', $elm$json$Json$Decode$string),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2($elm$json$Json$Decode$field, '_feid', $elm$json$Json$Decode$int),
				$elm$json$Json$Decode$succeed($author$project$App$Enum)))));
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var $elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var $elm$http$Http$Timeout_ = {$: 'Timeout_'};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 'BadBody', a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 'BadUrl_':
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 'Timeout_':
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 'NetworkError_':
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 'BadStatus_':
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.statusCode));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.tracker;
							if (_v4.$ === 'Nothing') {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					headers: r.headers,
					method: r.method,
					timeout: r.timeout,
					tracker: r.tracker,
					url: r.url
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{allowCookiesFromOtherDomains: false, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var $elm$http$Http$get = function (r) {
	return $elm$http$Http$request(
		{body: $elm$http$Http$emptyBody, expect: r.expect, headers: _List_Nil, method: 'GET', timeout: $elm$core$Maybe$Nothing, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $author$project$App$mastersEnumId = 1143523;
var $author$project$App$getMasters = $elm$http$Http$get(
	{
		expect: A2($elm$http$Http$expectJson, $author$project$App$GotMasters, $author$project$App$decodeEnums),
		url: 'api/enums/' + $elm$core$String$fromInt($author$project$App$mastersEnumId)
	});
var $author$project$App$GotPipelines = function (a) {
	return {$: 'GotPipelines', a: a};
};
var $author$project$App$Pipeline = F3(
	function (id, name, statuses) {
		return {id: id, name: name, statuses: statuses};
	});
var $author$project$App$Status = F2(
	function (id, name) {
		return {id: id, name: name};
	});
var $author$project$App$decodeStatuses = $elm$json$Json$Decode$list(
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm$json$Json$Decode$field, '_sname', $elm$json$Json$Decode$string),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm$json$Json$Decode$field, '_sid', $elm$json$Json$Decode$int),
			$elm$json$Json$Decode$succeed($author$project$App$Status))));
var $author$project$App$decodePipelines = $elm$json$Json$Decode$list(
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm$json$Json$Decode$field, '_pstatuses', $author$project$App$decodeStatuses),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm$json$Json$Decode$field, '_pname', $elm$json$Json$Decode$string),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2($elm$json$Json$Decode$field, '_pid', $elm$json$Json$Decode$int),
				$elm$json$Json$Decode$succeed($author$project$App$Pipeline)))));
var $author$project$App$getPipelines = $elm$http$Http$get(
	{
		expect: A2($elm$http$Http$expectJson, $author$project$App$GotPipelines, $author$project$App$decodePipelines),
		url: 'api/pipelines'
	});
var $author$project$App$GotUsers = function (a) {
	return {$: 'GotUsers', a: a};
};
var $author$project$App$decodeUsers = $elm$json$Json$Decode$list(
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm$json$Json$Decode$field, '_uname', $elm$json$Json$Decode$string),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm$json$Json$Decode$field, '_uid', $elm$json$Json$Decode$int),
			$elm$json$Json$Decode$succeed($author$project$App$Status))));
var $author$project$App$getUsers = $elm$http$Http$get(
	{
		expect: A2($elm$http$Http$expectJson, $author$project$App$GotUsers, $author$project$App$decodeUsers),
		url: 'api/users'
	});
var $author$project$App$Success = {$: 'Success'};
var $author$project$App$initModel = {
	created_at_picker: $elm$core$Maybe$Nothing,
	filter: {created_at: $elm$core$Maybe$Nothing, master: $elm$core$Maybe$Nothing, pipeline: $elm$core$Maybe$Nothing, status: $elm$core$Maybe$Nothing, user: $elm$core$Maybe$Nothing},
	httpStatus: $author$project$App$Success,
	leads: $elm$core$Maybe$Nothing,
	masters: $elm$core$Maybe$Nothing,
	pipelines: $elm$core$Maybe$Nothing,
	statuses: $elm$core$Maybe$Nothing,
	users: $elm$core$Maybe$Nothing,
	withInput: {created_at_picker: $elm$core$Maybe$Nothing}
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $author$project$App$CreatedAtPickerMsg = function (a) {
	return {$: 'CreatedAtPickerMsg', a: a};
};
var $author$project$App$LastFailure = function (a) {
	return {$: 'LastFailure', a: a};
};
var $author$project$App$Loading = function (a) {
	return {$: 'Loading', a: a};
};
var $elm$time$Time$Mon = {$: 'Mon'};
var $author$project$Extra$I18n$Russian = {$: 'Russian'};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $author$project$App$GotLeads = function (a) {
	return {$: 'GotLeads', a: a};
};
var $author$project$App$Lead = function (id) {
	return function (name) {
		return function (href) {
			return function (responsible) {
				return function (master) {
					return function (masterSalary) {
						return function (address) {
							return function (city) {
								return function (dateVisit) {
									return function (ltype) {
										return function (sellCost) {
											return function (partsCost) {
												return function (worksCost) {
													return function (netWorksCost) {
														return function (officeIncome) {
															return function (closedDate) {
																return function (statusId) {
																	return {address: address, city: city, closedDate: closedDate, dateVisit: dateVisit, href: href, id: id, ltype: ltype, master: master, masterSalary: masterSalary, name: name, netWorksCost: netWorksCost, officeIncome: officeIncome, partsCost: partsCost, responsible: responsible, sellCost: sellCost, statusId: statusId, worksCost: worksCost};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $rtfeldman$elm_iso8601_date_strings$DeadEnds$problemToString = function (p) {
	switch (p.$) {
		case 'Expecting':
			var s = p.a;
			return 'expecting \'' + (s + '\'');
		case 'ExpectingInt':
			return 'expecting int';
		case 'ExpectingHex':
			return 'expecting hex';
		case 'ExpectingOctal':
			return 'expecting octal';
		case 'ExpectingBinary':
			return 'expecting binary';
		case 'ExpectingFloat':
			return 'expecting float';
		case 'ExpectingNumber':
			return 'expecting number';
		case 'ExpectingVariable':
			return 'expecting variable';
		case 'ExpectingSymbol':
			var s = p.a;
			return 'expecting symbol \'' + (s + '\'');
		case 'ExpectingKeyword':
			var s = p.a;
			return 'expecting keyword \'' + (s + '\'');
		case 'ExpectingEnd':
			return 'expecting end';
		case 'UnexpectedChar':
			return 'unexpected char';
		case 'Problem':
			var s = p.a;
			return 'problem ' + s;
		default:
			return 'bad repeat';
	}
};
var $rtfeldman$elm_iso8601_date_strings$DeadEnds$deadEndToString = function (deadend) {
	return $rtfeldman$elm_iso8601_date_strings$DeadEnds$problemToString(deadend.problem) + (' at row ' + ($elm$core$String$fromInt(deadend.row) + (', col ' + $elm$core$String$fromInt(deadend.col))));
};
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $rtfeldman$elm_iso8601_date_strings$DeadEnds$deadEndsToString = function (deadEnds) {
	return $elm$core$String$concat(
		A2(
			$elm$core$List$intersperse,
			'; ',
			A2($elm$core$List$map, $rtfeldman$elm_iso8601_date_strings$DeadEnds$deadEndToString, deadEnds)));
};
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parseA(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					var _v2 = callback(a);
					var parseB = _v2.a;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $elm$parser$Parser$ExpectingEnd = {$: 'ExpectingEnd'};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var $elm$parser$Parser$Advanced$end = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return _Utils_eq(
				$elm$core$String$length(s.src),
				s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3($elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $elm$parser$Parser$Problem = function (a) {
	return {$: 'Problem', a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $elm$core$Basics$round = _Basics_round;
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $elm$core$String$toFloat = _String_toFloat;
var $rtfeldman$elm_iso8601_date_strings$Iso8601$fractionsOfASecondInMs = A2(
	$elm$parser$Parser$andThen,
	function (str) {
		if ($elm$core$String$length(str) <= 9) {
			var _v0 = $elm$core$String$toFloat('0.' + str);
			if (_v0.$ === 'Just') {
				var floatVal = _v0.a;
				return $elm$parser$Parser$succeed(
					$elm$core$Basics$round(floatVal * 1000));
			} else {
				return $elm$parser$Parser$problem('Invalid float: \"' + (str + '\"'));
			}
		} else {
			return $elm$parser$Parser$problem(
				'Expected at most 9 digits, but got ' + $elm$core$String$fromInt(
					$elm$core$String$length(str)));
		}
	},
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$chompWhile($elm$core$Char$isDigit)));
var $rtfeldman$elm_iso8601_date_strings$Iso8601$fromParts = F6(
	function (monthYearDayMs, hour, minute, second, ms, utcOffsetMinutes) {
		return $elm$time$Time$millisToPosix((((monthYearDayMs + (((hour * 60) * 60) * 1000)) + (((minute - utcOffsetMinutes) * 60) * 1000)) + (second * 1000)) + ms);
	});
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0.a;
		var parseB = _v1.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v2 = parseA(s0);
				if (_v2.$ === 'Bad') {
					var p = _v2.a;
					var x = _v2.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v2.a;
					var a = _v2.b;
					var s1 = _v2.c;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3(
							$elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $elm$parser$Parser$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$core$String$append = _String_append;
var $elm$parser$Parser$UnexpectedChar = {$: 'UnexpectedChar'};
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0.a;
			var _v1 = parse(s0);
			if (_v1.$ === 'Good') {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (step.$ === 'Loop') {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$toAdvancedStep = function (step) {
	if (step.$ === 'Loop') {
		var s = step.a;
		return $elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return $elm$parser$Parser$Advanced$Done(a);
	}
};
var $elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					$elm$parser$Parser$map,
					$elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt = function (quantity) {
	var helper = function (str) {
		if (_Utils_eq(
			$elm$core$String$length(str),
			quantity)) {
			var _v0 = $elm$core$String$toInt(str);
			if (_v0.$ === 'Just') {
				var intVal = _v0.a;
				return A2(
					$elm$parser$Parser$map,
					$elm$parser$Parser$Done,
					$elm$parser$Parser$succeed(intVal));
			} else {
				return $elm$parser$Parser$problem('Invalid integer: \"' + (str + '\"'));
			}
		} else {
			return A2(
				$elm$parser$Parser$map,
				function (nextChar) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$String$append, str, nextChar));
				},
				$elm$parser$Parser$getChompedString(
					$elm$parser$Parser$chompIf($elm$core$Char$isDigit)));
		}
	};
	return A2($elm$parser$Parser$loop, '', helper);
};
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 'ExpectingSymbol', a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$core$Basics$not = _Basics_not;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $rtfeldman$elm_iso8601_date_strings$Iso8601$epochYear = 1970;
var $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay = function (day) {
	return $elm$parser$Parser$problem(
		'Invalid day: ' + $elm$core$String$fromInt(day));
};
var $elm$core$Basics$modBy = _Basics_modBy;
var $elm$core$Basics$neq = _Utils_notEqual;
var $rtfeldman$elm_iso8601_date_strings$Iso8601$isLeapYear = function (year) {
	return (!A2($elm$core$Basics$modBy, 4, year)) && ((!(!A2($elm$core$Basics$modBy, 100, year))) || (!A2($elm$core$Basics$modBy, 400, year)));
};
var $rtfeldman$elm_iso8601_date_strings$Iso8601$leapYearsBefore = function (y1) {
	var y = y1 - 1;
	return (((y / 4) | 0) - ((y / 100) | 0)) + ((y / 400) | 0);
};
var $rtfeldman$elm_iso8601_date_strings$Iso8601$msPerDay = 86400000;
var $rtfeldman$elm_iso8601_date_strings$Iso8601$msPerYear = 31536000000;
var $rtfeldman$elm_iso8601_date_strings$Iso8601$yearMonthDay = function (_v0) {
	var year = _v0.a;
	var month = _v0.b;
	var dayInMonth = _v0.c;
	if (dayInMonth < 0) {
		return $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth);
	} else {
		var succeedWith = function (extraMs) {
			var yearMs = $rtfeldman$elm_iso8601_date_strings$Iso8601$msPerYear * (year - $rtfeldman$elm_iso8601_date_strings$Iso8601$epochYear);
			var days = ((month < 3) || (!$rtfeldman$elm_iso8601_date_strings$Iso8601$isLeapYear(year))) ? (dayInMonth - 1) : dayInMonth;
			var dayMs = $rtfeldman$elm_iso8601_date_strings$Iso8601$msPerDay * (days + ($rtfeldman$elm_iso8601_date_strings$Iso8601$leapYearsBefore(year) - $rtfeldman$elm_iso8601_date_strings$Iso8601$leapYearsBefore($rtfeldman$elm_iso8601_date_strings$Iso8601$epochYear)));
			return $elm$parser$Parser$succeed((extraMs + yearMs) + dayMs);
		};
		switch (month) {
			case 1:
				return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(0);
			case 2:
				return ((dayInMonth > 29) || ((dayInMonth === 29) && (!$rtfeldman$elm_iso8601_date_strings$Iso8601$isLeapYear(year)))) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(2678400000);
			case 3:
				return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(5097600000);
			case 4:
				return (dayInMonth > 30) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(7776000000);
			case 5:
				return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(10368000000);
			case 6:
				return (dayInMonth > 30) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(13046400000);
			case 7:
				return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(15638400000);
			case 8:
				return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(18316800000);
			case 9:
				return (dayInMonth > 30) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(20995200000);
			case 10:
				return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(23587200000);
			case 11:
				return (dayInMonth > 30) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(26265600000);
			case 12:
				return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(28857600000);
			default:
				return $elm$parser$Parser$problem(
					'Invalid month: \"' + ($elm$core$String$fromInt(month) + '\"'));
		}
	}
};
var $rtfeldman$elm_iso8601_date_strings$Iso8601$monthYearDayInMs = A2(
	$elm$parser$Parser$andThen,
	$rtfeldman$elm_iso8601_date_strings$Iso8601$yearMonthDay,
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					F3(
						function (year, month, day) {
							return _Utils_Tuple3(year, month, day);
						})),
				$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(4)),
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed($elm$core$Basics$identity),
							$elm$parser$Parser$symbol('-')),
						$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
						$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)
					]))),
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed($elm$core$Basics$identity),
						$elm$parser$Parser$symbol('-')),
					$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
					$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)
				]))));
var $rtfeldman$elm_iso8601_date_strings$Iso8601$utcOffsetInMinutes = function () {
	var utcOffsetMinutesFromParts = F3(
		function (multiplier, hours, minutes) {
			return (multiplier * (hours * 60)) + minutes;
		});
	return A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Basics$identity),
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$map,
					function (_v0) {
						return 0;
					},
					$elm$parser$Parser$symbol('Z')),
					A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							$elm$parser$Parser$succeed(utcOffsetMinutesFromParts),
							$elm$parser$Parser$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$parser$Parser$map,
										function (_v1) {
											return 1;
										},
										$elm$parser$Parser$symbol('+')),
										A2(
										$elm$parser$Parser$map,
										function (_v2) {
											return -1;
										},
										$elm$parser$Parser$symbol('-'))
									]))),
						$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								A2(
								$elm$parser$Parser$keeper,
								A2(
									$elm$parser$Parser$ignorer,
									$elm$parser$Parser$succeed($elm$core$Basics$identity),
									$elm$parser$Parser$symbol(':')),
								$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
								$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2),
								$elm$parser$Parser$succeed(0)
							]))),
					A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(0),
					$elm$parser$Parser$end)
				])));
}();
var $rtfeldman$elm_iso8601_date_strings$Iso8601$iso8601 = A2(
	$elm$parser$Parser$andThen,
	function (datePart) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$keeper,
								A2(
									$elm$parser$Parser$keeper,
									A2(
										$elm$parser$Parser$ignorer,
										$elm$parser$Parser$succeed(
											$rtfeldman$elm_iso8601_date_strings$Iso8601$fromParts(datePart)),
										$elm$parser$Parser$symbol('T')),
									$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
								$elm$parser$Parser$oneOf(
									_List_fromArray(
										[
											A2(
											$elm$parser$Parser$keeper,
											A2(
												$elm$parser$Parser$ignorer,
												$elm$parser$Parser$succeed($elm$core$Basics$identity),
												$elm$parser$Parser$symbol(':')),
											$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
											$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)
										]))),
							$elm$parser$Parser$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$parser$Parser$keeper,
										A2(
											$elm$parser$Parser$ignorer,
											$elm$parser$Parser$succeed($elm$core$Basics$identity),
											$elm$parser$Parser$symbol(':')),
										$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
										$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2),
										$elm$parser$Parser$succeed(0)
									]))),
						$elm$parser$Parser$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$keeper,
									A2(
										$elm$parser$Parser$ignorer,
										$elm$parser$Parser$succeed($elm$core$Basics$identity),
										$elm$parser$Parser$symbol('.')),
									$rtfeldman$elm_iso8601_date_strings$Iso8601$fractionsOfASecondInMs),
									$elm$parser$Parser$succeed(0)
								]))),
					A2($elm$parser$Parser$ignorer, $rtfeldman$elm_iso8601_date_strings$Iso8601$utcOffsetInMinutes, $elm$parser$Parser$end)),
					A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						A6($rtfeldman$elm_iso8601_date_strings$Iso8601$fromParts, datePart, 0, 0, 0, 0, 0)),
					$elm$parser$Parser$end)
				]));
	},
	$rtfeldman$elm_iso8601_date_strings$Iso8601$monthYearDayInMs);
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {col: col, problem: problem, row: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0.a;
		var _v1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_v1.$ === 'Good') {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (_v0.$ === 'Ok') {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $rtfeldman$elm_iso8601_date_strings$Iso8601$toTime = function (str) {
	return A2($elm$parser$Parser$run, $rtfeldman$elm_iso8601_date_strings$Iso8601$iso8601, str);
};
var $rtfeldman$elm_iso8601_date_strings$Iso8601$decoder = A2(
	$elm$json$Json$Decode$andThen,
	function (str) {
		var _v0 = $rtfeldman$elm_iso8601_date_strings$Iso8601$toTime(str);
		if (_v0.$ === 'Err') {
			var deadEnds = _v0.a;
			return $elm$json$Json$Decode$fail(
				$rtfeldman$elm_iso8601_date_strings$DeadEnds$deadEndsToString(deadEnds));
		} else {
			var time = _v0.a;
			return $elm$json$Json$Decode$succeed(time);
		}
	},
	$elm$json$Json$Decode$string);
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $author$project$App$decodeLeads = $elm$json$Json$Decode$list(
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm$json$Json$Decode$field, '_lstatusId', $elm$json$Json$Decode$int),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			$elm$json$Json$Decode$maybe(
				A2($elm$json$Json$Decode$field, '_lclosedDate', $rtfeldman$elm_iso8601_date_strings$Iso8601$decoder)),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2($elm$json$Json$Decode$field, '_lofficeIncome', $elm$json$Json$Decode$float),
				A2(
					$elm_community$json_extra$Json$Decode$Extra$andMap,
					A2($elm$json$Json$Decode$field, '_lnetWorksCost', $elm$json$Json$Decode$float),
					A2(
						$elm_community$json_extra$Json$Decode$Extra$andMap,
						A2($elm$json$Json$Decode$field, '_lworksCost', $elm$json$Json$Decode$float),
						A2(
							$elm_community$json_extra$Json$Decode$Extra$andMap,
							A2($elm$json$Json$Decode$field, '_lpartsCost', $elm$json$Json$Decode$float),
							A2(
								$elm_community$json_extra$Json$Decode$Extra$andMap,
								A2($elm$json$Json$Decode$field, '_lsellCost', $elm$json$Json$Decode$float),
								A2(
									$elm_community$json_extra$Json$Decode$Extra$andMap,
									A2($elm$json$Json$Decode$field, '_ltype', $elm$json$Json$Decode$string),
									A2(
										$elm_community$json_extra$Json$Decode$Extra$andMap,
										$elm$json$Json$Decode$maybe(
											A2($elm$json$Json$Decode$field, '_ldateVisit', $rtfeldman$elm_iso8601_date_strings$Iso8601$decoder)),
										A2(
											$elm_community$json_extra$Json$Decode$Extra$andMap,
											A2($elm$json$Json$Decode$field, '_lcity', $elm$json$Json$Decode$string),
											A2(
												$elm_community$json_extra$Json$Decode$Extra$andMap,
												A2($elm$json$Json$Decode$field, '_laddress', $elm$json$Json$Decode$string),
												A2(
													$elm_community$json_extra$Json$Decode$Extra$andMap,
													A2($elm$json$Json$Decode$field, '_lmasterSalary', $elm$json$Json$Decode$float),
													A2(
														$elm_community$json_extra$Json$Decode$Extra$andMap,
														$elm$json$Json$Decode$maybe(
															A2($elm$json$Json$Decode$field, '_lmaster', $elm$json$Json$Decode$int)),
														A2(
															$elm_community$json_extra$Json$Decode$Extra$andMap,
															A2($elm$json$Json$Decode$field, '_lresponsible', $elm$json$Json$Decode$int),
															A2(
																$elm_community$json_extra$Json$Decode$Extra$andMap,
																A2($elm$json$Json$Decode$field, '_href', $elm$json$Json$Decode$string),
																A2(
																	$elm_community$json_extra$Json$Decode$Extra$andMap,
																	A2($elm$json$Json$Decode$field, '_lname', $elm$json$Json$Decode$string),
																	A2(
																		$elm_community$json_extra$Json$Decode$Extra$andMap,
																		A2($elm$json$Json$Decode$field, '_lid', $elm$json$Json$Decode$int),
																		$elm$json$Json$Decode$succeed($author$project$App$Lead)))))))))))))))))));
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$App$getLeads = F3(
	function (user, status, master) {
		var status2 = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (s) {
					return '&status=' + s;
				},
				status));
		var master2 = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (s) {
					return '&master=' + s;
				},
				master));
		return $elm$http$Http$get(
			{
				expect: A2($elm$http$Http$expectJson, $author$project$App$GotLeads, $author$project$App$decodeLeads),
				url: 'api/leads/?user=' + (user + (status2 + master2))
			});
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Types$DateLimit = function (a) {
	return {$: 'DateLimit', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Types$Double = {$: 'Double'};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime = function (a) {
	return {$: 'DateTime', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Date = function (a) {
	return {$: 'Date', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Year = function (a) {
	return {$: 'Year', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt = function (_v0) {
	var day = _v0.a;
	return day;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareDays = F2(
	function (lhs, rhs) {
		return A2(
			$elm$core$Basics$compare,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(lhs),
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(rhs));
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day = function (a) {
	return {$: 'Day', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$isLeapYear = function (_v0) {
	var _int = _v0.a;
	return (!A2($elm$core$Basics$modBy, 4, _int)) && ((!A2($elm$core$Basics$modBy, 400, _int)) || (!(!A2($elm$core$Basics$modBy, 100, _int))));
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf = F2(
	function (year, month) {
		switch (month.$) {
			case 'Jan':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(31);
			case 'Feb':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$isLeapYear(year) ? $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(29) : $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(28);
			case 'Mar':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(31);
			case 'Apr':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(30);
			case 'May':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(31);
			case 'Jun':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(30);
			case 'Jul':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(31);
			case 'Aug':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(31);
			case 'Sep':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(30);
			case 'Oct':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(31);
			case 'Nov':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(30);
			default:
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(31);
		}
	});
var $elm$time$Time$Apr = {$: 'Apr'};
var $elm$time$Time$Aug = {$: 'Aug'};
var $elm$time$Time$Dec = {$: 'Dec'};
var $elm$time$Time$Feb = {$: 'Feb'};
var $elm$time$Time$Jan = {$: 'Jan'};
var $elm$time$Time$Jul = {$: 'Jul'};
var $elm$time$Time$Jun = {$: 'Jun'};
var $elm$time$Time$Mar = {$: 'Mar'};
var $elm$time$Time$May = {$: 'May'};
var $elm$time$Time$Nov = {$: 'Nov'};
var $elm$time$Time$Oct = {$: 'Oct'};
var $elm$time$Time$Sep = {$: 'Sep'};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$rollMonthBackwards = function (month) {
	switch (month.$) {
		case 'Jan':
			return $elm$time$Time$Dec;
		case 'Feb':
			return $elm$time$Time$Jan;
		case 'Mar':
			return $elm$time$Time$Feb;
		case 'Apr':
			return $elm$time$Time$Mar;
		case 'May':
			return $elm$time$Time$Apr;
		case 'Jun':
			return $elm$time$Time$May;
		case 'Jul':
			return $elm$time$Time$Jun;
		case 'Aug':
			return $elm$time$Time$Jul;
		case 'Sep':
			return $elm$time$Time$Aug;
		case 'Oct':
			return $elm$time$Time$Sep;
		case 'Nov':
			return $elm$time$Time$Oct;
		default:
			return $elm$time$Time$Nov;
	}
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt = function (_v0) {
	var year = _v0.a;
	return year;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$decrementMonth = function (_v0) {
	var date = _v0.a;
	var updatedMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$rollMonthBackwards(date.month);
	var updatedYear = function () {
		if (updatedMonth.$ === 'Dec') {
			return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Year(
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt(date.year) - 1);
		} else {
			return date.year;
		}
	}();
	var lastDayOfUpdatedMonth = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, updatedYear, updatedMonth);
	var updatedDay = function () {
		var _v1 = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareDays, date.day, lastDayOfUpdatedMonth);
		if (_v1.$ === 'GT') {
			return lastDayOfUpdatedMonth;
		} else {
			return date.day;
		}
	}();
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Date(
		{day: updatedDay, month: updatedMonth, year: updatedYear});
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$decrementMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$decrementMonth;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$decrementMonth = function (_v0) {
	var date = _v0.a.date;
	var time = _v0.a.time;
	return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
		{
			date: $PanagiotisGeorgiadis$elm_datetime$Calendar$decrementMonth(date),
			time: time
		});
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$decrementMonth = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$decrementMonth;
var $author$project$Extra$DateTime$decrementMonths = F2(
	function (count, dateTime) {
		decrementMonths:
		while (true) {
			if (count > 0) {
				var $temp$count = count - 1,
					$temp$dateTime = $PanagiotisGeorgiadis$elm_datetime$DateTime$decrementMonth(dateTime);
				count = $temp$count;
				dateTime = $temp$dateTime;
				continue decrementMonths;
			} else {
				return dateTime;
			}
		}
	});
var $elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return $elm$core$Basics$floor(numerator / denominator);
	});
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.start, posixMinutes) < 0) {
					return posixMinutes + era.offset;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var $elm$time$Time$toAdjustedMinutes = F2(
	function (_v0, time) {
		var defaultOffset = _v0.a;
		var eras = _v0.b;
		return A3(
			$elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var $elm$core$Basics$ge = _Utils_ge;
var $elm$time$Time$toCivil = function (minutes) {
	var rawDay = A2($elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
	var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
	var dayOfEra = rawDay - (era * 146097);
	var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
	var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
	var mp = (((5 * dayOfYear) + 2) / 153) | 0;
	var month = mp + ((mp < 10) ? 3 : (-9));
	var year = yearOfEra + (era * 400);
	return {
		day: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		month: month,
		year: year + ((month <= 2) ? 1 : 0)
	};
};
var $elm$time$Time$toDay = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).day;
	});
var $elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _v0 = $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).month;
		switch (_v0) {
			case 1:
				return $elm$time$Time$Jan;
			case 2:
				return $elm$time$Time$Feb;
			case 3:
				return $elm$time$Time$Mar;
			case 4:
				return $elm$time$Time$Apr;
			case 5:
				return $elm$time$Time$May;
			case 6:
				return $elm$time$Time$Jun;
			case 7:
				return $elm$time$Time$Jul;
			case 8:
				return $elm$time$Time$Aug;
			case 9:
				return $elm$time$Time$Sep;
			case 10:
				return $elm$time$Time$Oct;
			case 11:
				return $elm$time$Time$Nov;
			default:
				return $elm$time$Time$Dec;
		}
	});
var $elm$time$Time$toYear = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).year;
	});
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromPosix = function (posix) {
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Date(
		{
			day: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(
				A2($elm$time$Time$toDay, $elm$time$Time$utc, posix)),
			month: A2($elm$time$Time$toMonth, $elm$time$Time$utc, posix),
			year: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Year(
				A2($elm$time$Time$toYear, $elm$time$Time$utc, posix))
		});
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour = function (a) {
	return {$: 'Hour', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond = function (a) {
	return {$: 'Millisecond', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute = function (a) {
	return {$: 'Minute', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second = function (a) {
	return {$: 'Second', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time = function (a) {
	return {$: 'Time', a: a};
};
var $elm$time$Time$toHour = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			24,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60));
	});
var $elm$time$Time$toMillis = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			1000,
			$elm$time$Time$posixToMillis(time));
	});
var $elm$time$Time$toMinute = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2($elm$time$Time$toAdjustedMinutes, zone, time));
	});
var $elm$time$Time$toSecond = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				1000));
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromPosix = function (posix) {
	return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
		{
			hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour(
				A2($elm$time$Time$toHour, $elm$time$Time$utc, posix)),
			milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond(
				A2($elm$time$Time$toMillis, $elm$time$Time$utc, posix)),
			minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute(
				A2($elm$time$Time$toMinute, $elm$time$Time$utc, posix)),
			seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second(
				A2($elm$time$Time$toSecond, $elm$time$Time$utc, posix))
		});
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$fromPosix = function (timePosix) {
	return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
		{
			date: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromPosix(timePosix),
			time: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromPosix(timePosix)
		});
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$fromPosix = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$fromPosix;
var $author$project$Extra$I18n$English = {$: 'English'};
var $author$project$Extra$I18n$Greek = {$: 'Greek'};
var $author$project$Extra$I18n$getEnglishMonth = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'January';
		case 'Feb':
			return 'February';
		case 'Mar':
			return 'March';
		case 'Apr':
			return 'April';
		case 'May':
			return 'May';
		case 'Jun':
			return 'June';
		case 'Jul':
			return 'July';
		case 'Aug':
			return 'August';
		case 'Sep':
			return 'September';
		case 'Oct':
			return 'October';
		case 'Nov':
			return 'November';
		default:
			return 'December';
	}
};
var $author$project$Extra$I18n$getGreekMonth = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'Ιανουάριος';
		case 'Feb':
			return 'Φεβρουάριος';
		case 'Mar':
			return 'Μάρτιος';
		case 'Apr':
			return 'Απρίλιος';
		case 'May':
			return 'Μάϊος';
		case 'Jun':
			return 'Ιούνιος';
		case 'Jul':
			return 'Ιούλιος';
		case 'Aug':
			return 'Αύγουστος';
		case 'Sep':
			return 'Σεπτέμβριος';
		case 'Oct':
			return 'Οκτώβριος';
		case 'Nov':
			return 'Νοέμβριος';
		default:
			return 'Δεκέμβριος';
	}
};
var $author$project$Extra$I18n$getRussianMonth = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'Январь';
		case 'Feb':
			return 'Февраль';
		case 'Mar':
			return 'Март';
		case 'Apr':
			return 'Апрель';
		case 'May':
			return 'Май';
		case 'Jun':
			return 'Июнь';
		case 'Jul':
			return 'Июль';
		case 'Aug':
			return 'Август';
		case 'Sep':
			return 'Сентябрь';
		case 'Oct':
			return 'Октябрь';
		case 'Nov':
			return 'Ноябрь';
		default:
			return 'Декабрь';
	}
};
var $author$project$Extra$I18n$monthToString = F3(
	function (language, textMode, month) {
		var monthString = function () {
			switch (language.$) {
				case 'Greek':
					return $author$project$Extra$I18n$getGreekMonth(month);
				case 'English':
					return $author$project$Extra$I18n$getEnglishMonth(month);
				default:
					return $author$project$Extra$I18n$getRussianMonth(month);
			}
		}();
		if (textMode.$ === 'Condensed') {
			return A2($elm$core$String$left, 3, monthString);
		} else {
			return monthString;
		}
	});
var $author$project$Extra$I18n$getEnglishWeekday = function (weekday) {
	switch (weekday.$) {
		case 'Mon':
			return 'Monday';
		case 'Tue':
			return 'Tuesday';
		case 'Wed':
			return 'Wednesday';
		case 'Thu':
			return 'Thursday';
		case 'Fri':
			return 'Friday';
		case 'Sat':
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var $author$project$Extra$I18n$getGreekWeekday = function (weekday) {
	switch (weekday.$) {
		case 'Mon':
			return 'Δευτέρα';
		case 'Tue':
			return 'Τρίτη';
		case 'Wed':
			return 'Τετάρτη';
		case 'Thu':
			return 'Πέμπτη';
		case 'Fri':
			return 'Παρασκευή';
		case 'Sat':
			return 'Σάββατο';
		default:
			return 'Κυριακή';
	}
};
var $author$project$Extra$I18n$getRussianWeekday = function (weekday) {
	switch (weekday.$) {
		case 'Mon':
			return 'Понедельник';
		case 'Tue':
			return 'Вторник';
		case 'Wed':
			return 'Среда';
		case 'Thu':
			return 'Четверг';
		case 'Fri':
			return 'Пятница';
		case 'Sat':
			return 'Суббота';
		default:
			return 'Воскресенье';
	}
};
var $author$project$Extra$I18n$weekdayToString = F3(
	function (language, textMode, weekday) {
		var weekdayString = function () {
			switch (language.$) {
				case 'Greek':
					return $author$project$Extra$I18n$getGreekWeekday(weekday);
				case 'English':
					return $author$project$Extra$I18n$getEnglishWeekday(weekday);
				default:
					return $author$project$Extra$I18n$getRussianWeekday(weekday);
			}
		}();
		if (textMode.$ === 'Condensed') {
			return A2($elm$core$String$left, 3, weekdayString);
		} else {
			return weekdayString;
		}
	});
var $author$project$Extra$I18n$getI18n = function (language) {
	switch (language.$) {
		case 'English':
			return {
				monthToString: $author$project$Extra$I18n$monthToString($author$project$Extra$I18n$English),
				todayButtonText: 'Today',
				weekdayToString: $author$project$Extra$I18n$weekdayToString($author$project$Extra$I18n$English)
			};
		case 'Russian':
			return {
				monthToString: $author$project$Extra$I18n$monthToString($author$project$Extra$I18n$Russian),
				todayButtonText: 'Сегодня',
				weekdayToString: $author$project$Extra$I18n$weekdayToString($author$project$Extra$I18n$Russian)
			};
		default:
			return {
				monthToString: $author$project$Extra$I18n$monthToString($author$project$Extra$I18n$Greek),
				todayButtonText: 'Σήμερα',
				weekdayToString: $author$project$Extra$I18n$weekdayToString($author$project$Extra$I18n$Greek)
			};
	}
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$rollMonthForward = function (month) {
	switch (month.$) {
		case 'Jan':
			return $elm$time$Time$Feb;
		case 'Feb':
			return $elm$time$Time$Mar;
		case 'Mar':
			return $elm$time$Time$Apr;
		case 'Apr':
			return $elm$time$Time$May;
		case 'May':
			return $elm$time$Time$Jun;
		case 'Jun':
			return $elm$time$Time$Jul;
		case 'Jul':
			return $elm$time$Time$Aug;
		case 'Aug':
			return $elm$time$Time$Sep;
		case 'Sep':
			return $elm$time$Time$Oct;
		case 'Oct':
			return $elm$time$Time$Nov;
		case 'Nov':
			return $elm$time$Time$Dec;
		default:
			return $elm$time$Time$Jan;
	}
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$incrementMonth = function (_v0) {
	var date = _v0.a;
	var updatedMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$rollMonthForward(date.month);
	var updatedYear = function () {
		if (updatedMonth.$ === 'Jan') {
			return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Year(
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt(date.year) + 1);
		} else {
			return date.year;
		}
	}();
	var lastDayOfUpdatedMonth = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, updatedYear, updatedMonth);
	var updatedDay = function () {
		var _v1 = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareDays, date.day, lastDayOfUpdatedMonth);
		if (_v1.$ === 'GT') {
			return lastDayOfUpdatedMonth;
		} else {
			return date.day;
		}
	}();
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Date(
		{day: updatedDay, month: updatedMonth, year: updatedYear});
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$incrementMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$incrementMonth;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$incrementMonth = function (_v0) {
	var date = _v0.a.date;
	var time = _v0.a.time;
	return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
		{
			date: $PanagiotisGeorgiadis$elm_datetime$Calendar$incrementMonth(date),
			time: time
		});
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementMonth = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$incrementMonth;
var $author$project$Extra$DateTime$incrementMonths = F2(
	function (count, dateTime) {
		incrementMonths:
		while (true) {
			if (count > 0) {
				var $temp$count = count - 1,
					$temp$dateTime = $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementMonth(dateTime);
				count = $temp$count;
				dateTime = $temp$dateTime;
				continue incrementMonths;
			} else {
				return dateTime;
			}
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$DoubleCalendar = {$: 'DoubleCalendar'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model = function (a) {
	return {$: 'Model', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoOffset = {$: 'NoOffset'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoTimePickers = {$: 'NoTimePickers'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoneSelected = {$: 'NoneSelected'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SingleCalendar = {$: 'SingleCalendar'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers = function (a) {
	return {$: 'TimePickers', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DatePicker$Internal$I18n$monthToString = F2(
	function (mode, month) {
		var monthString = function () {
			switch (month.$) {
				case 'Jan':
					return 'January';
				case 'Feb':
					return 'February';
				case 'Mar':
					return 'March';
				case 'Apr':
					return 'April';
				case 'May':
					return 'May';
				case 'Jun':
					return 'June';
				case 'Jul':
					return 'July';
				case 'Aug':
					return 'August';
				case 'Sep':
					return 'September';
				case 'Oct':
					return 'October';
				case 'Nov':
					return 'November';
				default:
					return 'December';
			}
		}();
		if (mode.$ === 'Condensed') {
			return A2($elm$core$String$left, 3, monthString);
		} else {
			return monthString;
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$DatePicker$Internal$I18n$weekdayToString = F2(
	function (mode, weekday) {
		var weekdayString = function () {
			switch (weekday.$) {
				case 'Mon':
					return 'Monday';
				case 'Tue':
					return 'Tuesday';
				case 'Wed':
					return 'Wednesday';
				case 'Thu':
					return 'Thursday';
				case 'Fri':
					return 'Friday';
				case 'Sat':
					return 'Saturday';
				default:
					return 'Sunday';
			}
		}();
		if (mode.$ === 'Condensed') {
			return A2($elm$core$String$left, 3, weekdayString);
		} else {
			return weekdayString;
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$DatePicker$Internal$I18n$defaultI18n = {monthToString: $PanagiotisGeorgiadis$elm_datepicker$DatePicker$Internal$I18n$monthToString, todayButtonText: 'Today', weekdayToString: $PanagiotisGeorgiadis$elm_datepicker$DatePicker$Internal$I18n$weekdayToString};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours = {$: 'Hours'};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds = {$: 'Milliseconds'};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes = {$: 'Minutes'};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model = function (a) {
	return {$: 'Model', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds = {$: 'Seconds'};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours = function (_v0) {
	var hours = _v0.a.hours;
	return hours;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt = function (_v0) {
	var hours = _v0.a;
	return hours;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$getHours = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours);
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds = function (_v0) {
	var milliseconds = _v0.a.milliseconds;
	return milliseconds;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt = function (_v0) {
	var milliseconds = _v0.a;
	return milliseconds;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$getMilliseconds = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds);
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes = function (_v0) {
	var minutes = _v0.a.minutes;
	return minutes;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt = function (_v0) {
	var minutes = _v0.a;
	return minutes;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$getMinutes = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes);
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getSeconds = function (_v0) {
	var seconds = _v0.a.seconds;
	return seconds;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt = function (_v0) {
	var seconds = _v0.a;
	return seconds;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$getSeconds = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getSeconds);
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$millisToString = function (millis) {
	return (millis < 10) ? ('00' + $elm$core$String$fromInt(millis)) : ((millis < 100) ? ('0' + $elm$core$String$fromInt(millis)) : $elm$core$String$fromInt(millis));
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$timeToString = function (time) {
	return (time < 10) ? ('0' + $elm$core$String$fromInt(time)) : $elm$core$String$fromInt(time);
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString = function (timePart) {
	switch (timePart.$) {
		case 'Hours':
			return A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$timeToString, $PanagiotisGeorgiadis$elm_datetime$Clock$getHours);
		case 'Minutes':
			return A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$timeToString, $PanagiotisGeorgiadis$elm_datetime$Clock$getMinutes);
		case 'Seconds':
			return A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$timeToString, $PanagiotisGeorgiadis$elm_datetime$Clock$getSeconds);
		default:
			return A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$millisToString, $PanagiotisGeorgiadis$elm_datetime$Clock$getMilliseconds);
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$initialise = function (_v0) {
	var pickerType = _v0.pickerType;
	var time = _v0.time;
	return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
		{
			hours: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours, time),
			milliseconds: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds, time),
			minutes: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes, time),
			pickerType: pickerType,
			seconds: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds, time),
			time: time
		});
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setTime = F2(
	function (time, _v0) {
		var date = _v0.a.date;
		return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
			{date: date, time: time});
	});
var $PanagiotisGeorgiadis$elm_datetime$DateTime$setTime = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setTime;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate = function (_v0) {
	var date = _v0.a.date;
	return date;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth = function (_v0) {
	var month = _v0.a.month;
	return month;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getMonth = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Calendar$getMonth, $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getMonth;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$monthToInt = function (month) {
	switch (month.$) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		default:
			return 12;
	}
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$monthToInt = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$monthToInt;
var $PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$getMonthInt = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Calendar$monthToInt, $PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth);
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getYear = function (_v0) {
	var year = _v0.a.year;
	return year;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getYear = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt, $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getYear);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getYear = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Calendar$getYear, $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getYear = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getYear;
var $PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth = F2(
	function (lhs, rhs) {
		var yearsComparison = A2(
			$elm$core$Basics$compare,
			$PanagiotisGeorgiadis$elm_datetime$DateTime$getYear(lhs),
			$PanagiotisGeorgiadis$elm_datetime$DateTime$getYear(rhs));
		if (yearsComparison.$ === 'EQ') {
			return A2(
				$elm$core$Basics$compare,
				$PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$getMonthInt(lhs),
				$PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$getMonthInt(rhs));
		} else {
			return yearsComparison;
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$midnight = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
	{
		hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour(0),
		milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond(0),
		minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute(0),
		seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second(0)
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$midnight = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$midnight;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$validatePrimaryDate = function (_v0) {
	var today = _v0.today;
	var primaryDate = _v0.primaryDate;
	var dateLimit = _v0.dateLimit;
	var date = function () {
		if (primaryDate.$ === 'Just') {
			var d = primaryDate.a;
			return d;
		} else {
			return A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setTime, $PanagiotisGeorgiadis$elm_datetime$Clock$midnight, today);
		}
	}();
	if (dateLimit.$ === 'DateLimit') {
		var minDate = dateLimit.a.minDate;
		var maxDate = dateLimit.a.maxDate;
		var isBetweenConstrains = (_Utils_eq(
			A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, date),
			$elm$core$Basics$LT) || _Utils_eq(
			A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, date),
			$elm$core$Basics$EQ)) && (_Utils_eq(
			A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, date),
			$elm$core$Basics$GT) || _Utils_eq(
			A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, date),
			$elm$core$Basics$EQ));
		return isBetweenConstrains ? date : minDate;
	} else {
		return date;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$initialise = F4(
	function (viewType, calendarConfig, timePickerConfig, i18n) {
		var today = calendarConfig.today;
		var dateLimit = calendarConfig.dateLimit;
		var dateRangeOffset = calendarConfig.dateRangeOffset;
		var startingWeekday = calendarConfig.startingWeekday;
		var viewType_ = function () {
			if (viewType.$ === 'Single') {
				return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SingleCalendar;
			} else {
				return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$DoubleCalendar;
			}
		}();
		var dateRangeOffset_ = function () {
			if (dateRangeOffset.$ === 'Just') {
				var minDateRangeLength = dateRangeOffset.a.minDateRangeLength;
				return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Offset(
					{invalidDates: _List_Nil, minDateRangeLength: minDateRangeLength});
			} else {
				return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoOffset;
			}
		}();
		var _v0 = function () {
			var dateTime = $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$validatePrimaryDate(calendarConfig);
			if (timePickerConfig.$ === 'Just') {
				var t = timePickerConfig.a;
				var timePicker = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$initialise(
					{pickerType: t.pickerType, time: t.defaultTime});
				return _Utils_Tuple2(
					A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setTime, t.defaultTime, dateTime),
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
						{endPicker: timePicker, i18n: t.i18n, mirrorTimes: t.mirrorTimes, startPicker: timePicker}));
			} else {
				return _Utils_Tuple2(dateTime, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoTimePickers);
			}
		}();
		var primaryDate_ = _v0.a;
		var timePickers = _v0.b;
		return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
			{
				dateLimit: dateLimit,
				dateRangeOffset: dateRangeOffset_,
				i18n: function () {
					if (i18n.$ === 'Just') {
						var i18n_ = i18n.a;
						return i18n_;
					} else {
						return $PanagiotisGeorgiadis$elm_datepicker$DatePicker$Internal$I18n$defaultI18n;
					}
				}(),
				primaryDate: primaryDate_,
				range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoneSelected,
				startingWeekday: startingWeekday,
				timePickers: timePickers,
				today: today,
				viewType: viewType_
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$lastDayOf = function (date) {
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(
		A2(
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getYear(date),
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth(date)));
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$lastDayOf = function (_v0) {
	var date = _v0.a.date;
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$lastDayOf(date);
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$lastDayOf = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$lastDayOf;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setDate = F2(
	function (date, _v0) {
		var time = _v0.a.time;
		return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
			{date: date, time: time});
	});
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayFromInt = F3(
	function (year, month, day) {
		var maxValidDay = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(
			A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, year, month));
		return ((day > 0) && (!_Utils_eq(
			A2($elm$core$Basics$compare, day, maxValidDay),
			$elm$core$Basics$GT))) ? $elm$core$Maybe$Just(
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(day)) : $elm$core$Maybe$Nothing;
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromYearMonthDay = F3(
	function (y, m, d) {
		var maxDay = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, y, m);
		var _v0 = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareDays, d, maxDay);
		if (_v0.$ === 'GT') {
			return $elm$core$Maybe$Nothing;
		} else {
			return $elm$core$Maybe$Just(
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Date(
					{day: d, month: m, year: y}));
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromRawDay = F3(
	function (year, month, day) {
		return A2(
			$elm$core$Maybe$andThen,
			A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromYearMonthDay, year, month),
			A3($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayFromInt, year, month, day));
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearFromInt = function (year) {
	return (year > 0) ? $elm$core$Maybe$Just(
		$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Year(year)) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromRawParts = function (_v0) {
	var year = _v0.year;
	var month = _v0.month;
	var day = _v0.day;
	return A2(
		$elm$core$Maybe$andThen,
		function (y) {
			return A3($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromRawDay, y, month, day);
		},
		$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearFromInt(year));
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$setDay = F2(
	function (day, date) {
		return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromRawParts(
			{
				day: day,
				month: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth(date),
				year: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt(
					$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getYear(date))
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$setDay = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$setDay;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setDay = F2(
	function (day, dateTime) {
		return A2(
			$elm$core$Maybe$map,
			function (d) {
				return A2($PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setDate, d, dateTime);
			},
			A2(
				$PanagiotisGeorgiadis$elm_datetime$Calendar$setDay,
				day,
				$PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate(dateTime)));
	});
var $PanagiotisGeorgiadis$elm_datetime$DateTime$setDay = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setDay;
var $author$project$Components$Double$DateRangePicker$init = F3(
	function (language, startingWeekday, todayPosix) {
		var today = $PanagiotisGeorgiadis$elm_datetime$DateTime$fromPosix(todayPosix);
		var timePickerConfig = $elm$core$Maybe$Nothing;
		var i18n = $elm$core$Maybe$Just(
			$author$project$Extra$I18n$getI18n(language));
		var _v0 = function () {
			var _v1 = _Utils_Tuple2(
				A2($author$project$Extra$DateTime$decrementMonths, 6, today),
				A2($author$project$Extra$DateTime$incrementMonths, 6, today));
			var past = _v1.a;
			var future = _v1.b;
			return _Utils_Tuple2(
				A2(
					$elm$core$Maybe$withDefault,
					past,
					A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setDay, 1, past)),
				A2(
					$elm$core$Maybe$withDefault,
					future,
					A2(
						$PanagiotisGeorgiadis$elm_datetime$DateTime$setDay,
						$PanagiotisGeorgiadis$elm_datetime$DateTime$lastDayOf(future),
						future)));
		}();
		var minDate = _v0.a;
		var maxDate = _v0.b;
		var calendarConfig = {
			dateLimit: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Types$DateLimit(
				{maxDate: maxDate, minDate: minDate}),
			dateRangeOffset: $elm$core$Maybe$Just(
				{minDateRangeLength: 7}),
			primaryDate: $elm$core$Maybe$Nothing,
			startingWeekday: startingWeekday,
			today: today
		};
		return {
			picker: A4($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$initialise, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Types$Double, calendarConfig, timePickerConfig, i18n),
			selectedRange: $elm$core$Maybe$Nothing
		};
	});
var $author$project$Components$WithInput$Double$DateRangePicker$init = F3(
	function (language, startingWeekday, todayPosix) {
		var today = $PanagiotisGeorgiadis$elm_datetime$DateTime$fromPosix(todayPosix);
		var timePickerConfig = $elm$core$Maybe$Nothing;
		var i18n = $elm$core$Maybe$Just(
			$author$project$Extra$I18n$getI18n(language));
		var _v0 = function () {
			var _v1 = _Utils_Tuple2(
				A2($author$project$Extra$DateTime$decrementMonths, 6, today),
				A2($author$project$Extra$DateTime$incrementMonths, 6, today));
			var past = _v1.a;
			var future = _v1.b;
			return _Utils_Tuple2(
				A2(
					$elm$core$Maybe$withDefault,
					past,
					A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setDay, 1, past)),
				A2(
					$elm$core$Maybe$withDefault,
					future,
					A2(
						$PanagiotisGeorgiadis$elm_datetime$DateTime$setDay,
						$PanagiotisGeorgiadis$elm_datetime$DateTime$lastDayOf(future),
						future)));
		}();
		var minDate = _v0.a;
		var maxDate = _v0.b;
		var calendarConfig = {
			dateLimit: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Types$DateLimit(
				{maxDate: maxDate, minDate: minDate}),
			dateRangeOffset: $elm$core$Maybe$Just(
				{minDateRangeLength: 7}),
			primaryDate: $elm$core$Maybe$Nothing,
			startingWeekday: startingWeekday,
			today: today
		};
		return {
			isFocused: false,
			picker: A4($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$initialise, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Types$Double, calendarConfig, timePickerConfig, i18n),
			selectedRange: $elm$core$Maybe$Nothing
		};
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$App$pipeline_id = 5023048;
var $author$project$Components$Double$DateRangePicker$PickerMsg = function (a) {
	return {$: 'PickerMsg', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected = function (a) {
	return {$: 'BothSelected', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen = F2(
	function (a, b) {
		return {$: 'Chosen', a: a, b: b};
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected = function (a) {
	return {$: 'DateRangeSelected', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$DoubleTimePicker = {$: 'DoubleTimePicker'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None = {$: 'None'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeEndPickerMsg = function (a) {
	return {$: 'RangeEndPickerMsg', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeStartPickerMsg = function (a) {
	return {$: 'RangeStartPickerMsg', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected = function (a) {
	return {$: 'StartDateSelected', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers = function (a) {
	return {$: 'SyncTimePickers', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Visually = F2(
	function (a, b) {
		return {$: 'Visually', a: a, b: b};
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareMonths = F2(
	function (lhs, rhs) {
		return A2(
			$elm$core$Basics$compare,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$monthToInt(lhs),
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$monthToInt(rhs));
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareYears = F2(
	function (lhs, rhs) {
		return A2(
			$elm$core$Basics$compare,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt(lhs),
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt(rhs));
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDay = function (_v0) {
	var date = _v0.a;
	return date.day;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compare = F2(
	function (lhs, rhs) {
		var _v0 = _Utils_Tuple3(
			A2(
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareYears,
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getYear(lhs),
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getYear(rhs)),
			A2(
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareMonths,
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth(lhs),
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth(rhs)),
			A2(
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareDays,
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDay(lhs),
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDay(rhs)));
		var yearsComparison = _v0.a;
		var monthsComparison = _v0.b;
		var daysComparison = _v0.c;
		if (yearsComparison.$ === 'EQ') {
			if (monthsComparison.$ === 'EQ') {
				return daysComparison;
			} else {
				return monthsComparison;
			}
		} else {
			return yearsComparison;
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$compare = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compare;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$compareDates = F2(
	function (_v0, _v1) {
		var lhs = _v0.a;
		var rhs = _v1.a;
		return A2($PanagiotisGeorgiadis$elm_datetime$Calendar$compare, lhs.date, rhs.date);
	});
var $PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$compareDates;
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction = function (msg) {
	return A2(
		$elm$core$Task$perform,
		function (_v0) {
			return msg;
		},
		$elm$core$Task$succeed(_Utils_Tuple0));
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getDate = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getTime = function (_v0) {
	var time = _v0.a.time;
	return time;
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$setDate = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setDate;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ShowClockView = {$: 'ShowClockView'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$showClockView = function (_v0) {
	var viewType = _v0.viewType;
	var timePickers = _v0.timePickers;
	var _v1 = _Utils_Tuple2(viewType, timePickers);
	if ((_v1.a.$ === 'DoubleCalendar') && (_v1.b.$ === 'TimePickers')) {
		var _v2 = _v1.a;
		return $PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ShowClockView);
	} else {
		return $elm$core$Platform$Cmd$none;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$None = {$: 'None'};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$UpdatedTime = function (a) {
	return {$: 'UpdatedTime', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementHours = function (_v0) {
	var time = _v0.a;
	var newHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(time.hours) - 1;
	return (newHours < 0) ? _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour(23)
				})),
		true) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour(newHours)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$decrementHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementHours;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMinutes = function (_v0) {
	var time = _v0.a;
	var newMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(time.minutes) - 1;
	return (newMinutes < 0) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementHours(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute(59)
				}))) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute(newMinutes)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementSeconds = function (_v0) {
	var time = _v0.a;
	var newSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(time.seconds) - 1;
	return (newSeconds < 0) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMinutes(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second(59)
				}))) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second(newSeconds)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMilliseconds = function (_v0) {
	var time = _v0.a;
	var newMillis = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(time.milliseconds) - 1;
	return (newMillis < 0) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementSeconds(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond(999)
				}))) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond(newMillis)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$decrementMilliseconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMilliseconds;
var $PanagiotisGeorgiadis$elm_datetime$Clock$decrementMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMinutes;
var $PanagiotisGeorgiadis$elm_datetime$Clock$decrementSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementSeconds;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getHoursStep = function (_v0) {
	var pickerType = _v0.pickerType;
	switch (pickerType.$) {
		case 'HH':
			var hoursStep = pickerType.a.hoursStep;
			return hoursStep;
		case 'HH_MM':
			var hoursStep = pickerType.a.hoursStep;
			return hoursStep;
		case 'HH_MM_SS':
			var hoursStep = pickerType.a.hoursStep;
			return hoursStep;
		default:
			var hoursStep = pickerType.a.hoursStep;
			return hoursStep;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMillisecondsStep = function (_v0) {
	var pickerType = _v0.pickerType;
	switch (pickerType.$) {
		case 'HH':
			return 1;
		case 'HH_MM':
			return 1;
		case 'HH_MM_SS':
			return 1;
		default:
			var millisecondsStep = pickerType.a.millisecondsStep;
			return millisecondsStep;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMinutesStep = function (_v0) {
	var pickerType = _v0.pickerType;
	switch (pickerType.$) {
		case 'HH':
			return 1;
		case 'HH_MM':
			var minutesStep = pickerType.a.minutesStep;
			return minutesStep;
		case 'HH_MM_SS':
			var minutesStep = pickerType.a.minutesStep;
			return minutesStep;
		default:
			var minutesStep = pickerType.a.minutesStep;
			return minutesStep;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getSecondsStep = function (_v0) {
	var pickerType = _v0.pickerType;
	switch (pickerType.$) {
		case 'HH':
			return 1;
		case 'HH_MM':
			return 1;
		case 'HH_MM_SS':
			var secondsStep = pickerType.a.secondsStep;
			return secondsStep;
		default:
			var secondsStep = pickerType.a.secondsStep;
			return secondsStep;
	}
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementHours = function (_v0) {
	var time = _v0.a;
	var newHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(time.hours) + 1;
	return (newHours >= 24) ? _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour(0)
				})),
		true) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour(newHours)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$incrementHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementHours;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMinutes = function (_v0) {
	var time = _v0.a;
	var newMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(time.minutes) + 1;
	return (newMinutes >= 60) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementHours(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute(0)
				}))) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute(newMinutes)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementSeconds = function (_v0) {
	var time = _v0.a;
	var newSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(time.seconds) + 1;
	return (newSeconds >= 60) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMinutes(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second(0)
				}))) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second(newSeconds)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMilliseconds = function (_v0) {
	var time = _v0.a;
	var newMillis = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(time.milliseconds) + 1;
	return (newMillis >= 1000) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementSeconds(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond(0)
				}))) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond(newMillis)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$incrementMilliseconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMilliseconds;
var $PanagiotisGeorgiadis$elm_datetime$Clock$incrementMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMinutes;
var $PanagiotisGeorgiadis$elm_datetime$Clock$incrementSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementSeconds;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$InternalTime = F4(
	function (hours, minutes, seconds, milliseconds) {
		return {hours: hours, milliseconds: milliseconds, minutes: minutes, seconds: seconds};
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursFromInt = function (hours) {
	return ((hours >= 0) && (hours < 24)) ? $elm$core$Maybe$Just(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour(hours)) : $elm$core$Maybe$Nothing;
};
var $elm$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 'Nothing') {
					return $elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					if (md.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var d = md.a;
						return $elm$core$Maybe$Just(
							A4(func, a, b, c, d));
					}
				}
			}
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsFromInt = function (millis) {
	return ((millis >= 0) && (millis < 1000)) ? $elm$core$Maybe$Just(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond(millis)) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesFromInt = function (minutes) {
	return ((minutes >= 0) && (minutes < 60)) ? $elm$core$Maybe$Just(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute(minutes)) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsFromInt = function (seconds) {
	return ((seconds >= 0) && (seconds < 60)) ? $elm$core$Maybe$Just(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second(seconds)) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromRawParts = function (_v0) {
	var hours = _v0.hours;
	var minutes = _v0.minutes;
	var seconds = _v0.seconds;
	var milliseconds = _v0.milliseconds;
	return A5(
		$elm$core$Maybe$map4,
		F4(
			function (h, m, s, mm) {
				return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
					A4($PanagiotisGeorgiadis$elm_datetime$Clock$Internal$InternalTime, h, m, s, mm));
			}),
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursFromInt(hours),
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesFromInt(minutes),
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsFromInt(seconds),
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsFromInt(milliseconds));
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setHours = F2(
	function (hours, time) {
		return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromRawParts(
			{
				hours: hours,
				milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds(time)),
				minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes(time)),
				seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getSeconds(time))
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$setHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setHours;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setMilliseconds = F2(
	function (milliseconds, time) {
		return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromRawParts(
			{
				hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours(time)),
				milliseconds: milliseconds,
				minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes(time)),
				seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getSeconds(time))
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$setMilliseconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setMilliseconds;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setMinutes = F2(
	function (minutes, time) {
		return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromRawParts(
			{
				hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours(time)),
				milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds(time)),
				minutes: minutes,
				seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getSeconds(time))
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$setMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setMinutes;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setSeconds = F2(
	function (seconds, time) {
		return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromRawParts(
			{
				hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours(time)),
				milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds(time)),
				minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes(time)),
				seconds: seconds
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$setSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setSeconds;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$stepThrough = function (_v0) {
	stepThrough:
	while (true) {
		var n = _v0.n;
		var updateFn = _v0.updateFn;
		var time = _v0.time;
		var _v1 = _Utils_Tuple2(
			updateFn(time),
			n - 1);
		var time_ = _v1.a;
		var n_ = _v1.b;
		if (n_ <= 0) {
			return time_;
		} else {
			var $temp$_v0 = {n: n_, time: time_, updateFn: updateFn};
			_v0 = $temp$_v0;
			continue stepThrough;
		}
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$updateDisplayTime = F2(
	function (time, _v0) {
		var model = _v0.a;
		return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
			_Utils_update(
				model,
				{
					hours: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours, time),
					milliseconds: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds, time),
					minutes: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes, time),
					seconds: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds, time),
					time: time
				}));
	});
var $elm$core$String$fromList = _String_fromList;
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$filterNonDigits = A2(
	$elm$core$Basics$composeL,
	A2(
		$elm$core$Basics$composeL,
		$elm$core$String$fromList,
		$elm$core$List$filter($elm$core$Char$isDigit)),
	$elm$core$String$toList);
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validateTimeSegment = function (_v0) {
	var _default = _v0._default;
	var _new = _v0._new;
	var ceil = _v0.ceil;
	var _v1 = $elm$core$String$toInt(_new);
	if (_v1.$ === 'Just') {
		var v = _v1.a;
		return ((v >= 0) && (_Utils_cmp(v, ceil) < 0)) ? _new : _default;
	} else {
		return $elm$core$String$isEmpty(_new) ? _new : _default;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validate = F3(
	function (_v0, timePart, newValue) {
		var hours = _v0.hours;
		var minutes = _v0.minutes;
		var seconds = _v0.seconds;
		var milliseconds = _v0.milliseconds;
		var sanitisedValue = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$filterNonDigits(newValue);
		var validationParams = F2(
			function (_default, ceil) {
				return {ceil: ceil, _default: _default, _new: sanitisedValue};
			});
		switch (timePart.$) {
			case 'Hours':
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validateTimeSegment(
					A2(validationParams, hours, 24));
			case 'Minutes':
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validateTimeSegment(
					A2(validationParams, minutes, 60));
			case 'Seconds':
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validateTimeSegment(
					A2(validationParams, seconds, 60));
			default:
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validateTimeSegment(
					A2(validationParams, milliseconds, 1000));
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$update = F2(
	function (msg, _v0) {
		var model = _v0.a;
		switch (msg.$) {
			case 'InputHandler':
				var timePart = msg.a;
				var value = msg.b;
				var validatedValue = A3($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validate, model, timePart, value);
				var updatedModel = function () {
					switch (timePart.$) {
						case 'Hours':
							return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
								_Utils_update(
									model,
									{hours: validatedValue}));
						case 'Minutes':
							return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
								_Utils_update(
									model,
									{minutes: validatedValue}));
						case 'Seconds':
							return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
								_Utils_update(
									model,
									{seconds: validatedValue}));
						default:
							return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
								_Utils_update(
									model,
									{milliseconds: validatedValue}));
					}
				}();
				return _Utils_Tuple3(updatedModel, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$None);
			case 'Update':
				var timePart = msg.a;
				var value = msg.b;
				var updatedTime = function () {
					switch (timePart.$) {
						case 'Hours':
							return (value === '') ? A2($PanagiotisGeorgiadis$elm_datetime$Clock$setHours, 0, model.time) : A2(
								$elm$core$Maybe$andThen,
								function (h) {
									return A2($PanagiotisGeorgiadis$elm_datetime$Clock$setHours, h, model.time);
								},
								$elm$core$String$toInt(value));
						case 'Minutes':
							return (value === '') ? A2($PanagiotisGeorgiadis$elm_datetime$Clock$setMinutes, 0, model.time) : A2(
								$elm$core$Maybe$andThen,
								function (m) {
									return A2($PanagiotisGeorgiadis$elm_datetime$Clock$setMinutes, m, model.time);
								},
								$elm$core$String$toInt(value));
						case 'Seconds':
							return (value === '') ? A2($PanagiotisGeorgiadis$elm_datetime$Clock$setSeconds, 0, model.time) : A2(
								$elm$core$Maybe$andThen,
								function (s) {
									return A2($PanagiotisGeorgiadis$elm_datetime$Clock$setSeconds, s, model.time);
								},
								$elm$core$String$toInt(value));
						default:
							return (value === '') ? A2($PanagiotisGeorgiadis$elm_datetime$Clock$setMilliseconds, 0, model.time) : A2(
								$elm$core$Maybe$andThen,
								function (m) {
									return A2($PanagiotisGeorgiadis$elm_datetime$Clock$setMilliseconds, m, model.time);
								},
								$elm$core$String$toInt(value));
					}
				}();
				if (updatedTime.$ === 'Just') {
					var time = updatedTime.a;
					var updatedModel = function () {
						switch (timePart.$) {
							case 'Hours':
								return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
									_Utils_update(
										model,
										{
											hours: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours, time),
											time: time
										}));
							case 'Minutes':
								return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
									_Utils_update(
										model,
										{
											minutes: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes, time),
											time: time
										}));
							case 'Seconds':
								return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
									_Utils_update(
										model,
										{
											seconds: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds, time),
											time: time
										}));
							default:
								return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
									_Utils_update(
										model,
										{
											milliseconds: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds, time),
											time: time
										}));
						}
					}();
					return _Utils_Tuple3(
						updatedModel,
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$UpdatedTime(time));
				} else {
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(model),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$None);
				}
			case 'Increment':
				var timePart = msg.a;
				var _v6 = function () {
					switch (timePart.$) {
						case 'Hours':
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$incrementHours),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getHoursStep(model));
						case 'Minutes':
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$incrementMinutes),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMinutesStep(model));
						case 'Seconds':
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$incrementSeconds),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getSecondsStep(model));
						default:
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$incrementMilliseconds),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMillisecondsStep(model));
					}
				}();
				var updateFn = _v6.a;
				var step = _v6.b;
				var time = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$stepThrough(
					{n: step, time: model.time, updateFn: updateFn});
				return _Utils_Tuple3(
					A2(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$updateDisplayTime,
						time,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(model)),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$UpdatedTime(time));
			default:
				var timePart = msg.a;
				var _v8 = function () {
					switch (timePart.$) {
						case 'Hours':
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$decrementHours),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getHoursStep(model));
						case 'Minutes':
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$decrementMinutes),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMinutesStep(model));
						case 'Seconds':
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$decrementSeconds),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getSecondsStep(model));
						default:
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$decrementMilliseconds),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMillisecondsStep(model));
					}
				}();
				var updateFn = _v8.a;
				var step = _v8.b;
				var time = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$stepThrough(
					{n: step, time: model.time, updateFn: updateFn});
				return _Utils_Tuple3(
					A2(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$updateDisplayTime,
						time,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(model)),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$UpdatedTime(time));
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay = ((1000 * 60) * 60) * 24;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInYear = function (year) {
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$isLeapYear(year) ? ($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay * 366) : ($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay * 365);
};
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisSinceEpoch = function (_v0) {
	var year = _v0.a;
	var getTotalMillis = A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			$elm$core$List$sum,
			$elm$core$List$map($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInYear)),
		$elm$core$List$filterMap($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearFromInt));
	var epochYear = 1970;
	return (year >= 1970) ? getTotalMillis(
		A2($elm$core$List$range, epochYear, year - 1)) : (-getTotalMillis(
		A2($elm$core$List$range, year, epochYear - 1)));
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisSinceStartOfTheMonth = function (day) {
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay * ($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(day) - 1);
};
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$months = $elm$core$Array$fromList(
	_List_fromArray(
		[$elm$time$Time$Jan, $elm$time$Time$Feb, $elm$time$Time$Mar, $elm$time$Time$Apr, $elm$time$Time$May, $elm$time$Time$Jun, $elm$time$Time$Jul, $elm$time$Time$Aug, $elm$time$Time$Sep, $elm$time$Time$Oct, $elm$time$Time$Nov, $elm$time$Time$Dec]));
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: $elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					len - from,
					$elm$core$Array$shiftStep,
					$elm$core$Elm$JsArray$empty,
					A3(
						$elm$core$Elm$JsArray$slice,
						from - $elm$core$Array$tailIndex(len),
						$elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / $elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (node.$ === 'SubTree') {
							var subTree = node.a;
							return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2($elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					$elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return $elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * $elm$core$Array$branchFactor);
					var initialBuilder = {
						nodeList: _List_Nil,
						nodeListSize: 0,
						tail: A3(
							$elm$core$Elm$JsArray$slice,
							firstSlice,
							$elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						$elm$core$Array$builderToArray,
						true,
						A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = $elm$core$Array$bitMask & (treeEnd >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var sub = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _v0.a;
				return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
			}
		}
	});
var $elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!$elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (_v0.$ === 'SubTree') {
					var sub = _v0.a;
					var $temp$oldShift = oldShift - $elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = $elm$core$Array$bitMask & (endIdx >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (_v0.$ === 'SubTree') {
			var sub = _v0.a;
			var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
			return (!$elm$core$Elm$JsArray$length(newSub)) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				$elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				$elm$core$Array$SubTree(newSub),
				A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var $elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = $elm$core$Array$tailIndex(end);
				var depth = $elm$core$Basics$floor(
					A2(
						$elm$core$Basics$logBase,
						$elm$core$Array$branchFactor,
						A2($elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						$elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3($elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var $elm$core$Array$translateIndex = F2(
	function (index, _v0) {
		var len = _v0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var $elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2($elm$core$Array$translateIndex, to, array);
		var correctFrom = A2($elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? $elm$core$Array$empty : A2(
			$elm$core$Array$sliceLeft,
			correctFrom,
			A2($elm$core$Array$sliceRight, correctTo, array));
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getPrecedingMonths = function (month) {
	return $elm$core$Array$toList(
		A3(
			$elm$core$Array$slice,
			0,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$monthToInt(month) - 1,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$months));
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisSinceStartOfTheYear = F2(
	function (year, month) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (m, res) {
					return res + ($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay * $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(
						A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, year, m)));
				}),
			0,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getPrecedingMonths(month));
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toMillis = function (_v0) {
	var year = _v0.a.year;
	var month = _v0.a.month;
	var day = _v0.a.day;
	return ($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisSinceEpoch(year) + A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisSinceStartOfTheYear, year, month)) + $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisSinceStartOfTheMonth(day);
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toPosix = A2($elm$core$Basics$composeL, $elm$time$Time$millisToPosix, $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toMillis);
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$decrementDay = function (date) {
	var millis = $elm$time$Time$posixToMillis(
		$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toPosix(date)) - $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay;
	var newDate = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromPosix(
		$elm$time$Time$millisToPosix(millis));
	return newDate;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$decrementDay = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$decrementDay;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$decrementDay = function (_v0) {
	var date = _v0.a.date;
	var time = _v0.a.time;
	return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
		{
			date: $PanagiotisGeorgiadis$elm_datetime$Calendar$decrementDay(date),
			time: time
		});
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$decrementDay = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$decrementDay;
var $PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$decrementDays = F2(
	function (days, date) {
		decrementDays:
		while (true) {
			if (days > 0) {
				var $temp$days = days - 1,
					$temp$date = $PanagiotisGeorgiadis$elm_datetime$DateTime$decrementDay(date);
				days = $temp$days;
				date = $temp$date;
				continue decrementDays;
			} else {
				return date;
			}
		}
	});
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$incrementDay = function (date) {
	var millis = $elm$time$Time$posixToMillis(
		$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toPosix(date)) + $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay;
	var newDate = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromPosix(
		$elm$time$Time$millisToPosix(millis));
	return newDate;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDateRange_ = F3(
	function (daysCount, prevDate, res) {
		getDateRange_:
		while (true) {
			var updatedRes = _Utils_ap(
				res,
				_List_fromArray(
					[prevDate]));
			if (daysCount > 0) {
				var _v0 = _Utils_Tuple2(
					daysCount - 1,
					$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$incrementDay(prevDate));
				var updatedDaysCount = _v0.a;
				var updatedPrevDate = _v0.b;
				var $temp$daysCount = updatedDaysCount,
					$temp$prevDate = updatedPrevDate,
					$temp$res = updatedRes;
				daysCount = $temp$daysCount;
				prevDate = $temp$prevDate;
				res = $temp$res;
				continue getDateRange_;
			} else {
				return updatedRes;
			}
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDateRange = F2(
	function (startDate, endDate) {
		var _v0 = _Utils_Tuple2(
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toPosix(startDate),
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toPosix(endDate));
		var startPosix = _v0.a;
		var endPosix = _v0.b;
		var posixDiff = $elm$time$Time$posixToMillis(endPosix) - $elm$time$Time$posixToMillis(startPosix);
		var daysDiff = (((((((posixDiff / 1000) | 0) / 60) | 0) / 60) | 0) / 24) | 0;
		return (daysDiff > 0) ? A3($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDateRange_, daysDiff, startDate, _List_Nil) : A3(
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDateRange_,
			$elm$core$Basics$abs(daysDiff),
			endDate,
			_List_Nil);
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getDateRange = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDateRange;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDateRange = F3(
	function (_v0, _v1, time) {
		var start = _v0.a;
		var end = _v1.a;
		return A2(
			$elm$core$List$map,
			function (date) {
				return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
					{date: date, time: time});
			},
			A2($PanagiotisGeorgiadis$elm_datetime$Calendar$getDateRange, start.date, end.date));
	});
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getDateRange = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDateRange;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$incrementDay = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$incrementDay;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$incrementDay = function (_v0) {
	var date = _v0.a.date;
	var time = _v0.a.time;
	return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
		{
			date: $PanagiotisGeorgiadis$elm_datetime$Calendar$incrementDay(date),
			time: time
		});
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementDay = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$incrementDay;
var $PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$incrementDays = F2(
	function (days, date) {
		incrementDays:
		while (true) {
			if (days > 0) {
				var $temp$days = days - 1,
					$temp$date = $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementDay(date);
				days = $temp$days;
				date = $temp$date;
				continue incrementDays;
			} else {
				return date;
			}
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updateDateRangeOffset = function (model) {
	var range = model.range;
	var dateRangeOffset = model.dateRangeOffset;
	if (dateRangeOffset.$ === 'Offset') {
		var minDateRangeLength = dateRangeOffset.a.minDateRangeLength;
		var offsetConfig = function (invalidDates) {
			return {invalidDates: invalidDates, minDateRangeLength: minDateRangeLength};
		};
		if (range.$ === 'StartDateSelected') {
			var start = range.a;
			var isNotEqualToStartDate = function (d) {
				return !_Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, start, d),
					$elm$core$Basics$EQ);
			};
			var invalidPastDates = A2(
				$elm$core$List$filter,
				isNotEqualToStartDate,
				$elm$core$List$reverse(
					A2(
						$elm$core$List$drop,
						1,
						A3(
							$PanagiotisGeorgiadis$elm_datetime$DateTime$getDateRange,
							start,
							A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$decrementDays, minDateRangeLength - 1, start),
							$PanagiotisGeorgiadis$elm_datetime$Clock$midnight))));
			var invalidFutureDates = A2(
				$elm$core$List$filter,
				isNotEqualToStartDate,
				$elm$core$List$reverse(
					A2(
						$elm$core$List$drop,
						1,
						$elm$core$List$reverse(
							A3(
								$PanagiotisGeorgiadis$elm_datetime$DateTime$getDateRange,
								start,
								A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$incrementDays, minDateRangeLength - 1, start),
								$PanagiotisGeorgiadis$elm_datetime$Clock$midnight)))));
			var invalidDates = _Utils_ap(invalidFutureDates, invalidPastDates);
			return _Utils_update(
				model,
				{
					dateRangeOffset: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Offset(
						offsetConfig(invalidDates))
				});
		} else {
			return _Utils_update(
				model,
				{
					dateRangeOffset: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Offset(
						offsetConfig(_List_Nil))
				});
		}
	} else {
		return model;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$update = F2(
	function (msg, _v0) {
		var model = _v0.a;
		switch (msg.$) {
			case 'PreviousMonth':
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
						_Utils_update(
							model,
							{
								primaryDate: $PanagiotisGeorgiadis$elm_datetime$DateTime$decrementMonth(model.primaryDate)
							})),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 'NextMonth':
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
						_Utils_update(
							model,
							{
								primaryDate: $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementMonth(model.primaryDate)
							})),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 'SelectDate':
				var date = msg.a;
				var updateModel = function (start) {
					var _v6 = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, start, date);
					switch (_v6.$) {
						case 'EQ':
							return _Utils_Tuple3(
								_Utils_update(
									model,
									{range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoneSelected}),
								$elm$core$Platform$Cmd$none,
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected($elm$core$Maybe$Nothing));
						case 'LT':
							var _v7 = function () {
								var _v8 = model.timePickers;
								if (_v8.$ === 'TimePickers') {
									var startPicker = _v8.a.startPicker;
									var endPicker = _v8.a.endPicker;
									return _Utils_Tuple2(
										A2(
											$PanagiotisGeorgiadis$elm_datetime$DateTime$setTime,
											$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getTime(startPicker),
											start),
										A2(
											$PanagiotisGeorgiadis$elm_datetime$DateTime$setTime,
											$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getTime(endPicker),
											date));
								} else {
									return _Utils_Tuple2(start, date);
								}
							}();
							var start_ = _v7.a;
							var end_ = _v7.b;
							return _Utils_Tuple3(
								_Utils_update(
									model,
									{
										range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
											A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, start_, end_))
									}),
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$showClockView(model),
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected(
									$elm$core$Maybe$Just(
										{endDate: end_, startDate: start_})));
						default:
							var _v9 = function () {
								var _v10 = model.timePickers;
								if (_v10.$ === 'TimePickers') {
									var startPicker = _v10.a.startPicker;
									var endPicker = _v10.a.endPicker;
									return _Utils_Tuple2(
										A2(
											$PanagiotisGeorgiadis$elm_datetime$DateTime$setTime,
											$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getTime(startPicker),
											date),
										A2(
											$PanagiotisGeorgiadis$elm_datetime$DateTime$setTime,
											$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getTime(endPicker),
											start));
								} else {
									return _Utils_Tuple2(date, start);
								}
							}();
							var start_ = _v9.a;
							var end_ = _v9.b;
							return _Utils_Tuple3(
								_Utils_update(
									model,
									{
										range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
											A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, start_, end_))
									}),
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$showClockView(model),
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected(
									$elm$core$Maybe$Just(
										{endDate: end_, startDate: start_})));
					}
				};
				var _v2 = function () {
					var _v3 = model.range;
					switch (_v3.$) {
						case 'StartDateSelected':
							var start = _v3.a;
							return updateModel(start);
						case 'BothSelected':
							if (_v3.a.$ === 'Visually') {
								var _v4 = _v3.a;
								var start = _v4.a;
								return updateModel(start);
							} else {
								var _v5 = _v3.a;
								return _Utils_Tuple3(
									_Utils_update(
										model,
										{
											range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected(date)
										}),
									$elm$core$Platform$Cmd$none,
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected($elm$core$Maybe$Nothing));
							}
						default:
							return _Utils_Tuple3(
								_Utils_update(
									model,
									{
										range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected(date)
									}),
								$elm$core$Platform$Cmd$none,
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
					}
				}();
				var model_ = _v2.a;
				var cmd = _v2.b;
				var extMsg = _v2.c;
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updateDateRangeOffset(model_)),
					cmd,
					extMsg);
			case 'UpdateVisualSelection':
				var date = msg.a;
				var updateModel = function (start) {
					var _v13 = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, start, date);
					if (_v13.$ === 'EQ') {
						return _Utils_update(
							model,
							{
								range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected(start)
							});
					} else {
						return _Utils_update(
							model,
							{
								range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
									A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Visually, start, date))
							});
					}
				};
				var updatedModel = function () {
					var _v11 = model.range;
					_v11$2:
					while (true) {
						switch (_v11.$) {
							case 'StartDateSelected':
								var start = _v11.a;
								return updateModel(start);
							case 'BothSelected':
								if (_v11.a.$ === 'Visually') {
									var _v12 = _v11.a;
									var start = _v12.a;
									return updateModel(start);
								} else {
									break _v11$2;
								}
							default:
								break _v11$2;
						}
					}
					return model;
				}();
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(updatedModel),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 'ResetVisualSelection':
				var _v14 = model.range;
				if ((_v14.$ === 'BothSelected') && (_v14.a.$ === 'Visually')) {
					var _v15 = _v14.a;
					var start = _v15.a;
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
							_Utils_update(
								model,
								{
									range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected(start)
								})),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				} else {
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(model),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			case 'ShowClockView':
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
						_Utils_update(
							model,
							{viewType: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$DoubleTimePicker})),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 'ShowCalendarView':
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
						_Utils_update(
							model,
							{viewType: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$DoubleCalendar})),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 'ToggleTimeMirroring':
				var _v16 = model.timePickers;
				if (_v16.$ === 'TimePickers') {
					var pickers = _v16.a;
					var startPicker = pickers.startPicker;
					var mirrorTimes = pickers.mirrorTimes;
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
							_Utils_update(
								model,
								{
									timePickers: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
										_Utils_update(
											pickers,
											{mirrorTimes: !mirrorTimes}))
								})),
						$PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction(
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers(
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getTime(startPicker))),
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				} else {
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(model),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			case 'SyncTimePickers':
				var time = msg.a;
				var _v17 = model.timePickers;
				if (_v17.$ === 'TimePickers') {
					var pickers = _v17.a;
					var startPicker = pickers.startPicker;
					var endPicker = pickers.endPicker;
					var mirrorTimes = pickers.mirrorTimes;
					if (mirrorTimes) {
						var updateFn = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$updateDisplayTime(time);
						var _v18 = function () {
							var _v19 = model.range;
							if ((_v19.$ === 'BothSelected') && (_v19.a.$ === 'Chosen')) {
								var _v20 = _v19.a;
								var start = _v20.a;
								var end = _v20.b;
								var _v21 = _Utils_Tuple2(
									A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setTime, time, start),
									A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setTime, time, end));
								var updatedStartDate = _v21.a;
								var updatedEndDate = _v21.b;
								return _Utils_Tuple2(
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
										A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, updatedStartDate, updatedEndDate)),
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected(
										$elm$core$Maybe$Just(
											{endDate: updatedEndDate, startDate: updatedStartDate})));
							} else {
								return _Utils_Tuple2(model.range, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
							}
						}();
						var range = _v18.a;
						var extMsg = _v18.b;
						return _Utils_Tuple3(
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
								_Utils_update(
									model,
									{
										range: range,
										timePickers: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
											_Utils_update(
												pickers,
												{
													endPicker: updateFn(endPicker),
													startPicker: updateFn(startPicker)
												}))
									})),
							$elm$core$Platform$Cmd$none,
							extMsg);
					} else {
						return _Utils_Tuple3(
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(model),
							$elm$core$Platform$Cmd$none,
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
					}
				} else {
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(model),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			case 'RangeStartPickerMsg':
				var subMsg = msg.a;
				var _v22 = model.timePickers;
				if (_v22.$ === 'TimePickers') {
					var pickers = _v22.a;
					var startPicker = pickers.startPicker;
					var _v23 = A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$update, subMsg, startPicker);
					var subModel = _v23.a;
					var subCmd = _v23.b;
					var extMsg = _v23.c;
					var _v24 = function () {
						var _v25 = _Utils_Tuple2(extMsg, model.range);
						if (_v25.a.$ === 'UpdatedTime') {
							if ((_v25.b.$ === 'BothSelected') && (_v25.b.a.$ === 'Chosen')) {
								var time = _v25.a.a;
								var _v26 = _v25.b.a;
								var start = _v26.a;
								var end = _v26.b;
								var updatedStart = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setTime, time, start);
								return _Utils_Tuple3(
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
										A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, updatedStart, end)),
									$PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction(
										$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers(time)),
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected(
										$elm$core$Maybe$Just(
											{endDate: end, startDate: updatedStart})));
							} else {
								var time = _v25.a.a;
								return _Utils_Tuple3(
									model.range,
									$PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction(
										$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers(time)),
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
							}
						} else {
							return _Utils_Tuple3(model.range, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
						}
					}();
					var range = _v24.a;
					var cmd = _v24.b;
					var externalMsg = _v24.c;
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
							_Utils_update(
								model,
								{
									range: range,
									timePickers: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
										_Utils_update(
											pickers,
											{startPicker: subModel}))
								})),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2($elm$core$Platform$Cmd$map, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeStartPickerMsg, subCmd),
									cmd
								])),
						externalMsg);
				} else {
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(model),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			case 'RangeEndPickerMsg':
				var subMsg = msg.a;
				var _v27 = model.timePickers;
				if (_v27.$ === 'TimePickers') {
					var pickers = _v27.a;
					var endPicker = pickers.endPicker;
					var _v28 = A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$update, subMsg, endPicker);
					var subModel = _v28.a;
					var subCmd = _v28.b;
					var extMsg = _v28.c;
					var _v29 = function () {
						var _v30 = _Utils_Tuple2(extMsg, model.range);
						if (_v30.a.$ === 'UpdatedTime') {
							if ((_v30.b.$ === 'BothSelected') && (_v30.b.a.$ === 'Chosen')) {
								var time = _v30.a.a;
								var _v31 = _v30.b.a;
								var start = _v31.a;
								var end = _v31.b;
								var updatedEnd = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setTime, time, end);
								return _Utils_Tuple3(
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
										A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, start, updatedEnd)),
									$PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction(
										$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers(time)),
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected(
										$elm$core$Maybe$Just(
											{endDate: updatedEnd, startDate: start})));
							} else {
								var time = _v30.a.a;
								return _Utils_Tuple3(
									model.range,
									$PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction(
										$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers(time)),
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
							}
						} else {
							return _Utils_Tuple3(model.range, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
						}
					}();
					var range = _v29.a;
					var cmd = _v29.b;
					var externalMsg = _v29.c;
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
							_Utils_update(
								model,
								{
									range: range,
									timePickers: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
										_Utils_update(
											pickers,
											{endPicker: subModel}))
								})),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2($elm$core$Platform$Cmd$map, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeEndPickerMsg, subCmd),
									cmd
								])),
						externalMsg);
				} else {
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(model),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			default:
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
						_Utils_update(
							model,
							{
								primaryDate: A2(
									$PanagiotisGeorgiadis$elm_datetime$DateTime$setDate,
									$PanagiotisGeorgiadis$elm_datetime$DateTime$getDate(model.today),
									model.primaryDate)
							})),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
		}
	});
var $author$project$Components$Double$DateRangePicker$update = F2(
	function (msg, model) {
		var subMsg = msg.a;
		var _v1 = A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$update, subMsg, model.picker);
		var updated = _v1.a;
		var subCmd = _v1.b;
		var extMsg = _v1.c;
		var selectedRange = function () {
			if (extMsg.$ === 'None') {
				return model.selectedRange;
			} else {
				var range = extMsg.a;
				return range;
			}
		}();
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{picker: updated, selectedRange: selectedRange}),
			A2($elm$core$Platform$Cmd$map, $author$project$Components$Double$DateRangePicker$PickerMsg, subCmd));
	});
var $author$project$Components$WithInput$Double$DateRangePicker$PickerMsg = function (a) {
	return {$: 'PickerMsg', a: a};
};
var $author$project$Components$WithInput$Double$DateRangePicker$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'PickerMsg':
				var subMsg = msg.a;
				var _v1 = A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$update, subMsg, model.picker);
				var updated = _v1.a;
				var subCmd = _v1.b;
				var extMsg = _v1.c;
				var selectedRange = function () {
					if (extMsg.$ === 'None') {
						return model.selectedRange;
					} else {
						var dateRange = extMsg.a;
						return dateRange;
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{picker: updated, selectedRange: selectedRange}),
					A2($elm$core$Platform$Cmd$map, $author$project$Components$WithInput$Double$DateRangePicker$PickerMsg, subCmd));
			case 'FocusHandler':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{isFocused: true}),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{isFocused: false}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$App$update = F2(
	function (action, model) {
		var indexedUsers = function (users) {
			return A2(
				$elm$core$List$map,
				function (s) {
					return _Utils_Tuple2(
						$elm$core$String$fromInt(s.id),
						s);
				},
				users);
		};
		var indexedStatuses = function (statuses) {
			return A2(
				$elm$core$List$map,
				function (s) {
					return _Utils_Tuple2(
						$elm$core$String$fromInt(s.id),
						s);
				},
				statuses);
		};
		var indexedPipelines = function (pipelines) {
			return A2(
				$elm$core$List$map,
				function (p) {
					return _Utils_Tuple2(
						$elm$core$String$fromInt(p.id),
						p);
				},
				pipelines);
		};
		var indexedMasters = function (masters) {
			return A2(
				$elm$core$List$map,
				function (s) {
					return _Utils_Tuple2(
						$elm$core$String$fromInt(s.id),
						s);
				},
				masters);
		};
		switch (action.$) {
			case 'InitialiseTime':
				var todayPosix = action.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							created_at_picker: $elm$core$Maybe$Just(
								A3($author$project$Components$Double$DateRangePicker$init, $author$project$Extra$I18n$Russian, $elm$time$Time$Mon, todayPosix)),
							withInput: {
								created_at_picker: $elm$core$Maybe$Just(
									A3($author$project$Components$WithInput$Double$DateRangePicker$init, $author$project$Extra$I18n$Russian, $elm$time$Time$Mon, todayPosix))
							}
						}),
					$elm$core$Platform$Cmd$none);
			case 'CreatedAtPickerMsg':
				var subMsg = action.a;
				var _v1 = model.created_at_picker;
				if (_v1.$ === 'Just') {
					var picker = _v1.a;
					var _v2 = A2($author$project$Components$Double$DateRangePicker$update, subMsg, picker);
					var subModel = _v2.a;
					var subCmd = _v2.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								created_at_picker: $elm$core$Maybe$Just(subModel)
							}),
						A2($elm$core$Platform$Cmd$map, $author$project$App$CreatedAtPickerMsg, subCmd));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'CreatedAtPickerWithInputMsg':
				var subMsg = action.a;
				var _v3 = model.withInput.created_at_picker;
				if (_v3.$ === 'Just') {
					var picker = _v3.a;
					var _v4 = model;
					var withInput = _v4.withInput;
					var _v5 = A2($author$project$Components$WithInput$Double$DateRangePicker$update, subMsg, picker);
					var subModel = _v5.a;
					var subCmd = _v5.b;
					var updatedWithInput = _Utils_update(
						withInput,
						{
							created_at_picker: $elm$core$Maybe$Just(subModel)
						});
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{withInput: updatedWithInput}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'GotLeads':
				var result = action.a;
				if (result.$ === 'Ok') {
					var leads = result.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								httpStatus: $author$project$App$Success,
								leads: $elm$core$Maybe$Just(leads)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								httpStatus: $author$project$App$LastFailure('Ошибка запроса заявок')
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'GotPipelines':
				var result = action.a;
				if (result.$ === 'Ok') {
					var pipelines = result.a;
					var mfilter = model.filter;
					var fixedPipeline = $elm$core$List$head(
						A2(
							$elm$core$List$filter,
							function (p) {
								return _Utils_eq(p.id, $author$project$App$pipeline_id);
							},
							pipelines));
					if (fixedPipeline.$ === 'Just') {
						var pipeline = fixedPipeline.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									filter: _Utils_update(
										mfilter,
										{
											pipeline: $elm$core$Maybe$Just(
												$elm$core$String$fromInt(pipeline.id)),
											status: $elm$core$Maybe$Nothing
										}),
									httpStatus: $author$project$App$Success,
									pipelines: $elm$core$Maybe$Just(
										$elm$core$Dict$fromList(
											indexedPipelines(pipelines))),
									statuses: $elm$core$Maybe$Just(
										$elm$core$Dict$fromList(
											indexedStatuses(pipeline.statuses)))
								}),
							$elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									httpStatus: $author$project$App$LastFailure(
										'Ошибка запроса воронок: воронка ' + ($elm$core$String$fromInt($author$project$App$pipeline_id) + ' не найдена'))
								}),
							$elm$core$Platform$Cmd$none);
					}
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								httpStatus: $author$project$App$LastFailure('Ошибка запроса статусов')
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'GotUsers':
				var result = action.a;
				if (result.$ === 'Ok') {
					var users = result.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								httpStatus: $author$project$App$Success,
								users: $elm$core$Maybe$Just(
									$elm$core$Dict$fromList(
										indexedUsers(users)))
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								httpStatus: $author$project$App$LastFailure('Ошибка запроса пользователей')
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'GotMasters':
				var result = action.a;
				if (result.$ === 'Ok') {
					var masters = result.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								httpStatus: $author$project$App$Success,
								masters: $elm$core$Maybe$Just(
									$elm$core$Dict$fromList(
										indexedMasters(masters)))
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								httpStatus: $author$project$App$LastFailure('Ошибка запроса мастеров')
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'RefreshLeads':
				var _v11 = model.filter.user;
				if (_v11.$ === 'Just') {
					var user = _v11.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								httpStatus: $author$project$App$Loading('Получаем данные')
							}),
						A3($author$project$App$getLeads, user, model.filter.status, model.filter.master));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								httpStatus: $author$project$App$LastFailure('Укажите пользователя')
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'UserSelected':
				var user = action.a;
				var mfilter = model.filter;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							filter: _Utils_update(
								mfilter,
								{
									user: $elm$core$Maybe$Just(user)
								}),
							httpStatus: $author$project$App$Loading('Загружаем заявки...'),
							leads: $elm$core$Maybe$Nothing
						}),
					A3($author$project$App$getLeads, user, model.filter.status, model.filter.status));
			case 'StatusSelected':
				var status = action.a;
				var status0 = (status === '') ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(status);
				var mfilter = model.filter;
				var cmd = function () {
					var _v12 = model.filter.user;
					if (_v12.$ === 'Just') {
						var user = _v12.a;
						return A3($author$project$App$getLeads, user, status0, model.filter.master);
					} else {
						return $elm$core$Platform$Cmd$none;
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							filter: _Utils_update(
								mfilter,
								{status: status0}),
							httpStatus: $author$project$App$Loading('Загружаем заявки...'),
							leads: $elm$core$Maybe$Nothing
						}),
					cmd);
			default:
				var master = action.a;
				var mfilter = model.filter;
				var master0 = (master === '') ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(master);
				var cmd = function () {
					var _v13 = model.filter.user;
					if (_v13.$ === 'Just') {
						var user = _v13.a;
						return A3($author$project$App$getLeads, user, model.filter.status, master0);
					} else {
						return $elm$core$Platform$Cmd$none;
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							filter: _Utils_update(
								mfilter,
								{master: master0}),
							httpStatus: $author$project$App$Loading('Загружаем заявки...'),
							leads: $elm$core$Maybe$Nothing
						}),
					cmd);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 'Unkeyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsColumn = {$: 'AsColumn'};
var $mdgriffith$elm_ui$Internal$Model$asColumn = $mdgriffith$elm_ui$Internal$Model$AsColumn;
var $mdgriffith$elm_ui$Internal$Style$classes = {above: 'a', active: 'atv', alignBottom: 'ab', alignCenterX: 'cx', alignCenterY: 'cy', alignContainerBottom: 'acb', alignContainerCenterX: 'accx', alignContainerCenterY: 'accy', alignContainerRight: 'acr', alignLeft: 'al', alignRight: 'ar', alignTop: 'at', alignedHorizontally: 'ah', alignedVertically: 'av', any: 's', behind: 'bh', below: 'b', bold: 'w7', borderDashed: 'bd', borderDotted: 'bdt', borderNone: 'bn', borderSolid: 'bs', capturePointerEvents: 'cpe', clip: 'cp', clipX: 'cpx', clipY: 'cpy', column: 'c', container: 'ctr', contentBottom: 'cb', contentCenterX: 'ccx', contentCenterY: 'ccy', contentLeft: 'cl', contentRight: 'cr', contentTop: 'ct', cursorPointer: 'cptr', cursorText: 'ctxt', focus: 'fcs', focusedWithin: 'focus-within', fullSize: 'fs', grid: 'g', hasBehind: 'hbh', heightContent: 'hc', heightExact: 'he', heightFill: 'hf', heightFillPortion: 'hfp', hover: 'hv', imageContainer: 'ic', inFront: 'fr', inputLabel: 'lbl', inputMultiline: 'iml', inputMultilineFiller: 'imlf', inputMultilineParent: 'imlp', inputMultilineWrapper: 'implw', inputText: 'it', italic: 'i', link: 'lnk', nearby: 'nb', noTextSelection: 'notxt', onLeft: 'ol', onRight: 'or', opaque: 'oq', overflowHidden: 'oh', page: 'pg', paragraph: 'p', passPointerEvents: 'ppe', root: 'ui', row: 'r', scrollbars: 'sb', scrollbarsX: 'sbx', scrollbarsY: 'sby', seButton: 'sbt', single: 'e', sizeByCapital: 'cap', spaceEvenly: 'sev', strike: 'sk', text: 't', textCenter: 'tc', textExtraBold: 'w8', textExtraLight: 'w2', textHeavy: 'w9', textJustify: 'tj', textJustifyAll: 'tja', textLeft: 'tl', textLight: 'w3', textMedium: 'w5', textNormalWeight: 'w4', textRight: 'tr', textSemiBold: 'w6', textThin: 'w1', textUnitalicized: 'tun', transition: 'ts', transparent: 'clr', underline: 'u', widthContent: 'wc', widthExact: 'we', widthFill: 'wf', widthFillPortion: 'wfp', wrapped: 'wrp'};
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 'Generic'};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 'NoNearbyChildren'};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.column);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.grid);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.page);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.row);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context.$) {
		case 'AsRow':
			return $mdgriffith$elm_ui$Internal$Model$rowClass;
		case 'AsColumn':
			return $mdgriffith$elm_ui$Internal$Model$columnClass;
		case 'AsEl':
			return $mdgriffith$elm_ui$Internal$Model$singleClass;
		case 'AsGrid':
			return $mdgriffith$elm_ui$Internal$Model$gridClass;
		case 'AsParagraph':
			return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return $mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 'Keyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 'NoStyleSheet'};
var $mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 'Styled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 'Unstyled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AsEl = {$: 'AsEl'};
var $mdgriffith$elm_ui$Internal$Model$asEl = $mdgriffith$elm_ui$Internal$Model$AsEl;
var $mdgriffith$elm_ui$Internal$Model$AsParagraph = {$: 'AsParagraph'};
var $mdgriffith$elm_ui$Internal$Model$asParagraph = $mdgriffith$elm_ui$Internal$Model$AsParagraph;
var $mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 'Flag', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 'Second', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 'Px':
			var px = x.a;
			return $elm$core$String$fromInt(px) + 'px';
		case 'Content':
			return 'auto';
		case 'Fill':
			var i = x.a;
			return $elm$core$String$fromInt(i) + 'fr';
		case 'Min':
			var min = x.a;
			var len = x.b;
			return 'min' + ($elm$core$String$fromInt(min) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + ($elm$core$String$fromInt(max) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $mdgriffith$elm_ui$Internal$Model$floatClass = function (x) {
	return $elm$core$String$fromInt(
		$elm$core$Basics$round(x * 255));
};
var $mdgriffith$elm_ui$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'mv-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(x) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(y) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(z))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			return $elm$core$Maybe$Just(
				'tfrm-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 'Shadows':
			var name = style.a;
			return name;
		case 'Transparency':
			var name = style.a;
			var o = style.b;
			return name;
		case 'Style':
			var _class = style.a;
			return _class;
		case 'FontFamily':
			var name = style.a;
			return name;
		case 'FontSize':
			var i = style.a;
			return 'font-size-' + $elm$core$String$fromInt(i);
		case 'Single':
			var _class = style.a;
			return _class;
		case 'Colored':
			var _class = style.a;
			return _class;
		case 'SpacingStyle':
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 'PaddingStyle':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'BorderWidth':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'GridTemplateStyle':
			var template = style.a;
			return 'grid-rows-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
		case 'GridPosition':
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.row) + ('-' + ($elm$core$String$fromInt(pos.col) + ('-' + ($elm$core$String$fromInt(pos.width) + ('-' + $elm$core$String$fromInt(pos.height)))))));
		case 'PseudoSelector':
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector.$) {
					case 'Focus':
						return 'fs';
					case 'Hover':
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (sty) {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
						if (_v1 === '') {
							return '';
						} else {
							var styleName = _v1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$mdgriffith$elm_ui$Internal$Model$transformClass(x));
	}
};
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = $mdgriffith$elm_ui$Internal$Model$getStyleName(style);
		return A2($elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2($elm$core$Set$insert, styleName, cache),
			A2($elm$core$List$cons, style, existing));
	});
var $mdgriffith$elm_ui$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 'Property', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 'Style', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$dot = function (c) {
	return '.' + c;
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $mdgriffith$elm_ui$Internal$Model$formatColor = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return 'rgba(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255))) + (',' + ($elm$core$String$fromFloat(alpha) + ')')))));
};
var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.inset ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.blur) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.size) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.color))
				])));
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function (focus) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin) + ':focus-within',
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus .focusable, ') + (($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + '.focusable:focus, ') + ('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ' .focusable-thumb'))),
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlJson(value));
	});
var $mdgriffith$elm_ui$Internal$Style$AllChildren = F2(
	function (a, b) {
		return {$: 'AllChildren', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 'Child', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 'Descriptor', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Left = {$: 'Left'};
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 'Prop', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Right = {$: 'Right'};
var $mdgriffith$elm_ui$Internal$Style$Self = function (a) {
	return {$: 'Self', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 'Supports', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Content = function (a) {
	return {$: 'Content', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Bottom = {$: 'Bottom'};
var $mdgriffith$elm_ui$Internal$Style$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Internal$Style$CenterY = {$: 'CenterY'};
var $mdgriffith$elm_ui$Internal$Style$Top = {$: 'Top'};
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[$mdgriffith$elm_ui$Internal$Style$Top, $mdgriffith$elm_ui$Internal$Style$Bottom, $mdgriffith$elm_ui$Internal$Style$Right, $mdgriffith$elm_ui$Internal$Style$Left, $mdgriffith$elm_ui$Internal$Style$CenterX, $mdgriffith$elm_ui$Internal$Style$CenterY]);
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _v0 = values(alignment);
		var content = _v0.a;
		var indiv = _v0.b;
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$contentName(
					$mdgriffith$elm_ui$Internal$Style$Content(alignment)),
				content),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						indiv)
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.seButton),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		$mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment.$) {
				case 'Top':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 'Bottom':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 'Right':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 'Left':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 'CenterX':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						values(alignment))
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$Above = {$: 'Above'};
var $mdgriffith$elm_ui$Internal$Style$Behind = {$: 'Behind'};
var $mdgriffith$elm_ui$Internal$Style$Below = {$: 'Below'};
var $mdgriffith$elm_ui$Internal$Style$OnLeft = {$: 'OnLeft'};
var $mdgriffith$elm_ui$Internal$Style$OnRight = {$: 'OnRight'};
var $mdgriffith$elm_ui$Internal$Style$Within = {$: 'Within'};
var $mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = $mdgriffith$elm_ui$Internal$Style$Above;
	var _v0 = function () {
		switch (loc.$) {
			case 'Above':
				return _Utils_Tuple0;
			case 'Below':
				return _Utils_Tuple0;
			case 'OnRight':
				return _Utils_Tuple0;
			case 'OnLeft':
				return _Utils_Tuple0;
			case 'Within':
				return _Utils_Tuple0;
			default:
				return _Utils_Tuple0;
		}
	}();
	return _List_fromArray(
		[$mdgriffith$elm_ui$Internal$Style$Above, $mdgriffith$elm_ui$Internal$Style$Below, $mdgriffith$elm_ui$Internal$Style$OnRight, $mdgriffith$elm_ui$Internal$Style$OnLeft, $mdgriffith$elm_ui$Internal$Style$Within, $mdgriffith$elm_ui$Internal$Style$Behind]);
}();
var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		_Utils_ap(
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.imageContainer))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-height', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.root),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				$mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc.$) {
							case 'Above':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
												])),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Below':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 'OnRight':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'OnLeft':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'right', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Within':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'resize', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-size', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-family', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.wrapped),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.noTextSelection),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorPointer),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.passPointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.capturePointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transparent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.opaque),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transition),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Prop,
						'transition',
						A2(
							$elm$core$String$join,
							', ',
							A2(
								$elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbars),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clip),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderNone),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDashed),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDotted),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderSolid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'inherit')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.link),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'baseline')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0px'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', 'min-content'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 'Bottom':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 'Right':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 'Left':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 'CenterX':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.page),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Left)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Right)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultiline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineWrapper),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineParent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineFiller),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-wrap', 'break-word'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::after',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::before',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textThin),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textNormalWeight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textMedium),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textSemiBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textHeavy),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.italic),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textUnitalicized),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustify),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustifyAll),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textCenter),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textRight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLeft),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var $mdgriffith$elm_ui$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.border-' + $elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'border-width',
							$elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 6)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 8, 32)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.p-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'padding',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('zero'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('onum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('liga'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('dlig'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('ordn'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('tnum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('afrc'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('frac')
		]));
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $mdgriffith$elm_ui$Internal$Style$Intermediate = function (a) {
	return {$: 'Intermediate', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			{closing: closing, others: _List_Nil, props: _List_Nil, selector: selector});
	});
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_v0, rulesToRender) {
		var parent = _v0.a;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 'Prop':
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								props: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.props)
							});
					case 'Supports':
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Style$Intermediate(
										{closing: '\n}', others: _List_Nil, props: props, selector: '@supports (' + (prop + (':' + (value + (') {' + parent.selector))))}),
									rendered.others)
							});
					case 'Adjacent':
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' + ' + selector), ''),
										adjRules),
									rendered.others)
							});
					case 'Child':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' > ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'AllChildren':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'Descriptor':
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.selector, descriptor),
											''),
										descriptorRules),
									rendered.others)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector, ''),
										batched),
									rendered.others)
							});
				}
			});
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender));
	});
var $mdgriffith$elm_ui$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var x = _v3.a;
					var y = _v3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _v2 = rule.props;
		if (!_v2.b) {
			return '';
		} else {
			return rule.selector + ('{' + (renderValues(rule.props) + (rule.closing + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0.a;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.others)));
	};
	return $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			renderIntermediate,
			A3(
				$elm$core$List$foldr,
				F2(
					function (_v1, existing) {
						var name = _v1.a;
						var styleRules = _v1.b;
						return A2(
							$elm$core$List$cons,
							A2(
								$mdgriffith$elm_ui$Internal$Style$renderRules,
								A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
	$mdgriffith$elm_ui$Internal$Style$overrides,
	$mdgriffith$elm_ui$Internal$Style$renderCompact(
		_Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)));
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _v0 = opts.mode;
	switch (_v0.$) {
		case 'Layout':
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'div',
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$elm$virtual_dom$VirtualDom$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								$elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
							]))
					]));
		case 'NoStaticStyleSheet':
			return $elm$virtual_dom$VirtualDom$text('');
		default:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'elm-ui-static-rules',
				_List_fromArray(
					[
						A2(
						$elm$virtual_dom$VirtualDom$property,
						'rules',
						$elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules))
					]),
				_List_Nil);
	}
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 'Serif':
			return 'serif';
		case 'SansSerif':
			return 'sans-serif';
		case 'Monospace':
			return 'monospace';
		case 'Typeface':
			var name = font.a;
			return '\"' + (name + '\"');
		case 'ImportFont':
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.name;
			return '\"' + (name + '\"');
	}
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return name === 'smcp';
		case 'VariantOff':
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.variants);
	} else {
		return false;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(
	function (force, _v0, existing) {
		var key = _v0.a;
		var val = _v0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
	function (options, maybePseudo, selector, props) {
		if (maybePseudo.$ === 'Nothing') {
			return _List_fromArray(
				[
					selector + ('{' + (A3(
					$elm$core$List$foldl,
					$mdgriffith$elm_ui$Internal$Model$renderProps(false),
					'',
					props) + '\n}'))
				]);
		} else {
			var pseudo = maybePseudo.a;
			switch (pseudo.$) {
				case 'Hover':
					var _v2 = options.hover;
					switch (_v2.$) {
						case 'NoHover':
							return _List_Nil;
						case 'ForceHover':
							return _List_fromArray(
								[
									selector + ('-hv {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(true),
									'',
									props) + '\n}'))
								]);
						default:
							return _List_fromArray(
								[
									selector + ('-hv:hover {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(false),
									'',
									props) + '\n}'))
								]);
					}
				case 'Focus':
					var renderedProps = A3(
						$elm$core$List$foldl,
						$mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[
							selector + ('-fs:focus {' + (renderedProps + '\n}')),
							('.' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (':focus ' + (selector + '-fs  {')))) + (renderedProps + '\n}'),
							(selector + '-fs:focus-within {') + (renderedProps + '\n}'),
							('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' .focusable-thumb' + (selector + '-fs {')))) + (renderedProps + '\n}')
						]);
				default:
					return _List_fromArray(
						[
							selector + ('-act:active {' + (A3(
							$elm$core$List$foldl,
							$mdgriffith$elm_ui$Internal$Model$renderProps(false),
							'',
							props) + '\n}'))
						]);
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return '\"' + (name + '\"');
		case 'VariantOff':
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + $elm$core$String$fromInt(index)));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.variants)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'translate3d(' + ($elm$core$String$fromFloat(x) + ('px, ' + ($elm$core$String$fromFloat(y) + ('px, ' + ($elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + ($elm$core$String$fromFloat(tx) + ('px, ' + ($elm$core$String$fromFloat(ty) + ('px, ' + ($elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + ($elm$core$String$fromFloat(sx) + (', ' + ($elm$core$String$fromFloat(sy) + (', ' + ($elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + ($elm$core$String$fromFloat(ox) + (', ' + ($elm$core$String$fromFloat(oy) + (', ' + ($elm$core$String$fromFloat(oz) + (', ' + ($elm$core$String$fromFloat(angle) + 'rad)')))))));
			return $elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
	function (options, rule, maybePseudo) {
		switch (rule.$) {
			case 'Style':
				var selector = rule.a;
				var props = rule.b;
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 'Shadows':
				var name = rule.a;
				var prop = rule.b;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, 'box-shadow', prop)
						]));
			case 'Transparency':
				var name = rule.a;
				var transparency = rule.b;
				var opacity = A2(
					$elm$core$Basics$max,
					0,
					A2($elm$core$Basics$min, 1, 1 - transparency));
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'opacity',
							$elm$core$String$fromFloat(opacity))
						]));
			case 'FontSize':
				var i = rule.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			case 'FontFamily':
				var name = rule.a;
				var typefaces = rule.b;
				var features = A2(
					$elm$core$String$join,
					', ',
					A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces));
				var families = _List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-family',
						A2(
							$elm$core$String$join,
							', ',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces))),
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'font-feature-settings', features),
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-variant',
						A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
					]);
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, '.' + name, families);
			case 'Single':
				var _class = rule.a;
				var prop = rule.b;
				var val = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, prop, val)
						]));
			case 'Colored':
				var _class = rule.a;
				var prop = rule.b;
				var color = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							prop,
							$mdgriffith$elm_ui$Internal$Model$formatColor(color))
						]));
			case 'SpacingStyle':
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = $elm$core$String$fromInt(y) + 'px';
				var xPx = $elm$core$String$fromInt(x) + 'px';
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.single;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.row;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.wrapped + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.page;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.column;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.any;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (row + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (wrappedRow + (' > ' + any)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (column + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_Utils_ap(_class, paragraph),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							'textarea' + (any + _class),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)')),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'height',
									'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::after'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-top',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::before'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-bottom',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								]))
						]));
			case 'PaddingStyle':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'padding',
							$elm$core$String$fromFloat(top) + ('px ' + ($elm$core$String$fromFloat(right) + ('px ' + ($elm$core$String$fromFloat(bottom) + ('px ' + ($elm$core$String$fromFloat(left) + 'px')))))))
						]));
			case 'BorderWidth':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'border-width',
							$elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 'GridTemplateStyle':
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 'Px':
									var px = x.a;
									return $elm$core$String$fromInt(px) + 'px';
								case 'Content':
									var _v2 = _Utils_Tuple2(minimum, maximum);
									if (_v2.a.$ === 'Nothing') {
										if (_v2.b.$ === 'Nothing') {
											var _v3 = _v2.a;
											var _v4 = _v2.b;
											return 'max-content';
										} else {
											var _v6 = _v2.a;
											var maxSize = _v2.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v2.b.$ === 'Nothing') {
											var minSize = _v2.a.a;
											var _v5 = _v2.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _v2.a.a;
											var maxSize = _v2.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Fill':
									var i = x.a;
									var _v7 = _Utils_Tuple2(minimum, maximum);
									if (_v7.a.$ === 'Nothing') {
										if (_v7.b.$ === 'Nothing') {
											var _v8 = _v7.a;
											var _v9 = _v7.b;
											return $elm$core$String$fromInt(i) + 'fr';
										} else {
											var _v11 = _v7.a;
											var maxSize = _v7.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v7.b.$ === 'Nothing') {
											var minSize = _v7.a.a;
											var _v10 = _v7.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _v7.a.a;
											var maxSize = _v7.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Min':
									var m = x.a;
									var len = x.b;
									var $temp$minimum = $elm$core$Maybe$Just(m),
										$temp$maximum = maximum,
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
								default:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = minimum,
										$temp$maximum = $elm$core$Maybe$Just(m),
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
							}
						}
					});
				var toGridLength = function (x) {
					return A3(toGridLengthHelper, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x);
				};
				var xSpacing = toGridLength(template.spacing.a);
				var ySpacing = toGridLength(template.spacing.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.rows)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.spacing.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.spacing.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.columns)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 'GridPosition':
				var position = rule.a;
				var msPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.row) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.height) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.col) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.width) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.row) + (' / ' + ($elm$core$String$fromInt(position.row + position.height) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.col) + (' / ' + ($elm$core$String$fromInt(position.col + position.width) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.row) + ('-' + ($elm$core$String$fromInt(position.col) + ('-' + ($elm$core$String$fromInt(position.width) + ('-' + $elm$core$String$fromInt(position.height)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 'PseudoSelector':
				var _class = rule.a;
				var styles = rule.b;
				var renderPseudoRule = function (style) {
					return A3(
						$mdgriffith$elm_ui$Internal$Model$renderStyleRule,
						options,
						style,
						$elm$core$Maybe$Just(_class));
				};
				return A2($elm$core$List$concatMap, renderPseudoRule, styles);
			default:
				var transform = rule.a;
				var val = $mdgriffith$elm_ui$Internal$Model$transformValue(transform);
				var _class = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				var _v12 = _Utils_Tuple2(_class, val);
				if ((_v12.a.$ === 'Just') && (_v12.b.$ === 'Just')) {
					var cls = _v12.a.a;
					var v = _v12.b.a;
					return A4(
						$mdgriffith$elm_ui$Internal$Model$renderStyle,
						options,
						maybePseudo,
						'.' + cls,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Model$Property, 'transform', v)
							]));
				} else {
					return _List_Nil;
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
	function (options, stylesheet) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$map,
				function (style) {
					var styled = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing);
					return _Utils_Tuple2(
						$mdgriffith$elm_ui$Internal$Model$getStyleName(style),
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled));
				},
				stylesheet));
	});
var $mdgriffith$elm_ui$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_v0) {
			var name = _v0.a;
			var val = _v0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, renderPair, rules)) + '}'));
	});
var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(
	function (name, modifier, _v0) {
		var parentAdj = _v0.a;
		var textAdjustment = _v0.b;
		return _List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))), textAdjustment)
			]);
	});
var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _v0, otherFontName) {
		var full = _v0.a;
		var capital = _v0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_Utils_ap(
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.fullSize, full)));
	});
var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {height: height / size, size: size, vertical: vertical};
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.capital, adjustment.baseline, adjustment.descender, adjustment.lowercase]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.descender,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.baseline,
		$elm$core$List$minimum(
			A2(
				$elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.capital,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		capital: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		full: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				$elm$core$String$fromFloat(converted.height)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.vertical) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.size) + 'em')
			]));
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 'Nothing') {
					if (face.$ === 'FontWith') {
						var _with = face.a;
						var _v2 = _with.adjustment;
						if (_v2.$ === 'Nothing') {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.full;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.capital;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		$elm$core$Maybe$Nothing,
		typefaces);
};
var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 'ImportFont') {
			var url = font.b;
			return $elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_v2) {
		var name = _v2.a;
		var typefaces = _v2.b;
		var imports = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2($elm$core$List$map, $elm$core$Tuple$first, rules);
	var fontAdjustments = function (_v1) {
		var name = _v1.a;
		var typefaces = _v1.b;
		var _v0 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
		if (_v0.$ === 'Nothing') {
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _v0.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontImports, rules)),
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontAdjustments, rules)));
};
var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 'FontFamily') {
		var name = rule.a;
		var typefaces = rule.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var combine = F2(
			function (style, rendered) {
				return {
					rules: _Utils_ap(
						rendered.rules,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					topLevel: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 'Nothing') {
							return rendered.topLevel;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.topLevel);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{rules: _List_Nil, topLevel: _List_Nil},
			stylesheet);
		var topLevel = _v0.topLevel;
		var rules = _v0.rules;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.mode;
		switch (_v0.$) {
			case 'Layout':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			case 'NoStaticStyleSheet':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			default:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'elm-ui-rules',
					_List_fromArray(
						[
							A2(
							$elm$virtual_dom$VirtualDom$property,
							'rules',
							A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet))
						]),
					_List_Nil);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'static-stylesheet',
				$mdgriffith$elm_ui$Internal$Model$staticRoot(opts)),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
				children)) : A2(
			$elm$core$List$cons,
			_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
			children);
	});
var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2($elm$core$List$cons, dynamicStyleSheet, children)) : A2($elm$core$List$cons, dynamicStyleSheet, children);
	});
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$p = _VirtualDom_node('p');
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _v0) {
		var fieldOne = _v0.a;
		var fieldTwo = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var $elm$html$Html$s = _VirtualDom_node('s');
var $elm$html$Html$u = _VirtualDom_node('u');
var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 'Keyed') {
					var keyed = children.a;
					return A3(
						$elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return keyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return $elm$html$Html$div;
								case 'p':
									return $elm$html$Html$p;
								default:
									return $elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return unkeyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 'Generic':
					return A2(createNode, 'div', attributes);
				case 'NodeName':
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						$elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single))
									]))
							]));
			}
		}();
		switch (parentContext.$) {
			case 'AsRow':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX])))
						]),
					_List_fromArray(
						[html])) : html));
			case 'AsColumn':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthContent + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightContent)))));
var $mdgriffith$elm_ui$Internal$Model$textElement = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFill + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightFill)))));
var $mdgriffith$elm_ui$Internal$Model$textElementFill = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_v8, _v9) {
				var key = _v8.a;
				var child = _v8.b;
				var htmls = _v9.a;
				var existingStyles = _v9.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _v6) {
				var htmls = _v6.a;
				var existingStyles = _v6.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 'Keyed') {
			var keyedChildren = children.a;
			var _v1 = A3(
				$elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _v1.a;
			var styles = _v1.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children))),
						styles: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _v3 = A3(
				$elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _v3.a;
			var styles = _v3.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children))),
						styles: allStyles
					});
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 'Single', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 'Transform', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 'ChildrenBehind', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 'ChildrenBehindAndInFront', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 'ChildrenInFront', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					function () {
						switch (location.$) {
							case 'Above':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.above]));
							case 'Below':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.below]));
							case 'OnRight':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onRight]));
							case 'OnLeft':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onLeft]));
							case 'InFront':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.inFront]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.behind]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 'Empty':
							return $elm$virtual_dom$VirtualDom$text('');
						case 'Text':
							var str = elem.a;
							return $mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 'Unstyled':
							var html = elem.a;
							return html($mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 'NoNearbyChildren':
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenBehind':
				var existingBehind = existing.a;
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2($elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenInFront':
				var existingInFront = existing.a;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						A2($elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						A2($elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2($elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 'Embedded', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 'NodeName', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 'Generic':
				return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 'NodeName':
				var name = old.a;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align.$) {
		case 'Left':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'Right':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align.$) {
		case 'Top':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 'FullTransform', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 'Moved', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 'Untransformed':
				switch (component.$) {
					case 'MoveX':
						var x = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 'MoveY':
						var y = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 'MoveZ':
						var z = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 'Moved':
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 'MoveY':
						var newY = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 'MoveZ':
						var newZ = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 'MoveY':
						var newY = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 'MoveZ':
						var newZ = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 'MoveXYZ':
						var newMove = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 'Rotate':
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
var $mdgriffith$elm_ui$Internal$Flag$merge = F2(
	function (_v0, _v1) {
		var one = _v0.a;
		var two = _v0.b;
		var three = _v1.a;
		var four = _v1.b;
		return A2($mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
	});
var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var $mdgriffith$elm_ui$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 'Px':
			var px = h.a;
			var val = $elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightContent,
				_List_Nil);
		case 'Fill':
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-height',
				$elm$core$String$fromInt(minSize) + 'px !important');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-height',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
var $mdgriffith$elm_ui$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 'Px':
			var px = w.a;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + $elm$core$String$fromInt(px),
						'width',
						$elm$core$String$fromInt(px) + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthContent,
				_List_Nil);
		case 'Fill':
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-width',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-width',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
var $mdgriffith$elm_ui$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
			if (style.$ === 'Single') {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 'FontSize':
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 'PaddingStyle':
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _v1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				if (_v1.$ === 'Nothing') {
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: styles
					};
				} else {
					var _class = _v1.a;
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 'NoAttribute':
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Class':
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 'Attr':
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2($elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'StyleClass':
						var flag = attribute.a;
						var style = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag, style)) {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2($elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 'TransformComponent':
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
							$temp$transform = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Width':
						var width = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 'Px':
									var px = width.a;
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3(
											$mdgriffith$elm_ui$Internal$Model$Single,
											'width-px-' + $elm$core$String$fromInt(px),
											'width',
											$elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthContent),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$widthContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'width-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v4 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width);
									var addToFlags = _v4.a;
									var newClass = _v4.b;
									var newStyles = _v4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Height':
						var height = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 'Px':
									var px = height.a;
									var val = $elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + (name + (' ' + classes))),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightContent + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$heightContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightFill + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'height-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v6 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height);
									var addToFlags = _v6.a;
									var newClass = _v6.b;
									var newStyles = _v6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Describe':
						var description = attribute.a;
						switch (description.$) {
							case 'Main':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Navigation':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'ContentInfo':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Complementary':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Heading':
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											$mdgriffith$elm_ui$Internal$Model$addNodeName,
											'h' + $elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 'Paragraph':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Button':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Label':
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'LivePolite':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 'Nearby':
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 'Empty':
									return styles;
								case 'Text':
									var str = elem.a;
									return styles;
								case 'Unstyled':
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.styles);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'AlignX':
						var x = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x.$) {
									case 'CenterX':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 'Right':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y.$) {
									case 'CenterY':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 'Bottom':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 'Untransformed'};
var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
var $mdgriffith$elm_ui$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			$mdgriffith$elm_ui$Internal$Model$createElement,
			context,
			children,
			A8(
				$mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
				$mdgriffith$elm_ui$Internal$Model$contextClasses(context),
				node,
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				$mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
				$elm$core$List$reverse(attributes)));
	});
var $mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 'Height', a: a};
};
var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 'Attr', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Internal$Model$Content = {$: 'Content'};
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Internal$Model$Width = function (a) {
	return {$: 'Width', a: a};
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentTop + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentLeft)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 'OnlyDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 'StaticRootAndDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$AllowHover = {$: 'AllowHover'};
var $mdgriffith$elm_ui$Internal$Model$Layout = {$: 'Layout'};
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 'Rgba', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	backgroundColor: $elm$core$Maybe$Nothing,
	borderColor: $elm$core$Maybe$Nothing,
	shadow: $elm$core$Maybe$Just(
		{
			blur: 0,
			color: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			offset: _Utils_Tuple2(0, 0),
			size: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 'HoverOption':
					var hoverable = opt.a;
					var _v4 = record.hover;
					if (_v4.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								hover: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 'FocusStyleOption':
					var focusStyle = opt.a;
					var _v5 = record.focus;
					if (_v5.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								focus: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.mode;
					if (_v6.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								mode: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			focus: function () {
				var _v0 = record.focus;
				if (_v0.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			hover: function () {
				var _v1 = record.hover;
				if (_v1.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$AllowHover;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			mode: function () {
				var _v2 = record.mode;
				if (_v2.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$Layout;
				} else {
					var actualMode = _v2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			$elm$core$List$foldr,
			combine,
			{focus: $elm$core$Maybe$Nothing, hover: $elm$core$Maybe$Nothing, mode: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 'Unstyled':
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Styled':
				var styles = el.a.styles;
				var html = el.a.html;
				return A2(
					html,
					mode(styles),
					$mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Text':
				var text = el.a;
				return $mdgriffith$elm_ui$Internal$Model$textElement(text);
			default:
				return $mdgriffith$elm_ui$Internal$Model$textElement('');
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _v0 = options.mode;
			if (_v0.$ === 'NoStaticStyleSheet') {
				return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
			} else {
				return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Internal$Model$toHtml,
			embedStyle,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				attributes,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 'Colored', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 'FontFamily', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 'FontSize', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 'SansSerif'};
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 'StyleClass', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 'Typeface', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return $mdgriffith$elm_ui$Internal$Model$floatClass(red) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(green) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var $elm$core$String$toLower = _String_toLower;
var $elm$core$String$words = _String_words;
var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 'Serif':
						return 'serif';
					case 'SansSerif':
						return 'sans-serif';
					case 'Monospace':
						return 'monospace';
					case 'Typeface':
						var name = font.a;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					case 'ImportFont':
						var name = font.a;
						var url = font.b;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					default:
						var name = font.a.name;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
				}
			}());
	});
var $mdgriffith$elm_ui$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			$mdgriffith$elm_ui$Internal$Model$Typeface('Open Sans'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Helvetica'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Verdana'),
			$mdgriffith$elm_ui$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$bgColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontSize,
			$mdgriffith$elm_ui$Internal$Model$FontSize(20)),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontFamily,
			A2(
				$mdgriffith$elm_ui$Internal$Model$FontFamily,
				A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var $mdgriffith$elm_ui$Element$layoutWith = F3(
	function (_v0, attrs, child) {
		var options = _v0.options;
		return A3(
			$mdgriffith$elm_ui$Internal$Model$renderRoot,
			options,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass(
					A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[$mdgriffith$elm_ui$Internal$Style$classes.root, $mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $mdgriffith$elm_ui$Element$layout = $mdgriffith$elm_ui$Element$layoutWith(
	{options: _List_Nil});
var $author$project$App$MasterSelected = function (a) {
	return {$: 'MasterSelected', a: a};
};
var $author$project$App$StatusSelected = function (a) {
	return {$: 'StatusSelected', a: a};
};
var $author$project$App$UserSelected = function (a) {
	return {$: 'UserSelected', a: a};
};
var $mdgriffith$elm_ui$Element$el = F2(
	function (attrs, child) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $mdgriffith$elm_ui$Element$html = $mdgriffith$elm_ui$Internal$Model$unstyled;
var $mdgriffith$elm_ui$Element$htmlAttribute = $mdgriffith$elm_ui$Internal$Model$Attr;
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$html$Html$option = _VirtualDom_node('option');
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 'PaddingStyle', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Element$padding = function (x) {
	var f = x;
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			'p-' + $elm$core$String$fromInt(x),
			f,
			f,
			f,
			f));
};
var $elm$html$Html$select = _VirtualDom_node('select');
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$selected = $elm$html$Html$Attributes$boolProperty('selected');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 'Text', a: a};
};
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $elm$html$Html$br = _VirtualDom_node('br');
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $elm$html$Html$span = _VirtualDom_node('span');
var $author$project$Extra$DateTime$formatMillis = function (millis) {
	return (millis < 10) ? ('00' + $elm$core$String$fromInt(millis)) : ((millis < 100) ? ('0' + $elm$core$String$fromInt(millis)) : $elm$core$String$fromInt(millis));
};
var $author$project$Extra$DateTime$formatTime = function (time) {
	return (time < 10) ? ('0' + $elm$core$String$fromInt(time)) : $elm$core$String$fromInt(time);
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getDay = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt, $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDay);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDay = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Calendar$getDay, $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getDay = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDay;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getTime = function (_v0) {
	var time = _v0.a.time;
	return time;
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getHours = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$getHours, $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getTime);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getHours = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getHours;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getMilliseconds = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$getMilliseconds, $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getTime);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getMilliseconds = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getMilliseconds;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getMinutes = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$getMinutes, $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getTime);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getMinutes = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getMinutes;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getSeconds = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$getSeconds, $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getTime);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getSeconds = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getSeconds;
var $elm$time$Time$Fri = {$: 'Fri'};
var $elm$time$Time$Sat = {$: 'Sat'};
var $elm$time$Time$Sun = {$: 'Sun'};
var $elm$time$Time$Thu = {$: 'Thu'};
var $elm$time$Time$Tue = {$: 'Tue'};
var $elm$time$Time$Wed = {$: 'Wed'};
var $elm$time$Time$toWeekday = F2(
	function (zone, time) {
		var _v0 = A2(
			$elm$core$Basics$modBy,
			7,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60 * 24));
		switch (_v0) {
			case 0:
				return $elm$time$Time$Thu;
			case 1:
				return $elm$time$Time$Fri;
			case 2:
				return $elm$time$Time$Sat;
			case 3:
				return $elm$time$Time$Sun;
			case 4:
				return $elm$time$Time$Mon;
			case 5:
				return $elm$time$Time$Tue;
			default:
				return $elm$time$Time$Wed;
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getWeekday = function (date) {
	return A2(
		$elm$time$Time$toWeekday,
		$elm$time$Time$utc,
		$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toPosix(date));
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getWeekday = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getWeekday;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getWeekday = function (_v0) {
	var dateTime = _v0.a;
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$getWeekday(dateTime.date);
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getWeekday = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getWeekday;
var $author$project$Extra$Time$Month$toString = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'January';
		case 'Feb':
			return 'February';
		case 'Mar':
			return 'March';
		case 'Apr':
			return 'April';
		case 'May':
			return 'May';
		case 'Jun':
			return 'June';
		case 'Jul':
			return 'July';
		case 'Aug':
			return 'August';
		case 'Sep':
			return 'September';
		case 'Oct':
			return 'October';
		case 'Nov':
			return 'November';
		default:
			return 'December';
	}
};
var $author$project$Extra$Time$Weekday$toString = function (weekday) {
	switch (weekday.$) {
		case 'Mon':
			return 'Monday';
		case 'Tue':
			return 'Tuesday';
		case 'Wed':
			return 'Wednesday';
		case 'Thu':
			return 'Thursday';
		case 'Fri':
			return 'Friday';
		case 'Sat':
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var $author$project$Extra$DateTime$toString = function (dateTime) {
	return A2(
		$elm$core$String$join,
		' ',
		_List_fromArray(
			[
				A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					[
						$author$project$Extra$Time$Weekday$toString(
						$PanagiotisGeorgiadis$elm_datetime$DateTime$getWeekday(dateTime)),
						$elm$core$String$fromInt(
						$PanagiotisGeorgiadis$elm_datetime$DateTime$getDay(dateTime)),
						$author$project$Extra$Time$Month$toString(
						$PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth(dateTime)),
						$elm$core$String$fromInt(
						$PanagiotisGeorgiadis$elm_datetime$DateTime$getYear(dateTime))
					])),
				A2(
				$elm$core$String$join,
				':',
				_List_fromArray(
					[
						$author$project$Extra$DateTime$formatTime(
						$PanagiotisGeorgiadis$elm_datetime$DateTime$getHours(dateTime)),
						$author$project$Extra$DateTime$formatTime(
						$PanagiotisGeorgiadis$elm_datetime$DateTime$getMinutes(dateTime)),
						$author$project$Extra$DateTime$formatTime(
						$PanagiotisGeorgiadis$elm_datetime$DateTime$getSeconds(dateTime)),
						$author$project$Extra$DateTime$formatMillis(
						$PanagiotisGeorgiadis$elm_datetime$DateTime$getMilliseconds(dateTime)) + 'Z'
					]))
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ResetVisualSelection = {$: 'ResetVisualSelection'};
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Right = {$: 'Right'};
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Size = F2(
	function (width, height) {
		return {height: height, width: width};
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SelectDate = function (a) {
	return {$: 'SelectDate', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$UpdateVisualSelection = function (a) {
	return {$: 'UpdateVisualSelection', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$checkIfDisabled = F2(
	function (_v0, date) {
		var dateLimit = _v0.a.dateLimit;
		var isLesserThanDate = function (date_) {
			return _Utils_eq(
				A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_),
				$elm$core$Basics$LT);
		};
		var isGreaterThanDate = function (date_) {
			return _Utils_eq(
				A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_),
				$elm$core$Basics$GT);
		};
		if (dateLimit.$ === 'NoLimit') {
			return false;
		} else {
			var minDate = dateLimit.a.minDate;
			var maxDate = dateLimit.a.maxDate;
			return isLesserThanDate(minDate) || isGreaterThanDate(maxDate);
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$checkIfInvalid = F2(
	function (_v0, date) {
		var dateRangeOffset = _v0.a.dateRangeOffset;
		if (dateRangeOffset.$ === 'Offset') {
			var invalidDates = dateRangeOffset.a.invalidDates;
			return A2(
				$elm$core$List$any,
				function (d) {
					return _Utils_eq(
						A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, d),
						$elm$core$Basics$EQ);
				},
				invalidDates);
		} else {
			return false;
		}
	});
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$onMouseOver = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseover',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $PanagiotisGeorgiadis$elm_datepicker$DatePicker$I18n$Condensed = {$: 'Condensed'};
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$toHumanReadableDate = F2(
	function (i18n, dateTime) {
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					i18n.weekdayToString,
					$PanagiotisGeorgiadis$elm_datepicker$DatePicker$I18n$Condensed,
					$PanagiotisGeorgiadis$elm_datetime$DateTime$getWeekday(dateTime)),
					$elm$core$String$fromInt(
					$PanagiotisGeorgiadis$elm_datetime$DateTime$getDay(dateTime)),
					A2(
					i18n.monthToString,
					$PanagiotisGeorgiadis$elm_datepicker$DatePicker$I18n$Condensed,
					$PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth(dateTime)),
					$elm$core$String$fromInt(
					$PanagiotisGeorgiadis$elm_datetime$DateTime$getYear(dateTime))
				]));
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$dateHtml = F2(
	function (model, date) {
		var today = model.a.today;
		var range = model.a.range;
		var i18n = model.a.i18n;
		var isLesserThanDate = function (date_) {
			return _Utils_eq(
				A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_),
				$elm$core$Basics$LT);
		};
		var isInvalid = A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$checkIfInvalid, model, date);
		var isGreaterThanDate = function (date_) {
			return _Utils_eq(
				A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_),
				$elm$core$Basics$GT);
		};
		var isPartOfTheDateRange = function () {
			var isDateBetween = F2(
				function (start, end) {
					return (isGreaterThanDate(start) && isLesserThanDate(end)) || (isLesserThanDate(start) && isGreaterThanDate(end));
				});
			if (range.$ === 'BothSelected') {
				if (range.a.$ === 'Visually') {
					var _v8 = range.a;
					var start = _v8.a;
					var shadowEnd = _v8.b;
					return A2(isDateBetween, start, shadowEnd);
				} else {
					var _v9 = range.a;
					var start = _v9.a;
					var end = _v9.b;
					return A2(isDateBetween, start, end);
				}
			} else {
				return false;
			}
		}();
		var isEqualToDate = function (date_) {
			return _Utils_eq(
				A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_),
				$elm$core$Basics$EQ);
		};
		var isToday = isEqualToDate(today);
		var isDisabled = A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$checkIfDisabled, model, date);
		if (isDisabled || isInvalid) {
			return A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2('date', true),
								_Utils_Tuple2('today', isToday),
								_Utils_Tuple2('disabled', isDisabled),
								_Utils_Tuple2('invalid', isInvalid),
								_Utils_Tuple2('date-range', isPartOfTheDateRange)
							])),
						$elm$html$Html$Attributes$title(
						A2($PanagiotisGeorgiadis$elm_datepicker$Utils$Time$toHumanReadableDate, i18n, date))
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('date-inner')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$elm$core$String$fromInt(
									$PanagiotisGeorgiadis$elm_datetime$DateTime$getDay(date)))
							]))
					]));
		} else {
			var isSelected = function () {
				if (range.$ === 'StartDateSelected') {
					var start = range.a;
					return isEqualToDate(start);
				} else {
					return false;
				}
			}();
			var _v0 = function () {
				if (range.$ === 'BothSelected') {
					if (range.a.$ === 'Visually') {
						var _v2 = range.a;
						var start = _v2.a;
						var end = _v2.b;
						var _v3 = function () {
							var _v4 = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, start, end);
							if (_v4.$ === 'LT') {
								return _Utils_Tuple2(start, end);
							} else {
								return _Utils_Tuple2(end, start);
							}
						}();
						var start_ = _v3.a;
						var end_ = _v3.b;
						return isEqualToDate(start_) ? _Utils_Tuple2(true, false) : (isEqualToDate(end_) ? _Utils_Tuple2(false, true) : _Utils_Tuple2(false, false));
					} else {
						var _v5 = range.a;
						var start = _v5.a;
						var end = _v5.b;
						return _Utils_Tuple2(
							isEqualToDate(start),
							isEqualToDate(end));
					}
				} else {
					return _Utils_Tuple2(false, false);
				}
			}();
			var isStart = _v0.a;
			var isEnd = _v0.b;
			var dateClassList = _List_fromArray(
				[
					_Utils_Tuple2('date', true),
					_Utils_Tuple2('today', isToday),
					_Utils_Tuple2('selected', isSelected || (isStart || isEnd)),
					_Utils_Tuple2('date-range', isPartOfTheDateRange),
					_Utils_Tuple2('date-range-start', isStart),
					_Utils_Tuple2('date-range-end', isEnd)
				]);
			return A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$classList(dateClassList),
						$elm$html$Html$Attributes$title(
						A2($PanagiotisGeorgiadis$elm_datepicker$Utils$Time$toHumanReadableDate, i18n, date)),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SelectDate(date)),
						$elm$html$Html$Events$onMouseOver(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$UpdateVisualSelection(date))
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('date-inner')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$elm$core$String$fromInt(
									$PanagiotisGeorgiadis$elm_datetime$DateTime$getDay(date)))
							]))
					]));
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$Common$emptyDateHtml = A2(
	$elm$html$Html$span,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('empty-date')
		]),
	_List_Nil);
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDatesInMonth = function (_v0) {
	var year = _v0.a.year;
	var month = _v0.a.month;
	var lastDayOfTheMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(
		A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, year, month));
	return A2(
		$elm$core$List$map,
		function (day) {
			return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Date(
				{
					day: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(day),
					month: month,
					year: year
				});
		},
		A2($elm$core$List$range, 1, lastDayOfTheMonth));
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getDatesInMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDatesInMonth;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDatesInMonth = function (_v0) {
	var date = _v0.a.date;
	var time = _v0.a.time;
	return A2(
		$elm$core$List$map,
		function (date_) {
			return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
				{date: date_, time: time});
		},
		$PanagiotisGeorgiadis$elm_datetime$Calendar$getDatesInMonth(date));
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getDatesInMonth = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDatesInMonth;
var $PanagiotisGeorgiadis$elm_datepicker$Common$getFirstDayOfTheMonth = $PanagiotisGeorgiadis$elm_datetime$DateTime$setDay(1);
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$Matched = function (a) {
	return {$: 'Matched', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$Searching = function (a) {
	return {$: 'Searching', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$Common$getSortedWeekdays = function (startingWeekday) {
	switch (startingWeekday.$) {
		case 'Sun':
			return _List_fromArray(
				[$elm$time$Time$Sun, $elm$time$Time$Mon, $elm$time$Time$Tue, $elm$time$Time$Wed, $elm$time$Time$Thu, $elm$time$Time$Fri, $elm$time$Time$Sat]);
		case 'Mon':
			return _List_fromArray(
				[$elm$time$Time$Mon, $elm$time$Time$Tue, $elm$time$Time$Wed, $elm$time$Time$Thu, $elm$time$Time$Fri, $elm$time$Time$Sat, $elm$time$Time$Sun]);
		case 'Tue':
			return _List_fromArray(
				[$elm$time$Time$Tue, $elm$time$Time$Wed, $elm$time$Time$Thu, $elm$time$Time$Fri, $elm$time$Time$Sat, $elm$time$Time$Sun, $elm$time$Time$Mon]);
		case 'Wed':
			return _List_fromArray(
				[$elm$time$Time$Wed, $elm$time$Time$Thu, $elm$time$Time$Fri, $elm$time$Time$Sat, $elm$time$Time$Sun, $elm$time$Time$Mon, $elm$time$Time$Tue]);
		case 'Thu':
			return _List_fromArray(
				[$elm$time$Time$Thu, $elm$time$Time$Fri, $elm$time$Time$Sat, $elm$time$Time$Sun, $elm$time$Time$Mon, $elm$time$Time$Tue, $elm$time$Time$Wed]);
		case 'Fri':
			return _List_fromArray(
				[$elm$time$Time$Fri, $elm$time$Time$Sat, $elm$time$Time$Sun, $elm$time$Time$Mon, $elm$time$Time$Tue, $elm$time$Time$Wed, $elm$time$Time$Thu]);
		default:
			return _List_fromArray(
				[$elm$time$Time$Sat, $elm$time$Time$Sun, $elm$time$Time$Mon, $elm$time$Time$Tue, $elm$time$Time$Wed, $elm$time$Time$Thu, $elm$time$Time$Fri]);
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$precedingWeekdays = F2(
	function (firstDayOfTheMonth, startingWeekday) {
		var firstWeekdayOfTheMonth = $PanagiotisGeorgiadis$elm_datetime$DateTime$getWeekday(firstDayOfTheMonth);
		var precedingWeekdaysMatch = A3(
			$elm$core$List$foldl,
			F2(
				function (weekday, res) {
					if (res.$ === 'Matched') {
						var c = res.a;
						return $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$Matched(c);
					} else {
						var c = res.a;
						return _Utils_eq(weekday, firstWeekdayOfTheMonth) ? $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$Matched(c) : $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$Searching(c + 1);
					}
				}),
			$PanagiotisGeorgiadis$elm_datepicker$Utils$Time$Searching(0),
			$PanagiotisGeorgiadis$elm_datepicker$Common$getSortedWeekdays(startingWeekday));
		if (precedingWeekdaysMatch.$ === 'Searching') {
			return 0;
		} else {
			var c = precedingWeekdaysMatch.a;
			return c;
		}
	});
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $PanagiotisGeorgiadis$elm_datepicker$Common$totalCalendarCells = 6 * 7;
var $PanagiotisGeorgiadis$elm_datepicker$Common$weekdaysHtml = F2(
	function (weekday, i18n) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('weekdays')
				]),
			A2(
				$elm$core$List$map,
				function (w) {
					return A2(
						$elm$html$Html$span,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								A2(i18n.weekdayToString, $PanagiotisGeorgiadis$elm_datepicker$DatePicker$I18n$Condensed, w))
							]));
				},
				$PanagiotisGeorgiadis$elm_datepicker$Common$getSortedWeekdays(weekday)));
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$calendarView = function (model) {
	var primaryDate = model.a.primaryDate;
	var i18n = model.a.i18n;
	var startingWeekday = model.a.startingWeekday;
	var precedingWeekdaysCount = function () {
		var _v0 = $PanagiotisGeorgiadis$elm_datepicker$Common$getFirstDayOfTheMonth(primaryDate);
		if (_v0.$ === 'Just') {
			var firstDayOfTheMonth = _v0.a;
			return A2($PanagiotisGeorgiadis$elm_datepicker$Utils$Time$precedingWeekdays, firstDayOfTheMonth, startingWeekday);
		} else {
			return 0;
		}
	}();
	var precedingDatesHtml = A2($elm$core$List$repeat, precedingWeekdaysCount, $PanagiotisGeorgiadis$elm_datepicker$Common$emptyDateHtml);
	var monthDates = $PanagiotisGeorgiadis$elm_datetime$DateTime$getDatesInMonth(primaryDate);
	var followingDates = ($PanagiotisGeorgiadis$elm_datepicker$Common$totalCalendarCells - precedingWeekdaysCount) - $elm$core$List$length(monthDates);
	var followingDatesHtml = A2($elm$core$List$repeat, followingDates, $PanagiotisGeorgiadis$elm_datepicker$Common$emptyDateHtml);
	var datesHtml = A2(
		$elm$core$List$map,
		$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$dateHtml(model),
		monthDates);
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('calendar')
			]),
		_List_fromArray(
			[
				A2($PanagiotisGeorgiadis$elm_datepicker$Common$weekdaysHtml, startingWeekday, i18n),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('calendar_')
					]),
				_Utils_ap(
					precedingDatesHtml,
					_Utils_ap(datesHtml, followingDatesHtml)))
			]));
};
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Html$Attributes$none = A2($elm$html$Html$Attributes$property, '', $elm$json$Json$Encode$null);
var $elm$svg$Svg$Attributes$points = _VirtualDom_attribute('points');
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$polygon = $elm$svg$Svg$trustedNode('polygon');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $PanagiotisGeorgiadis$elm_datepicker$Icons$chevron = F2(
	function (direction, size) {
		return A2(
			$elm$svg$Svg$svg,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width(size.width),
					$elm$svg$Svg$Attributes$height(size.height),
					$elm$svg$Svg$Attributes$viewBox('0 0 24 24')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$polygon,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$points('2.82 4.59 12 13.75 21.18 4.59 24 7.41 12 19.41 0 7.41'),
							function () {
							switch (direction.$) {
								case 'Up':
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) rotate(180.000000) translate(-12.000000, -12.000000)');
								case 'Down':
									return $PanagiotisGeorgiadis$elm_datepicker$Utils$Html$Attributes$none;
								case 'Left':
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) rotate(90.000000) translate(-12.000000, -12.000000)');
								default:
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) scale(-1, 1) rotate(90.000000) translate(-12.000000, -12.000000)');
							}
						}()
						]),
					_List_Nil)
				]));
	});
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Left = {$: 'Left'};
var $PanagiotisGeorgiadis$elm_datepicker$DatePicker$I18n$Full = {$: 'Full'};
var $PanagiotisGeorgiadis$elm_datepicker$MonthPicker$monthPickerText = F2(
	function (i18n, date) {
		var _v0 = _Utils_Tuple2(
			$PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth(date),
			$PanagiotisGeorgiadis$elm_datetime$DateTime$getYear(date));
		var month = _v0.a;
		var year = _v0.b;
		return A2(i18n.monthToString, $PanagiotisGeorgiadis$elm_datepicker$DatePicker$I18n$Full, month) + (' ' + $elm$core$String$fromInt(year));
	});
var $PanagiotisGeorgiadis$elm_datepicker$MonthPicker$todayButtonHtml = F2(
	function (todayButtonText, msg) {
		if (msg.$ === 'Just') {
			var m = msg.a;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('today-button'),
						$elm$html$Html$Events$onClick(m)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(todayButtonText)
					]));
		} else {
			return $elm$html$Html$text('');
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$Icons$triangle = F2(
	function (direction, size) {
		return A2(
			$elm$svg$Svg$svg,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width(size.width),
					$elm$svg$Svg$Attributes$height(size.height),
					$elm$svg$Svg$Attributes$viewBox('0 0 24 24')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$polygon,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$points('0 6 12 18 24 6'),
							function () {
							switch (direction.$) {
								case 'Down':
									return $PanagiotisGeorgiadis$elm_datepicker$Utils$Html$Attributes$none;
								case 'Up':
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) rotate(180.000000) translate(-12.000000, -12.000000)');
								case 'Left':
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) rotate(90.000000) translate(-12.000000, -12.000000)');
								default:
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) scale(-1, 1) rotate(90.000000) translate(-12.000000, -12.000000)');
							}
						}()
						]),
					_List_Nil)
				]));
	});
var $PanagiotisGeorgiadis$elm_datepicker$MonthPicker$doubleMonthPickerView = function (_v0) {
	var date = _v0.date;
	var previousButtonHandler = _v0.previousButtonHandler;
	var nextButtonHandler = _v0.nextButtonHandler;
	var todayButtonHandler = _v0.todayButtonHandler;
	var i18n = _v0.i18n;
	var previousButtonHtml = function () {
		if (previousButtonHandler.$ === 'Just') {
			var action = previousButtonHandler.a;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action'),
						$elm$html$Html$Events$onClick(action)
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Left,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		} else {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action disabled')
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Left,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		}
	}();
	var nextMonthDate = $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementMonth(date);
	var nextButtonHtml = function () {
		if (nextButtonHandler.$ === 'Just') {
			var action = nextButtonHandler.a;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action'),
						$elm$html$Html$Events$onClick(action)
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Right,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		} else {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action disabled')
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Right,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		}
	}();
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('double-month-picker')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('previous-month')
					]),
				_List_fromArray(
					[
						previousButtonHtml,
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('month-name')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								A2($PanagiotisGeorgiadis$elm_datepicker$MonthPicker$monthPickerText, i18n, date))
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('next-month')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('month-name')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								A2($PanagiotisGeorgiadis$elm_datepicker$MonthPicker$monthPickerText, i18n, nextMonthDate))
							])),
						nextButtonHtml
					])),
				A2($PanagiotisGeorgiadis$elm_datepicker$MonthPicker$todayButtonHtml, i18n.todayButtonText, todayButtonHandler)
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NextMonth = {$: 'NextMonth'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getNextButtonAction = function (isButtonActive) {
	return isButtonActive ? $elm$core$Maybe$Just($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NextMonth) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$PreviousMonth = {$: 'PreviousMonth'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getPreviousButtonAction = function (isButtonActive) {
	return isButtonActive ? $elm$core$Maybe$Just($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$PreviousMonth) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$MoveToToday = {$: 'MoveToToday'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getTodayButtonAction = function (isButtonActive) {
	return isButtonActive ? $elm$core$Maybe$Just($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$MoveToToday) : $elm$core$Maybe$Nothing;
};
var $elm$html$Html$Events$onMouseLeave = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseleave',
		$elm$json$Json$Decode$succeed(msg));
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updatePrimaryDate = F2(
	function (dt, _v0) {
		var model = _v0.a;
		return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
			_Utils_update(
				model,
				{primaryDate: dt}));
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$doubleCalendarView = function (model) {
	var today = model.a.today;
	var primaryDate = model.a.primaryDate;
	var dateLimit = model.a.dateLimit;
	var range = model.a.range;
	var timePickers = model.a.timePickers;
	var i18n = model.a.i18n;
	var switchViewButton = function () {
		if ((range.$ === 'BothSelected') && (range.a.$ === 'Chosen')) {
			var _v4 = range.a;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('switch-view-button'),
						$elm$html$Html$Events$onClick($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ShowClockView)
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Right,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '20', '20'))
					]));
		} else {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('switch-view-button disabled')
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Right,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '20', '20'))
					]));
		}
	}();
	var nextDate = $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementMonth(primaryDate);
	var nextModel = A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updatePrimaryDate, nextDate, model);
	var _v0 = function () {
		if (dateLimit.$ === 'DateLimit') {
			var minDate = dateLimit.a.minDate;
			var maxDate = dateLimit.a.maxDate;
			return _Utils_Tuple3(
				_Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, primaryDate),
					$elm$core$Basics$LT),
				_Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, nextDate),
					$elm$core$Basics$GT),
				_Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, today),
					$elm$core$Basics$LT) && _Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, today),
					$elm$core$Basics$GT));
		} else {
			return _Utils_Tuple3(true, true, true);
		}
	}();
	var isPreviousButtonActive = _v0.a;
	var isNextButtonActive = _v0.b;
	var isTodayButtonActive = _v0.c;
	var pickerConfig = {
		date: primaryDate,
		i18n: i18n,
		nextButtonHandler: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getNextButtonAction(isNextButtonActive),
		previousButtonHandler: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getPreviousButtonAction(isPreviousButtonActive),
		todayButtonHandler: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getTodayButtonAction(isTodayButtonActive)
	};
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('double-calendar-view no-select'),
				$elm$html$Html$Events$onMouseLeave($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ResetVisualSelection)
			]),
		_List_fromArray(
			[
				$PanagiotisGeorgiadis$elm_datepicker$MonthPicker$doubleMonthPickerView(pickerConfig),
				$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$calendarView(model),
				$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$calendarView(nextModel),
				function () {
				if (timePickers.$ === 'NoTimePickers') {
					return $elm$html$Html$text('');
				} else {
					return switchViewButton;
				}
			}()
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ShowCalendarView = {$: 'ShowCalendarView'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ToggleTimeMirroring = {$: 'ToggleTimeMirroring'};
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $PanagiotisGeorgiadis$elm_datepicker$Icons$blankCheckboxPath = A2(
	$elm$svg$Svg$path,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$d('M2.66666667,0 C1.2092496,0 0,1.2092496 0,2.66666667 L0,21.3333333 C0,22.7907507 1.2092496,24 2.66666667,24 L21.3333333,24 C22.7907507,24 24,22.7907507 24,21.3333333 L24,2.66666667 C24,1.2092496 22.7907507,0 21.3333333,0 L2.66666667,0 Z M2,2 L22,2 L22,22 L2,22 L2,2 Z')
		]),
	_List_Nil);
var $PanagiotisGeorgiadis$elm_datepicker$Icons$tickedCheckboxPath = A2(
	$elm$svg$Svg$path,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$d('M21.3333333,0 L2.66666667,0 C1.19333333,0 0,1.19333333 0,2.66666667 L0,21.3333333 C0,22.8066667 1.19333333,24 2.66666667,24 L21.3333333,24 C22.8066667,24 24,22.8066667 24,21.3333333 L24,2.66666667 C24,1.19333333 22.8066667,0 21.3333333,0 Z M10.276,18.276 C9.75466667,18.7973333 8.91066667,18.7973333 8.39066667,18.276 L4,13.8853333 C3.48,13.3653333 3.48,12.52 4,12 C4.52,11.48 5.36533333,11.48 5.88533333,12 L9.33333333,15.448 L18.1146667,6.66666667 C18.6346667,6.14666667 19.48,6.14666667 20,6.66666667 C20.52,7.18666667 20.52,8.032 20,8.552 L10.276,18.276 Z')
		]),
	_List_Nil);
var $PanagiotisGeorgiadis$elm_datepicker$Icons$checkbox = F2(
	function (size, isChecked) {
		return A2(
			$elm$svg$Svg$svg,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width(size.width),
					$elm$svg$Svg$Attributes$height(size.height),
					$elm$svg$Svg$Attributes$viewBox('0 0 24 24')
				]),
			_List_fromArray(
				[
					isChecked ? $PanagiotisGeorgiadis$elm_datepicker$Icons$tickedCheckboxPath : $PanagiotisGeorgiadis$elm_datepicker$Icons$blankCheckboxPath
				]));
	});
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getPickerTypeString = function (_v0) {
	var pickerType = _v0.a.pickerType;
	switch (pickerType.$) {
		case 'HH':
			return 'hh';
		case 'HH_MM':
			return 'hh_mm';
		case 'HH_MM_SS':
			return 'hh_mm_ss';
		default:
			return 'hh_mm_ss_mmmm';
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toHumanReadableTime = function (_v0) {
	var pickerType = _v0.a.pickerType;
	var hours = _v0.a.hours;
	var minutes = _v0.a.minutes;
	var seconds = _v0.a.seconds;
	var milliseconds = _v0.a.milliseconds;
	switch (pickerType.$) {
		case 'HH':
			return hours;
		case 'HH_MM':
			return A2(
				$elm$core$String$join,
				':',
				_List_fromArray(
					[hours, minutes]));
		case 'HH_MM_SS':
			return A2(
				$elm$core$String$join,
				':',
				_List_fromArray(
					[hours, minutes, seconds]));
		default:
			return A2(
				$elm$core$String$join,
				'.',
				_List_fromArray(
					[
						A2(
						$elm$core$String$join,
						':',
						_List_fromArray(
							[hours, minutes, seconds])),
						milliseconds
					]));
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Decrement = function (a) {
	return {$: 'Decrement', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Down = {$: 'Down'};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment = function (a) {
	return {$: 'Increment', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler = F2(
	function (a, b) {
		return {$: 'InputHandler', a: a, b: b};
	});
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Up = {$: 'Up'};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update = F2(
	function (a, b) {
		return {$: 'Update', a: a, b: b};
	});
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$Attributes$maxlength = function (n) {
	return A2(
		_VirtualDom_attribute,
		'maxlength',
		$elm$core$String$fromInt(n));
};
var $elm$html$Html$Events$onBlur = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'blur',
		$elm$json$Json$Decode$succeed(msg));
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$hourPicker = function (_v0) {
	var hours = _v0.a.hours;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('hours-picker')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Up,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					])),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-input'),
						$elm$html$Html$Events$onInput(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours)),
						$elm$html$Html$Events$onBlur(
						A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours, hours)),
						$elm$html$Html$Attributes$value(hours),
						$elm$html$Html$Attributes$maxlength(2)
					]),
				_List_Nil),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Decrement($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Down,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					]))
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$millisSegmentSeparator = A2(
	$elm$html$Html$span,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('time-separator no-select')
		]),
	_List_fromArray(
		[
			$elm$html$Html$text('.')
		]));
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$millisecondsPicker = function (_v0) {
	var milliseconds = _v0.a.milliseconds;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('milliseconds-picker')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Up,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					])),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-input'),
						$elm$html$Html$Events$onInput(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds)),
						$elm$html$Html$Events$onBlur(
						A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds, milliseconds)),
						$elm$html$Html$Attributes$value(milliseconds),
						$elm$html$Html$Attributes$maxlength(3)
					]),
				_List_Nil),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Decrement($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Down,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					]))
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$minutePicker = function (_v0) {
	var minutes = _v0.a.minutes;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('minutes-picker')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Up,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					])),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-input'),
						$elm$html$Html$Events$onInput(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes)),
						$elm$html$Html$Events$onBlur(
						A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes, minutes)),
						$elm$html$Html$Attributes$value(minutes),
						$elm$html$Html$Attributes$maxlength(2)
					]),
				_List_Nil),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Decrement($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Down,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					]))
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$secondsPicker = function (_v0) {
	var seconds = _v0.a.seconds;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('seconds-picker')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Up,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					])),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-input'),
						$elm$html$Html$Events$onInput(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds)),
						$elm$html$Html$Events$onBlur(
						A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds, seconds)),
						$elm$html$Html$Attributes$value(seconds),
						$elm$html$Html$Attributes$maxlength(2)
					]),
				_List_Nil),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Decrement($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Down,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					]))
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$timeSegmentSeparator = A2(
	$elm$html$Html$span,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('time-separator no-select')
		]),
	_List_fromArray(
		[
			$elm$html$Html$text(':')
		]));
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$view = function (model) {
	var pickerType = model.a.pickerType;
	switch (pickerType.$) {
		case 'HH':
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-picker')
					]),
				_List_fromArray(
					[
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$hourPicker(model)
					]));
		case 'HH_MM':
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-picker')
					]),
				_List_fromArray(
					[
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$hourPicker(model),
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$timeSegmentSeparator,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$minutePicker(model)
					]));
		case 'HH_MM_SS':
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-picker')
					]),
				_List_fromArray(
					[
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$hourPicker(model),
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$timeSegmentSeparator,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$minutePicker(model),
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$timeSegmentSeparator,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$secondsPicker(model)
					]));
		default:
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-picker')
					]),
				_List_fromArray(
					[
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$hourPicker(model),
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$timeSegmentSeparator,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$minutePicker(model),
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$timeSegmentSeparator,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$secondsPicker(model),
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$millisSegmentSeparator,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$millisecondsPicker(model)
					]));
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$View$view = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$view;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$doubleClockView = function (_v0) {
	var range = _v0.a.range;
	var timePickers = _v0.a.timePickers;
	var viewType = _v0.a.viewType;
	var i18n = _v0.a.i18n;
	if (timePickers.$ === 'TimePickers') {
		var timePickers_ = timePickers.a;
		var startPicker = timePickers_.startPicker;
		var endPicker = timePickers_.endPicker;
		var mirrorTimes = timePickers_.mirrorTimes;
		var titleHtml = function (str) {
			return $elm$core$String$isEmpty(str) ? $elm$html$Html$text('') : A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('header')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(str)
					]));
		};
		var pickerTypeString = function () {
			if (viewType.$ === 'SingleCalendar') {
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getPickerTypeString(startPicker);
			} else {
				return '';
			}
		}();
		var displayDateHtml = F2(
			function (date, timePicker) {
				if (date.$ === 'Just') {
					var d = date.a;
					var dateTimeStr = A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[
								A2($PanagiotisGeorgiadis$elm_datepicker$Utils$Time$toHumanReadableDate, i18n, d),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toHumanReadableTime(timePicker)
							]));
					return A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('date')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(dateTimeStr)
							]));
				} else {
					return A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('placeholder')
							]),
						_List_Nil);
				}
			});
		var _v2 = function () {
			if ((range.$ === 'BothSelected') && (range.a.$ === 'Chosen')) {
				var _v4 = range.a;
				var start = _v4.a;
				var end = _v4.b;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(start),
					$elm$core$Maybe$Just(end));
			} else {
				return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing);
			}
		}();
		var rangeStart = _v2.a;
		var rangeEnd = _v2.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('double-clock-view ' + pickerTypeString)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('time-picker-container no-select')
						]),
					_List_fromArray(
						[
							titleHtml(timePickers_.i18n.start),
							A2(displayDateHtml, rangeStart, startPicker),
							A2(
							$elm$html$Html$map,
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeStartPickerMsg,
							$PanagiotisGeorgiadis$elm_datepicker$TimePicker$View$view(startPicker)),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('checkbox'),
									$elm$html$Html$Events$onClick($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ToggleTimeMirroring)
								]),
							_List_fromArray(
								[
									A2(
									$PanagiotisGeorgiadis$elm_datepicker$Icons$checkbox,
									A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '16', '16'),
									mirrorTimes),
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('text')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(timePickers_.i18n.checkboxText)
										]))
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('time-picker-container no-select')
						]),
					_List_fromArray(
						[
							titleHtml(timePickers_.i18n.end),
							A2(displayDateHtml, rangeEnd, endPicker),
							A2(
							$elm$html$Html$map,
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeEndPickerMsg,
							$PanagiotisGeorgiadis$elm_datepicker$TimePicker$View$view(endPicker)),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('filler')
								]),
							_List_Nil)
						])),
					function () {
					if (viewType.$ === 'DoubleTimePicker') {
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('switch-view-button'),
									$elm$html$Html$Events$onClick($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ShowCalendarView)
								]),
							_List_fromArray(
								[
									A2(
									$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
									$PanagiotisGeorgiadis$elm_datepicker$Icons$Left,
									A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '20', '20'))
								]));
					} else {
						return $elm$html$Html$text('');
					}
				}()
				]));
	} else {
		return $elm$html$Html$text('');
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$MonthPicker$singleMonthPickerView = function (_v0) {
	var date = _v0.date;
	var previousButtonHandler = _v0.previousButtonHandler;
	var nextButtonHandler = _v0.nextButtonHandler;
	var todayButtonHandler = _v0.todayButtonHandler;
	var i18n = _v0.i18n;
	var previousButtonHtml = function () {
		if (previousButtonHandler.$ === 'Just') {
			var action = previousButtonHandler.a;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action'),
						$elm$html$Html$Events$onClick(action)
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Left,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		} else {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action disabled')
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Left,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		}
	}();
	var nextButtonHtml = function () {
		if (nextButtonHandler.$ === 'Just') {
			var action = nextButtonHandler.a;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action'),
						$elm$html$Html$Events$onClick(action)
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Right,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		} else {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action disabled')
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Right,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		}
	}();
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('single-month-picker')
			]),
		_List_fromArray(
			[
				previousButtonHtml,
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('month-name')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						A2($PanagiotisGeorgiadis$elm_datepicker$MonthPicker$monthPickerText, i18n, date))
					])),
				nextButtonHtml,
				A2($PanagiotisGeorgiadis$elm_datepicker$MonthPicker$todayButtonHtml, i18n.todayButtonText, todayButtonHandler)
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$singleCalendarView = function (model) {
	var today = model.a.today;
	var primaryDate = model.a.primaryDate;
	var dateLimit = model.a.dateLimit;
	var i18n = model.a.i18n;
	var _v0 = function () {
		if (dateLimit.$ === 'DateLimit') {
			var minDate = dateLimit.a.minDate;
			var maxDate = dateLimit.a.maxDate;
			return _Utils_Tuple3(
				_Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, primaryDate),
					$elm$core$Basics$LT),
				_Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, primaryDate),
					$elm$core$Basics$GT),
				_Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, today),
					$elm$core$Basics$LT) && _Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, today),
					$elm$core$Basics$GT));
		} else {
			return _Utils_Tuple3(true, true, true);
		}
	}();
	var isPreviousButtonActive = _v0.a;
	var isNextButtonActive = _v0.b;
	var isTodayButtonActive = _v0.c;
	var pickerConfig = {
		date: primaryDate,
		i18n: i18n,
		nextButtonHandler: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getNextButtonAction(isNextButtonActive),
		previousButtonHandler: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getPreviousButtonAction(isPreviousButtonActive),
		todayButtonHandler: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getTodayButtonAction(isTodayButtonActive)
	};
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('single-calendar-view no-select'),
				$elm$html$Html$Events$onMouseLeave($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ResetVisualSelection)
			]),
		_List_fromArray(
			[
				$PanagiotisGeorgiadis$elm_datepicker$MonthPicker$singleMonthPickerView(pickerConfig),
				$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$calendarView(model)
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$view = function (model) {
	var viewType = model.a.viewType;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('date-range-picker')
			]),
		function () {
			switch (viewType.$) {
				case 'SingleCalendar':
					return _List_fromArray(
						[
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$singleCalendarView(model),
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$doubleClockView(model)
						]);
				case 'DoubleCalendar':
					return _List_fromArray(
						[
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$doubleCalendarView(model)
						]);
				default:
					return _List_fromArray(
						[
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$doubleClockView(model)
						]);
			}
		}());
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$view = $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$view;
var $author$project$Components$Double$DateRangePicker$view = function (_v0) {
	var picker = _v0.picker;
	var selectedRange = _v0.selectedRange;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('section')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h3,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Double Date Range Picker')
					])),
				A2(
				$elm$html$Html$map,
				$author$project$Components$Double$DateRangePicker$PickerMsg,
				$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$view(picker)),
				A2($elm$html$Html$br, _List_Nil, _List_Nil),
				function () {
				if (selectedRange.$ === 'Just') {
					var startDate = selectedRange.a.startDate;
					var endDate = selectedRange.a.endDate;
					return A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('footer')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('text')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Selected Date Range: ')
									])),
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('date')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$author$project$Extra$DateTime$toString(startDate))
									])),
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('separator')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('—')
									])),
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('date')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$author$project$Extra$DateTime$toString(endDate))
									]))
							]));
				} else {
					return A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('footer')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('No \"selected range\" yet')
							]));
				}
			}()
			]));
};
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 'SpacingStyle', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$AsRow = {$: 'AsRow'};
var $mdgriffith$elm_ui$Internal$Model$asRow = $mdgriffith$elm_ui$Internal$Model$AsRow;
var $mdgriffith$elm_ui$Internal$Model$Padding = F5(
	function (a, b, c, d, e) {
		return {$: 'Padding', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Model$Spaced = F3(
	function (a, b, c) {
		return {$: 'Spaced', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$extractSpacingAndPadding = function (attrs) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (attr, _v0) {
				var pad = _v0.a;
				var spacing = _v0.b;
				return _Utils_Tuple2(
					function () {
						if (pad.$ === 'Just') {
							var x = pad.a;
							return pad;
						} else {
							if ((attr.$ === 'StyleClass') && (attr.b.$ === 'PaddingStyle')) {
								var _v3 = attr.b;
								var name = _v3.a;
								var t = _v3.b;
								var r = _v3.c;
								var b = _v3.d;
								var l = _v3.e;
								return $elm$core$Maybe$Just(
									A5($mdgriffith$elm_ui$Internal$Model$Padding, name, t, r, b, l));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}(),
					function () {
						if (spacing.$ === 'Just') {
							var x = spacing.a;
							return spacing;
						} else {
							if ((attr.$ === 'StyleClass') && (attr.b.$ === 'SpacingStyle')) {
								var _v6 = attr.b;
								var name = _v6.a;
								var x = _v6.b;
								var y = _v6.c;
								return $elm$core$Maybe$Just(
									A3($mdgriffith$elm_ui$Internal$Model$Spaced, name, x, y));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}());
			}),
		_Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
		attrs);
};
var $mdgriffith$elm_ui$Internal$Model$paddingNameFloat = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(top) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(right) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(bottom) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(left)))))));
	});
var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
var $mdgriffith$elm_ui$Element$wrappedRow = F2(
	function (attrs, children) {
		var _v0 = $mdgriffith$elm_ui$Internal$Model$extractSpacingAndPadding(attrs);
		var padded = _v0.a;
		var spaced = _v0.b;
		if (spaced.$ === 'Nothing') {
			return A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asRow,
				$mdgriffith$elm_ui$Internal$Model$div,
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.wrapped)))),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							attrs))),
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
		} else {
			var _v2 = spaced.a;
			var spaceName = _v2.a;
			var x = _v2.b;
			var y = _v2.c;
			var newPadding = function () {
				if (padded.$ === 'Just') {
					var _v5 = padded.a;
					var name = _v5.a;
					var t = _v5.b;
					var r = _v5.c;
					var b = _v5.d;
					var l = _v5.e;
					if ((_Utils_cmp(r, x / 2) > -1) && (_Utils_cmp(b, y / 2) > -1)) {
						var newTop = t - (y / 2);
						var newRight = r - (x / 2);
						var newLeft = l - (x / 2);
						var newBottom = b - (y / 2);
						return $elm$core$Maybe$Just(
							A2(
								$mdgriffith$elm_ui$Internal$Model$StyleClass,
								$mdgriffith$elm_ui$Internal$Flag$padding,
								A5(
									$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
									A4($mdgriffith$elm_ui$Internal$Model$paddingNameFloat, newTop, newRight, newBottom, newLeft),
									newTop,
									newRight,
									newBottom,
									newLeft)));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}();
			if (newPadding.$ === 'Just') {
				var pad = newPadding.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asRow,
					$mdgriffith$elm_ui$Internal$Model$div,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.wrapped)))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
								_Utils_ap(
									attrs,
									_List_fromArray(
										[pad]))))),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
			} else {
				var halfY = -(y / 2);
				var halfX = -(x / 2);
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					attrs,
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[
								A4(
								$mdgriffith$elm_ui$Internal$Model$element,
								$mdgriffith$elm_ui$Internal$Model$asRow,
								$mdgriffith$elm_ui$Internal$Model$div,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.wrapped)))),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											A2(
												$elm$html$Html$Attributes$style,
												'margin',
												$elm$core$String$fromFloat(halfY) + ('px' + (' ' + ($elm$core$String$fromFloat(halfX) + 'px'))))),
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Internal$Model$Attr(
												A2(
													$elm$html$Html$Attributes$style,
													'width',
													'calc(100% + ' + ($elm$core$String$fromInt(x) + 'px)'))),
											A2(
												$elm$core$List$cons,
												$mdgriffith$elm_ui$Internal$Model$Attr(
													A2(
														$elm$html$Html$Attributes$style,
														'height',
														'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))),
												A2(
													$elm$core$List$cons,
													A2(
														$mdgriffith$elm_ui$Internal$Model$StyleClass,
														$mdgriffith$elm_ui$Internal$Flag$spacing,
														A3($mdgriffith$elm_ui$Internal$Model$SpacingStyle, spaceName, x, y)),
													_List_Nil))))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(children))
							])));
			}
		}
	});
var $author$project$App$viewFilters = function (model) {
	var usersFilter = function () {
		var _v7 = model.users;
		if (_v7.$ === 'Just') {
			var users = _v7.a;
			var selected = function (user) {
				var _v9 = model.filter.user;
				if (_v9.$ === 'Just') {
					var userF = _v9.a;
					return $elm$html$Html$Attributes$selected(
						_Utils_eq(user, userF));
				} else {
					return $elm$html$Html$Attributes$selected(user === '');
				}
			};
			var options = A2(
				$elm$core$List$map,
				function (_v8) {
					var u = _v8.b;
					return A2(
						$elm$html$Html$option,
						_List_fromArray(
							[
								selected(
								$elm$core$String$fromInt(u.id)),
								$elm$html$Html$Attributes$value(
								$elm$core$String$fromInt(u.id))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(u.name)
							]));
				},
				$elm$core$Dict$toList(users));
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(10)
					]),
				$mdgriffith$elm_ui$Element$html(
					A2(
						$elm$html$Html$select,
						_List_fromArray(
							[
								$elm$html$Html$Events$onInput($author$project$App$UserSelected),
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5rem'),
								A2($elm$html$Html$Attributes$style, 'height', '1.8rem')
							]),
						options)));
		} else {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(10)
					]),
				$mdgriffith$elm_ui$Element$text('Фильтр пользователей не доступен'));
		}
	}();
	var statusesFilter = function () {
		var _v4 = model.statuses;
		if (_v4.$ === 'Just') {
			var statuses = _v4.a;
			var selected = function (status) {
				var _v6 = model.filter.status;
				if (_v6.$ === 'Just') {
					var statusF = _v6.a;
					return $elm$html$Html$Attributes$selected(
						_Utils_eq(status, statusF));
				} else {
					return $elm$html$Html$Attributes$selected(status === '');
				}
			};
			var options0 = A2(
				$elm$core$List$map,
				function (_v5) {
					var u = _v5.b;
					return A2(
						$elm$html$Html$option,
						_List_fromArray(
							[
								selected(
								$elm$core$String$fromInt(u.id)),
								$elm$html$Html$Attributes$value(
								$elm$core$String$fromInt(u.id))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(u.name)
							]));
				},
				$elm$core$Dict$toList(statuses));
			var options = A2(
				$elm$core$List$cons,
				A2(
					$elm$html$Html$option,
					_List_fromArray(
						[
							selected(''),
							$elm$html$Html$Attributes$value('')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('')
						])),
				options0);
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(10)
					]),
				$mdgriffith$elm_ui$Element$html(
					A2(
						$elm$html$Html$select,
						_List_fromArray(
							[
								$elm$html$Html$Events$onInput($author$project$App$StatusSelected),
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5rem'),
								A2($elm$html$Html$Attributes$style, 'height', '1.8rem')
							]),
						options)));
		} else {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(10)
					]),
				$mdgriffith$elm_ui$Element$text('Фильтр статусов не доступен'));
		}
	}();
	var mastersFilter = function () {
		var _v1 = model.masters;
		if (_v1.$ === 'Just') {
			var masters = _v1.a;
			var selected = function (master) {
				var _v3 = model.filter.master;
				if (_v3.$ === 'Just') {
					var masterF = _v3.a;
					return $elm$html$Html$Attributes$selected(
						_Utils_eq(master, masterF));
				} else {
					return $elm$html$Html$Attributes$selected(master === '');
				}
			};
			var options0 = A2(
				$elm$core$List$map,
				function (_v2) {
					var u = _v2.b;
					return A2(
						$elm$html$Html$option,
						_List_fromArray(
							[
								selected(
								$elm$core$String$fromInt(u.id)),
								$elm$html$Html$Attributes$value(
								$elm$core$String$fromInt(u.id))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(u.value)
							]));
				},
				$elm$core$Dict$toList(masters));
			var options = A2(
				$elm$core$List$cons,
				A2(
					$elm$html$Html$option,
					_List_fromArray(
						[
							selected(''),
							$elm$html$Html$Attributes$value('')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('')
						])),
				options0);
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(10),
						$mdgriffith$elm_ui$Element$htmlAttribute(
						$elm$html$Html$Attributes$class('picker-row'))
					]),
				$mdgriffith$elm_ui$Element$html(
					A2(
						$elm$html$Html$select,
						_List_fromArray(
							[
								$elm$html$Html$Events$onInput($author$project$App$MasterSelected),
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5rem'),
								A2($elm$html$Html$Attributes$style, 'height', '1.8rem')
							]),
						options)));
		} else {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(10)
					]),
				$mdgriffith$elm_ui$Element$text('Фильтр мастеров не доступен'));
		}
	}();
	var createdAtFilter = function () {
		var _v0 = model.created_at_picker;
		if (_v0.$ === 'Just') {
			var picker = _v0.a;
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(10)
					]),
				$mdgriffith$elm_ui$Element$html(
					A2(
						$elm$html$Html$map,
						$author$project$App$CreatedAtPickerMsg,
						$author$project$Components$Double$DateRangePicker$view(picker))));
		} else {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(10)
					]),
				$mdgriffith$elm_ui$Element$text('Выбор даты создания заявки не инициализирован!'));
		}
	}();
	return A2(
		$mdgriffith$elm_ui$Element$wrappedRow,
		_List_Nil,
		_List_fromArray(
			[usersFilter, statusesFilter, mastersFilter, createdAtFilter]));
};
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$borderStyle = $mdgriffith$elm_ui$Internal$Flag$flag(11);
var $mdgriffith$elm_ui$Element$Border$solid = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$borderStyle, $mdgriffith$elm_ui$Internal$Style$classes.borderSolid);
var $mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 'BorderWidth', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Element$Border$width = function (v) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + $elm$core$String$fromInt(v),
			v,
			v,
			v,
			v));
};
var $author$project$App$buttonBorder = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Border$solid,
		$mdgriffith$elm_ui$Element$Border$width(1)
	]);
var $author$project$App$RefreshLeads = {$: 'RefreshLeads'};
var $mdgriffith$elm_ui$Internal$Model$Button = {$: 'Button'};
var $mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 'Describe', a: a};
};
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $mdgriffith$elm_ui$Element$Input$enter = 'Enter';
var $mdgriffith$elm_ui$Internal$Model$NoAttribute = {$: 'NoAttribute'};
var $mdgriffith$elm_ui$Element$Input$hasFocusStyle = function (attr) {
	if (((attr.$ === 'StyleClass') && (attr.b.$ === 'PseudoSelector')) && (attr.b.a.$ === 'Focus')) {
		var _v1 = attr.b;
		var _v2 = _v1.a;
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$focusDefault = function (attrs) {
	return A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass('focusable');
};
var $mdgriffith$elm_ui$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onClick);
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $mdgriffith$elm_ui$Element$Input$onKeyLookup = function (lookup) {
	var decode = function (code) {
		var _v0 = lookup(code);
		if (_v0.$ === 'Nothing') {
			return $elm$json$Json$Decode$fail('No key matched');
		} else {
			var msg = _v0.a;
			return $elm$json$Json$Decode$succeed(msg);
		}
	};
	var isKey = A2(
		$elm$json$Json$Decode$andThen,
		decode,
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		A2(
			$elm$html$Html$Events$preventDefaultOn,
			'keydown',
			A2(
				$elm$json$Json$Decode$map,
				function (fired) {
					return _Utils_Tuple2(fired, true);
				},
				isKey)));
};
var $mdgriffith$elm_ui$Internal$Flag$cursor = $mdgriffith$elm_ui$Internal$Flag$flag(21);
var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.cursorPointer);
var $mdgriffith$elm_ui$Element$Input$space = ' ';
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $mdgriffith$elm_ui$Element$Input$button = F2(
	function (attrs, _v0) {
		var onPress = _v0.onPress;
		var label = _v0.label;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.seButton + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.noTextSelection)))))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$pointer,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$Input$focusDefault(attrs),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Button),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											$elm$html$Html$Attributes$tabindex(0)),
										function () {
											if (onPress.$ === 'Nothing') {
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Internal$Model$Attr(
														$elm$html$Html$Attributes$disabled(true)),
													attrs);
											} else {
												var msg = onPress.a;
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Element$Events$onClick(msg),
													A2(
														$elm$core$List$cons,
														$mdgriffith$elm_ui$Element$Input$onKeyLookup(
															function (code) {
																return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(msg) : (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(msg) : $elm$core$Maybe$Nothing);
															}),
														attrs));
											}
										}()))))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $author$project$App$refreshButton = A2(
	$mdgriffith$elm_ui$Element$Input$button,
	_List_Nil,
	{
		label: $mdgriffith$elm_ui$Element$text('Обновить'),
		onPress: $elm$core$Maybe$Just($author$project$App$RefreshLeads)
	});
var $author$project$App$viewHttpStatus = function (status) {
	switch (status.$) {
		case 'Success':
			return A2(
				$mdgriffith$elm_ui$Element$wrappedRow,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$padding(10)
							]),
						$mdgriffith$elm_ui$Element$text('Норм')),
						A2(
						$mdgriffith$elm_ui$Element$el,
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$padding(5),
							$author$project$App$buttonBorder),
						$author$project$App$refreshButton)
					]));
		case 'Loading':
			var s = status.a;
			return A2(
				$mdgriffith$elm_ui$Element$wrappedRow,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$padding(10)
							]),
						$mdgriffith$elm_ui$Element$text(s))
					]));
		default:
			var s = status.a;
			return A2(
				$mdgriffith$elm_ui$Element$wrappedRow,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$padding(10)
							]),
						$mdgriffith$elm_ui$Element$text(s)),
						A2(
						$mdgriffith$elm_ui$Element$el,
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$padding(5),
							$author$project$App$buttonBorder),
						$author$project$App$refreshButton)
					]));
	}
};
var $mdgriffith$elm_ui$Element$Background$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$bgColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'background-color',
			clr));
};
var $mdgriffith$elm_ui$Element$Font$color = function (fontColor) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var $CoderDennis$elm_time_format$Time$Format$I18n$I_ru_ru$dayName = function (day) {
	switch (day.$) {
		case 'Mon':
			return 'понедельник';
		case 'Tue':
			return 'вторник';
		case 'Wed':
			return 'среда';
		case 'Thu':
			return 'четверг';
		case 'Fri':
			return 'пятница';
		case 'Sat':
			return 'суббота';
		default:
			return 'воскресенье';
	}
};
var $CoderDennis$elm_time_format$Time$Format$I18n$I_ru_ru$dayOfMonthWithSuffix = function (_v0) {
	return $elm$core$String$fromInt;
};
var $CoderDennis$elm_time_format$Time$Format$I18n$I_ru_ru$dayShort = function (day) {
	switch (day.$) {
		case 'Mon':
			return 'пн.';
		case 'Tue':
			return 'вт.';
		case 'Wed':
			return 'ср.';
		case 'Thu':
			return 'чт.';
		case 'Fri':
			return 'пт.';
		case 'Sat':
			return 'сб.';
		default:
			return 'вс.';
	}
};
var $CoderDennis$elm_time_format$Time$Format$I18n$I_ru_ru$monthName = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'январь';
		case 'Feb':
			return 'февраль';
		case 'Mar':
			return 'март';
		case 'Apr':
			return 'апрель';
		case 'May':
			return 'май';
		case 'Jun':
			return 'июнь';
		case 'Jul':
			return 'июль';
		case 'Aug':
			return 'август';
		case 'Sep':
			return 'сентябрь';
		case 'Oct':
			return 'октябрь';
		case 'Nov':
			return 'ноябрь';
		default:
			return 'декабрь';
	}
};
var $CoderDennis$elm_time_format$Time$Format$I18n$I_ru_ru$monthShort = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'янв.';
		case 'Feb':
			return 'февр.';
		case 'Mar':
			return 'март';
		case 'Apr':
			return 'апр.';
		case 'May':
			return 'май';
		case 'Jun':
			return 'июнь.';
		case 'Jul':
			return 'июль.';
		case 'Aug':
			return 'авг.';
		case 'Sep':
			return 'сент.';
		case 'Oct':
			return 'окт.';
		case 'Nov':
			return 'нояб.';
		default:
			return 'дек.';
	}
};
var $CoderDennis$elm_time_format$Time$Format$I18n$I_ru_ru$twelveHourPeriod = function (period) {
	if (period.$ === 'AM') {
		return 'дп';
	} else {
		return 'пп';
	}
};
var $CoderDennis$elm_time_format$Time$Format$Config$Config_ru_ru$config = {
	format: {date: '%d/%m/%Y', dateTime: '%d/%m/%Y %H:%M', firstDayOfWeek: $elm$time$Time$Mon, longDate: '%A, %B %d, %Y', longTime: '%H:%M:%S', time: '%H:%M'},
	i18n: {dayName: $CoderDennis$elm_time_format$Time$Format$I18n$I_ru_ru$dayName, dayOfMonthWithSuffix: $CoderDennis$elm_time_format$Time$Format$I18n$I_ru_ru$dayOfMonthWithSuffix, dayShort: $CoderDennis$elm_time_format$Time$Format$I18n$I_ru_ru$dayShort, monthName: $CoderDennis$elm_time_format$Time$Format$I18n$I_ru_ru$monthName, monthShort: $CoderDennis$elm_time_format$Time$Format$I18n$I_ru_ru$monthShort, twelveHourPeriod: $CoderDennis$elm_time_format$Time$Format$I18n$I_ru_ru$twelveHourPeriod}
};
var $mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 'Fill', a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $author$project$App$dataCellStyle = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Border$width(1),
		$mdgriffith$elm_ui$Element$padding(5),
		$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
	]);
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm$regex$Regex$never = _Regex_never;
var $CoderDennis$elm_time_format$Time$Format$formatRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('%(y|Y|m|_m|-m|B|^B|b|^b|d|-d|-@d|e|@e|A|^A|a|^a|H|-H|k|I|-I|l|p|P|M|S|%|L)'));
var $CoderDennis$elm_time_format$Time$Format$collapse = function (m) {
	return A2($elm$core$Maybe$andThen, $elm$core$Basics$identity, m);
};
var $CoderDennis$elm_time_format$Time$Format$hourMod12 = function (h) {
	return (!A2($elm$core$Basics$modBy, 12, h)) ? 12 : A2($elm$core$Basics$modBy, 12, h);
};
var $CoderDennis$elm_time_format$Time$Format$Core$monthToInt = function (month) {
	switch (month.$) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		default:
			return 12;
	}
};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $CoderDennis$elm_time_format$Time$Format$padWith = function (c) {
	return A2(
		$elm$core$Basics$composeL,
		A2($elm$core$String$padLeft, 2, c),
		$elm$core$String$fromInt);
};
var $CoderDennis$elm_time_format$Time$Format$padWithN = F2(
	function (n, c) {
		return A2(
			$elm$core$Basics$composeL,
			A2($elm$core$String$padLeft, n, c),
			$elm$core$String$fromInt);
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$toUpper = _String_toUpper;
var $CoderDennis$elm_time_format$Time$Format$TwelveHourClock$AM = {$: 'AM'};
var $CoderDennis$elm_time_format$Time$Format$TwelveHourClock$PM = {$: 'PM'};
var $CoderDennis$elm_time_format$Time$Format$TwelveHourClock$twelveHourPeriod = F2(
	function (z, d) {
		return (A2($elm$time$Time$toHour, z, d) < 12) ? $CoderDennis$elm_time_format$Time$Format$TwelveHourClock$AM : $CoderDennis$elm_time_format$Time$Format$TwelveHourClock$PM;
	});
var $CoderDennis$elm_time_format$Time$Format$formatToken = F4(
	function (config, zone, d, m) {
		var symbol = A2(
			$elm$core$Maybe$withDefault,
			' ',
			$CoderDennis$elm_time_format$Time$Format$collapse(
				$elm$core$List$head(m.submatches)));
		switch (symbol) {
			case 'Y':
				return A3(
					$CoderDennis$elm_time_format$Time$Format$padWithN,
					4,
					_Utils_chr('0'),
					A2($elm$time$Time$toYear, zone, d));
			case 'y':
				return A2(
					$elm$core$String$right,
					2,
					A3(
						$CoderDennis$elm_time_format$Time$Format$padWithN,
						2,
						_Utils_chr('0'),
						A2($elm$time$Time$toYear, zone, d)));
			case 'm':
				return A2(
					$CoderDennis$elm_time_format$Time$Format$padWith,
					_Utils_chr('0'),
					$CoderDennis$elm_time_format$Time$Format$Core$monthToInt(
						A2($elm$time$Time$toMonth, zone, d)));
			case '_m':
				return A2(
					$CoderDennis$elm_time_format$Time$Format$padWith,
					_Utils_chr(' '),
					$CoderDennis$elm_time_format$Time$Format$Core$monthToInt(
						A2($elm$time$Time$toMonth, zone, d)));
			case '-m':
				return $elm$core$String$fromInt(
					$CoderDennis$elm_time_format$Time$Format$Core$monthToInt(
						A2($elm$time$Time$toMonth, zone, d)));
			case 'B':
				return config.i18n.monthName(
					A2($elm$time$Time$toMonth, zone, d));
			case '^B':
				return $elm$core$String$toUpper(
					config.i18n.monthName(
						A2($elm$time$Time$toMonth, zone, d)));
			case 'b':
				return config.i18n.monthShort(
					A2($elm$time$Time$toMonth, zone, d));
			case '^b':
				return $elm$core$String$toUpper(
					config.i18n.monthShort(
						A2($elm$time$Time$toMonth, zone, d)));
			case 'd':
				return A2(
					$CoderDennis$elm_time_format$Time$Format$padWith,
					_Utils_chr('0'),
					A2($elm$time$Time$toDay, zone, d));
			case '-d':
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toDay, zone, d));
			case '-@d':
				return A2(
					config.i18n.dayOfMonthWithSuffix,
					false,
					A2($elm$time$Time$toDay, zone, d));
			case 'e':
				return A2(
					$CoderDennis$elm_time_format$Time$Format$padWith,
					_Utils_chr(' '),
					A2($elm$time$Time$toDay, zone, d));
			case '@e':
				return A2(
					config.i18n.dayOfMonthWithSuffix,
					true,
					A2($elm$time$Time$toDay, zone, d));
			case 'A':
				return config.i18n.dayName(
					A2($elm$time$Time$toWeekday, zone, d));
			case '^A':
				return $elm$core$String$toUpper(
					config.i18n.dayName(
						A2($elm$time$Time$toWeekday, zone, d)));
			case 'a':
				return config.i18n.dayShort(
					A2($elm$time$Time$toWeekday, zone, d));
			case '^a':
				return $elm$core$String$toUpper(
					config.i18n.dayShort(
						A2($elm$time$Time$toWeekday, zone, d)));
			case 'H':
				return A2(
					$CoderDennis$elm_time_format$Time$Format$padWith,
					_Utils_chr('0'),
					A2($elm$time$Time$toHour, zone, d));
			case '-H':
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toHour, zone, d));
			case 'k':
				return A2(
					$CoderDennis$elm_time_format$Time$Format$padWith,
					_Utils_chr(' '),
					A2($elm$time$Time$toHour, zone, d));
			case 'I':
				return A2(
					$CoderDennis$elm_time_format$Time$Format$padWith,
					_Utils_chr('0'),
					$CoderDennis$elm_time_format$Time$Format$hourMod12(
						A2($elm$time$Time$toHour, zone, d)));
			case '-I':
				return $elm$core$String$fromInt(
					$CoderDennis$elm_time_format$Time$Format$hourMod12(
						A2($elm$time$Time$toHour, zone, d)));
			case 'l':
				return A2(
					$CoderDennis$elm_time_format$Time$Format$padWith,
					_Utils_chr(' '),
					$CoderDennis$elm_time_format$Time$Format$hourMod12(
						A2($elm$time$Time$toHour, zone, d)));
			case 'p':
				return $elm$core$String$toUpper(
					config.i18n.twelveHourPeriod(
						A2($CoderDennis$elm_time_format$Time$Format$TwelveHourClock$twelveHourPeriod, zone, d)));
			case 'P':
				return config.i18n.twelveHourPeriod(
					A2($CoderDennis$elm_time_format$Time$Format$TwelveHourClock$twelveHourPeriod, zone, d));
			case 'M':
				return A2(
					$CoderDennis$elm_time_format$Time$Format$padWith,
					_Utils_chr('0'),
					A2($elm$time$Time$toMinute, zone, d));
			case 'S':
				return A2(
					$CoderDennis$elm_time_format$Time$Format$padWith,
					_Utils_chr('0'),
					A2($elm$time$Time$toSecond, zone, d));
			case 'L':
				return A3(
					$CoderDennis$elm_time_format$Time$Format$padWithN,
					3,
					_Utils_chr('0'),
					A2($elm$time$Time$toMillis, zone, d));
			case '%':
				return symbol;
			default:
				return '';
		}
	});
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $CoderDennis$elm_time_format$Time$Format$format = F4(
	function (config, formatStr, zone, time) {
		return A3(
			$elm$regex$Regex$replace,
			$CoderDennis$elm_time_format$Time$Format$formatRegex,
			A3($CoderDennis$elm_time_format$Time$Format$formatToken, config, zone, time),
			formatStr);
	});
var $mdgriffith$elm_ui$Internal$Flag$fontWeight = $mdgriffith$elm_ui$Internal$Flag$flag(13);
var $mdgriffith$elm_ui$Element$Font$bold = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.bold);
var $author$project$App$headerCellStyle = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Border$solid,
		$mdgriffith$elm_ui$Element$Border$width(1),
		$mdgriffith$elm_ui$Element$Font$bold,
		$mdgriffith$elm_ui$Element$padding(5)
	]);
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var $mdgriffith$elm_ui$Element$link = F2(
	function (attrs, _v0) {
		var url = _v0.url;
		var label = _v0.label;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$rel('noopener noreferrer')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.link)))),
								attrs))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $mdgriffith$elm_ui$Internal$Model$Max = F2(
	function (a, b) {
		return {$: 'Max', a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$maximum = F2(
	function (i, l) {
		return A2($mdgriffith$elm_ui$Internal$Model$Max, i, l);
	});
var $mdgriffith$elm_ui$Internal$Model$Paragraph = {$: 'Paragraph'};
var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y)));
	});
var $mdgriffith$elm_ui$Element$spacing = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$spacing,
		A3(
			$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
			A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
			x,
			x));
};
var $mdgriffith$elm_ui$Element$paragraph = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asParagraph,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Paragraph),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$spacing(5),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Element$rgb = F3(
	function (r, g, b) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, r, g, b, 1);
	});
var $mdgriffith$elm_ui$Element$rgb255 = F3(
	function (red, green, blue) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, 1);
	});
var $author$project$App$statusColor = function (status) {
	switch (status) {
		case 143:
			return A3($mdgriffith$elm_ui$Element$rgb255, 255, 0, 0);
		case 45242701:
			return A3($mdgriffith$elm_ui$Element$rgb255, 0, 255, 0);
		default:
			return A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255);
	}
};
var $mdgriffith$elm_ui$Element$InternalColumn = function (a) {
	return {$: 'InternalColumn', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Empty = {$: 'Empty'};
var $mdgriffith$elm_ui$Internal$Model$GridPosition = function (a) {
	return {$: 'GridPosition', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$GridTemplateStyle = function (a) {
	return {$: 'GridTemplateStyle', a: a};
};
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $mdgriffith$elm_ui$Internal$Model$AsGrid = {$: 'AsGrid'};
var $mdgriffith$elm_ui$Internal$Model$asGrid = $mdgriffith$elm_ui$Internal$Model$AsGrid;
var $mdgriffith$elm_ui$Internal$Model$getSpacing = F2(
	function (attrs, _default) {
		return A2(
			$elm$core$Maybe$withDefault,
			_default,
			A3(
				$elm$core$List$foldr,
				F2(
					function (attr, acc) {
						if (acc.$ === 'Just') {
							var x = acc.a;
							return $elm$core$Maybe$Just(x);
						} else {
							if ((attr.$ === 'StyleClass') && (attr.b.$ === 'SpacingStyle')) {
								var _v2 = attr.b;
								var x = _v2.b;
								var y = _v2.c;
								return $elm$core$Maybe$Just(
									_Utils_Tuple2(x, y));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}),
				$elm$core$Maybe$Nothing,
				attrs));
	});
var $mdgriffith$elm_ui$Internal$Flag$gridPosition = $mdgriffith$elm_ui$Internal$Flag$flag(35);
var $mdgriffith$elm_ui$Internal$Flag$gridTemplate = $mdgriffith$elm_ui$Internal$Flag$flag(34);
var $mdgriffith$elm_ui$Internal$Model$Px = function (a) {
	return {$: 'Px', a: a};
};
var $mdgriffith$elm_ui$Element$px = $mdgriffith$elm_ui$Internal$Model$Px;
var $mdgriffith$elm_ui$Element$tableHelper = F2(
	function (attrs, config) {
		var onGrid = F3(
			function (rowLevel, columnLevel, elem) {
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$StyleClass,
							$mdgriffith$elm_ui$Internal$Flag$gridPosition,
							$mdgriffith$elm_ui$Internal$Model$GridPosition(
								{col: columnLevel, height: 1, row: rowLevel, width: 1}))
						]),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[elem])));
			});
		var columnWidth = function (col) {
			if (col.$ === 'InternalIndexedColumn') {
				var colConfig = col.a;
				return colConfig.width;
			} else {
				var colConfig = col.a;
				return colConfig.width;
			}
		};
		var columnHeader = function (col) {
			if (col.$ === 'InternalIndexedColumn') {
				var colConfig = col.a;
				return colConfig.header;
			} else {
				var colConfig = col.a;
				return colConfig.header;
			}
		};
		var maybeHeaders = function (headers) {
			return A2(
				$elm$core$List$all,
				$elm$core$Basics$eq($mdgriffith$elm_ui$Internal$Model$Empty),
				headers) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				A2(
					$elm$core$List$indexedMap,
					F2(
						function (col, header) {
							return A3(onGrid, 1, col + 1, header);
						}),
					headers));
		}(
			A2($elm$core$List$map, columnHeader, config.columns));
		var add = F3(
			function (cell, columnConfig, cursor) {
				if (columnConfig.$ === 'InternalIndexedColumn') {
					var col = columnConfig.a;
					return _Utils_update(
						cursor,
						{
							column: cursor.column + 1,
							elements: A2(
								$elm$core$List$cons,
								A3(
									onGrid,
									cursor.row,
									cursor.column,
									A2(
										col.view,
										_Utils_eq(maybeHeaders, $elm$core$Maybe$Nothing) ? (cursor.row - 1) : (cursor.row - 2),
										cell)),
								cursor.elements)
						});
				} else {
					var col = columnConfig.a;
					return {
						column: cursor.column + 1,
						elements: A2(
							$elm$core$List$cons,
							A3(
								onGrid,
								cursor.row,
								cursor.column,
								col.view(cell)),
							cursor.elements),
						row: cursor.row
					};
				}
			});
		var build = F3(
			function (columns, rowData, cursor) {
				var newCursor = A3(
					$elm$core$List$foldl,
					add(rowData),
					cursor,
					columns);
				return {column: 1, elements: newCursor.elements, row: cursor.row + 1};
			});
		var children = A3(
			$elm$core$List$foldl,
			build(config.columns),
			{
				column: 1,
				elements: _List_Nil,
				row: _Utils_eq(maybeHeaders, $elm$core$Maybe$Nothing) ? 1 : 2
			},
			config.data);
		var _v0 = A2(
			$mdgriffith$elm_ui$Internal$Model$getSpacing,
			attrs,
			_Utils_Tuple2(0, 0));
		var sX = _v0.a;
		var sY = _v0.b;
		var template = A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$gridTemplate,
			$mdgriffith$elm_ui$Internal$Model$GridTemplateStyle(
				{
					columns: A2($elm$core$List$map, columnWidth, config.columns),
					rows: A2(
						$elm$core$List$repeat,
						$elm$core$List$length(config.data),
						$mdgriffith$elm_ui$Internal$Model$Content),
					spacing: _Utils_Tuple2(
						$mdgriffith$elm_ui$Element$px(sX),
						$mdgriffith$elm_ui$Element$px(sY))
				}));
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asGrid,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				A2($elm$core$List$cons, template, attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				function () {
					if (maybeHeaders.$ === 'Nothing') {
						return children.elements;
					} else {
						var renderedHeaders = maybeHeaders.a;
						return _Utils_ap(
							renderedHeaders,
							$elm$core$List$reverse(children.elements));
					}
				}()));
	});
var $mdgriffith$elm_ui$Element$table = F2(
	function (attrs, config) {
		return A2(
			$mdgriffith$elm_ui$Element$tableHelper,
			attrs,
			{
				columns: A2($elm$core$List$map, $mdgriffith$elm_ui$Element$InternalColumn, config.columns),
				data: config.data
			});
	});
var $mdgriffith$elm_ui$Element$Font$underline = $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.underline);
var $author$project$App$viewLeads = function (model) {
	var _v0 = model.leads;
	if (_v0.$ === 'Just') {
		var leads = _v0.a;
		return A2(
			$mdgriffith$elm_ui$Element$table,
			_List_Nil,
			{
				columns: _List_fromArray(
					[
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('Номер заявки')),
						view: function (l) {
							return A2(
								$mdgriffith$elm_ui$Element$el,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									$author$project$App$dataCellStyle),
								$mdgriffith$elm_ui$Element$text(
									$elm$core$String$fromInt(l.id)));
						},
						width: $mdgriffith$elm_ui$Element$fill
					},
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('Ссылка на заявку')),
						view: function (l) {
							return A2(
								$mdgriffith$elm_ui$Element$link,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Element$Font$underline,
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Element$Font$color(
												A3($mdgriffith$elm_ui$Element$rgb, 0, 0, 1)),
											$author$project$App$dataCellStyle))),
								{
									label: $mdgriffith$elm_ui$Element$text('...'),
									url: l.href
								});
						},
						width: $mdgriffith$elm_ui$Element$fill
					},
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('Дата выезда')),
						view: function (l) {
							return A2(
								$mdgriffith$elm_ui$Element$el,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									$author$project$App$dataCellStyle),
								$mdgriffith$elm_ui$Element$text(
									A2(
										$elm$core$Maybe$withDefault,
										'',
										A2(
											$elm$core$Maybe$map,
											A3($CoderDennis$elm_time_format$Time$Format$format, $CoderDennis$elm_time_format$Time$Format$Config$Config_ru_ru$config, '%d.%m.%Y %I:%M:%S', $elm$time$Time$utc),
											l.dateVisit))));
						},
						width: $mdgriffith$elm_ui$Element$fill
					},
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('Мастер')),
						view: function (l) {
							var master = function () {
								var _v1 = model.masters;
								if (_v1.$ === 'Just') {
									var masters = _v1.a;
									var _v2 = l.master;
									if (_v2.$ === 'Just') {
										var masterId = _v2.a;
										return A2(
											$elm$core$Maybe$withDefault,
											$elm$core$String$fromInt(masterId),
											A2(
												$elm$core$Maybe$map,
												function ($) {
													return $.value;
												},
												A2(
													$elm$core$Dict$get,
													$elm$core$String$fromInt(masterId),
													masters)));
									} else {
										return '';
									}
								} else {
									return A2(
										$elm$core$Maybe$withDefault,
										'',
										A2($elm$core$Maybe$map, $elm$core$String$fromInt, l.master));
								}
							}();
							return A2(
								$mdgriffith$elm_ui$Element$el,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									$author$project$App$dataCellStyle),
								$mdgriffith$elm_ui$Element$text(master));
						},
						width: $mdgriffith$elm_ui$Element$fill
					},
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('ЗП мастера')),
						view: function (l) {
							return A2(
								$mdgriffith$elm_ui$Element$el,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									$author$project$App$dataCellStyle),
								$mdgriffith$elm_ui$Element$text(
									$elm$core$String$fromFloat(l.masterSalary)));
						},
						width: $mdgriffith$elm_ui$Element$fill
					},
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('Адрес заявки')),
						view: function (l) {
							return A2(
								$mdgriffith$elm_ui$Element$paragraph,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									_Utils_ap(
										$author$project$App$dataCellStyle,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$width(
												A2($mdgriffith$elm_ui$Element$maximum, 500, $mdgriffith$elm_ui$Element$fill))
											]))),
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text(l.address)
									]));
						},
						width: A2($mdgriffith$elm_ui$Element$maximum, 200, $mdgriffith$elm_ui$Element$fill)
					},
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('Город')),
						view: function (l) {
							return A2(
								$mdgriffith$elm_ui$Element$el,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									$author$project$App$dataCellStyle),
								$mdgriffith$elm_ui$Element$text(l.city));
						},
						width: $mdgriffith$elm_ui$Element$fill
					},
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('Тип заявки')),
						view: function (l) {
							return A2(
								$mdgriffith$elm_ui$Element$el,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									$author$project$App$dataCellStyle),
								$mdgriffith$elm_ui$Element$text(l.ltype));
						},
						width: $mdgriffith$elm_ui$Element$fill
					},
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('Цена клиенту')),
						view: function (l) {
							return A2(
								$mdgriffith$elm_ui$Element$el,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									$author$project$App$dataCellStyle),
								$mdgriffith$elm_ui$Element$text(
									$elm$core$String$fromFloat(l.sellCost)));
						},
						width: $mdgriffith$elm_ui$Element$fill
					},
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('Затраты на матерал')),
						view: function (l) {
							return A2(
								$mdgriffith$elm_ui$Element$el,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									$author$project$App$dataCellStyle),
								$mdgriffith$elm_ui$Element$text(
									$elm$core$String$fromFloat(l.partsCost)));
						},
						width: $mdgriffith$elm_ui$Element$fill
					},
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('Стоимость работ для клиента')),
						view: function (l) {
							return A2(
								$mdgriffith$elm_ui$Element$el,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									$author$project$App$dataCellStyle),
								$mdgriffith$elm_ui$Element$text(
									$elm$core$String$fromFloat(l.worksCost)));
						},
						width: $mdgriffith$elm_ui$Element$fill
					},
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('Стоимость работ')),
						view: function (l) {
							return A2(
								$mdgriffith$elm_ui$Element$el,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									$author$project$App$dataCellStyle),
								$mdgriffith$elm_ui$Element$text(
									$elm$core$String$fromFloat(l.netWorksCost)));
						},
						width: $mdgriffith$elm_ui$Element$fill
					},
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('Перевод в офис')),
						view: function (l) {
							return A2(
								$mdgriffith$elm_ui$Element$el,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									$author$project$App$dataCellStyle),
								$mdgriffith$elm_ui$Element$text(
									$elm$core$String$fromFloat(l.officeIncome)));
						},
						width: $mdgriffith$elm_ui$Element$fill
					},
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('Дата закрытия')),
						view: function (l) {
							return A2(
								$mdgriffith$elm_ui$Element$el,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									$author$project$App$dataCellStyle),
								$mdgriffith$elm_ui$Element$text(
									A2(
										$elm$core$Maybe$withDefault,
										'',
										A2(
											$elm$core$Maybe$map,
											A3($CoderDennis$elm_time_format$Time$Format$format, $CoderDennis$elm_time_format$Time$Format$Config$Config_ru_ru$config, '%d.%m.%Y %I:%M:%S', $elm$time$Time$utc),
											l.closedDate))));
						},
						width: $mdgriffith$elm_ui$Element$fill
					},
						{
						header: A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$App$headerCellStyle,
							$mdgriffith$elm_ui$Element$text('Статус заявки')),
						view: function (l) {
							var statusId = $elm$core$String$fromInt(l.statusId);
							var status = function () {
								var _v3 = model.statuses;
								if (_v3.$ === 'Just') {
									var statuses = _v3.a;
									return A2(
										$elm$core$Maybe$withDefault,
										statusId,
										A2(
											$elm$core$Maybe$map,
											function ($) {
												return $.name;
											},
											A2($elm$core$Dict$get, statusId, statuses)));
								} else {
									return $elm$core$String$fromInt(l.statusId);
								}
							}();
							return A2(
								$mdgriffith$elm_ui$Element$el,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$Background$color(
										$author$project$App$statusColor(l.statusId)),
									$author$project$App$dataCellStyle),
								$mdgriffith$elm_ui$Element$text(status));
						},
						width: $mdgriffith$elm_ui$Element$fill
					}
					]),
				data: leads
			});
	} else {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$padding(10)
				]),
			$mdgriffith$elm_ui$Element$text(''));
	}
};
var $author$project$App$viewModelStatus = function (model) {
	var usersStatus = function () {
		var _v3 = model.users;
		if (_v3.$ === 'Just') {
			return 'Список пользователей обновлен';
		} else {
			return 'Список пользователей не обновлен';
		}
	}();
	var statusesStatus = function () {
		var _v2 = model.statuses;
		if (_v2.$ === 'Just') {
			return 'Список статусов обновлен';
		} else {
			return 'Список статусов не обновлен';
		}
	}();
	var mastersStatus = function () {
		var _v1 = model.masters;
		if (_v1.$ === 'Just') {
			return 'Список мастеров обновлен';
		} else {
			return 'Список мастеров не обновлен';
		}
	}();
	var leadsStatus = function () {
		var _v0 = model.leads;
		if (_v0.$ === 'Just') {
			return 'Список сделок обновлен';
		} else {
			return 'Список сделок не обновлен';
		}
	}();
	return A2(
		$mdgriffith$elm_ui$Element$wrappedRow,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(10)
					]),
				$mdgriffith$elm_ui$Element$text(leadsStatus)),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(10)
					]),
				$mdgriffith$elm_ui$Element$text(statusesStatus)),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(10)
					]),
				$mdgriffith$elm_ui$Element$text(usersStatus)),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(10)
					]),
				$mdgriffith$elm_ui$Element$text(mastersStatus))
			]));
};
var $author$project$App$view = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$layout,
		_List_Nil,
		A2(
			$mdgriffith$elm_ui$Element$column,
			_List_Nil,
			_List_fromArray(
				[
					$author$project$App$viewHttpStatus(model.httpStatus),
					$author$project$App$viewModelStatus(model),
					$author$project$App$viewFilters(model),
					$author$project$App$viewLeads(model)
				])));
};
var $author$project$App$main = $elm$browser$Browser$element(
	{
		init: function (_v0) {
			return _Utils_Tuple2(
				$author$project$App$initModel,
				$elm$core$Platform$Cmd$batch(
					_List_fromArray(
						[
							A2($elm$core$Task$perform, $author$project$App$InitialiseTime, $elm$time$Time$now),
							$author$project$App$getUsers,
							$author$project$App$getPipelines,
							$author$project$App$getMasters
						])));
		},
		subscriptions: function (_v1) {
			return $elm$core$Platform$Sub$none;
		},
		update: $author$project$App$update,
		view: $author$project$App$view
	});
_Platform_export({'App':{'init':$author$project$App$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));