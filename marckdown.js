export function render(markdown) {
  let result = [];

  if (typeof markdown === "string") {
    return markdown;
  }

  let child = markdown.content.map(render);
  console.log(child);

  if (markdown.type === "document") {
    return child.join("") + "\n\n";
  }

  if (markdown.type === "paragraph") {
    return child.join("") + "\n\n";
  }
  return child;
}
