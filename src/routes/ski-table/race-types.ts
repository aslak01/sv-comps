// quicktype.io

export type Race = {
	readonly racedata: Racedata;
	readonly locations: Locations;
};

export type Locations = {
	readonly '1.1km': KM[];
	readonly '3.1km': KM[];
	readonly '5.0km': KM[];
	readonly '6.1km': KM[];
	readonly '8.1km': KM[];
	readonly '10km': The10KM[];
};

export type KM = {
	readonly uuid: string;
	readonly rank?: number;
	readonly duration?: string;
	readonly person: Person;
	readonly timeDifference?: string;
};

export type Person = {
	readonly uuid: string;
	readonly shirtNumber: number;
	readonly name: string;
	readonly firstName: string;
	readonly lastName: string;
	readonly country: Country;
};

export type Country =
	| 'Sweden'
	| 'Norway'
	| 'Russia'
	| 'Japan'
	| 'Germany'
	| 'Finland'
	| 'USA'
	| 'Estonia'
	| 'Austria'
	| 'Canada'
	| 'Czech Republic'
	| 'Switzerland'
	| 'Italy'
	| 'Slovenia'
	| 'Latvia'
	| 'Poland'
	| 'Belarus'
	| 'Kazakhstan'
	| 'Ukraine'
	| 'Armenia';

export type The10KM = {
	readonly uuid: string;
	readonly rank?: number;
	readonly duration?: string;
	readonly totalWorldCupPoints?: number;
	readonly totalNationCupPoints?: number;
	readonly person: Person;
	readonly timeDifference?: string;
};

export type Racedata = {
	readonly name: string;
	readonly date: Date;
	readonly competitionName: string;
	readonly season: string;
};
