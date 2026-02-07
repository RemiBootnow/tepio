// iOS-style smooth corners (squircle) paint worklet
// Registers a CSS Paint API worklet for continuous corner radius

if (typeof registerPaint !== 'undefined') {
  class SmoothCornersPainter {
    static get inputProperties() {
      return ['--smooth-corners', 'border-radius'];
    }

    superellipse(a, b, nX, nY, ctx) {
      const n2X = 2 / nX;
      const n2Y = 2 / nY;
      const steps = 360;
      const step = (2 * Math.PI) / steps;
      const offset = Math.PI / 2;

      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const t = i * step - offset;
        const cosT = Math.cos(t);
        const sinT = Math.sin(t);
        const x = Math.abs(cosT) ** n2X * a * Math.sign(cosT);
        const y = Math.abs(sinT) ** n2Y * b * Math.sign(sinT);
        if (i === 0) {
          ctx.moveTo(a + x, b + y);
        } else {
          ctx.lineTo(a + x, b + y);
        }
      }
      ctx.closePath();
    }

    paint(ctx, size, properties) {
      const smoothness = parseFloat(properties.get('--smooth-corners')) || 0.6;
      const borderRadius = properties.get('border-radius').toString();

      // Parse border radius (simplified - assumes uniform radius)
      let radius = 0;
      const match = borderRadius.match(/(\d+(?:\.\d+)?)(px|rem|%)?/);
      if (match) {
        radius = parseFloat(match[1]);
        if (match[2] === 'rem') radius *= 16;
        if (match[2] === '%') radius = Math.min(size.width, size.height) * (radius / 100);
      }

      const width = size.width;
      const height = size.height;

      // Calculate smoothness factor (higher = more square-like)
      const n = 2 + (1 - smoothness) * 3;

      if (radius >= Math.min(width, height) / 2) {
        // Full pill shape
        this.superellipse(width / 2, height / 2, n, n, ctx);
        ctx.translate(width / 2, height / 2);
      } else {
        // Rounded rectangle with smooth corners
        ctx.beginPath();
        ctx.moveTo(radius, 0);
        ctx.lineTo(width - radius, 0);
        ctx.arcTo(width, 0, width, radius, radius);
        ctx.lineTo(width, height - radius);
        ctx.arcTo(width, height, width - radius, height, radius);
        ctx.lineTo(radius, height);
        ctx.arcTo(0, height, 0, height - radius, radius);
        ctx.lineTo(0, radius);
        ctx.arcTo(0, 0, radius, 0, radius);
        ctx.closePath();
      }

      ctx.fillStyle = 'black';
      ctx.fill();
    }
  }

  registerPaint('smooth-corners', SmoothCornersPainter);
}
