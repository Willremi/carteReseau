survolCarte = false;

// $(document).ready(function() {
// 	$('#info-box').css('display','block');
// });

/* affichage région */
$("path").mouseenter(function(e) {
	survolCarte = true;
	if(!$('#info-box2').is(":visible")) {
	    $('#info-box').css('display','block');
	 	var idx = $(this).data('index');
		$('#info-box').html($("#"+ idx).html());
	}
});

$("path").mouseleave(function(e) {
 	$('#info-box').css('display','none');
});

$(window).click(function () {
	$('#info-box2').css('display','none');
});

$("rect.villes").click(function(e) {
	// calcul position souris puis position gauche droite panneau infos proportionnellement à taille fenêtre
	var x = e.pageX;
	var L = $(window).width();
	var l = $('#info-box2').width();
	var pos = x-((x*l)/L);
	$('#info-box2').css('left',pos);

	// Cacher panneau infos régions
	$('#info-box').css('display','none');
	// extraction données groupe et réinjection dans block panneau infos non visible car display == none
 	var idx2 = $(this).data('groupe');
	$('#info-box2').html($("#"+ idx2).html());
	// calcul demi hauteur page pour savoir si on est plutôt en haut ou plutôt en bas de la page
	if(e.pageY > ($(window).height())/2) {
		//si en bas positionner panneau au-dessus - position souris - hauteur panneau - 30 pixels = espace
		$('#info-box2').css('top',e.pageY-$('#info-box2').height()-70);
	}
	else
	{
		//si en haut positionner panneau au-dessous - position souris + 10 pixels = espace
		$('#info-box2').css('top',e.pageY+40);
	}
	// afficher le panneau
	$("#info-box2").css('display','block');
	
//	$('#infos').text('dedans');
    event.stopPropagation();
});

$("path").click(function(e) {
	if(($('#info-box2').css('display'))=='block') {
		$('#info-box2').fadeOut(500);
		$("#info-box2").css('display','none');
	    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
	    $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
	 	var idx = $(this).data('index');
		$('#info-box').html($("#"+ idx).html());
		$('#info-box').css('display','block');
	}
});

$(document).mousemove(function(e) {
	if (survolCarte) {
	$('#info-box').css('top',e.pageY-$('#info-box').height()-50);
	$('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}
});
