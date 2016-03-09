#!/bin/bash

# Ici on met l'endroit que nous voulons modifier dans le pom.xml
prec="<processor>.*<\/processor>"

# Emplacement du fichier pom
pom_path="."

# Emplacement de l'html
html_path="$pom_path\target\html-report"


report_final="report.js"

$report_final < '<?xml version="1.0" encoding="UTF-8" standalone="no"?><mutations>'

while IFS='' read -r line || [[ -n "$line" ]]; do
	sed -i -e "s/$prec/<processor>fr.unice.polytech.doct13.processors.binary.$line<\/processor>/g" "$pom_path\pom.xml"
	#je lance les tests
	mvn test -f "$pom_path"

	"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "$html_path\htmlReport.html"
done < "$1"

$report_final << '</mutations>'