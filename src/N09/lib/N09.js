"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var N09 = {
	default (props) {
		// Init
		var N = 7 , num = [7, 9, 11, 14, 5, 12, 144], oper = [0, 0, 0, 0, 0, 0], res = [7, 16, 27, 41, 46, 58];
		// N = number of numbers;
		// num = list of numbers, the last one is the result;
		// oper = (0 1 2 3) ~ (+ - * /) not necessary because we will check last *res* with last *num* so just leave it as N times 0;
		// initial *res* = prefix summation of *num*;
		// random num then calculate res
		// for Dat Vu
		return ({N, num, oper, res});
	},

	actions: {
		async changeo(state, {pos}) {
			var oper=state.oper, N=state.N, num=state.num, res=[], now=0;
			oper[pos]++;
			for(var i=0;i<N-1;i++) {
				switch(oper[i]%4) {
					case 0:
						now+=num[i];
						break;
					case 1:
						if(now-num[i]<0) {
							now*=num[i];
							oper[i]=2;
						}
						else now-=num[i];
						break;
					case 2:
						now*=num[i];
						break;
					case 3:
						if(now%num[i]>0) {
							now+=num[i];
							oper[i]=0;
						}
						else now/=num[i];
						break;
				}
				res.push(now);
			}
			return ({N, num, oper, res});
		},

		async inN(state) {
			var oper=state.oper, N=state.N+1, num=state.num, res=state.res;
			return ({N, num, oper, res});
		},

		async deN(state) {
			var oper=state.oper, N=state.N-1, num=state.num, res=state.res;
			return ({N, num, oper, res});
		}
	},

	isValid(state) {
		return true;
	},

	isEnding(state) {
		if(state.res[state.N-2]==state.num[state.N-1]) return true;
		else return false;
		return null;
	}
};

exports.default = N09;