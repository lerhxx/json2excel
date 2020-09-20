const fs = require('fs');
const XLSX = require('XLSX');

const workbook = {
		SheetNames: ['Sheet1'],
		Sheets: {},
		Props: {}
}

function transform(path = './index.json') {
	fs.readFile(path, (err, data) => {
		if (err) {
			return console.log('err', err);
		}
		// workbook.SheetNames = XLSX.utils.json_to_sheet(data);
		// var ws = XLSX.utils.json_to_sheet([
		// 	{ S:1, h:2, e:3, e_1:4, t:5, J:6, S_1:7 },
		// 	{ S:2, h:3, e:4, e_1:5, t:6, J:7, S_1:8 }
		// ], {header:["S","h","e","e_1","t","J","S_1"]});
		// var workbook = XLSX.read(data, {type:'buffer'});
		// XLSX.writeFile(workbook, 'out.XLSX');
		console.log('data', data.toString())

		// const wb = XLSX.readFile(path, { type: 'json' });
		// var ws = XLSX.utils.json_to_sheet([data], { header: ['a'] })
		// XLSX.utils.sheet_add_json(ws);
		var ws = XLSX.utils.json_to_sheet([
			{ A: "S", B: "h", C: "e", D: "e", E: "t", F: "J", G: "S" }
		], {header: ["A", "B", "C", "D", "E", "F", "G"], skipHeader: true});
		
		XLSX.writeFile(ws, 'out.XLSX');
	})


}

transform();
