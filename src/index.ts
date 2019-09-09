import { select, range, interpolateCubehelixDefault } from 'd3';

(() => {
  let count = 0;
  let cv: HTMLElement = document.getElementById('base-div')!;
  const ps = cv.appendChild(document.createElement('p'));
  const btn = cv.appendChild(document.createElement('button'));
  btn.addEventListener('click', e => {
    ps.innerText = String(count++);
  });
  const canvas = select('body')
    .append('canvas')
    .attr('width', 200)
    .attr('height', 200)
    .node()!
    .getContext('2d')!;
  for (const x of range(200)) {
    canvas.beginPath();
    canvas.moveTo(x, 0);
    canvas.strokeStyle = interpolateCubehelixDefault(x / 200);
    canvas.lineTo(x, 200);
    canvas.stroke();
  }
})();