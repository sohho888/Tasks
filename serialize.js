export function serialize(node) {
  if (!node) {
    return "null";
  }

  const { value, left, right } = node;

  return `${value},${serialize(left)},${serialize(right)}`;
}

export function deserialize(str) {
  const nodes = str.split(",");

  function buildTree() {
    if (nodes.length === 0) {
      throw new Error("bad format");
    }

    const value = nodes.shift();

    if (value === "null") {
      return;
    }

    const node = {
      left: buildTree(),
      right: buildTree(),
      value: parseInt(value, 10),
    };
    return node;
  }
  return buildTree();
}
