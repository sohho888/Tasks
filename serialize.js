export function serialize(node) {
  if (node === undefined || node === null) {
    return "null";
  }

  const { value, left, right } = node;

  return `${value},${serialize(left)},${serialize(right)}`;
}

export function deserialize() {}
