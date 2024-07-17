var app = document.getElementById('app');
const sbUrl = 'https://bmscnawpcmlehsltvfel.supabase.co';
const sbKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtc2NuYXdwY21sZWhzbHR2ZmVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1Njg0NTMsImV4cCI6MjAzMzE0NDQ1M30.NaczLVyS-COC8g8Zb7oJWPGHeNdOdJHpI3uRbnGbkh0';
const { createClient } = supabase;
const db = createClient(sbUrl, sbKey);
getData();

async function getData() {
	try {
		const { data, error } = await db.from('data').select('data').eq('id_hadir', 'HD1002406801').limit(1);

		if (data.length) {
			app.innerHTML=data[0].data;
		} else {
			app.innerHTML='Sedang maintenance..';
		}
	} catch (error) {
		app.innerHTML='Maaf sedang maintenance..';
	}
}