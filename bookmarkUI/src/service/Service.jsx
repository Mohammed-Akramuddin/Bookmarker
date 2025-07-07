export async function fetchBookmarks(page = 1) {
    try {
        const response = await fetch(`http://localhost:8081/api/bookmark/?page=${page}`);
        const result = await response.json();

        return { data: result, error: null }; // ✅ keep full payload
    } catch (err) {
        return { data: null, error: err.message };
    }
}
