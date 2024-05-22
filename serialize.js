export function serialize(node) {
  if (node === undefined || node === null) {
    return "null";
  }

  const { value, left, right } = node;

  return `${value},${serialize(left)},${serialize(right)}`;
}

export function deserialize(str) {
  const nodes = str.split(",");

  function buildTree() {
    if (nodes.length === 0) {
      return null;
      const value = nodes.shift();
    }
    if (value === "null") {
      return null;
    }
    const node = {
      value: parseInt(value, 10),
      left: buildTree(),
      right: buildTree(),
    };
    return node;
  }

  return buildTree();
}
