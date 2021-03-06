import React, { useRef, useState, useEffect } from "react"

function Avatar(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const eyes = useRef(null)
  const hair = useRef(null)
  const head = useRef(null)

  useEffect(() => {
    if (window.innerWidth > 768) {
      const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY })
      window.addEventListener("mousemove", setFromEvent)
      return () => {
        window.removeEventListener("mousemove", setFromEvent)
      }
    }
  }, [])

  const getOffset = el => {
    el = el.getBoundingClientRect()
    return {
      x: el.left + window.scrollX,
      y: el.top + window.scrollY,
    }
  }

  const followMouse = (el, xOffset, yOffset) => {
    const eyeOffset = getOffset(el)
    const bBox = el.getBBox()
    const centerX = eyeOffset.x + bBox.width / 2
    const centerY = eyeOffset.y + bBox.height / 2
    const percentTop = Math.round(
      ((position.y - centerY) * 100) / window.innerHeight
    )
    const percentLeft = Math.round(
      ((position.x - centerX) * 100) / window.innerWidth
    )
    el.style.transform = `translate(${percentLeft / xOffset}px, ${
      percentTop / yOffset
    }px)`
  }

  if (eyes.current) followMouse(eyes.current, 45, 25)
  if (hair.current) followMouse(hair.current, -20, -20)
  if (head.current) followMouse(head.current, 50, 50)

  return (
    <svg viewBox="0 -5 455 346" {...props}>
      <defs>
        <radialGradient
          id="prefix__a"
          cx={-427.84}
          cy={476.28}
          r={15.37}
          gradientTransform="matrix(.73 -1.37 1.38 .72 -150.06 -835.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f99389" />
          <stop offset={0.56} stopColor="#fbb294" stopOpacity={0.38} />
          <stop offset={0.89} stopColor="#fdc49a" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="prefix__b"
          cx={-672.52}
          cy={143.84}
          r={15.37}
          gradientTransform="matrix(-1.37 -.73 .72 -1.38 -778.08 -194.63)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__d"
          x1={221.62}
          y1={259.38}
          x2={221.62}
          y2={73.65}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f8d671" stopOpacity={0.8} />
          <stop offset={1} stopColor="#b6e3e3" stopOpacity={0} />
        </linearGradient>
        <clipPath id="prefix__c">
          <path
            d="M189.4 157c-5-1.4-8.3-7.6-13.3-10.9-8.6-5.7-18.5-.8-24-8.7s3.1-17.6-3.2-22.8-12.5-10.5-12.5-19.6 7.6-21.2 9.1-28.6-1-19.6 2-25.6c3.9-7.6 9.3-11.1 20.2-15.1s16-17.8 29.7-20c9.4-1.5 15.2 4.8 21.4 1.6s15.9-5.6 20.5-5.1 10 3.2 18.2 8.7 8.1 6.8 15.9 12.8c14.8 11.3 19 8.8 23.1 15.9 5.8 10 3 18.1 4.6 25.3s8.6 19.7 9.1 26.7c1 14.7-12.9 24-14.8 31s2.4 18.4-10.4 22.6c-4.6 1.5-5.1 3.4-9.2 6.8-5.8 4.8-14.1 2.5-18.4 2.1-16.9-1.9-55.9 6.3-68 2.9z"
            fill="none"
          />
        </clipPath>
      </defs>
      <g>
        <path
          className="blob"
          d="M438.7 201.3c17.1 63.2-43.3 146.9-118 135.5-30.4-4.6-84.2-38.9-118.1-26.7-115 41.3-169.4-22.6-181.6-97.4-10.2-62.3 7.7-126.8 66-116 53.7 10 55.7-26.4 96.3-41 81.5-29.2 219.4 12.7 255.4 145.6z"
          fill="#79a4e8"
        />
        <path
          d="M101.9 74.9c1.7 11-12.4 6.4-28.5 9S45.1 95 43.4 84s11.3-38.9 29.2-35.2c23.8 5 27.5 15.1 29.3 26.1z"
          fill="#79a4e8"
        />
        <g className="particles">
          <circle cx={359.9} cy={64} r={4.7} fill="#79a4e8" />
          <circle cx={401.6} cy={70.8} r={6.8} fill="#5454fc" />
          <circle cx={445.6} cy={253.5} r={3} fill="#79a4e8" />
          <circle cx={434.7} cy={300.6} r={6.7} fill="#ff7fc7" />
          <circle cx={446.2} cy={174.3} r={5.2} fill="#ff7fc7" />
          <circle cx={23.4} cy={98.8} r={5.6} fill="#5454fc" />
          <circle cx={7.4} cy={217.6} r={6.9} fill="#ff7fc7" />
          <circle cx={57.2} cy={320.7} r={5} fill="#5454fc" />
          <circle cx={431.8} cy={153} r={3} fill="#79a4e8" />
          <circle cx={119} cy={39.7} r={6.6} fill="#79a4e8" />
          <path
            d="M334.2 82a6.3 6.3 0 00-5.2 5.2.1.1 0 01-.2 0 6.3 6.3 0 00-5.2-5.2.1.1 0 010-.2 6.3 6.3 0 005.2-5.2.1.1 0 01.2 0 6.3 6.3 0 005.2 5.2.1.1 0 010 .2zM86.2 31.4a8.1 8.1 0 00-6.6 6.6.1.1 0 01-.2 0 8.1 8.1 0 00-6.6-6.6.1.1 0 010-.2 8.1 8.1 0 006.6-6.6.1.1 0 01.2 0 8.1 8.1 0 006.6 6.6.1.1 0 010 .2zM14.8 125.3a8.8 8.8 0 00-7.2 7.2.1.1 0 01-.2 0 8.8 8.8 0 00-7.2-7.2.1.1 0 010-.2 8.8 8.8 0 007.2-7.2.1.1 0 01.2 0 8.8 8.8 0 007.2 7.2.1.1 0 010 .2z"
            fill="#ff7fc7"
          />
          <path
            d="M81.7 266.5a10.8 10.8 0 00-8.9 8.9.1.1 0 01-.3 0 10.9 10.9 0 00-8.9-8.9.1.1 0 010-.3 10.9 10.9 0 008.9-8.9.1.1 0 01.3 0 10.8 10.8 0 008.9 8.9.1.1 0 010 .3zM399.7 208.4a9 9 0 00-7.4 7.4.1.1 0 01-.2 0 9 9 0 00-7.4-7.4.1.1 0 010-.2 9 9 0 007.4-7.4.1.1 0 01.2 0 9 9 0 007.4 7.4.1.1 0 010 .2zM427.4 204a6.2 6.2 0 00-5.1 5.1.1.1 0 01-.2 0 6.2 6.2 0 00-5.1-5.1.1.1 0 010-.2 6.2 6.2 0 005.1-5.1.1.1 0 01.2 0 6.2 6.2 0 005.1 5.1.1.1 0 010 .2z"
            fill="#5454fc"
          />
          <path
            d="M418.8 110.3a6.8 6.8 0 00-5.5 5.5.1.1 0 01-.2 0 6.8 6.8 0 00-5.5-5.5.1.1 0 010-.2 6.8 6.8 0 005.5-5.5.1.1 0 01.2 0 6.8 6.8 0 005.5 5.5.1.1 0 010 .2z"
            fill="#79a4e8"
          />
          <path
            d="M19.5 176.5A5.5 5.5 0 0015 181h-.2a5.5 5.5 0 00-4.5-4.5.1.1 0 010-.2 5.5 5.5 0 004.5-4.5h.2a5.5 5.5 0 004.5 4.5.1.1 0 010 .2z"
            fill="#5454fc"
          />
          <path
            d="M32.1 274.2a6.9 6.9 0 00-5.7 5.7.1.1 0 01-.2 0 6.9 6.9 0 00-5.7-5.7.1.1 0 010-.2 6.9 6.9 0 005.7-5.7.1.1 0 01.2 0 6.9 6.9 0 005.7 5.7.1.1 0 010 .2z"
            fill="#79a4e8"
          />
          <path
            d="M331.3 33.3a12.5 12.5 0 00-10.2 10.2.2.2 0 01-.3 0 12.5 12.5 0 00-10.2-10.2.2.2 0 010-.3 12.5 12.5 0 0010.2-10.2.2.2 0 01.3 0A12.5 12.5 0 00331.3 33a.2.2 0 010 .3z"
            fill="#ff7fc7"
          />
        </g>
        <g ref={hair}>
          <path
            className="hair"
            d="M189.7 152.2c-4.9-1.4-8-7.4-12.9-10.6-8.4-5.5-18-.8-23.4-8.5s3-17.1-3.1-22.2-12.1-10.2-12.1-19.1 7.4-20.6 8.8-27.8-1-19 2-24.9c3.8-7.4 9-10.8 19.6-14.7s15.6-17.3 29-19.4c9.1-1.5 14.7 4.7 20.8 1.5s15.5-5.4 19.9-4.9 9.8 3.1 17.7 8.4 7.8 6.6 15.4 12.4c14.4 11 18.4 8.6 22.4 15.4 5.7 9.7 2.9 17.6 4.5 24.6s8.4 19.1 8.8 25.9c.9 14.3-12.5 23.4-14.4 30.1s2.3 17.9-10.1 22c-4.5 1.5-5 3.3-8.9 6.6-5.6 4.7-13.7 2.4-17.9 2-16.4-1.4-54.2 6.5-66.1 3.2z"
            fill="#5454fc"
          />
          <path
            className="dark-mode-only"
            d="M292.8 118.5c-.2 7.5 1.8 16.4-10.1 22-4.3 2-5 3.3-8.9 6.6-5.6 4.7-13.7 2.4-17.9 2-16.5-1.5-54.3 6.4-66.2 3.1-4.9-1.4-8-7.4-12.9-10.6-8.4-5.5-18-.8-23.4-8.5-1.8-2.5-1.8-5.5-1.5-8.5a8.7 8.7 0 001.5 3.7c5.4 7.7 15 3 23.4 8.5 4.9 3.2 8 9.2 12.9 10.6 11.8 3.3 49.7-4.6 66.2-3.1 4.2.4 12.3 2.7 17.9-2 4-3.3 4.4-5.1 8.9-6.6 12.4-4.2 10.1-17.2 10.1-17.2z"
            fill="#f8d671"
            style={{
              mixBlendMode: "screen",
            }}
          />
          <path
            className="hair"
            d="M256 10l2.4 1.7c-6.6-4.3-10.3-6.5-15.6-7s-18.8 2.3-25 5.5-8.6-2.5-17.7-1.8c-13.5 1-16.4 15.2-27 19.2s-15.8 7.3-19.6 14.7c-3 5.9-.7 18.8-2 24.9s-8.8 17.9-8.8 27.8 13.7 21.1 7.6 16-12.1-10.2-12.1-19.1 7.4-20.6 8.8-27.8-1-19 2-24.9c3.8-7.4 9-10.8 19.6-14.7s15.6-17.4 29-19.5c9.3-1.4 14.9 4.7 20.8 1.5s15.5-5.4 19.9-4.9 9.8 3.1 17.7 8.4z"
            fill="#5454fc"
            style={{
              mixBlendMode: "screen",
            }}
          />
          <path
            data-name="stroke"
            d="M189.7 152.2c-4.9-1.4-8-7.4-12.9-10.6-8.4-5.5-18-.8-23.4-8.5s3-17.1-3.1-22.2-12.1-10.2-12.1-19.1 7.4-20.6 8.8-27.8-1-19 2-24.9c3.8-7.4 9-10.8 19.6-14.7s15.6-17.3 29-19.4c9.1-1.5 14.7 4.7 20.8 1.5s15.5-5.4 19.9-4.9 9.8 3.1 17.7 8.4 7.8 6.6 15.4 12.4c14.4 11 18.4 8.6 22.4 15.4 5.7 9.7 2.9 17.6 4.5 24.6s8.4 19.1 8.8 25.9c.9 14.3-12.5 23.4-14.4 30.1s2.3 17.9-10.1 22c-4.5 1.5-5 3.3-8.9 6.6-5.6 4.7-13.7 2.4-17.9 2-16.4-1.4-54.2 6.5-66.1 3.2z"
            fill="none"
            stroke="#363074"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
        </g>
        <g id="body">
      <path
        id="body-2"
        data-name="body"
        d="M309.3,220.2v86.5l-170.5-.5V219.7c-1.1-10.6,7.8-57.1,39.2-57.1,28,0,24.6-25.6,24.6-25.6h39.9s-3.4,25.6,24.6,25.6C298.7,162.6,310.4,209.6,309.3,220.2Z"
        fill="#fdc49a"
        stroke="#383074"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d="M205.5,137.1s3.4,31.3-24.6,31.3c-31.4,0-42.1,51.4-42.1,51.4-1.1-10.6,7.8-57.1,39.2-57.1,28,0,24.6-25.5,24.6-25.5h2.9Z"
        fill="#fdc49a"
        style={{
          mixBlendMode: "overlay",
        }}
      />
      <path
        id="body-outline"
        d="M309.3,220.2v86.5l-170.5-.5V219.7c-1.1-10.6,7.8-57.1,39.2-57.1,28,0,24.6-25.6,24.6-25.6h39.9s-3.4,25.6,24.6,25.6C298.7,162.6,310.4,209.6,309.3,220.2Z"
        fill="none"
        stroke="#383074"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        id="top"
        d="M284.7,168.2c-72.2,35.5-122.1-1-122.1-1-19.7,10.7-24.4,43.6-23.5,52.5v86.5l170.5-.2V220.2C310.2,211.3,304.4,178.8,284.7,168.2Z"
        fill="#ff7fc7"
        stroke="#383074"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d="M168.3,171.6c-19.7,10.7-22.2,41.3-22.4,50.3l-0.7,85.4h-6.2l0.7-86c-0.9-8.9,3.2-41.4,22.8-52.1Z"
        fill="#f19fce"
        style={{
          mixBlendMode: "overlay",
        }}
      />
    </g>
        <g ref={head}>
          <g strokeMiterlimit={10}>
            <path
              d="M190.7 89.7c.7 6.8-3 12.9-8.3 13.6s-9.4-4.5-10.9-11.2c-2.7-11.4 2.6-15.8 8-16.5s10.5 7.2 11.2 14.1z"
              fill="#fdc49a"
              stroke="#383074"
              strokeWidth={3}
            />
            <path
              d="M176.2 87.1c0 4.3 1.6 7.8 3.6 7.8"
              fill="none"
              stroke="#f19fce"
              strokeLinecap="round"
              strokeWidth={2}
            />
            <path
              d="M256.2 89.7c-.7 6.8 3 12.9 8.3 13.6s9.4-4.5 10.9-11.2c2.7-11.4-2.6-15.8-8-16.5s-10.5 7.2-11.2 14.1z"
              fill="#fdc49a"
              stroke="#383074"
              strokeWidth={3}
            />
            <path
              d="M270.7 87.1c0 4.3-1.6 7.8-3.6 7.8"
              fill="none"
              stroke="#f19fce"
              strokeLinecap="round"
              strokeWidth={2}
            />
          </g>
          <path
            className="light-mode-only"
            d="M249.5 159.1c-30.2 7.2-40-10.8-44.5-14.2.9-3.6-.7-7.6-.8-8.7a45.4 45.4 0 0012.7 6.6 25 25 0 0012.7.3 32 32 0 0011.3-5.1c0 1.8 0 14.5 8.6 21.1z"
            fill="#d26b3c"
            opacity={0.25}
          />
          <path
            d="M265.6 91.8c-1.1 19-8.5 33.7-16.3 42.2-3.9 4.3-12.4 10.8-19.7 12.6a22.5 22.5 0 01-12.1-.3c-7.1-2.2-15.8-9-19.9-13.6A69.1 69.1 0 01181 90.4c-1.2-30.8-2.7-63.4 43.6-63.4 44.5 0 42.8 33.9 41 64.8z"
            fill="#fdc49a"
          />
          <g data-name="face">
            <path
              className="dark-mode-only"
              d="M265.6 89.1c-1.1 20-8.5 35.3-16.3 44.3-3.9 4.5-12.4 11.3-19.7 13.3a21.5 21.5 0 01-12.1-.3c-7.1-2.3-15.8-9.5-19.9-14.3-7.7-8.9-16.1-25-16.8-44.3-.2-5.9-.2-8.6 0-4.1.7 19.4 9.1 35.4 16.8 44.3 4.1 4.8 12.8 12 19.9 14.3a21.5 21.5 0 0012.1.3c7.2-1.9 15.7-8.7 19.7-13.3 7.8-9 15.2-24.3 16.3-44.3.3-5.6.4-2.9 0 4.1z"
              fill="#f6e69d"
              fillOpacity={0.6}
            />
            <path
              d="M220 136.3a4.8 4.8 0 016.8 0"
              fill="none"
              stroke="#eb83ac"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeOpacity={0.5}
              strokeWidth={2}
            />
            <path
              d="M237.4 121.5s-7.5-2.4-9.5-2.8-4.7 1.4-4.7 1.4-3.2-1.6-4.7-1.4-8.9 2.8-8.9 2.8c7.7 11.7 19.4 11.9 27.8 0z"
              fill="#eb83ac"
              fillOpacity={0.5}
            />
            <path
              d="M208 120.7c11.6 5.9 17.9 6 31 .2"
              fill="none"
              stroke="#383074"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={3}
            />
            <path
              d="M227.3 107.9s-7.3 2.1-10.4-1.9c-1.7-1.5-.5-6.2-.2-8.3 1-5.6 1.6-5.1 3.9-16.4"
              fill="none"
              stroke="#eb83ac"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeOpacity={0.5}
              strokeWidth={3}
            />
            <g stroke="#383074" strokeMiterlimit={10}>
              <path
                d="M188.1 70.1c2.6-7 8.7-8.6 13.3-7s8.4 3.4 8.4 3.4"
                fill="none"
                strokeLinecap="round"
                strokeWidth={3}
              />
              <g ref={eyes}>
                <path
                  d="M243.8 75.2a3.7 3.7 0 003.9-3.5M240.4 74.3a3.7 3.7 0 003.9-3.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth={2}
                />
                <ellipse
                  cx={241.9}
                  cy={77.5}
                  rx={3.8}
                  ry={5.3}
                  fill="#383074"
                />
                <path
                  d="M200.2 75.2a3.7 3.7 0 01-3.9-3.5M203.6 74.4a3.7 3.7 0 01-3.9-3.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth={2}
                />
                <ellipse
                  cx={202.1}
                  cy={77.6}
                  rx={3.8}
                  ry={5.3}
                  fill="#383074"
                />
              </g>
              <path
                d="M255.9 69.6a10.5 10.5 0 00-13.3-6.5c-5.1 1.7-8.4 3.2-8.4 3.2"
                fill="none"
                strokeLinecap="round"
                strokeWidth={3}
              />
            </g>
            <ellipse
              cx={196.4}
              cy={95.2}
              rx={11.5}
              ry={19.2}
              transform="rotate(-52.4 196.36 95.232)"
              opacity={0.58}
              fill="url(#prefix__a)"
            />
            <ellipse
              cx={248.4}
              cy={95.8}
              rx={19.2}
              ry={11.5}
              transform="rotate(-33.5 248.05 95.671)"
              opacity={0.58}
              fill="url(#prefix__b)"
            />
          </g>
          <path
            data-name="stroke"
            d="M265.6 91.8c-1.1 19-8.5 33.7-16.3 42.2-3.9 4.3-12.4 10.8-19.7 12.6a22.5 22.5 0 01-12.1-.3c-7.1-2.2-15.8-9-19.9-13.6A69.1 69.1 0 01181 90.4c-1.2-30.8-2.7-63.4 43.6-63.4 44.5 0 42.8 33.9 41 64.8z"
            fill="none"
            stroke="#383074"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
  
          <g id="front-hair">
          <path className="light-mode-only"
            d="M234.3,46.6c-4.3-.8-13.6-6.3-21.3-9l-0.4.2c-3,1.6-5.7,4.5-7.9,11.8-5.1,17.2-13.1,27.4-22.6,30.6-0.1-2.3,0-3.9,0-6.1,7.5-4.6,13.7-14.8,18-29.2,2.2-7.3,5.2-9.7,7.9-11.8S210.4,18.1,234.3,46.6Z"
            fill="#d26b3c"
            opacity={0.35}
          />
          <path
            d="M188.2,70.1c2.6-7,8.7-8.6,13.3-7s8.4,3.4,8.4,3.4"
            fill="none"
            stroke="#383074"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path className="hair"
            d="M267.8,67.6c-9.5-3.2-23.3-10.1-27.9-17.1s-16.6-15.2-24.2-17.8a10.6,10.6,0,0,0-7.5.5c-3,1.6-5.7,4.5-7.9,11.8-5.1,17.2-12.6,27.4-22.1,30.6-1.4-26.6,6.7-49.6,45.4-50.4S267.8,45.8,267.8,67.6Z"
            fill="#5454fc"
          />
          <g clipPath="url(#clip-path)">
            <path
              d="M209.7,31.9s3.4-21.4,5.2-23.5"
              fill="none"
              stroke="#363074"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={3}
            />
          </g>
          <path
            d="M275.4,70.1c-15.2-4.7-27.6-11.1-35.5-19.7s-16.6-15.2-24.2-17.8a10.6,10.6,0,0,0-7.5.5c-3,1.6-5.7,4.5-7.9,11.8-5.1,17.2-9.9,27.6-22.1,30.6"
            fill="none"
            stroke="#363074"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
          />
        </g>
          <path
            d="M255.9 69.6a10.5 10.5 0 00-13.3-6.5c-5.1 1.7-8.4 3.2-8.4 3.2"
            fill="none"
            stroke="#383074"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3}
          />

          <path
            d="M290.1 74.9s9.6 19.3-3.6 30.9-9 16.1-5.1 23.1"
            fill="none"
            stroke="#363074"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
          <path
            d="M179.8,45.7s-3.2,15.1-17.1,23.4-7.4,31-.2,35.6"
            fill="none"
            stroke="#363074"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
          <path
            d="M226.1,19.9s20.4-5.6,33.6,13.4,15.7,22.9,25.2,22.5"
            fill="none"
            stroke="#363074"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
        </g>
        <g id="laptop">
          <path
            className="dark-mode-only"
            fill="url(#prefix__d)"
            d="M87.7 76.7l267.8-3.1-34.6 185.8H125.4L87.7 76.7z"
          />
          <rect
            data-name="top"
            x={125.4}
            y={203.4}
            width={195.5}
            height={125.95}
            rx={7.2}
            ry={7.2}
            fill="#dbd3e2"
            stroke="#363074"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path
            data-name="highlight"
            d="M321.4 209a7.2 7.2 0 00-3.5-.9H136.8a7.2 7.2 0 00-7.2 7.2v111.5a7.1 7.1 0 00.5 2.6 7.2 7.2 0 01-3.7-6.3V211.6a7.2 7.2 0 017.2-7.2h181.1a7.2 7.2 0 016.7 4.6z"
            fill="#d0d0d8"
            style={{
              mixBlendMode: "overlay",
            }}
          />
          <path
            d="M320.9 210.6v111.6a7.2 7.2 0 01-7.2 7.2H136.1c-5.9 0 104.1-6 133.3-23.1 25.5-14.9 37.7-99.4 37.7-99.4a3.5 3.5 0 013.5-3.5h3.3a7.2 7.2 0 017 7.2z"
            fill="#c6bfd1"
          />
          <g strokeMiterlimit={10}>
            <circle
              cx={212.3}
              cy={272.2}
              r={6.9}
              fill="#ff7fc7"
              stroke="#383074"
            />
            <path
              d="M215.3 266.3c3.3-6 3.5-12.3.3-14"
              fill="none"
              stroke="#383074"
            />
            <circle
              cx={227.4}
              cy={272.2}
              r={6.9}
              fill="#ff7fc7"
              stroke="#383074"
            />
            <path
              d="M226.7 265.4c0-7.2-6.6-13.1-14.7-13.1"
              fill="none"
              stroke="#383074"
            />
            <path
              d="M217.2 253.1s-1.5 4.3-4.8 5.4-7.1-1.3-7.1-1.3 1.5-4.3 4.8-5.4 7.1 1.3 7.1 1.3z"
              fill="#5454fc"
              stroke="#363074"
            />
          </g>
          <rect
            data-name="stroke"
            x={125.4}
            y={203.4}
            width={195.5}
            height={125.95}
            rx={7.2}
            ry={7.2}
            fill="none"
            stroke="#363074"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
        </g>
        <g id="plant">
          <path
            d="M375.4 275.3s-5.9-16.7 1.2-28.7 24.6-14.9 24.6-14.9 5.9 16.7-1.2 28.7-24.6 14.9-24.6 14.9z"
            fill="#ff7fc7"
          />
          <path
            d="M400 260.4c-7.1 12-24.6 14.9-24.6 14.9s-.4-1.1-.9-3c3.9-.9 17.4-4.4 23.4-14.6s3.4-20.3 2-25.7l1.1-.2s6.1 16.6-1 28.6z"
            fill="#e065ae"
          />
          <path
            d="M378.9 249.2c-5.3 9-3.3 20.5-2 25.8l-1.4.3s-5.9-16.6 1.2-28.7 24.6-14.9 24.6-14.9a25.6 25.6 0 01.8 2.9c-4.4 1-17.3 4.7-23.2 14.6z"
            fill="#ffb0e3"
          />
          <path
            d="M375.4 275.3s-5.9-16.7 1.2-28.7 24.6-14.9 24.6-14.9 5.9 16.7-1.2 28.7-24.6 14.9-24.6 14.9z"
            fill="none"
            stroke="#363074"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path
            d="M373.2 277.4s-17.1-4.4-23.1-17 1.4-28.7 1.4-28.7 17.1 4.4 23.1 17-1.4 28.7-1.4 28.7z"
            fill="#ff7fc7"
          />
          <path
            d="M374.6 248.7c6 12.6-1.4 28.7-1.4 28.7l-3-1c1.5-3.8 6-16.9 1-27.6s-15-14.2-20.1-16l.4-1s17.1 4.3 23.1 16.9z"
            fill="#e065ae"
          />
          <path
            d="M353.4 260c4.5 9.4 15.2 14.2 20.3 16.1l-.6 1.4s-17.1-4.4-23.1-17 1.4-28.7 1.4-28.7l2.8.9c-1.5 4.1-5.7 16.9-.8 27.3z"
            fill="#ffb0e3"
          />
          <path
            d="M373.2 277.4s-17.1-4.4-23.1-17 1.4-28.7 1.4-28.7 17.1 4.4 23.1 17-1.4 28.7-1.4 28.7z"
            fill="none"
            stroke="#363074"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <g>
            <path
              d="M372.2 281s1.5-17.6 12.9-25.6 28.5-3.4 28.5-3.4-1.5 17.6-12.9 25.6-28.5 3.4-28.5 3.4z"
              fill="#ff7fc7"
            />
            <path
              d="M401.8 276.8c-10.6 9.1-28 6.3-28 6.3s0-1.2.1-3.1c4 .4 17.9 1.3 26.9-6.4s9.7-18.2 10.1-23.7h1.1s.3 17.7-10.2 26.9z"
              fill="#e065ae"
            />
            <path
              d="M385.3 259.4c-7.9 6.8-9.7 18.4-10.1 23.8l-1.5-.2s-.3-17.7 10.2-26.8 28-6.3 28-6.3 0 1.1-.1 3c-4.3-.4-17.8-1.1-26.5 6.5z"
              fill="#ffb0e3"
            />
            <path
              d="M373.7 283s-.3-17.7 10.2-26.8 28-6.3 28-6.3.3 17.7-10.2 26.8-28 6.3-28 6.3z"
              fill="none"
              stroke="#363074"
              strokeMiterlimit={10}
              strokeWidth={3}
            />
          </g>
          <g>
            <path
              d="M374.1 283s-17.5 2.5-27.9-6.8-9.7-27-9.7-27 17.5-2.5 27.9 6.8 9.7 27 9.7 27z"
              fill="#ff7fc7"
            />
            <path
              d="M364.5 256.1c10.7 9 10.6 26.7 10.6 26.7l-3.1.4c-.2-4-1.5-17.9-10.6-25.5s-19.5-6.7-25-6.3v-1.1s17.4-3.2 28.1 5.8z"
              fill="#e065ae"
            />
            <path
              d="M348.7 274.2c7.7 7.1 19.4 7.5 24.8 7.3v1.5s-17.5 2.3-27.8-7.1-9.4-27.1-9.4-27.1l3-.2c.1 4.3 1 17.7 9.4 25.6z"
              fill="#ffb0e3"
            />
            <path
              d="M374.6 282.4s-17.4 3.1-28.1-6-10.5-26.7-10.5-26.7 17.4-3.1 28.1 6 10.5 26.7 10.5 26.7z"
              fill="none"
              stroke="#363074"
              strokeMiterlimit={10}
              strokeWidth={3}
            />
          </g>
          <g>
            <path
              d="M374.5 285.9S360 272.4 360.1 256s14.8-29.3 14.8-29.3 14.5 13.5 14.4 29.9-14.8 29.3-14.8 29.3z"
              fill="#ff7fc7"
            />
            <path
              d="M389.2 256.5c-.1 16.4-14.8 29.3-14.8 29.3a26.3 26.3 0 01-2.4-2.6c3.2-3.2 13.8-14.6 13.8-28.5.1-12.1-7.8-22.6-12-27.3l.9-.9s14.6 13.7 14.5 30z"
              fill="#e065ae"
            />
            <path
              d="M363.5 257.3c-.1 12.2 8 22.8 12.1 27.4l-1.2 1.1s-14.5-13.5-14.4-29.9 14.7-29.4 14.7-29.4l2.3 2.4c-3.4 3.7-13.4 14.9-13.5 28.4z"
              fill="#ffb0e3"
            />
            <path
              d="M374.5 285.9S360 272.4 360.1 256s14.8-29.3 14.8-29.3 14.5 13.5 14.4 29.9-14.8 29.3-14.8 29.3z"
              fill="none"
              stroke="#363074"
              strokeMiterlimit={10}
              strokeWidth={3}
            />
          </g>
          <g>
            <path
              className="hair"
              d="M405.8 298.6a95 95 0 01-3 24.1 8.6 8.6 0 01-8.4 6.4h-40.6a8.6 8.6 0 01-8.4-6.4 95 95 0 01-3-24.1 99.6 99.6 0 01.9-13.6 8.7 8.7 0 018.6-7.5h44.3a8.7 8.7 0 018.6 7.5 99.6 99.6 0 011 13.6z"
              fill="#5454fc"
            />
            <path
              className="hair"
              d="M403.4 282.9a14.7 14.7 0 00-4.9-.9H356c-4.2 0-8.7 4.2-9.2 8.5a103.4 103.4 0 00-.9 13.6c0 8.6 2 16.7 3.9 24h-1c-2.1-1.1-2.8-3.1-3.4-5.6a98.4 98.4 0 01-2.9-24 103.4 103.4 0 01.9-13.6 8.4 8.4 0 018.2-7.5h42.5c3.8.1 8.4 1.8 9.3 5.5z"
              fill="#5454fc"
              style={{
                mixBlendMode: "color-dodge",
              }}
            />
            <path
              d="M405.8 298.6a95 95 0 01-3 24.1 8.6 8.6 0 01-8.4 6.4h-40.6a8.6 8.6 0 01-8.4-6.4 95 95 0 01-3-24.1 99.6 99.6 0 01.9-13.6 8.7 8.7 0 018.6-7.5h44.3a8.7 8.7 0 018.6 7.5 99.6 99.6 0 011 13.6z"
              fill="none"
              stroke="#363074"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Avatar
