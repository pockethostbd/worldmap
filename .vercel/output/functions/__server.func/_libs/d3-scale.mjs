import { a as value_default, i as round_default } from "./d3-interpolate.mjs";
import { a as ticks, i as tickStep, r as tickIncrement } from "./d3-array.mjs";
import { a as formatPrefix, i as format, n as precisionPrefix_default, o as formatSpecifier, r as precisionFixed_default, t as precisionRound_default } from "./d3-format.mjs";
//#region node_modules/d3-scale/src/init.js
function initInterpolator(domain, interpolator) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			if (typeof domain === "function") this.interpolator(domain);
			else this.range(domain);
			break;
		default:
			this.domain(domain);
			if (typeof interpolator === "function") this.interpolator(interpolator);
			else this.range(interpolator);
	}
	return this;
}
//#endregion
//#region node_modules/d3-scale/src/continuous.js
function identity(x) {
	return x;
}
//#endregion
//#region node_modules/d3-scale/src/tickFormat.js
function tickFormat(start, stop, count, specifier) {
	var step = tickStep(start, stop, count), precision;
	specifier = formatSpecifier(specifier == null ? ",f" : specifier);
	switch (specifier.type) {
		case "s":
			var value = Math.max(Math.abs(start), Math.abs(stop));
			if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value))) specifier.precision = precision;
			return formatPrefix(specifier, value);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
			break;
		case "f":
		case "%": if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step))) specifier.precision = precision - (specifier.type === "%") * 2;
	}
	return format(specifier);
}
//#endregion
//#region node_modules/d3-scale/src/linear.js
function linearish(scale) {
	var domain = scale.domain;
	scale.ticks = function(count) {
		var d = domain();
		return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
	};
	scale.tickFormat = function(count, specifier) {
		var d = domain();
		return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
	};
	scale.nice = function(count) {
		if (count == null) count = 10;
		var d = domain();
		var i0 = 0;
		var i1 = d.length - 1;
		var start = d[i0];
		var stop = d[i1];
		var prestep;
		var step;
		var maxIter = 10;
		if (stop < start) {
			step = start, start = stop, stop = step;
			step = i0, i0 = i1, i1 = step;
		}
		while (maxIter-- > 0) {
			step = tickIncrement(start, stop, count);
			if (step === prestep) {
				d[i0] = start;
				d[i1] = stop;
				return domain(d);
			} else if (step > 0) {
				start = Math.floor(start / step) * step;
				stop = Math.ceil(stop / step) * step;
			} else if (step < 0) {
				start = Math.ceil(start * step) / step;
				stop = Math.floor(stop * step) / step;
			} else break;
			prestep = step;
		}
		return scale;
	};
	return scale;
}
//#endregion
//#region node_modules/d3-scale/src/nice.js
function nice(domain, interval) {
	domain = domain.slice();
	var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
	if (x1 < x0) {
		t = i0, i0 = i1, i1 = t;
		t = x0, x0 = x1, x1 = t;
	}
	domain[i0] = interval.floor(x0);
	domain[i1] = interval.ceil(x1);
	return domain;
}
//#endregion
//#region node_modules/d3-scale/src/log.js
function transformLog(x) {
	return Math.log(x);
}
function transformExp(x) {
	return Math.exp(x);
}
function transformLogn(x) {
	return -Math.log(-x);
}
function transformExpn(x) {
	return -Math.exp(-x);
}
function pow10(x) {
	return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}
function powp(base) {
	return base === 10 ? pow10 : base === Math.E ? Math.exp : (x) => Math.pow(base, x);
}
function logp(base) {
	return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x) => Math.log(x) / base);
}
function reflect(f) {
	return (x, k) => -f(-x, k);
}
function loggish(transform) {
	const scale = transform(transformLog, transformExp);
	const domain = scale.domain;
	let base = 10;
	let logs;
	let pows;
	function rescale() {
		logs = logp(base), pows = powp(base);
		if (domain()[0] < 0) {
			logs = reflect(logs), pows = reflect(pows);
			transform(transformLogn, transformExpn);
		} else transform(transformLog, transformExp);
		return scale;
	}
	scale.base = function(_) {
		return arguments.length ? (base = +_, rescale()) : base;
	};
	scale.domain = function(_) {
		return arguments.length ? (domain(_), rescale()) : domain();
	};
	scale.ticks = (count) => {
		const d = domain();
		let u = d[0];
		let v = d[d.length - 1];
		const r = v < u;
		if (r) [u, v] = [v, u];
		let i = logs(u);
		let j = logs(v);
		let k;
		let t;
		const n = count == null ? 10 : +count;
		let z = [];
		if (!(base % 1) && j - i < n) {
			i = Math.floor(i), j = Math.ceil(j);
			if (u > 0) for (; i <= j; ++i) for (k = 1; k < base; ++k) {
				t = i < 0 ? k / pows(-i) : k * pows(i);
				if (t < u) continue;
				if (t > v) break;
				z.push(t);
			}
			else for (; i <= j; ++i) for (k = base - 1; k >= 1; --k) {
				t = i > 0 ? k / pows(-i) : k * pows(i);
				if (t < u) continue;
				if (t > v) break;
				z.push(t);
			}
			if (z.length * 2 < n) z = ticks(u, v, n);
		} else z = ticks(i, j, Math.min(j - i, n)).map(pows);
		return r ? z.reverse() : z;
	};
	scale.tickFormat = (count, specifier) => {
		if (count == null) count = 10;
		if (specifier == null) specifier = base === 10 ? "s" : ",";
		if (typeof specifier !== "function") {
			if (!(base % 1) && (specifier = formatSpecifier(specifier)).precision == null) specifier.trim = true;
			specifier = format(specifier);
		}
		if (count === Infinity) return specifier;
		const k = Math.max(1, base * count / scale.ticks().length);
		return (d) => {
			let i = d / pows(Math.round(logs(d)));
			if (i * base < base - .5) i *= base;
			return i <= k ? specifier(d) : "";
		};
	};
	scale.nice = () => {
		return domain(nice(domain(), {
			floor: (x) => pows(Math.floor(logs(x))),
			ceil: (x) => pows(Math.ceil(logs(x)))
		}));
	};
	return scale;
}
//#endregion
//#region node_modules/d3-scale/src/sequential.js
function transformer() {
	var x0 = 0, x1 = 1, t0, t1, k10, transform, interpolator = identity, clamp = false, unknown;
	function scale(x) {
		return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? .5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
	}
	scale.domain = function(_) {
		return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
	};
	scale.clamp = function(_) {
		return arguments.length ? (clamp = !!_, scale) : clamp;
	};
	scale.interpolator = function(_) {
		return arguments.length ? (interpolator = _, scale) : interpolator;
	};
	function range(interpolate) {
		return function(_) {
			var r0, r1;
			return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
		};
	}
	scale.range = range(value_default);
	scale.rangeRound = range(round_default);
	scale.unknown = function(_) {
		return arguments.length ? (unknown = _, scale) : unknown;
	};
	return function(t) {
		transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
		return scale;
	};
}
function copy(source, target) {
	return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
	var scale = linearish(transformer()(identity));
	scale.copy = function() {
		return copy(scale, sequential());
	};
	return initInterpolator.apply(scale, arguments);
}
function sequentialLog() {
	var scale = loggish(transformer()).domain([1, 10]);
	scale.copy = function() {
		return copy(scale, sequentialLog()).base(scale.base());
	};
	return initInterpolator.apply(scale, arguments);
}
//#endregion
export { sequentialLog as n, sequential as t };
