export default function LoadScreen({isTransitioning} : {isTransitioning: boolean}) {
  return (
    <div className={`fixed inset-0 bg-white flex items-center justify-center transition-opacity duration-750 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      <svg className="w-36 h-36 animate-fade-out" viewBox="0 0 144 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            @keyframes drawPath {
              0% {
                stroke-dashoffset: 800;
              }
              50% {
                stroke-dashoffset: 110;
              }
              100% {
                stroke-dashoffset: 800;
              }
            }
            .animate-path {
              stroke-dasharray: 800;
              animation: drawPath 3.5s infinite ease-in-out;
            }
          `}
        </style>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="10%" stopColor="orangered" />
          <stop offset="50%" stopColor="red" />
          <stop offset="100%" stopColor="orangered" />
        </linearGradient>
        <path 
          className="animate-path"
          d="M133 19C22 30 132 22 49 64C-34 106 9 -50 43 19C77 88 44 126 111 107C178 88 126 36 91 57C56 78 22 75 64 121C97.6 157.8 42 122.333 15 107" 
          strokeWidth="2" stroke="url(#gradient)" 
        />
      </svg>
    </div>
  );
}
