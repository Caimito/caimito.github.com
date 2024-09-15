---
layout: blog-de
title: Flußdiagramm als Werkzeug zur Sichtbarmachung der Arbeit des Managements
tags: 
- de
- sns-de
- org-cap-de
---
## Wie Management die Wirkung der eigenen Maßnahmen überprüfen kann

<p>{{ page.date | date: "%d.%m.%Y" }}, <em>Von Stephan Schwab</em></p>

<p><a href="/de/contact-sns.html"><img src="http://www.gravatar.com/avatar/663d11426b0a187ddac59f8c17ce61b4.png" class="avatar"/></a></p>

Wenn immer man irgendeine Tätigkeit ausübt möchte man wissen ob man Erfolg erzielt. Wenn die Tätigkeit Auswirkungen auf andere Menschen hat, so wäre es sogar besonders hilfreich sehen zu können, ob die Auswirkungen positiv oder negativ sind. Im Zweifelsfall werden die Betroffenen bei negativen Auswirkungen sich schon melden - sie könnten sich z.B. dem Einflußbereich der von einem ausgeübten Tätigkeit entziehen - doch nicht immer sind die Wirkungen unmittelbar schwerwiegend genug, um diesen, gewissermaßen letzten, Schritt gehen zu wollen. Oft sind die Wirkungen schleichender Natur. Man stellt erst nach langer Zeit fest, daß sich da etwas verändert hat - halt dann, wenn es wirklich nicht mehr zu übersehen ist.

Wäre es nicht gut eine Methode zu haben, die unmittelbar Wirkungen aufzeigt?

Solch eine Methode existiert. 

Durch fortlaufende Messungen der sich im Fluß befindlichen Arbeit und Darstellung in einem Diagramm aus überlagerten Flächen kann man ablesen welche Wirkungen die gestalterische Arbeit des Managements - oder auch Entscheidungen innerhalb eines Teams oder einer Arbeitsgruppe - hat. Hier ein Beispiel:

<figure>
  <img src="/de/img/cfd-comments.png" alt="Cumulative Flow Diagram" />
  <figcaption>Cumulative Flow Diagram</figcaption>
</figure>

__Was wird gemessen und was nicht__

Um es gleich vorweg klarzustellen. Nichts von alledem hier hat etwas mit irgendeiner Überwachung der Mitarbeiter oder gar der Messung von Arbeitszeiten zu tun. Insbesondere interessiert überhaupt nicht wieviele Stunden irgendwelche Arbeitsschritte dauern.

Vielmehr interessiert uns ausschließlich welche Menge Arbeit an einem jeden Tag gerade im Fluß war. Wichtig! Es geht um die Menge und nicht darum wie lange ein bestimmter Mitarbeiter an irgendetwas gerade gearbeitet hat.

Im Diagramm kann man dann für jeden Tag sehen welche Menge Arbeit gerade in den einzelnen Arbeitsschritten oder Stationen gerade im Fluß war. Im Falle von Softwareentwicklung kann man z.B. messen wieviele Aufgaben sich gerade in Konzeption, Programmierung, Test oder Absprache mit dem Kunden befinden. Je nachdem wie der Gesamtablauf gestaltet ist kann es durchaus eine Vielzahl solcher Schritte geben.

__Wie man das Diagramm liest__

Zunächst einmal kann man durch die Form der Flächen im Diagramm erkennen ob die Arbeit gut oder schlecht läuft. Je zackiger die Flächen aussehen, desto schlechter läuft es. Weil da irgendwas blockiert. Man kann auch sehen wie lange die Auflösung der Blockage gedauert hat. Auch ist offensichtlich welche Wirkung eine solche Blockage auf andere Arbeitsschritte hatte.

Markiert man dann im Diagramm wichtige Ereignisse, so kann man Rückschlüsse auf die Wirkung des Ereignisses ziehen.

Im Beispiel ist z.B. durch einen Pfeil in die grüne Fläche hinein markiert, daß an diesem Tag ein Weg zu besserer Vorbereitung gefunden wurde. In der Folge ist dann die grüne Fläche weniger breit und verläuft gleichmäßiger als vor dem Ereignis.

Die gelbliche Fläche hat zwei Markierungen, die anzeigen, daß an diesen Tagen Sitzungen zur Abstimmung stattfanden. Das ist jeweils der Zeitpunkt, an dem der sich aufbauende Berg an Arbeit verschwindet.

Die rote Fläche repräsentiert Fehlerbehebung. Die Markierung weist auf den Rücklauf aus einem Test von Version 9.2 hin. Damit ist dokumentiert, daß hier eine Behinderung entstanden ist. In der Folge muß nun damit umgegangen werden. Werden dann Maßnahmen zur Vermeidung von Defekten getroffen, so ist es dann möglich zu belegen, daß diese Maßnahmen - hoffentlich - die gewünschte Wirkung entfaltet haben. Einfach dadurch, daß in der Folge die rote Fläche nicht mehr so wächst, sondern eher gleichmäßig klein bleibt.

__Wie man so eine Messung beginnt__

Wenn immer man etwas messen möchte, benötigt man Meßstationen und Sensoren/Fühler. Man kann das sehr einfach und kostengünstig mit ein paar Haftnotizen an einer Wand machen oder auch Technik dafür einsetzen. 

Die folgenden Sätze beziehen sich auf die einfache Version mit Haftnotizen an der Wand. Grundsätzlich bildet man den existierenden Arbeitsablauf einfach mittels eines [_kanban boards_](/de/kbase/kanban.html) ab. Die Spalten entsprechen den einzelnen Arbeitsschritten. Haftnotizen in den Spalten stellen die Vorgänge dar, welche in den einzelnen Arbeitsschritten bearbeitet werden.

Jeden Tag zählt man immer zur gleichen Zeit wieviele Haftnotizen/Vorgänge sind in den jeweiligen Spalten befinden und aus diesen Daten entsteht dann das Flächendiagramm.

Da man durch das Messen und Sichtbarmachen der Abläufe meist auch Ideen zur Verbesserung der Abläufe bekommt, ist es sinnvoll Haftnotizen an der Wand zu benutzen. Im Gegensatz zu einem elektronischen Werkzeug kann man an der Wand jederzeit alles ändern ohne jemanden dazu beauftragen zu müssen. Dafür hat man aber jeden Tag mehr Arbeit für das Zählen und Pflegen des Diagrammes. Das mag auf den ersten Blick negativ erscheinen, aber es sollte nicht vergessen werden, daß die Beschäftigung mit den Daten oft erst zu den richtigen Erkenntnissen führt.

__Es gibt noch mehr Erkenntnisse__

Aus dem Flächendiagramm und dem [_kanban board_](/de/kbase/kanban.html) kann man noch viel mehr Informationen gewinnen. Das aber sprengt den Rahmen dieses kurzen Artikels. Vielleicht sprechen wir einfach mal darüber?
