---
layout: blog-de
title: User Stories sind keine abzuarbeitenden Aufgaben
tags: 
- de
- sns-de
- tech-cap-de
- acd-de
- atdd-de
---
# User Stories sind keine abzuarbeitenden Aufgaben
## Wie man zu sinnvollen User Stories durch besseres Verständnis der Anwendertätigkeit kommt

<p>{{ page.date | date: "%d.%m.%Y" }}, <em>Von Stephan Schwab</em></p>

<p><a href="/de/contact-sns.html"><img src="http://www.gravatar.com/avatar/663d11426b0a187ddac59f8c17ce61b4.png" align="left" style="margin-right: 15px"/></a></p>

Sehr oft erlebe ich, daß Teams "user stories" aufgrund einer Lösungsbeschreibung, die von jemandem außerhalb des Teams erstellt wurde, schreiben. Solche "user stories" beschreiben was zu programmieren ist. Es ist dabei relativ egal, ob diese dann in der Form "Als ... möchte ich ... so daß ..." oder als "XY-Bericht als PDF anzeigen" daherkommen. Auch schon sehr häufig gesehen habe ich die Variante einer "user story", die als ein mehrseitiges Dokument mit Vorgaben zu den Bedienelementen einschließlich RGB-Farbkodierung daherkam.

Hier ein weniger schlimmes Beispiel. Es ist schon sehr nah an einer wirklichen "user story", aber dennoch ist es problematisch:

> Als Verkaufsleiter möchte ich den Verkaufbericht als PDF-Datei in einer eMail erhalten

Damit wird das Team angewiesen einen PDF-Bericht zu programmieren und diesen per eMail zu verschicken. Da gibt es nichts zu hinterfragen. Da gibt es keine Möglichkeit eine pfiffige Lösung zu entwickeln. Einfach machen und fertig. Eine Einladung zu einem Gespräch ist das nicht.

### Card, Conversation, Collaboration

"user stories" kommen aus der XP-Bewegung. In _eXtreme Programming_ schreibt man eine "user story" auf eine Indexkarte (card) und wenn dann die Zeit für deren Implementierung gekommen ist, sucht man das Gespräch (conversation) mit dem Auftraggeber. Dann arbeitet man zusammen (collaboration), um eine für den Auftraggeber hilfreiche, sinnvolle und nicht zu aufwändige Lösung zu finden und zu liefern.

Enthält die "user story" bereits Details der Lösung (PDF-Datei per eMail), so wird dem Entwicklungsteam die Möglichkeit genommen überhaupt Entwicklung mit dem Auftraggeber zu betreiben. Damit wird das Team dann einfach nur zur Ausführung beliebiger Anweisungen genutzt. Eine Problemanalyse findet nicht statt - jedenfalls nicht mit dem Team.

Besonders häufig geschieht dieser Fehler, wenn zwischen Auftraggeber und Team Personen sitzen, die vermitteln. Diese Vermittler machen dann ganz allein eine Art Analyse, doch tatsächlich schreiben diese nur ihre Ansicht, die ihren eigenen mentalen Modellen entspricht, als Anforderungen des Auftraggebers auf. Im schlimmsten Fall definiert dann eine einzelne Person, die das Ergebnis nie benutzen wird, was die eigentlichen Anwender benötigen.

### Das zu lösende Problem beschreiben

"user stories" sollen Problemstellungen beschreiben. Anwender erzählen was sie gern machen möchten, damit sie etwas Bestimmtes erreichen können. Hier ein Beispiel:

> Als Verkaufsleiter möchte ich einen monatlichen Verkaufsbericht erhalten, so daß ich diesen an den Vorstand kommentiert weiterleiten kann.

Diese "user story" beschreibt ein Problem ohne die Lösung vorzugeben. Das Team kann nun kreativ sein und eigenständig eine sinnvolle Lösung erarbeiten. So wird der Verkaufsleiter vermutlich ungern den Bericht jeden Monat manuell abrufen wollen. Also wäre wohl zuschicken per eMail ein Gedanke. Vielleicht als PDF? Dann könnte er den Bericht weiterleiten und in seiner eMail die Kommentare, von denen er sprach, abgeben.

### Herausfinden was die Leute mit der Software machen wollen

Doch wie kommt man nun zu einer "user story", die tatsächlich beschreibt, was die Leute mit der Software machen wollen? Eine "user story", die auch kommuniziert warum, für welchen Zweck sie eine Tätigkeit ausführen wollen.

Eine bisher noch relativ unbekannte Technik dafür ist [Activity-Centered Design](/de/acd.html). Dieser Artikel im Notizblog bietet nicht genügend Raum, um darzustellen wie Activity-Centered Design hilft besser zu verstehen was Anwender mit Software machen wollen. Ich möchte daher auf das kostenlos abrufbare [Beispielkapitel](http://samples.leanpub.com/activitycentereddesign-sample.pdf) meines Buches zum Thema verweisen.
