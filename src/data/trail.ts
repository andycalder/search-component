export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert' | 'proline';

export class Trail {
	name!: string;
	difficulty!: Difficulty;
	type!: 'technical' | 'freeride';
	zone!: 'Fitzsimmons Zone' | 'Garbanzo Zone' | 'Creekside Zone' | 'Peak Zone';
	start!: [number, number];

	static new(trail: any) {
		return Object.assign(new Trail(), trail);
	}
}
