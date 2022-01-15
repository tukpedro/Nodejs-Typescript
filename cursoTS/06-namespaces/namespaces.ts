namespace Geometria {
	export namespace Area {
		const pi = 3.14;
		
		export function areaCircle(radius: number): number {
			return pi * Math.pow(radius, 2);
		}
		
		export function areaRect(base: number, height: number): number {
			return base * height;
		}
	}
}


console.log(Geometria.Area.areaCircle(8));