function onSwitchLanguage(language_selected) {
	console.log("onSwitchLanguage: " + language_selected)
	document.location = '/' + language_selected
}

function detectLanguage() {
	var l_lang = 'en'

	if (navigator.userLanguage) // Explorer
		l_lang = navigator.userLanguage
	else if (navigator.language) {
		l_lang = navigator.language

		l_lang = l_lang.toLowerCase().substr(0,2)
	}

	return l_lang
}

function language_redirect(l_lang) {
	if (l_lang.toLowerCase() == new String("de")) {
		document.location = "/de" + document.location.pathname
	} else {
		document.location = "/en" + document.location.pathname
	}
}
