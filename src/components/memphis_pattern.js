import React, { useRef, useEffect } from 'react'

const MemphisPattern = () => {
  const canvasRef = useRef(null)
  const canvas = <canvas ref={canvasRef} /> 

  const drawMemphisPattern = () => {
    const html = document.documentElement;
    const body = document.body;
    const full_width = window.innerWidth || html.clientWidth;
    const full_height = Math.max(body.scrollHeight, body.offsetHeight, 
      html.clientHeight, html.scrollHeight, html.offsetHeight);
    const colors = ['rgba(255, 148, 173, 0.5)', 'rgba(0, 234, 230, 0.5)', 'rgba(255, 206, 20, 0.5)', 'rgba(0, 0, 0, 0.5)'];
    const background_colors = ['#FFFFFF'];


    const random_element = (array, element_to_avoid) => {
      const array_without_element_to_avoid = array.filter(element => element !== element_to_avoid);
      return array_without_element_to_avoid[Math.floor(Math.random() * array_without_element_to_avoid.length)];
    }



    const setup_canvas = () => {
      const canvas = canvasRef.current;
      canvas.width = full_width;
      canvas.height = full_height;
      canvas.style['background-color'] = random_element(background_colors);
    }

    const canvas_context = () => {
      const canvas = canvasRef.current;
      if (!canvas.getContext) return;
      return canvas.getContext('2d');
    }

    const squiggle = (context, size) => {
      const number_of_squiggles = 6;
      const diameter = size / number_of_squiggles;
      const radius = diameter / 2;

      for (let squiggle_number = 0; squiggle_number < number_of_squiggles; squiggle_number++) {
        context.beginPath();
        const x = radius + squiggle_number * diameter;
        const counter_clockwise = Boolean(squiggle_number % 2);

        context.arc(x, size / 2, radius, 0, Math.PI, counter_clockwise);
        context.stroke();
      }
    }

    const line = (context, size) => {
      context.beginPath();
      context.moveTo(0, size / 2);
      context.lineTo(size, size / 2);
      context.stroke();
    }

    const triangle = (context, size) => {
      const height = size * Math.cos(Math.PI / 6);

      context.beginPath();
      context.moveTo(0, height);
      context.lineTo(size / 2, 0);
      context.lineTo(size, height);
      context.closePath();
      context.stroke();
    }

    const circle = (context, size) => {
      const radius = size / 2;
      context.beginPath();
      context.arc(radius, radius, radius, 0, 2 * Math.PI);
      context.stroke();
    }

    const square = (context, size) => {
      context.strokeRect(0, 0, size, size);
    }

    const rotate_shape = (shape, context, shape_size) => {
      const rotation_amount = Math.random() * Math.PI;
      context.save();
      context.rotate(rotation_amount);
      context.translate(-shape_size / 2, -shape_size / 2);
      shape(context, shape_size);
      context.translate(-shape_size / 4, -shape_size / 4);
      shape(context, shape_size);
      context.restore();
    }

    const draw_shapes = () => {
      const shapes = [squiggle, triangle, line, circle, square];
      const context = canvas_context();
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.lineWidth = 4;
      context.lineCap = 'round';
      const shape_size = 50;
      const rows = Math.floor(full_height / (shape_size * 2));
      const columns = Math.floor(full_width / (shape_size * 2));

      // Don't draw the same shape next to each other
      let current_shape = null;
      let current_color = null;

      context.translate(shape_size, shape_size);

      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          current_shape = random_element(shapes, current_shape);
          current_color = random_element(colors, current_color);
          context.strokeStyle = current_color;
          rotate_shape(current_shape, context, shape_size);
          context.translate(shape_size * 2, 0);
        }
        context.translate(-shape_size * 2 * columns, shape_size * 2);
      }
    }

    setup_canvas();
    draw_shapes();
  }
  useEffect(drawMemphisPattern, [])
  return (
    <div className="memphis-pattern">
      {canvas}
    </div>
    
  )
}

export default MemphisPattern