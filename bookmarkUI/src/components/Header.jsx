import { Link } from 'react-router-dom';
import { Bookmark, Plus, Menu } from 'lucide-react';

function Header() {
    const futuristicStyles = {
        navbar: {
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(88, 28, 135, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(6, 182, 212, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            overflow: 'hidden'
        },
        glowLine: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #06b6d4, #8b5cf6, #ec4899, transparent)',
            animation: 'shimmer 3s ease-in-out infinite'
        },
        brand: {
            background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            textDecoration: 'none',
            position: 'relative',
            transition: 'all 0.3s ease'
        },
        navLink: {
            color: 'rgba(255, 255, 255, 0.9)',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid transparent'
        },
        navLinkHover: {
            background: 'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))',
            borderColor: 'rgba(6, 182, 212, 0.3)',
            color: '#06b6d4',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 15px rgba(6, 182, 212, 0.2)'
        },
        togglerIcon: {
            background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
            borderRadius: '4px',
            padding: '4px'
        },
        floatingParticle: {
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: '#06b6d4',
            borderRadius: '50%',
            opacity: 0.6
        }
    };

    return (
        <>
            <style>
                {`
                    @keyframes shimmer {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                    
                    @keyframes float {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-10px) rotate(180deg); }
                    }
                    
                    @keyframes pulse-glow {
                        0%, 100% { box-shadow: 0 0 5px rgba(6, 182, 212, 0.3); }
                        50% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.6), 0 0 30px rgba(139, 92, 246, 0.4); }
                    }
                    
                    @keyframes particle-float {
                        0% { transform: translateY(0px) translateX(0px); opacity: 0; }
                        10% { opacity: 1; }
                        90% { opacity: 1; }
                        100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
                    }
                    
                    .navbar-brand:hover {
                        transform: scale(1.05);
                        filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.5));
                    }
                    
                    .nav-link-futuristic {
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .nav-link-futuristic::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.2), transparent);
                        transition: left 0.5s;
                    }
                    
                    .nav-link-futuristic:hover::before {
                        left: 100%;
                    }
                    
                    .nav-link-futuristic:hover {
                        background: linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1)) !important;
                        border-color: rgba(6, 182, 212, 0.3) !important;
                        color: #06b6d4 !important;
                        transform: translateY(-2px);
                        box-shadow: 0 4px 15px rgba(6, 182, 212, 0.2);
                    }
                    
                    .navbar-toggler {
                        border: 1px solid rgba(6, 182, 212, 0.3);
                        animation: pulse-glow 2s infinite;
                    }
                    
                    .navbar-toggler:focus {
                        box-shadow: 0 0 0 0.25rem rgba(6, 182, 212, 0.25);
                    }
                    
                    .floating-particles {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        pointer-events: none;
                        overflow: hidden;
                    }
                    
                    .particle {
                        position: absolute;
                        width: 2px;
                        height: 2px;
                        background: #06b6d4;
                        border-radius: 50%;
                        animation: particle-float 6s linear infinite;
                    }
                    
                    .particle:nth-child(1) { left: 10%; animation-delay: 0s; }
                    .particle:nth-child(2) { left: 20%; animation-delay: 1s; background: #8b5cf6; }
                    .particle:nth-child(3) { left: 30%; animation-delay: 2s; background: #ec4899; }
                    .particle:nth-child(4) { left: 40%; animation-delay: 3s; }
                    .particle:nth-child(5) { left: 50%; animation-delay: 4s; background: #8b5cf6; }
                    .particle:nth-child(6) { left: 60%; animation-delay: 5s; background: #ec4899; }
                    .particle:nth-child(7) { left: 70%; animation-delay: 0.5s; }
                    .particle:nth-child(8) { left: 80%; animation-delay: 1.5s; background: #8b5cf6; }
                    .particle:nth-child(9) { left: 90%; animation-delay: 2.5s; background: #ec4899; }
                `}
            </style>

            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={futuristicStyles.navbar}>
                    {/* Animated glow line */}
                    <div style={futuristicStyles.glowLine}></div>

                    {/* Floating particles */}
                    <div className="floating-particles">
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                    </div>

                    <div className="container-fluid">
                        <Link className="navbar-brand d-flex align-items-center gap-2" to="/" style={futuristicStyles.brand}>
                            <Bookmark size={24} className="text-info" style={{ animation: 'float 3s ease-in-out infinite' }} />
                            Bookmarker
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <Menu size={20} style={futuristicStyles.togglerIcon} />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link nav-link-futuristic d-flex align-items-center gap-2"
                                        to="/add"
                                        style={futuristicStyles.navLink}
                                    >
                                        <Plus size={16} />
                                        Add Bookmark
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;