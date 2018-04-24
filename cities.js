var populationCount = 0;

class TreeOfCities {

	constructor() {

		// A tree structure containing geographic items
		this.geographicData = [
			{
				name: "Asia",
				children: [
					{
						name: "Japan",
						children: [
							{
								name: "Tokyo",
								population: 33200000
							},
							{
								name: "Osaka/Kobe",
								population: 16425000
							}
						]
					},
					{
						name: "China",
						children: [
							{
								name: "Shanghai",
								population: 10000000
							},
							{
								name: "Shenzhen",
								population: 8000000
							}
						]
					}
				]
			},
			{
				name: "Europe",
				children: [
					{
						name: "France",
						children: [
							{
								name: "Ile de France",
								children: [
									{
										name: "Paris",
										population: 9645000
									},
									{
										name: "Val De Marne",
										children: [
											{
												name: "Creteil",
												population: 320000
											},
											{
												name: "Charenton Le Pont",
												population: 100000
											}
										]
									}
								]
							}
						]
					},
					{
						name: "Germany",
						children: [
							{
								name: "Berlin",
								population: 3675000
							},
							{
								name: "Frankfurt",
								population: 2260000
							}
						]
					}
				]
			},
			{
				name: "North America",
				children: [
					{
						name: "United States of America",
						children: [
							{
								name: "California",
								children: [
									{
										name: "Los Angeles",
										population: 11789000
									},
									{
										name: "San Francisco",
										population: 3229000
									},
									{
										name: "San Diego"
									}
								]
							},
							{
								name: "Washington",
								children: [
									{
										name: "Seattle",
										population: 2712000
									}
								]
							}
						]
					}
				]
			}
		]

	}

	// Return an object containing continent names as keys (you can assume 
	// continents are always top level), and total
	// population of any children as a value
	getPopulationByContinent() {
		
		var continentPopulation = [];
		
		for (var i = 0; i < this.geographicData.length; i++) {
			
			this.getPopulation(this.geographicData[i]);
			
			continentPopulation[this.geographicData[i]['name']] = populationCount;
			
			populationCount = 0;
			
		}
		
		return continentPopulation;
	}
	
	getPopulation(continent) {
		
		for (var value in continent) {
			
			if (value == 'population') {
				
				populationCount += parseInt(continent[value]);
				
			} 
			
			if (value == 'children') {
				
				for (var i = 0; i < continent[value].length; i++) {
					
					this.getPopulation(continent[value][i]);
					
				}
			}
		}
	}
}