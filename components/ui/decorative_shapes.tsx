export function DecorativeShapes() {
  return (
    <>
      {/* Background decorative elements */}
      <div className="decorative-circle w-96 h-96 -top-48 -left-48 opacity-30 animate-float" />
      <div className="decorative-circle w-64 h-64 top-1/4 -right-32 opacity-20 animate-float-delay-1" />
      <div className="decorative-circle w-80 h-80 bottom-1/4 -left-40 opacity-25 animate-float-delay-2" />
      <div className="decorative-circle w-72 h-72 -bottom-36 right-1/4 opacity-30 animate-float-delay-3" />

      {/* Decorative lines */}
      <div className="decorative-line top-1/4 left-1/4 rotate-45" />
      <div className="decorative-line bottom-1/3 right-1/4 -rotate-45" />
      <div className="decorative-line top-2/3 right-1/3" />

      {/* Decorative dots */}
      <div className="absolute top-1/4 right-1/4 h-2 w-2 rounded-full bg-blue-400/50" />
      <div className="absolute bottom-1/3 left-1/3 h-3 w-3 rounded-full bg-blue-500/40" />
      <div className="absolute top-2/3 left-1/4 h-1.5 w-1.5 rounded-full bg-blue-300/60" />
    </>
  )
}

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/5 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-lg rotate-12 animate-float" />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-blue-300/15 to-blue-500/5 rounded-full animate-float-delay-1" />
      <div className="absolute bottom-1/4 left-1/3 w-24 h-12 bg-gradient-to-br from-blue-400/10 to-blue-600/5 rounded-full rotate-45 animate-float-delay-2" />
      <div className="absolute bottom-1/3 right-1/5 w-12 h-12 border border-blue-500/20 rounded-lg rotate-12 animate-float-delay-3" />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-blue-400/20 rounded-full animate-rotate-slow" />
      <div
        className="absolute bottom-1/4 right-1/3 w-40 h-40 border border-blue-500/10 rounded-full animate-rotate-slow"
        style={{ animationDirection: "reverse" }}
      />
    </div>
  )
}

export function WavePattern() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          className="fill-blue-500"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          className="fill-blue-500"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          className="fill-blue-500"
        ></path>
      </svg>
    </div>
  )
}
