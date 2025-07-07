import { useState } from 'react';
import { Plus, Link, Type, AlertCircle } from 'lucide-react';
import Header from "./components/Header.jsx";

function AddBookmark() {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!title || !url) {
            setError('Both fields are required.');
            setIsLoading(false);
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Here you would make your actual API call
            // const response = await axios.post('http://localhost:8081/api/bookmark/add', {
            //     title,
            //     url
            // });

            console.log('Adding bookmark:', { title, url });
            setTitle('');
            setUrl('');
            setError('');
            // navigate('/'); // Redirect to home
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Something went wrong.');
        } finally {
            setIsLoading(false);
        }
    };

    const futuristicStyles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
            position: 'relative',
            overflow: 'hidden',
            color: 'white'
        },
        animatedOrb1: {
            position: 'absolute',
            top: '25%',
            left: '25%',
            width: '384px',
            height: '384px',
            background: '#06b6d4',
            borderRadius: '50%',
            filter: 'blur(60px)',
            mixBlendMode: 'multiply',
            opacity: 0.2,
            animation: 'pulse 3s ease-in-out infinite'
        },
        animatedOrb2: {
            position: 'absolute',
            top: '75%',
            right: '25%',
            width: '384px',
            height: '384px',
            background: '#8b5cf6',
            borderRadius: '50%',
            filter: 'blur(60px)',
            mixBlendMode: 'multiply',
            opacity: 0.2,
            animation: 'pulse 3s ease-in-out infinite 1s'
        },
        animatedOrb3: {
            position: 'absolute',
            bottom: '25%',
            left: '50%',
            width: '384px',
            height: '384px',
            background: '#ec4899',
            borderRadius: '50%',
            filter: 'blur(60px)',
            mixBlendMode: 'multiply',
            opacity: 0.2,
            animation: 'pulse 3s ease-in-out infinite 2s'
        },
        gridOverlay: {
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: `
                linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
        },
        formContainer: {
            position: 'relative',
            zIndex: 10
        },
        glowEffect: {
            position: 'absolute',
            inset: '-1px',
            background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)',
            borderRadius: '12px',
            filter: 'blur(1px)',
            opacity: 0.75,
            transition: 'opacity 1s'
        },
        formCard: {
            position: 'relative',
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(71, 85, 105, 0.5)',
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
        inputGroup: {
            position: 'relative'
        },
        input: {
            backgroundColor: 'rgba(15, 23, 42, 0.5)',
            border: '1px solid rgba(71, 85, 105, 0.5)',
            color: 'white',
            transition: 'all 0.3s ease'
        },
        inputFocus: {
            borderColor: '#06b6d4',
            boxShadow: '0 0 0 0.2rem rgba(6, 182, 212, 0.2)',
            backgroundColor: 'rgba(15, 23, 42, 0.7)'
        },
        submitBtn: {
            background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
            border: 'none',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
        },
        submitBtnHover: {
            background: 'linear-gradient(45deg, #0891b2, #7c3aed)',
            transform: 'scale(1.05)',
            boxShadow: '0 10px 25px rgba(6, 182, 212, 0.25)'
        },
        errorAlert: {
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            color: '#fca5a5'
        },
        gradientText: {
            background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        }
    };

    return (
        <>
            <Header />
            <style>
                {`
                    @keyframes pulse {
                        0%, 100% { opacity: 0.2; }
                        50% { opacity: 0.4; }
                    }
                    
                    .form-control:focus {
                        border-color: #06b6d4 !important;
                        box-shadow: 0 0 0 0.2rem rgba(6, 182, 212, 0.2) !important;
                        background-color: rgba(15, 23, 42, 0.7) !important;
                    }
                    
                    .btn-futuristic:hover {
                        background: linear-gradient(45deg, #0891b2, #7c3aed) !important;
                        transform: scale(1.05);
                        box-shadow: 0 10px 25px rgba(6, 182, 212, 0.25);
                    }
                    
                    .spinner-border-sm {
                        width: 1rem;
                        height: 1rem;
                    }
                `}
            </style>

            <div className="d-flex align-items-center justify-content-center px-4" style={futuristicStyles.container}>
                {/* Animated background elements */}
                <div style={futuristicStyles.animatedOrb1}></div>
                <div style={futuristicStyles.animatedOrb2}></div>
                <div style={futuristicStyles.animatedOrb3}></div>

                {/* Grid pattern overlay */}
                <div style={futuristicStyles.gridOverlay}></div>

                <div className="w-100" style={{ maxWidth: '28rem', ...futuristicStyles.formContainer }}>
                    {/* Header */}
                    <div className="text-center mb-4">
                        <h1 className="display-4 fw-bold mb-2" style={futuristicStyles.gradientText}>
                            Add Bookmark
                        </h1>
                        <p className="small" style={{color:"white"}}>Save your favorite links to the digital void</p>
                    </div>

                    {/* Form Container */}
                    <div className="position-relative">
                        {/* Glow effect */}
                        <div style={futuristicStyles.glowEffect}></div>

                        <div className="card p-4" style={futuristicStyles.formCard}>
                            <form onSubmit={handleSubmit}>
                                {/* Title Field */}
                                <div className="mb-3">
                                    <label className="form-label d-flex align-items-center gap-2 text-light">
                                        <Type size={16} className="text-info" />
                                        Title
                                    </label>
                                    <div style={futuristicStyles.inputGroup}>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="Enter bookmark title..."
                                            style={futuristicStyles.input}
                                        />
                                    </div>
                                </div>

                                {/* URL Field */}
                                <div className="mb-3">
                                    <label className="form-label d-flex align-items-center gap-2 text-light">
                                        <Link size={16} className="text-primary" />
                                        URL
                                    </label>
                                    <div style={futuristicStyles.inputGroup}>
                                        <input
                                            type="url"
                                            className="form-control"
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                            placeholder="https://example.com"
                                            style={futuristicStyles.input}
                                        />
                                    </div>
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="alert d-flex align-items-center gap-2 mb-3" style={futuristicStyles.errorAlert}>
                                        <AlertCircle size={16} />
                                        {error}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="btn btn-futuristic w-100 fw-medium py-2"
                                    style={futuristicStyles.submitBtn}
                                >
                                    <div className="d-flex align-items-center justify-content-center gap-2">
                                        {isLoading ? (
                                            <>
                                                <div className="spinner-border spinner-border-sm text-light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                <Plus size={16} />
                                                Add Bookmark
                                            </>
                                        )}
                                    </div>
                                </button>
                            </form>

                            {/* Decorative elements */}
                            <div
                                className="position-absolute top-0 start-0 w-100"
                                style={{
                                    height: '1px',
                                    background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.5), transparent)'
                                }}
                            ></div>
                            <div
                                className="position-absolute bottom-0 start-0 w-100"
                                style={{
                                    height: '1px',
                                    background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)'
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-3">
                        <p className="text-muted small mb-0">Secure • Fast • Futuristic</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddBookmark;