import React from 'react';

const CANVAS_BORDER_WIDTH = 5;
const CANVAS_PLACES_WIDTH = 3;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.canvasRef = React.createRef();
    this.ctx = null;
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    this.ctx = canvas.getContext('2d');
    this.drawBoard();
  }

  drawBoard = () => {
    this.ctx.fillStyle = '#cde6d0';
    this.ctx.fillRect(0, 0, 1300, 1300);
    this.ctx.lineWidth = CANVAS_BORDER_WIDTH;
    this.ctx.strokeRect(0, 0, 1300, 1300);
    // drawing boxes inside
    this.ctx.lineWidth = CANVAS_PLACES_WIDTH;
    this.ctx.moveTo(200, 0);
    this.ctx.lineTo(200, 1300);
    this.ctx.moveTo(1100, 0);
    this.ctx.lineTo(1100, 1300);
    this.ctx.moveTo(0, 200);
    this.ctx.lineTo(1300, 200);
    this.ctx.moveTo(0, 1100);
    this.ctx.lineTo(1300, 1100);
    this.drawPlaces([300, 0], [1000, 0], 'x');
    this.drawPlaces([300, 1100], [1000, 1100], 'x');
    this.drawPlaces([0, 300], [0, 1000], 'y');
    this.drawPlaces([1100, 300], [1100, 1000], 'y');
    this.ctx.stroke();
  };

  drawPlaces = (from, to, axis) => {
    if (axis === 'x') {
      let [x, y] = from;
      const height = 200;
      const width = 100;
      while (x <= to[0]) {
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x, y + height);
        x += width;
      }
    } else {
      let [x, y] = from;
      const height = 100;
      const width = 200;
      while (y <= to[1]) {
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + width, y);
        y += height;
      }
    }
  };

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        id="board"
        width="1300"
        height="1300"
      ></canvas>
    );
  }
}

export default Board;
