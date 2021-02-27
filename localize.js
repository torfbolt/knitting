function localize()
{
	let searchParams = new URLSearchParams(window.location.search);
	if (!searchParams.has('lang')) return;
	let lang = searchParams.get('lang');

	if (lang == 'de') {
		$('#document-title').html('Islandmuster');
		$('#th-repeat').html('Maschen pro Rapport');
		$('#th-number').html('Rapporte pro Runde');
		$('#th-stitches').html('Maschen pro Runde');
		$('#th-increase').html('Zunahme');
		$('#th-fraction').html('Verhältnis<br><small>Zunahmen / Maschen vorige Runde</small>');
		$('#th-rule').html('Zunahmeregel<br><small>Jeweils nach der angegebenen Maschenzahl eine Masche zunehmen</small>');
		$('#th-rule-rpt').html('Anzahl Regelwiederholungen');
		$('#l_sti_start').html('Anfangsmaschen:');
		$('#l_sti_end').html('Endmaschen:');
		$('#b_add_row').html('Zeile hinzufügen');
		$('#b_delete_row').html('Zeile löschen');
	}
}

