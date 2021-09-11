export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Proline';

export class Trail {
	name!: string;
	difficulty!: Difficulty;
	type!: 'Technical' | 'Freeride';
	zone!: 'Fitzsimmons Zone' | 'Garbanzo Zone' | 'Creekside Zone' | 'Peak Zone';
	start!: [number, number];

	static new(trail: any) {
		return Object.assign(new Trail(), trail);
	}
}
