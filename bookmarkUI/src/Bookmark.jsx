import React from 'react';
import { ExternalLink, Calendar, Bookmark as BookmarkIcon, Sparkles, Star, Zap, Globe, Link2 } from 'lucide-react';

function Bookmark({ bookmarks }) {
    if (!bookmarks) {
        return (
            <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center p-4">
                <div className="position-relative">
                    <div className="position-absolute top-0 start-0 w-100 h-100 rounded-3" style={{
                        background: 'linear-gradient(45deg, rgba(220, 38, 127, 0.3), rgba(251, 146, 60, 0.3))',
                        filter: 'blur(10px)',
                        transform: 'scale(1.1)',
                        zIndex: 0
                    }}></div>
                    <div className="position-relative bg-dark bg-opacity-75 border border-secondary border-opacity-50 rounded-3 p-5 text-center" style={{
                        backdropFilter: 'blur(10px)',
                        zIndex: 1
                    }}>
                        <div className="d-flex flex-column align-items-center">
                            <div className="position-relative mb-3">
                                <Globe size={64} className="text-danger" />
                                <Sparkles size={24} className="text-warning position-absolute" style={{
                                    top: '-8px',
                                    right: '-8px',
                                    animation: 'pulse 2s infinite'
                                }} />
                            </div>
                            <h3 className="text-white fw-bold fs-2 mb-3">No Data Passed In</h3>
                            <p className="text-light opacity-75 mb-0" style={{ maxWidth: '300px' }}>
                                No bookmark data was provided to display. Please check your data source.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (bookmarks.length === 0) {
        return (
            <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center p-4">
                <div className="position-relative">
                    <div className="position-absolute top-0 start-0 w-100 h-100 rounded-3" style={{
                        background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3))',
                        filter: 'blur(10px)',
                        transform: 'scale(1.1)',
                        zIndex: 0
                    }}></div>
                    <div className="position-relative bg-dark bg-opacity-75 border border-secondary border-opacity-50 rounded-3 p-5 text-center" style={{
                        backdropFilter: 'blur(10px)',
                        zIndex: 1
                    }}>
                        <div className="d-flex flex-column align-items-center">
                            <div className="position-relative mb-3">
                                <BookmarkIcon size={64} className="text-primary" />
                                <Sparkles size={24} className="text-info position-absolute" style={{
                                    top: '-8px',
                                    right: '-8px',
                                    animation: 'pulse 2s infinite'
                                }} />
                            </div>
                            <h3 className="text-white fw-bold fs-2 mb-3">No Bookmarks Found</h3>
                            <p className="text-light opacity-75 mb-0" style={{ maxWidth: '300px' }}>
                                Your bookmark collection is empty. Start saving your favorite links to see them here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid p-0">
            {/* Enhanced Header Section */}
            <div className="text-center py-5 position-relative">
                {/* Background Glow Effect */}
                <div className="position-absolute top-50 start-50 translate-middle" style={{
                    width: '400px',
                    height: '120px',
                    background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2), rgba(6, 182, 212, 0.2))',
                    filter: 'blur(60px)',
                    borderRadius: '50%',
                    zIndex: 0
                }}></div>

                {/* Floating Icons */}
                <div className="position-absolute" style={{
                    top: '20px',
                    left: '25%',
                    animation: 'bounce 2s infinite',
                    animationDelay: '0.5s'
                }}>
                    <Star size={24} className="text-warning opacity-75" />
                </div>
                <div className="position-absolute" style={{
                    top: '50px',
                    right: '25%',
                    animation: 'bounce 2s infinite',
                    animationDelay: '1s'
                }}>
                    <Zap size={20} className="text-info opacity-75" />
                </div>
                <div className="position-absolute" style={{
                    top: '5px',
                    left: '33%',
                    animation: 'pulse 2s infinite'
                }}>
                    <Sparkles size={16} className="text-danger opacity-75" />
                </div>

                <div className="position-relative" style={{ zIndex: 1 }}>
                    {/* Main Title */}
                    <div className="position-relative d-inline-block mb-4">
                        <h2 className="display-1 fw-black mb-0" style={{
                            background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontSize: 'clamp(3rem, 8vw, 6rem)',
                            textShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
                        }}>
                            ✨ Bookmarked Titles
                        </h2>
                        {/* Animated Underline */}
                        <div className="position-absolute start-50 translate-middle-x" style={{
                            bottom: '-12px',
                            width: '120px',
                            height: '6px',
                            background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899)',
                            borderRadius: '3px',
                            animation: 'pulse 2s infinite'
                        }}></div>
                        {/* Secondary Underline */}
                        <div className="position-absolute start-50 translate-middle-x" style={{
                            bottom: '-4px',
                            width: '180px',
                            height: '2px',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                            borderRadius: '1px'
                        }}></div>
                    </div>

                    {/* Subtitle */}
                    <div className="position-relative">
                        <p className="text-light fs-4 mx-auto fw-medium lh-base" style={{ maxWidth: '600px' }}>
                            Your <span style={{
                            background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: 'bold'
                        }}>curated collection</span> of saved links and resources
                        </p>
                        {/* Decorative Elements */}
                        <div className="d-flex justify-content-center mt-3">
                            <div className="rounded-circle bg-info me-2" style={{
                                width: '8px',
                                height: '8px',
                                animation: 'pulse 2s infinite'
                            }}></div>
                            <div className="rounded-circle bg-primary me-2" style={{
                                width: '8px',
                                height: '8px',
                                animation: 'pulse 2s infinite',
                                animationDelay: '0.2s'
                            }}></div>
                            <div className="rounded-circle bg-danger" style={{
                                width: '8px',
                                height: '8px',
                                animation: 'pulse 2s infinite',
                                animationDelay: '0.4s'
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Bookmarks List */}
            <div className="container-fluid px-4">
                <div className="row g-3">
                    {bookmarks.map((bookmark, index) => (
                        <div key={bookmark.id} className="col-12" style={{
                            animationDelay: `${index * 0.1}s`,
                            animation: 'fadeInUp 0.6s ease-out forwards',
                            opacity: 0
                        }}>
                            <div className="position-relative bookmark-card">
                                {/* Enhanced Glow Effect */}
                                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-3 glow-effect" style={{
                                    background: 'linear-gradient(45deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))',
                                    filter: 'blur(8px)',
                                    opacity: 0,
                                    transition: 'opacity 0.5s ease',
                                    zIndex: 0
                                }}></div>

                                {/* List Item Card */}
                                <div className="position-relative bg-dark bg-opacity-75 border border-secondary border-opacity-50 rounded-3 p-4 h-100" style={{
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.5s ease',
                                    zIndex: 1
                                }}>
                                    <div className="d-flex align-items-center">
                                        {/* Icon Section */}
                                        <div className="d-flex align-items-center me-4">
                                            <div className="rounded-3 d-flex align-items-center justify-content-center me-3 shadow" style={{
                                                width: '48px',
                                                height: '48px',
                                                background: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)',
                                                transition: 'box-shadow 0.3s ease'
                                            }}>
                                                <Link2 size={24} className="text-white" />
                                            </div>
                                            <div className="rounded-circle bg-success shadow" style={{
                                                width: '12px',
                                                height: '12px',
                                                animation: 'pulse 2s infinite',
                                                boxShadow: '0 0 10px rgba(25, 135, 84, 0.5)'
                                            }}></div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex-grow-1 min-width-0">
                                            <a
                                                href={bookmark.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-decoration-none d-block"
                                                style={{ transition: 'color 0.3s ease' }}
                                            >
                                                <h3 className="text-white fs-5 fw-semibold mb-2 text-truncate bookmark-title">
                                                    {bookmark.title}
                                                </h3>

                                                {/* URL Preview */}
                                                <div className="d-flex align-items-center text-muted small">
                                                    <Globe size={16} className="text-info me-2" />
                                                    <span className="text-truncate">{bookmark.url}</span>
                                                </div>
                                            </a>
                                        </div>

                                        {/* Action Section */}
                                        <div className="d-flex align-items-center ms-3">
                                            {bookmark.createdAt && (
                                                <div className="d-flex align-items-center bg-dark bg-opacity-50 rounded-pill px-3 py-1 me-3">
                                                    <Calendar size={16} className="text-primary me-1" />
                                                    <span className="text-light small">{new Date(bookmark.createdAt).toLocaleDateString()}</span>
                                                </div>
                                            )}
                                            <ExternalLink size={20} className="text-muted external-link-icon" style={{
                                                transition: 'color 0.3s ease'
                                            }} />
                                        </div>
                                    </div>

                                    {/* Corner Accent */}
                                    <div className="position-absolute rounded-circle corner-accent" style={{
                                        top: '16px',
                                        right: '16px',
                                        width: '12px',
                                        height: '12px',
                                        background: 'linear-gradient(135deg, #06b6d4, #ec4899)',
                                        opacity: 0,
                                        transition: 'opacity 0.5s ease',
                                        boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
                                    }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enhanced Footer Stats */}
            <div className="text-center py-5">
                <div className="d-inline-flex align-items-center bg-dark bg-opacity-50 border border-secondary border-opacity-50 rounded-pill px-4 py-3 shadow-lg" style={{
                    backdropFilter: 'blur(10px)'
                }}>
                    <Sparkles size={24} className="text-info me-3" style={{
                        animation: 'pulse 2s infinite'
                    }} />
                    <span className="text-light fw-semibold fs-5">
                        {bookmarks.length} bookmark{bookmarks.length !== 1 ? 's' : ''} saved
                    </span>
                    <div className="rounded-circle ms-3" style={{
                        width: '8px',
                        height: '8px',
                        background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                        animation: 'pulse 2s infinite'
                    }}></div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes bounce {
                    0%, 20%, 53%, 80%, 100% {
                        transform: translate3d(0,0,0);
                    }
                    40%, 43% {
                        transform: translate3d(0, -15px, 0);
                    }
                    70% {
                        transform: translate3d(0, -7px, 0);
                    }
                    90% {
                        transform: translate3d(0, -2px, 0);
                    }
                }

                .bookmark-card:hover .glow-effect {
                    opacity: 1 !important;
                }

                .bookmark-card:hover {
                    transform: scale(1.02);
                }

                .bookmark-card:hover .bookmark-title {
                    color: #06b6d4 !important;
                    text-decoration: underline;
                    text-decoration-color: #06b6d4;
                    text-decoration-thickness: 2px;
                    text-underline-offset: 4px;
                }

                .bookmark-card:hover .external-link-icon {
                    color: #06b6d4 !important;
                }

                .bookmark-card:hover .corner-accent {
                    opacity: 1 !important;
                }

                .min-width-0 {
                    min-width: 0;
                }
            `}</style>
        </div>
    );
}

export default Bookmark;