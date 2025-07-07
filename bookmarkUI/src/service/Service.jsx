// src/service/Service.jsx
export async function fetchBookmarks(page = 1, query = '') {
    try {
        const response = await fetch(`http://localhost:8081/api/bookmark/?page=${page}&query=${encodeURIComponent(query)}`);
        const result = await response.json();
        return { data: result, error: null };
    } catch (err) {
        return { data: null, error: err.message };
    }
}
