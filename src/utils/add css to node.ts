export function css(element: { style: { [x: string]: any; }; }, style: { [x: string]: any; }) {
  for (const property in style)
      element.style[property] = style[property];
} 