let result = {};
export function serialize(node) {
  if (node === null) {
    return result.stringify(node);
  }

  while (node) {
    if (node.left < node) {
      serialize(node.left);
    } else {
      if (node.right > node) {
        serialize(node.right);
      }
    }
  }
}

export function deserialize() {}
