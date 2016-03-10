#!/bin/bash

# Ici on met l'endroit que nous voulons modifier dans le pom.xml
prec="<processor>.*<\/processor>"

# Emplacement du fichier pom
pom_path="."

# Emplacement de l'html
html_path="$pom_path\Site\report_site"

report_final="$pom_path\Site\report_site\report.js"

path_to_classes="$pom_path\src\main\java"

path_to_mutants="$pom_path\src\main\java"

tabchar="	"

# variable
actual_class=""


> $report_final
echo "var report = '<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>
<mutations>" > $report_final 

while IFS='' read -r line || [[ -n "$line" ]]; do
	
	if [[ $line == *"name"* ]]
	then
		line=`echo "$line" | sed -e "s|$tabchar||g" -e "s| ||g" -e "s|\".*: *\"||g" -e "s|\",||g"`;
		echo "$line";
	
		sed -i -e "s/$prec/<processor>fr.unice.polytech.doct13.processors.$line<\/processor>/g" "$pom_path\pom.xml"
		#je lance les tests
		#mvn test -f "$pom_path"

		testresult=`grep '<.*>' target/html-report/report.xml | sed -e "s/<?xml.*<mutation name=\"\">/<mutation name=\"$line\">/"`

	fi

	if [[ $line == *className* ]]
	then

		class_name=`echo "$line" | sed -e "s|$tabchar||g" -e "s| ||g" -e "s|\".*: *\"||g" -e "s|\",||g"`;

		##old_code=`cat $path_to_classes/$class_name.java`
		##old_code="<codeOriginal>$old_code</codeOriginal>"

		##testresult1=`echo "$testresult" | sed "s/<method name=/<codeOriginal><\/codeOriginal><codeMutant><\/codeMutant><codeTest><\/codeTest><method name=/1"`
		##testresult1=`echo "$testresult1" | sed "s/<\/codeOriginal>.*//1"`
		##testresult2=`echo "$testresult" | sed "s/.*<codeOriginal>//1"`

		#echo "$testresult1" >> $report_final
		#echo "$old_code" >> $report_final
		#echo "$testresult2" >> $report_final

		echo "$testresult" >> $report_final

	fi

done < "$1"

sed -i -e "s/$/\\\/g" -e "s/<\/mutations>'\\\/<\/mutations>/" $report_final

echo "</mutations>';" >> $report_final



#"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "$html_path\index.html"