const shapes = {
  circle: function (color) {
    //depending on the color keyword passed in, the color will change, but the shape will remain the same
    return `<svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${color}" />
        </svg>`;
  },
  square: function (color) {
    // creates a square with the color passed in
    return `<svg height="100" width="100">
        <rect width="100" height="100" style="fill:${color};stroke-width:3;stroke:rgb(0,0,0)" />
        </svg>`;
  },
  triangle: function (color) {
    // triangle with the color passed in
    return `<svg height="100" width="100">
        <polygon points="50,0 100,100 0,100" style="fill:${color};stroke:black;stroke-width:3" />
        </svg>`;
  },
};

test('circle function should generate a valid SVG for the given color', () => {
  const color = 'blue';
  const expectedSVG = `<svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${color}" />
        </svg>`;
  expect(shapes.circle(color)).toBe(expectedSVG);
});

// Test cases for the square function
test('square function should generate a valid SVG for the given color', () => {
  const color = 'green';
  const expectedSVG = `<svg height="100" width="100">
        <rect width="100" height="100" style="fill:${color};stroke-width:3;stroke:rgb(0,0,0)" />
        </svg>`;
  expect(shapes.square(color)).toBe(expectedSVG);
});

// Test cases for the triangle function
test('triangle function should generate a valid SVG for the given color', () => {
  const color = 'red';
  const expectedSVG = `<svg height="100" width="100">
        <polygon points="50,0 100,100 0,100" style="fill:${color};stroke:black;stroke-width:3" />
        </svg>`;
  expect(shapes.triangle(color)).toBe(expectedSVG);
});