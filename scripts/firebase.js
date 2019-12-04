const db = firebase.database();

$("#comments-form").submit(function (event) {
    const data = $(this).serializeArray()

    const userName = data[0][1]
    const userComment = data[1][1]

    $(this).trigger('reset')

    event.preventDefault();
})