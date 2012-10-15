function createCookie(name,value,days) {
if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}

function onSwitchLanguage() {
	createCookie("lang", $("#languageSelector").val(), 1) ;
	document.location = "/" ;
}

function detectLanguage() {
	var l_lang;

	l_lang = readCookie("lang") ;
	if (l_lang == null) {
		if (navigator.userLanguage) // Explorer
		  l_lang = navigator.userLanguage;
		else if (navigator.language) // FF
		  l_lang = navigator.language;
		else
		  l_lang = "en";

		l_lang = l_lang.toLowerCase().substr(0,2)
	}

	return l_lang ;
}

function language_redirect(l_lang) {
	if (l_lang.toLowerCase() == new String("de")) {
		document.location = "/de" + document.location.pathname ;
	} else {
		document.location = "/en" + document.location.pathname ;
	}
}

function isEnglish() {
	return l_lang == new String("en") ;
}

function isGerman() {
	return l_lang == new String("de") ;
}
