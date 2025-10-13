import React from 'react';

const RobotLogo: React.FC = () => {
    return (
        <div className="robot-logo" aria-hidden="true">
            <svg
                className="robot-logo__svg"
                viewBox="0 0 120 140"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Анимированный робот</title>
                <defs>
                    <linearGradient id="robot-body" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#f1f5ff" />
                        <stop offset="100%" stopColor="#dbe4ff" />
                    </linearGradient>
                    <linearGradient id="robot-shadow" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#c7d2fe" />
                        <stop offset="100%" stopColor="#a5b4fc" />
                    </linearGradient>
                    <linearGradient id="robot-screen" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#304fff" />
                        <stop offset="100%" stopColor="#5b7cff" />
                    </linearGradient>
                </defs>

                <g className="robot-logo__body">
                    <g className="robot-logo__antenna">
                        <rect x="57" y="8" width="6" height="26" rx="3" fill="#94a3ff" />
                        <circle cx="60" cy="6" r="6" fill="#fed835" />
                    </g>

                    <rect x="26" y="32" width="68" height="70" rx="18" fill="url(#robot-body)" />
                    <rect
                        x="22"
                        y="46"
                        width="76"
                        height="70"
                        rx="20"
                        fill="url(#robot-shadow)"
                        opacity="0.18"
                    />
                    <rect x="34" y="46" width="52" height="38" rx="12" fill="url(#robot-screen)" />

                    <g className="robot-logo__eyes">
                        <ellipse className="robot-logo__eye" cx="48" cy="64" rx="6" ry="6" fill="#f8fafc" />
                        <ellipse className="robot-logo__eye" cx="72" cy="64" rx="6" ry="6" fill="#f8fafc" />
                        <circle cx="48" cy="64" r="3" fill="#0f172a" />
                        <circle cx="72" cy="64" r="3" fill="#0f172a" />
                        <rect
                            className="robot-logo__blink"
                            x="36"
                            y="60"
                            width="24"
                            height="8"
                            rx="4"
                            fill="#1e293b"
                            opacity="0.1"
                        />
                    </g>

                    <rect x="40" y="90" width="40" height="16" rx="8" fill="#c7d2fe" />
                    <g className="robot-logo__legs">
                        <rect x="42" y="106" width="12" height="20" rx="6" fill="#a5b4fc" />
                        <rect x="66" y="106" width="12" height="20" rx="6" fill="#a5b4fc" />
                    </g>
                    <g className="robot-logo__arms">
                        <rect x="14" y="60" width="10" height="28" rx="5" fill="#c7d2fe" />
                        <rect x="96" y="60" width="10" height="28" rx="5" fill="#c7d2fe" />
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default RobotLogo;
