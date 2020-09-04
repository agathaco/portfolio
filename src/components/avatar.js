import React, { useRef, useState, useEffect } from 'react';

function Avatar(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const eyes = useRef(null)
  const hair = useRef(null)
  const head = useRef(null)

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  const getOffset = (el) => {
    el = el.getBoundingClientRect();
    return {
      x: el.left + window.scrollX,
      y: el.top + window.scrollY
    };
  }

  const followMouse = (el, xOffset, yOffset) => {
    const eyeOffset = getOffset(el);
    const bBox = el.getBBox();
    const centerX = eyeOffset.x + bBox.width / 2;
    const centerY = eyeOffset.y + bBox.height / 2;
    const percentTop = Math.round((position.y - centerY) * 100 / window.innerHeight);
    const percentLeft = Math.round((position.x - centerX) * 100 / window.innerWidth);
    el.style.transform = `translate(${percentLeft/xOffset}px, ${ percentTop/yOffset}px)`
  }

  if (eyes.current) followMouse(eyes.current, 45, 25)
  if (hair.current) followMouse(hair.current, -20, -20)
  if (head.current) followMouse(head.current, 50, 50)

  return (
    <svg viewBox="0 0 451 340.3" {...props}>
      <defs>
        <radialGradient
          id="prefix__a"
          cx={367.07}
          cy={126.98}
          r={15.37}
          gradientTransform="matrix(.73 -1.37 1.38 .72 -245.68 506.03)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f99389" />
          <stop offset={0.56} stopColor="#fbb294" stopOpacity={0.38} />
          <stop offset={0.89} stopColor="#fdc49a" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="prefix__b"
          cx={345.22}
          cy={199.65}
          r={15.37}
          gradientTransform="matrix(-1.37 -.73 .72 -1.38 577.88 621.41)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__c"
          x1={221.75}
          y1={259.38}
          x2={221.75}
          y2={73.65}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f8d671" />
          <stop offset={1} stopColor="#f8d671" stopOpacity={0} />
        </linearGradient>
      </defs>
      <g data-name="Layer 2">
        <g fill="#60aacf" className="background">
          <path d="M422.7 211.9c15.9 56.1-40.2 130.4-109.5 120.3-28.2-4.1-78.1-34.5-109.6-23.7C96.7 345.2 46.2 288.4 34.9 222c-9.5-55.3 7.1-112.6 61.3-102.9 49.8 8.8 51.7-23.4 89.4-36.4 75.6-26 203.6 11.2 237.1 129.2z" />
          <g className="particles">
            <circle cx={378.7} cy={57.2} r={4.7} />
            <circle cx={358.8} cy={81.8} r={6.8} />
            <circle cx={17.7} cy={255.4} r={3.9} />
            <circle cx={17.7} cy={225.8} r={3.9} />
            <circle cx={428.4} cy={303.7} r={3} />
            <circle cx={440.6} cy={274.6} r={9.3} />
            <circle cx={445.8} cy={220.6} r={5.2} />
            <circle cx={379.9} cy={106.9} r={3.5} />
            <circle cx={38} cy={95.6} r={5.6} />
            <circle cx={6.9} cy={243.8} r={6.9} />
            <circle cx={94.3} cy={333.9} r={5} />
            <path d="M417.6,131.5a6.8,6.8,0,0,0-5.5,5.5,0.1,0.1,0,0,1-.2,0,6.8,6.8,0,0,0-5.5-5.5,0.1,0.1,0,0,1,0-.2,6.8,6.8,0,0,0,5.5-5.5,0.1,0.1,0,0,1,.2,0,6.8,6.8,0,0,0,5.5,5.5A0.1,0.1,0,0,1,417.6,131.5Z"/>
            <path d="M351.8,32.8A12.5,12.5,0,0,0,341.6,43a0.2,0.2,0,0,1-.3,0,12.5,12.5,0,0,0-10.2-10.2,0.2,0.2,0,0,1,0-.3,12.5,12.5,0,0,0,10.2-10.2,0.2,0.2,0,0,1,.3,0,12.5,12.5,0,0,0,10.2,10.2A0.2,0.2,0,0,1,351.8,32.8Z"/>
            <path d="M120.8,38a11.6,11.6,0,0,0-9.5,9.5,0.2,0.2,0,0,1-.3,0,11.6,11.6,0,0,0-9.5-9.5,0.2,0.2,0,0,1,0-.3,11.6,11.6,0,0,0,9.5-9.5,0.2,0.2,0,0,1,.3,0,11.6,11.6,0,0,0,9.5,9.5A0.2,0.2,0,0,1,120.8,38Z"/>
            <path d="M27.6,126.7a8.8,8.8,0,0,0-7.2,7.2,0.1,0.1,0,0,1-.2,0,8.8,8.8,0,0,0-7.2-7.2,0.1,0.1,0,0,1,0-.2,8.8,8.8,0,0,0,7.2-7.2,0.1,0.1,0,0,1,.2,0,8.8,8.8,0,0,0,7.2,7.2A0.1,0.1,0,0,1,27.6,126.7Z"/>
            <path d="M51.3,299.5a10.8,10.8,0,0,0-8.9,8.9,0.1,0.1,0,0,1-.3,0,10.9,10.9,0,0,0-8.9-8.9,0.1,0.1,0,0,1,0-.3,10.9,10.9,0,0,0,8.9-8.9,0.1,0.1,0,0,1,.3,0,10.8,10.8,0,0,0,8.9,8.9A0.1,0.1,0,0,1,51.3,299.5Z"/>
            <path d="M406.2,316.3a9,9,0,0,0-7.4,7.4,0.1,0.1,0,0,1-.2,0,9,9,0,0,0-7.4-7.4,0.1,0.1,0,0,1,0-.2,9,9,0,0,0,7.4-7.4,0.1,0.1,0,0,1,.2,0,9,9,0,0,0,7.4,7.4A0.1,0.1,0,0,1,406.2,316.3Z"/>
            <path d="M438.8,205.2a6.2,6.2,0,0,0-5.1,5.1,0.1,0.1,0,0,1-.2,0,6.2,6.2,0,0,0-5.1-5.1,0.1,0.1,0,0,1,0-.2,6.2,6.2,0,0,0,5.1-5.1,0.1,0.1,0,0,1,.2,0,6.2,6.2,0,0,0,5.1,5.1A0.1,0.1,0,0,1,438.8,205.2Z"/>
            <path d="M406.2,87a6.8,6.8,0,0,0-5.5,5.5,0.1,0.1,0,0,1-.2,0,6.8,6.8,0,0,0-5.5-5.5,0.1,0.1,0,0,1,0-.2,6.8,6.8,0,0,0,5.5-5.5,0.1,0.1,0,0,1,.2,0,6.8,6.8,0,0,0,5.5,5.5A0.1,0.1,0,0,1,406.2,87Z"/>
          </g>
          <path d="M117 86c1.7 11-12.4 6.4-28.5 9s-28.2 11.1-29.9.1 11.3-38.9 29.2-35.2c23.8 5 27.5 15.1 29.2 26.1z" />

          </g>
          <g id="hair" ref={hair}>
          <path
            data-name="Hair"
            d="M189.9 152.2c-4.9-1.4-8-7.4-12.9-10.6-8.4-5.5-18-.8-23.4-8.5s3-17.1-3.1-22.2-12.1-10.2-12.1-19.1 7.4-20.6 8.8-27.8-1-19 2-24.9c3.8-7.4 9-10.8 19.6-14.7S184.3 7.1 197.7 5c9.1-1.5 14.7 4.7 20.8 1.5s15.5-5.4 20-4.9 9.8 3.2 17.7 8.4 7.8 6.6 15.4 12.4C286 33.4 290 31 294 37.9c5.7 9.7 2.9 17.6 4.5 24.6s8.4 19.1 8.8 25.9c.9 14.3-12.5 23.4-14.4 30.1s2.3 17.9-10.1 22c-4.5 1.5-5 3.3-8.9 6.6-5.6 4.7-13.7 2.4-17.9 2-16.4-1.5-54.3 6.4-66.1 3.1z"
            fill="#5b569e"
            stroke="#363074"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path className="dark-mode-only"
            d="M293 118.5c-.2 7.5 1.8 16.4-10.1 22-4.3 2-5 3.3-8.9 6.6-5.6 4.7-13.7 2.4-17.9 2-16.5-1.5-54.3 6.4-66.2 3.1-4.9-1.4-8-7.4-12.9-10.6-8.4-5.5-18-.8-23.4-8.5-1.8-2.5-1.8-5.5-1.5-8.5a8.7 8.7 0 001.5 3.7c5.4 7.7 15 3 23.4 8.5 4.9 3.2 8 9.2 12.9 10.6 11.8 3.3 49.7-4.6 66.2-3.1 4.2.4 12.3 2.7 17.9-2 4-3.3 4.4-5.1 8.9-6.6 12.3-4.2 10.1-17.2 10.1-17.2z"
            fill="#f3e69d"
            fillOpacity={0.7}
          />
          <path
            d="M256.2 10l2.4 1.7c-6.6-4.3-10.3-6.5-15.6-7s-18.8 2.3-25 5.5-8.6-2.5-17.7-1.8c-13.5 1-16.4 15.2-27 19.2s-15.8 7.3-19.6 14.7c-3 5.9-.7 18.8-2 24.9s-8.8 17.9-8.8 27.8 13.7 21.1 7.6 16-12.1-10.2-12.1-19.1 7.4-20.6 8.8-27.8-1-19 2-24.9c3.8-7.4 9-10.8 19.6-14.7S184.3 7.1 197.7 5c9.3-1.4 14.9 4.7 20.8 1.5s15.5-5.4 20-4.9 9.7 3.1 17.7 8.4z"
            fill="#8a8abd"
          />
          <path
            d="M189.9 152.2c-4.9-1.4-8-7.4-12.9-10.6-8.4-5.5-18-.8-23.4-8.5s3-17.1-3.1-22.2-12.1-10.2-12.1-19.1 7.4-20.6 8.8-27.8-1-19 2-24.9c3.8-7.4 9-10.8 19.6-14.7S184.3 7.1 197.7 5c9.1-1.5 14.7 4.7 20.8 1.5s15.5-5.4 20-4.9 9.8 3.2 17.7 8.4 7.8 6.6 15.4 12.4C286 33.4 290 31 294 37.9c5.7 9.7 2.9 17.6 4.5 24.6s8.4 19.1 8.8 25.9c.9 14.3-12.5 23.4-14.4 30.1s2.3 17.9-10.1 22c-4.5 1.5-5 3.3-8.9 6.6-5.6 4.7-13.7 2.4-17.9 2-16.4-1.5-54.3 6.4-66.1 3.1z"
            fill="none"
            stroke="#363074"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
        </g>
        <g id="body">
          <path
            data-name="body"
            d="M309.3 220.2v86.5l-170.5-.5v-86.5c-1.1-10.6 7.8-57.1 39.2-57.1 28 0 24.6-25.6 24.6-25.6h39.9s-3.4 25.6 24.6 25.6c31.6 0 43.3 47 42.2 57.6z"
            fill="#fdc49a"
            stroke="#383074"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path
            d="M205.5 137.1s3.1 29.4-24.9 29.4c-31.4 0-41.8 53.2-41.8 53.2-1.1-10.6 7.8-57.1 39.2-57.1 28 0 24.6-25.5 24.6-25.5h2.9zM240 137.1s-3.1 29.4 24.9 29.4c31.4 0 41.8 53.2 41.8 53.2 1.1-10.6-7.8-57.1-39.2-57.1-28 0-24.6-25.5-24.6-25.5H240z"
            fill="#fdc49a"
            style={{
              mixBlendMode: "overlay",
            }}
          />
          <path
            d="M309.3 220.2v86.5l-170.5-.5v-86.5c-1.1-10.6 7.8-57.1 39.2-57.1 28 0 24.6-25.6 24.6-25.6h39.9s-3.4 25.6 24.6 25.6c31.6 0 43.3 47 42.2 57.6z"
            fill="none"
            stroke="#383074"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path
            d="M284.7 168.2c-72.2 35.5-122.1-1-122.1-1-19.7 10.7-23.9 44.1-22.9 53l-.7 86 26.3.5h144.1v-86.5c.8-8.9-5-41.4-24.7-52z"
            fill="#d31882"
            stroke="#383074"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path
            d="M165.5 171.4c-19.7 10.7-23.9 44.1-22.9 53l-.7 82.9h-3l.7-86c-.9-8.9 3.3-42.4 22.9-53zM281.7 171.4c19.7 10.7 23.9 44.1 22.9 53l.7 82.9h3l-.7-86c.9-8.9-3.3-42.4-22.9-53z"
            fill="#f062af"
          />
        </g>
        <g id="head-group" ref={head}>
          <g  id="face">
          <g strokeMiterlimit={10}>
            <path
              d="M190.8 88.7c.7 6.8-3 12.9-8.3 13.6s-9.4-4.5-10.9-11.2c-2.7-11.4 2.6-15.8 8-16.5s10.5 7.2 11.2 14.1z"
              fill="#fdc49a"
              stroke="#383074"
              strokeWidth={3}
            />
            <path
              d="M176.3 86.1c0 4.3 1.6 7.8 3.6 7.8"
              fill="none"
              stroke="#f99389"
              strokeLinecap="round"
              strokeWidth={2}
            />
            <path
              d="M256.3 88.7c-.7 6.8 3 12.9 8.3 13.6s9.4-4.5 10.9-11.2c2.7-11.4-2.6-15.8-8-16.5s-10.4 7.2-11.2 14.1z"
              fill="#fdc49a"
              stroke="#383074"
              strokeWidth={3}
            />
            <path
              d="M270.8 86.1c0 4.3-1.6 7.8-3.6 7.8"
              fill="none"
              stroke="#f99389"
              strokeLinecap="round"
              strokeWidth={2}
            />
          </g>
          <path
            d="M241.3 146.7a26.1 26.1 0 01-10.3 4.5 24.9 24.9 0 01-12.7-.3 39.3 39.3 0 01-13.3-7c.9-3.6-.7-7.6-.8-8.7a45.4 45.4 0 0012.7 6.6 25 25 0 0012.7.3 32 32 0 0011.3-5.1c0 1.8-1 6 .4 9.7z"
            fill="#d26b3c"
            opacity={0.43}
          />
          <path
            d="M265.8 90.8c-1.1 19-8.5 33.7-16.3 42.2-3.9 4.3-12.4 10.8-19.7 12.6a22.5 22.5 0 01-12.1-.3c-7.1-2.2-15.8-9-19.9-13.6A69.1 69.1 0 01181 89.4c-1-30.8-2.6-63.4 43.7-63.4 44.5 0 42.8 33.9 41.1 64.8z"
            fill="#fdc49a"
            stroke="#383074"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path className="dark-mode-only"
            d="M265.8 88.1c-1.1 20-8.5 35.3-16.3 44.3-3.9 4.5-12.4 11.3-19.7 13.3a21.5 21.5 0 01-12.1-.3c-7.1-2.3-15.8-9.5-19.9-14.3-7.7-8.9-16.1-25-16.8-44.3-.2-5.9-.2-8.6 0-4.1.7 19.4 9.1 35.4 16.8 44.3 4.1 4.8 12.8 12 19.9 14.3a21.5 21.5 0 0012.1.3c7.2-1.9 15.7-8.7 19.7-13.3 7.8-9 15.2-24.3 16.3-44.3.3-5.6.4-2.9 0 4.1z"
            fill="#f6e69d"
          />
          <path
            d="M220.2 135.3a4.8 4.8 0 016.8 0"
            fill="none"
            stroke="#f99389"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            opacity={0.5}
          />
          <path
            d="M237.5 120.5s-7.5-2.4-9.5-2.8-4.7 1.4-4.7 1.4-3.2-1.6-4.7-1.4-8.9 2.8-8.9 2.8c7.7 11.7 19.4 11.9 27.8 0z"
            fill="#f99389"
          />
          <path
            d="M208.1 119.7c11.6 5.9 17.9 6 31 .2"
            fill="none"
            stroke="#383074"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path
            d="M227.4 106.9s-7.3 2.1-10.4-1.9c-1.7-1.5-.5-6.2-.2-8.3 1-5.6 1.6-5.1 3.9-16.4"
            fill="none"
            stroke="#f99389"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <g stroke="#383074" strokeMiterlimit={10} >
            <path
              d="M188.2 69.1c2.6-7 8.7-8.6 13.3-7s8.4 3.4 8.4 3.4"
              fill="none"
              strokeLinecap="round"
              strokeWidth={3}
            />
            <path
            d="M256 68.6a10.5 10.5 0 00-13.3-6.5c-5.1 1.7-8.4 3.2-8.4 3.2"
            fill="none"
            strokeLinecap="round"
            strokeWidth={3}
          />
            <g ref={eyes}>
              <path
                d="M243.9 74.2a3.7 3.7 0 003.9-3.5M240.5 73.3a3.7 3.7 0 003.9-3.5"
                fill="none"
                strokeLinecap="round"
                strokeWidth={2}
              />
              <ellipse cx={242} cy={76.5} rx={3.8} ry={5.3} fill="#383074" />
              <path
                d="M200.4 74.2a3.7 3.7 0 01-3.9-3.5M203.7 73.4a3.7 3.7 0 01-3.9-3.5"
                fill="none"
                strokeLinecap="round"
                strokeWidth={2}
              />
              <ellipse cx={202.2} cy={76.6} rx={3.8} ry={5.3} fill="#383074" />
            </g>
          </g>
          <ellipse
            cx={196.5}
            cy={94.2}
            rx={11.5}
            ry={19.2}
            transform="rotate(-52.4 196.504 94.168)"
            opacity={0.58}
            fill="url(#prefix__a)"
          />
          <ellipse
            cx={248.6}
            cy={94.8}
            rx={19.2}
            ry={11.5}
            transform="rotate(-33.5 248.133 94.79)"
            opacity={0.58}
            fill="url(#prefix__b)"
          />
          <path
            data-name="stroke"
            d="M265.8 90.8c-1.1 19-8.5 33.7-16.3 42.2-3.9 4.3-12.4 10.8-19.7 12.6a22.5 22.5 0 01-12.1-.3c-7.1-2.2-15.8-9-19.9-13.6A69.1 69.1 0 01181 89.4c-1-30.8-2.6-63.4 43.7-63.4 44.5 0 42.8 33.9 41.1 64.8z"
            fill="none"
            stroke="#383074"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path
            d="M197.4 49.9c2.2-7.3 4.9-10.2 7.9-11.8a10.6 10.6 0 017.5-.5c7.7 2.7 18.6 9.3 24.3 17.8s23.8 15.6 28.1 16.5c.7-26.6-21.5-43.8-21.5-43.8a4 4 0 00-3.3-1.2l-48.8 4.9a4 4 0 00-2.2 1"
            fill="#d26b3c"
            opacity={0.43}
          />
          <path
            data-name="front-hair"
            d="M160.1 54.5l11.8 20.9c1.1 2 2.3.8 4.5.3 9.4-2.3 17.8-11.3 23.8-31.7 2.2-7.3 4.9-10.2 7.9-11.8a10.6 10.6 0 017.5-.5c7.7 2.7 18.6 9.3 24.3 17.8S268 67 275.8 67.9s9-.9 9.8-2.7a3.9 3.9 0 00-.9-4.2l-38.2-37.9a4 4 0 00-3.3-1.2l-48.8 4a4 4 0 00-2.2 1l-32.1 27.6"
            fill="#5b569e"
          />
          <path className="dark-mode-only"
            d="M275.8 67.9c-7.8-1-29.3-8.6-35.9-18.5s-16.6-15.2-24.2-17.8c-2.1-.7-7-2-5-3.1a10.7 10.7 0 017.5-.5c7.7 2.7 18.6 9.4 24.3 17.9s23.5 17.7 30.8 20z"
            fill="#f0e69d"
            fillOpacity={0.7}
          />
          <path
            data-name="front-hair"
            d="M173.7 77.5c17-9.1 17.3-6 25.4-33.4 1.4-4.7 5-8.1 7.6-10.2a8.3 8.3 0 016.4-1.8c8.4 1.2 14.9 6.1 26.8 18.2C249 59.6 268 65 274.6 68.1"
            fill="none"
            stroke="#363074"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path
            d="M210.2 31.5s5-22.2 6.7-24"
            fill="none"
            stroke="#363074"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path
            d="M256 68.6a10.5 10.5 0 00-13.3-6.5c-5.1 1.7-8.4 3.2-8.4 3.2"
            fill="none"
            stroke="#383074"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path
            d="M290.2 74.9s7.5 17.3-3.6 30.9-6.8 15.6-5.1 23.1M184.5 42.6s-8.8 16.1-21.7 22.5-7.9 26-2.6 32.7 12.6 14.9 9.4 24M226.2 19.9s20.4-5.6 33.6 13.4 15.7 22.9 25.2 22.5"
            fill="none"
            stroke="#363074"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
        </g>
        </g>
        <g id="laptop">
          <path
            d="M321.1 318.9v5.3c0 8-5.2 14.6-11.6 14.6H137.2c-6.4 0-11.6-6.6-11.6-14.6v-5.3h195.5z"
            fill="#d0d0d8"
            stroke="#363074"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path className="dark-mode-only"
            fill="url(#prefix__c)"
            d="M87.8 76.7l267.9-3.1-34.6 185.8H125.5L87.8 76.7z"
          />
          <rect
            data-name="top"
            x={125.5}
            y={203.4}
            width={195.5}
            height={125.95}
            rx={7.2}
            ry={7.2}
            fill="#d0d0d8"
            stroke="#363074"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <path
            data-name="highlight"
            d="M321.6 209a7.2 7.2 0 00-3.5-.9H136.9a7.2 7.2 0 00-7.2 7.2v111.5a7.1 7.1 0 00.5 2.6 7.2 7.2 0 01-3.7-6.3V211.6a7.2 7.2 0 017.2-7.2h181.2a7.2 7.2 0 016.7 4.6z"
            fill="#d0d0d8"
            style={{
              mixBlendMode: "overlay",
            }}
          />
          <path
            d="M321.1 210.6v111.6a7.2 7.2 0 01-7.2 7.2H136.2c-5.9 0 104.1-6 133.3-23.1 25.5-14.9 37.7-99.4 37.7-99.4a3.5 3.5 0 013.5-3.5h3.3a7.2 7.2 0 017.1 7.2z"
            fill="#eaecec"
            style={{
              mixBlendMode: "multiply",
            }}
          />
          <g strokeMiterlimit={10}>
            <circle
              cx={212.5}
              cy={272.2}
              r={6.9}
              fill="#d21687"
              stroke="#383074"
            />
            <path
              d="M215.5 266.3c3.3-6 3.5-12.3.3-14"
              fill="none"
              stroke="#383074"
            />
            <circle
              cx={227.5}
              cy={272.2}
              r={6.9}
              fill="#d21687"
              stroke="#383074"
            />
            <path
              d="M226.8 265.4c0-7.2-6.6-13.1-14.7-13.1"
              fill="none"
              stroke="#383074"
            />
            <path
              d="M217.3 253.1s-1.5 4.3-4.8 5.4-7.1-1.3-7.1-1.3 1.5-4.3 4.8-5.4 7.1 1.3 7.1 1.3z"
              fill="#34a3c1"
              stroke="#363074"
            />
          </g>
          <rect
            data-name="stroke"
            x={125.5}
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
    
        </g>
    </svg>
  )
}

export default Avatar
