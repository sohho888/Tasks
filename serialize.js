export function serialize(node) {
  const { value, left, right } = node;

  return `${node.value},${node.left ?? null},${node.right ?? null}`;
}

export function deserialize() {}
