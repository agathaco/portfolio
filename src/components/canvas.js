import React, { Component } from 'react'

let c;
let canvas;
let circles = [];
const colors = [
  // "#FFED89",
  // "#F4B677",
  // "#F296AB",
  "#d21687",
  "#5B569E",
  "#9acde2"
  ];

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numParticles: 30,
      stopAnimation:false
    }
  }

  componentDidMount() {
    this.setState({ stopAnimation: false });
    canvas = this.refs.canvas;
    c = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    this.initCircles();
  }

  componentWillUnmount() {
    this.setState({ stopAnimation: true });
  }

  initCircles = () => {
    circles = [];
    for (let i = 1; i < this.state.numParticles; i++) {
        const r = Math.random() * 4 + 2;
        const x = Math.random() * (window.innerWidth - r * 2) + r;
        const y = Math.random() * (window.innerHeight - r * 2) + r;
        const dx = (Math.random() - 0.5) * 0.3;
        const dy = (Math.random() - 0.5) * 0.3;
        circles.push(new Circle(x, y, dx, dy, r));
    }
    this.animate()
  }

  animate = () => {
    if ( this.state.stopAnimation ) return;
    requestAnimationFrame(this.animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 1; i < circles.length; i++) {
        circles[i].update()
    }
}

render () {
    return (
      <canvas ref="canvas" className="canvas"/>
    )
  }
}

function Circle(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.minRadius = r;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.opacity = Math.random().toFixed(1) - 0.1;
    this.draw = () => {
        c.beginPath();
        c.globalAlpha = this.opacity; // random opacity
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.fill();
    };
    this.update = () => {
        if (this.x + this.r > window.innerWidth || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.r > window.innerHeight || this.y - this.r < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    };
}
