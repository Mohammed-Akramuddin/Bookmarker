import { useEffect, useState } from 'react';
import Bookmark from "./Bookmark.jsx";
import Header from './components/Header.jsx';
import { fetchBookmarks } from './service/Service.jsx';

function App() {
    const [bookmarks, setBookmarks] = useState([]);
    const [pagination, setPagination] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const loadBookmarks = async (page = 1) => {
        setLoading(true);
        const { data, error } = await fetchBookmarks(page);
        if (data) {
            setBookmarks(data.bookmarks || []);
            setPagination({
                totalPages: data.totalPages,
                currentPage: data.currentPage,
                hasNext: data.hasNext,
                hasPrevious: data.hasPrevious,
                first: data.first,
                last: data.last
            });
            setError('');
        } else {
            setError(error || 'Failed to fetch bookmarks');
        }
        setLoading(false);
    };

    useEffect(() => {
        loadBookmarks(currentPage);
    }, [currentPage]);

    const goToFirst = () => !pagination.first && setCurrentPage(1);
    const goToLast = () => !pagination.last && setCurrentPage(pagination.totalPages);
    const goToNext = () => pagination.hasNext && setCurrentPage(currentPage + 1);
    const goToPrevious = () => pagination.hasPrevious && setCurrentPage(currentPage - 1);

    return (
        <div className="min-vh-100" style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)'
        }}>
            <Header />

            {loading && (
                <div className="container-fluid py-5">
                    <div className="text-center">
                        <div className="spinner-border text-info mb-3" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="text-light fs-5">⏳ Loading bookmarks...</p>
                    </div>
                </div>
            )}

            {error && (
                <div className="container-fluid py-5">
                    <div className="alert alert-danger text-center mx-auto" style={{ maxWidth: '600px' }}>
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        {error}
                    </div>
                </div>
            )}

            {!loading && !error && <Bookmark bookmarks={bookmarks} />}

            {!loading && !error && (
                <div className="container-fluid pb-5">
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            {/* Pagination Buttons */}
                            <div className="d-flex justify-content-center gap-2 mb-4">
                                <button
                                    onClick={goToFirst}
                                    disabled={pagination.first}
                                    className="btn btn-outline-light position-relative overflow-hidden"
                                    style={{
                                        background: pagination.first ? 'rgba(108, 117, 125, 0.3)' : 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                                        border: 'none',
                                        borderRadius: '12px',
                                        padding: '12px 20px',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease',
                                        backdropFilter: 'blur(10px)',
                                        cursor: pagination.first ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    <span className="position-relative">⏮ First</span>
                                </button>

                                <button
                                    onClick={goToPrevious}
                                    disabled={!pagination.hasPrevious}
                                    className="btn btn-outline-light position-relative overflow-hidden"
                                    style={{
                                        background: !pagination.hasPrevious ? 'rgba(108, 117, 125, 0.3)' : 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                                        border: 'none',
                                        borderRadius: '12px',
                                        padding: '12px 20px',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease',
                                        backdropFilter: 'blur(10px)',
                                        cursor: !pagination.hasPrevious ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    <span className="position-relative">◀ Prev</span>
                                </button>

                                <button
                                    onClick={goToNext}
                                    disabled={!pagination.hasNext}
                                    className="btn btn-outline-light position-relative overflow-hidden"
                                    style={{
                                        background: !pagination.hasNext ? 'rgba(108, 117, 125, 0.3)' : 'linear-gradient(135deg, #ec4899, #f59e0b)',
                                        border: 'none',
                                        borderRadius: '12px',
                                        padding: '12px 20px',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease',
                                        backdropFilter: 'blur(10px)',
                                        cursor: !pagination.hasNext ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    <span className="position-relative">Next ▶</span>
                                </button>

                                <button
                                    onClick={goToLast}
                                    disabled={pagination.last}
                                    className="btn btn-outline-light position-relative overflow-hidden"
                                    style={{
                                        background: pagination.last ? 'rgba(108, 117, 125, 0.3)' : 'linear-gradient(135deg, #f59e0b, #06b6d4)',
                                        border: 'none',
                                        borderRadius: '12px',
                                        padding: '12px 20px',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease',
                                        backdropFilter: 'blur(10px)',
                                        cursor: pagination.last ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    <span className="position-relative">Last ⏭</span>
                                </button>
                            </div>

                            {/* Page Info */}
                            <div className="text-center">
                                <div className="d-inline-flex align-items-center bg-dark bg-opacity-50 border border-secondary border-opacity-50 rounded-pill px-4 py-2" style={{
                                    backdropFilter: 'blur(10px)'
                                }}>
                                    <span className="text-light fw-medium">
                                        Page <span className="text-info fw-bold">{pagination.currentPage}</span> of <span className="text-info fw-bold">{pagination.totalPages}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Styles for Button Hover Effects */}
            <style jsx>{`
                .btn:not(:disabled):hover {
                    transform: translateY(-2px) !important;
                    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4) !important;
                }
                
                .btn:not(:disabled):active {
                    transform: translateY(0) !important;
                }
                
                .btn:disabled {
                    opacity: 0.5 !important;
                }
            `}</style>
        </div>
    );
}

export default App;