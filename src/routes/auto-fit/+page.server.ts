import { faker } from '@faker-js/faker';
//@ts-expect-error no types in lib
import nearestColor from 'nearest-color';
//@ts-expect-error no types in lib
import { colornames } from 'color-name-list';
import type { PageServerLoad } from './$types';

type ColorEntry = {
	name: string;
	hex: string;
	rgb: { r: number; g: number; b: number };
};

type ColorMap = {
	[colorName: string]: string;
};

type ColorMatch = {
	name: string;
	value: string;
	distance: number;
	rgb: { r: number; g: number; b: number };
};

type ColorData = {
	hex: string;
	name: string;
	text: '#222' | '#eee';
	rgb: string;
	code: string;
	type?: string;
	shortName: boolean;
};

type NearestColorFn = {
	(color: string): ColorMatch | null;
	from: (colors: ColorMap) => NearestColorFn;
};

const colors = colornames.reduce<ColorMap>(
	(o: ColorMap, { name, hex }: ColorEntry) => Object.assign(o, { [name]: hex }),
	{}
);

const nearest: (color: string) => ColorMatch | null = (nearestColor as NearestColorFn).from(colors);

function getLuminance(hex: string) {
	const r = parseInt(hex.slice(1, 3), 16) / 255;
	const g = parseInt(hex.slice(3, 5), 16) / 255;
	const b = parseInt(hex.slice(5, 7), 16) / 255;
	const brightness = (r * 299 + g * 587 + b * 114) / 1000;
	// console.log(r, g, b, brightness);
	return brightness > 0.5;
}

const make123 = () => faker.number.int({ min: 1, max: 3 });
const make5050 = () => faker.number.int({ min: 0, max: 100 });

const fillDiv = (type?: string): ColorData => {
	const inHex = faker.color.rgb({ format: 'hex' });
	const neighbour = nearest(inHex);
	const name = neighbour?.name ?? '';
	const hex = neighbour?.value ?? inHex;
	const rgb = neighbour?.rgb;
	const rgbString = rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : '';
	const code = hex ?? inHex;
	const text: '#222' | '#eee' = getLuminance(hex) ? '#222' : '#eee';
	const shortName = name.length < 7;

	const divSettings: ColorData = {
		code,
		hex,
		name,
		rgb: rgbString,
		text,
		shortName
	};

	if (type && typeof type === 'string') {
		divSettings.type = type;
	}

	return divSettings;
};

export const load: PageServerLoad = async () => {
	const divs = Array.from({ length: 30 }, () => {
		const cols = make123();
		const isSingleCol = cols === 1;
		const isNested = isSingleCol && make5050() > 30;
		const side = make5050() > 50 ? 'left' : 'right';
		return isNested
			? Array.from({ length: 3 }, () => fillDiv(`big ${side}`))
			: Array.from({ length: cols }, () => fillDiv());
	});

	return {
		divs
	};
};
