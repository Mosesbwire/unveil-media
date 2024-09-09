
import { SVGProps } from "react"
import './svg.css'
const BrandingSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg className="svg"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    // width={1206}
    // height={1606}
    fill="none"
    viewBox="0 0 1206 1606"
  >
    <g strokeWidth={5}>
      <path stroke="url(#a)" d="M3 803V3h1200v800" className="border"/>
      <path stroke="url(#b)" d="M3 803v800h1200V803" className="border"/>
      <path stroke="url(#c)" d="m886.5 968-414 26 4-679L915 362l-28.5 606Z" className="outline"/>
      <path
        stroke="url(#d)"
        d="m879.5 1010-407 29.5V1375l394.5-61.5 12.5-303.5Z"
      className="outline"/>
      <path stroke="url(#e)" d="m926 1289 12-265.5 256-21V1249l-268 40Z" className="outline"/>
      <path stroke="url(#f)" d="m938 968 37-563.5 219 22v527L938 968Z" className="outline"/>
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
        x1={833.25}
        x2={833.25}
        y1={315}
        y2={1375}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E550A7" />
        <stop offset={1} stopColor="#F7BB18" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={833.25}
        x2={833.25}
        y1={315}
        y2={1375}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E550A7" />
        <stop offset={1} stopColor="#F7BB18" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={833.25}
        x2={833.25}
        y1={315}
        y2={1375}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E550A7" />
        <stop offset={1} stopColor="#F7BB18" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={833.25}
        x2={833.25}
        y1={315}
        y2={1375}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E550A7" />
        <stop offset={1} stopColor="#F7BB18" />
      </linearGradient>
    </defs>
  </svg>
)
export default BrandingSvg
