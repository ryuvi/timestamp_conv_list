var timestamps = [];

setInterval(() => {
	let curr_date = document.getElementById("date");
	let curr_time = document.getElementById("time");
	let curr_timestamp = document.getElementById("curr_timestamp");
	let currDate = new Date();
	curr_date.innerText = currDate.toLocaleDateString();
	curr_time.innerText = currDate.toLocaleTimeString();
	curr_timestamp.innerText = parseInt(currDate.getTime() / 1000);
});

function save_timestamp() {
	let highlighted = document.querySelectorAll(".highlight");
	if (highlighted)
		highlighted.forEach((item) => {
			item.classList.remove("highlight");
		});

	let timestamp = document.getElementById("timestamp").value;
	let time_list = timestamp.split(";");
	if (time_list.length > 1) {
		for (let i = 0; i <= time_list.length; i++) {
			let date = new Date(parseInt(time_list[i].trim()) * 1000);
			if (timestamps.includes(time_list[i])) {
				let time = document.getElementById(time_list[i]);
				time.classList.add("highlight");
			} else {
				timestamps.push(time_list[i]);
				let time = document.createElement("tr");
				time.setAttribute("id", time_list[i]);

				let id = document.createElement("td");
				id.innerText = timestamps.indexOf(time_list[i]);

				let timestamp_el = document.createElement("td");
				timestamp_el.innerText = time_list[i];

				let date_el = document.createElement("td");
				date_el.innerText = date.toLocaleString();

				time.appendChild(id);
				time.appendChild(timestamp_el);
				time.appendChild(date_el);

				let times = document.querySelector("#timestamp_list");
				times.appendChild(time);
			}
		}
	}

	let date = new Date(parseInt(timestamp.trim()) * 1000);

	if (timestamps.includes(timestamp)) {
		let time = document.getElementById(timestamp);
		time.classList.add("blink");
		time.scrollIntoView();
		setTimeout(() => {
			time.classList.remove("blink");
		}, 1000);
	} else {
		timestamps.push(timestamp);
		let time = document.createElement("tr");
		time.setAttribute("id", timestamp);

		let id = document.createElement("td");
		id.innerText = timestamps.indexOf(timestamp);

		let timestamp_el = document.createElement("td");
		timestamp_el.innerText = timestamp;

		let date_el = document.createElement("td");
		date_el.innerText = date.toLocaleString();

		time.appendChild(id);
		time.appendChild(timestamp_el);
		time.appendChild(date_el);

		let times = document.querySelector("#timestamp_list");
		times.appendChild(time);
	}
}
