const db = firebase.database();

$(document).ready(function () {
	console.clear()
	db.ref().on("value", function (snapshot) {

		const objects = snapshot.val()
		console.log(objects)

		for (const key in objects) {
			const element = objects[key]
			console.log(key, element)
		}
	}, function (error) {
		console.log("Error: " + error.code);
	});
})

$("#comments-form").submit(function (event) {
	event.preventDefault();

	var key = db.ref().push().key
	var object = {}
	object[key] = {
		id: key,
		name: $('#name-input').val(),
		comment: $('#comment-area').val(),
		replies: [],
		valid: true
	}

	db.ref().update(object)
	$(this).trigger('reset')
})
