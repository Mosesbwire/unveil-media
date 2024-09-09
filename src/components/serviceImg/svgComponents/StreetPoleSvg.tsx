
import { SVGProps } from "react"
const StreetPoleSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    // width={1926}
    // height={1847}
    fill="none"
    viewBox="0 0 1926 1847"
  >
    <g strokeWidth={5}>
      <path
        stroke="url(#a)"
        d="m1160 1340.5 6.5 502.5-126 .5 7.5-505.5H876V652.5h185l6-389.5h81l5.5 389.5h186l-5 688H1160Z"
      className="outline"/>
      <path
        stroke="url(#b)"
        d="M896.5 293.5c192 9 134.5 115.5 145.5 194.5h18.5c-5.5-135.5 50-201-211.5-222l-411.5-3v-25.5L416 225H230.5L215 237.5V284h250.5l431 9.5Z"
      className="outline"/>
      <path stroke="url(#c)" d="M3 923V3h1920.5v920" className="border"/>
      <path stroke="url(#d)" d="M3 923v920h1920l.5-920" className="border"/>
    </g>
    <defs>
      <linearGradient
        id="a"
        x1={777.25}
        x2={777.25}
        y1={225}
        y2={1843.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E550A7" />
        <stop offset={1} stopColor="#F7BB18" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={777.25}
        x2={777.25}
        y1={225}
        y2={1843.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E550A7" />
        <stop offset={1} stopColor="#F7BB18" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={963.25}
        x2={963.25}
        y1={3}
        y2={923}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E550A7" />
        <stop offset={1} stopColor="#F7BB18" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={963.25}
        x2={963.25}
        y1={923}
        y2={1843}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E550A7" />
        <stop offset={1} stopColor="#F7BB18" />
      </linearGradient>
    </defs>
  </svg>
)
export default StreetPoleSvg
