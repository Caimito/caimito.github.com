---
layout: blog-de
title: Was Continuous Integration ist
tags: 
- de
- sns-de
- dev-advocate-de
---
## Softwareentwicklung ohne Verzögerungen

<p>{{ page.date | date: "%d.%m.%Y" }}, <em>Von Stephan Schwab</em></p>

<a href="/de/contact-sns.html"><img src="https://gravatar.com/avatar/663d11426b0a187ddac59f8c17ce61b4?s=120&d=robohash&r=x" class="avatar" /></a>
Continuous Integration (CI) ist eine Praxis, bei der Teammitglieder ihre Arbeit häufig in den Hauptcode integrieren, um sicherzustellen, dass sich das Softwareprodukt reibungslos und effizient weiterentwickelt. Dieser Artikel untersucht das Wesen von CI und betont die Bedeutung kleiner, häufiger Beiträge, das Vermeiden von Branching und die Nutzung lokaler und automatisierter Tests. Er geht auch auf häufige Missverständnisse ein, wie die Notwendigkeit eines zentralen CI-Servers, und hebt die Leistungsfähigkeit moderner PCs und Laptops bei der Umsetzung von CI-Praktiken hervor.

## Continuous Integration ist eine Praxis
Continuous Integration ist etwas, das ein Team tut. Es bedeutet, dass alle Beiträge in Form von Code oder anderen Artefakten von allen Teammitgliedern ständig in das Softwareprodukt integriert werden, während es immer mehr Funktionalität gewinnt. Es spielt keine Rolle, wie das Team dies tut. Es spielt keine Rolle, ob es einen Continuous Integration-Server oder ein anderes Tool mit "CI" im Namen gibt.

Sobald ein Teammitglied mit einem kleinen Beitrag fertig ist, wird dieser Beitrag integriert. *Klein* bedeutet etwas, das ein oder zwei Stunden gedauert hat. *Klein* ist nicht etwas, das länger als einen Tag oder sogar mehr dauert.

## Kein Branching
Da Software durch das Schreiben von Code erstellt wird und Code Text ist, benötigen wir ein Versionskontrollsystem, das es uns ermöglicht, Text von verschiedenen Autoren einfach zusammenzuführen. Um Continuous Integration zu praktizieren, benötigen wir **keine** Branches und noch weniger ein System, das gut und schnell im Branching ist. Tatsächlich wollen wir überhaupt keine Branches.

Branches bedeuten, dass das Softwaresystem mehrfach existiert und jede Version unterschiedlich ist. Das wollen wir nicht. Wir wollen nur die eine und einzige aktuelle Version des Systems.

Das heißt, es ist nichts falsch daran, einen **lokalen** Branch für ein Experiment hier und da zu erstellen. Aber beachte, dass du in dem Moment, in dem du einen Branch erstellst, effektiv aufgehört hast, Continuous Integration zu praktizieren. Du kannst deine **eigene** Arbeit **lokal** in einem Branch erledigen, wenn du dich dadurch sicherer fühlst oder unsicher bist, den Code aus diesem Branch zu verwenden. In dem Moment, in dem du die Ergebnisse deiner Arbeit teilen möchtest, integrierst du deinen neuen Code in die eine und einzige Hauptlinie.

## Lokale und automatisierte Tests
Wenn wir Continuous Integration praktizieren, wollen wir sicherstellen, dass wir das System mit unserem neuen Code nicht kaputt machen. Daher nutzen wir lokale und automatisierte Tests, um sicherzustellen, dass alles noch funktioniert, bevor wir unseren neuen Code teilen.

Wir holen die neueste Version des Systems aus der Versionskontrolle, integrieren dann unsere Arbeit und testen schließlich das Ganze.

Da es unmöglich ist, das gesamte System manuell zu testen, benötigen wir sinnvolle automatisierte Tests, die auch einigermaßen schnell laufen. Idealerweise möchten wir, dass das gesamte System in ein oder zwei Minuten getestet wird, aber definitiv in weniger als 10 Minuten. Dieser Prozess sollte ausreichen, um frisches Wasser oder Kaffee zu holen, aber nicht genug, um neue Arbeit zu beginnen oder durch eine andere Aktivität abgelenkt zu werden.

## Ist ein großer zentraler CI-Server erforderlich?
Im Jahr 2024 sind PCs oder Laptops so leistungsfähig, dass sie häufig die als Server verwendeten Maschinen übertreffen. Während Continuous Integration in der Vergangenheit mit einem zentralen CI-Server in Verbindung gebracht wurde, der spezielle Software zur Durchführung von Integrations-Builds ausführt, zum Beispiel Jenkins oder GitHub Actions und andere, ist dies nicht mehr erforderlich.

In keinem Fall solltest du ungetesteten Code in die Hauptlinie einbringen und dann möglicherweise den *Build kaputt machen*. Wenn du das tust, zerstörst du die eine gute Version des Systems, an der dein Team arbeitet, und das wäre nicht gut.

## Wir müssen Prüfungen durchführen, die von regulatorischen Vorschriften gefordert werden
Natürlich kannst du das. Aber das liegt außerhalb des Umfangs von Continuous Integration als Praxis. Der perfekte Weg, dies zu tun, besteht darin, diese Prüfungen einmal täglich auf einem dafür vorgesehenen Server auf dem vollständig integrierten und getesteten Code durchzuführen.