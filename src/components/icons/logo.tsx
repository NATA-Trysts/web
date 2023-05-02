type LogoProps = {
  className?: string
}

export const Logo = ({ className }: LogoProps) => (
  <svg width='64' height='64' viewBox='0 0 64 64' fill='none' className={className}>
    <path
      d='M39.3534 9.52737L42.4971 12.671C52.7268 22.9008 52.7268 39.4865 42.497 49.7162L39.3534 52.8598C34.847 57.3663 27.5407 57.3663 23.0343 52.8598L9.5276 39.3532C5.0212 34.8468 5.0212 27.5404 9.52761 23.034L23.0343 9.52736C27.5407 5.02096 34.847 5.02096 39.3534 9.52737Z'
      stroke='url(#paint0_linear_1600_1261)'
      stroke-width='10.4196'
    />
    <defs>
      <linearGradient
        id='paint0_linear_1600_1261'
        x1='69.9432'
        y1='31.1446'
        x2='-6.00473'
        y2='31.1446'
        gradientUnits='userSpaceOnUse'>
        <stop stop-color='#FF91A5' />
        <stop offset='0.484375' stop-color='#FF6F88' />
      </linearGradient>
    </defs>
  </svg>
)
