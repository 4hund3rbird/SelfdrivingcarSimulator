function lerp(A,B,t){
    return A+(B-A)*t;
}

function drawDashedLine(ctx, dashLength, dashGap, x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const numDashes = Math.floor(Math.sqrt(dx * dx + dy * dy) / (dashLength + dashGap));
  
    const xIncrement = dx / numDashes;
    const yIncrement = dy / numDashes;
  
    let currentX = x1;
    let currentY = y1;
  
    ctx.beginPath();
  
    for (let i = 0; i < numDashes; i++) {
      if (i % 2 === 0) {
        ctx.moveTo(currentX, currentY);
      } else {
        ctx.lineTo(currentX, currentY);
      }
  
      currentX += xIncrement;
      currentY += yIncrement;
    }
  
    ctx.stroke();
  }
  