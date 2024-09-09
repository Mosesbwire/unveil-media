
import { SVGProps } from "react"
const PrintingSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={1206}
    height={1606}
    fill="none"
    viewBox="0 0 1206 1606"
  >
    <g strokeWidth={5}>
      <path stroke="url(#a)" d="M3 803V3h1200v800" className="border"/>
      <path stroke="url(#b)" d="M3 803v800h1200V803" className="border"/>
      <path
        stroke="url(#c)"
        d="M166 264.5 158.5 141l1041-26.5V572L368 580.5l-13.5-155h-102l-31-87H195l-29-74Z"
      className="outline"/>
      <path
        stroke="url(#d)"
        d="M1073 1341.5 215 1368l241-771.5h319.5l297.5 745Z"
      className="outline"/>
    </g>
    <defs>
      <linearGradient
        id="a"
        x1={603}
        x2={603}
        y1={3}
        y2={803}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E550A7" />
        <stop offset={1} stopColor="#F7BB18" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={603}
        x2={603}
        y1={803}
        y2={1603}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E550A7" />
        <stop offset={1} stopColor="#F7BB18" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={679}
        x2={679}
        y1={114.5}
        y2={1368}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E550A7" />
        <stop offset={1} stopColor="#F7BB18" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={679}
        x2={679}
        y1={114.5}
        y2={1368}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E550A7" />
        <stop offset={1} stopColor="#F7BB18" />
      </linearGradient>
    </defs>
  </svg>
)
export default PrintingSvg
