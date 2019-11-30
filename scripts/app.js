$(document).ready(function () {
	$("li:first").click()
})

$('#download-button').click(function () {
	window.open("http://pokoxemo.blogspot.com/2014/02/descarga-wifislax-os-varias-versiones.html")
})

$('#forum-button').click(function () {
	window.open("https://foro.seguridadwireless.net/live-wifislax/")
})

$('#page-button').click(function () {
	window.open("https://www.wifislax.com/") 
})

$('#menu li').click(function () {
	$('.active').removeClass('active')
	$(this).addClass('active')

	let index = parseInt($(this).attr('value'))
	$("#content").load(['start', 'about', 'instalation'][index] + ".html")
})
