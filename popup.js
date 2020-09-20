document.getElementById('btn').addEventListener('click', () => {
	const input = document.getElementById('file');
	const file = input.files[0];
	readFile(file);
})

function readFile(file) {
	const reader = new FileReader();
  reader.addEventListener('load', (event) => {
		const result = JSON.parse(event.target.result);
		const data = [];
		Object.keys(result).forEach(key => {
			data.push({
				key,
				content: result[key]
			})
		})
		// Do something with result
		var ws = XLSX.utils.json_to_sheet(data, { header: ['key', 'content'] });
		var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Bookmarks');
    XLSX.writeFile(wb, "bookmarks.xlsx");
	});
	reader.readAsText(file);
}