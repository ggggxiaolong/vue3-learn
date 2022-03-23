export interface Item {
  readonly label: string;
  value: number;
}

export function value2Point(
  value: number,
  index: number,
  total: number
): [number, number] {
    console.log(value)
  const x = 0;
  const y = -value * 0.8;
  const angle = ((Math.PI * 2) / total) * index;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const tx = x * cos - y * sin + 100;
  const ty = x * sin + y * cos + 100;
  return [tx, ty];
}
