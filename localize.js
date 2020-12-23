function localize()
{
	let searchParams = new URLSearchParams(window.location.search);
	if (!searchParams.has('lang')) return;
	let lang = searchParams.get('lang');

	if (lang == 'de') {
		$('#document-title').html('Islandmuster');
		$('#th-repeat').html('Rapport');
		$('#th-number').html('Anzahl');
		$('#th-stitches').html('Maschen');
		$('#th-increase').html('Zunahme');
		$('#th-fraction').html('Bruch');
		$('#th-rule').html('Regel');
		$('#l_sti_start').html('Anfangsmaschen:');
		$('#l_sti_end').html('Endmaschen:');
		$('#b_add_row').html('Zeile hinzufügen');
		$('#b_delete_row').html('Zeile löschen');
	}
}

