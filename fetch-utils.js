const SUPABASE_URL = 'https://yyafrnrhvbvehifltlkl.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5YWZybnJodmJ2ZWhpZmx0bGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU5NDA2NDEsImV4cCI6MTk3MTUxNjY0MX0.xMaK7QxF8ut26HwnOeZONCj9728N9XXm0bIknwpAUtg';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCountries(name, continent) {

    // > Part D: Add a second argument to `select(` to 
    // return an exact db count of matching records


    let query = client.from('countries').select('*', { count: 'exact' }).order('name').limit(100);// ?

    if (name) {
        query = query.ilike('name', `%${name}%`);
    }
    
    if (continent) {
        query = query.eq('continent', continent);
    }
    const response = await query;
    return response;
}

export async function getContinents() {
    const response = await client.from('country_continents').select();
    return response;
}
