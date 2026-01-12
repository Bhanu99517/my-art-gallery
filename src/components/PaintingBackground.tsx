export const PaintingBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {/* Base canvas texture */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Paint strokes and washes */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-gold/20 via-amber-600/12 to-transparent rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-rose-500/18 via-pink-600/10 to-transparent rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-violet-600/18 via-purple-500/10 to-transparent rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-500/16 via-teal-600/10 to-transparent rounded-full blur-[85px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/12 via-amber-500/8 to-gold/12 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Additional brush strokes for depth */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-gradient-to-br from-coral/15 via-rose-400/8 to-transparent rounded-full blur-[70px] animate-pulse rotate-12" style={{ animationDelay: '0.7s' }} />
      <div className="absolute bottom-1/3 left-1/6 w-[350px] h-[400px] bg-gradient-to-tl from-indigo-500/12 via-violet-400/8 to-transparent rounded-full blur-[75px] animate-pulse -rotate-12" style={{ animationDelay: '1.3s' }} />
      
      {/* Subtle canvas texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_1px)] bg-[length:24px_24px]" />
    </div>
  );
};
