"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const n04 = 
{
	// This Game is a joke. I have suicidal thought just by coding this.
	default(props = { n:5000,x:50,y:50,z:20 }) 
	{
		function ucln(a, b)
		{
			let  i = a % b;
			while(i != 0)
			{
				a = b;
				b = i;
				i = a % b;
			}
			return b;
		}
		let ans = 0;
		let ans1 = 0;
		let n = props.n;
		let x = props.x;
		let x1 = 100;
		let k = ucln(x,x1);
		x = x / k; x1 = x1 / k;
		let y = props.y;
		let y1 = 100;
		k = ucln(y,y1);
		y = y / k; y1 = y1 / k;
		let z = props.z;
		let z1 = 100;
		k = ucln(z,z1);
		z = z / k; z1 = z1 / k;
		return {n,x,x1,y,y1,z,z1,ans,ans1};
	}, 
	
	actions: 
	{ 
		async move(state, { a, a1 }) 
		{
			let n = state.n;
			let x = state.x;
			let x1 = state.x1;
			let y = state.y;
			let y1 = state.y1;
			let z = state.z;
			let z1 = state.z1;
			let ans = state.ans;
			let ans1 = state.ans1;
			ans=a;
			ans1=a1;
			return {n,x,x1,y,y1,z,z1,ans,ans1};
		}
	},

	isValid(state) {
		return true;
	},

	isEnding(state) 
	{
		let n = state.n;
		let x = state.x;
		let x1 = state.x1;
		let y = state.y;
		let y1 = state.y1;
		let z = state.z;
		let z1 = state.z1;
		let ans = state.ans;
		let ans1 = state.ans1;
		if(Math.round((n * x * y) / (x1 * y1)) == ans && Math.round((n * x * z) / (x1 * z1)) == ans1 ) return "won";
		else return null;
		
	}
};
exports.default = n04;
