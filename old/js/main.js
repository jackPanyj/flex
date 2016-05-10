$('.app-footer > a').each(function  () {
	var page = document.location.pathname.split('/').pop();
	if(page == $(this).attr('href')){
		$(this).addClass('active');
	}
})

$('.siderbar > a').each(function  () {
	var page = document.location.pathname.split('/').pop();
	if(page == $(this).attr('href')){
		$(this).addClass('active');
	}
})
