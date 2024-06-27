import React from 'react';

export default function RunningCards() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Follow Mahakaal Yogpeeth -{">"} Exclusively On
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <a href="https://www.youtube.com/@MAHAKAALYOGPEETH" target="_blank" rel="noopener noreferrer">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 animate-slide rounded-full"
              src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Transistor"
              width={158}
              height={48}
            />
          </a>
          <a href="https://www.instagram.com/mahakaalyogpeeth?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 animate-slide rounded-full"
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Reform"
              width={158}
              height={48}
            />
          </a>
          <a href="https://link-to-tuple.com" target="_blank" rel="noopener noreferrer">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 animate-slide rounded-full"
              src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tuple"
              width={158}
              height={48}
            />
          </a>
          <a href="https://link-to-savvycal.com" target="_blank" rel="noopener noreferrer">
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 animate-slide rounded-full"
              src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100090373700833" target="_blank" rel="noopener noreferrer">
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 animate-slide rounded-full"
              src="https://images.unsplash.com/photo-1655199798153-a8f56d8655d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Statamic"
              width={158}
              height={48}
            />
          </a>
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slide {
          animation: slide 2s infinite;
        }
      `}</style>
    </div>
  );
}
