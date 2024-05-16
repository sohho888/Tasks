export function render(markdown) {
  if (typeof markdown === "string") {
    return markdown;
  }

  let child = markdown.content.map(render).join("");

  if (markdown.type === "document") {
    return child;
  }

  if (markdown.type === "paragraph") {
    return child + "\n";
  }

  if (markdown.type === "heading") {
    return (
      "# " +
      child +
      (markdown.content.some((item) => item.type !== "heading") ? "\n\n" : "")
    );
  }

  if (markdown.type === "bold") {
    return "**" + child + "**";
  }

  if (markdown.type === "italic") {
    return "_" + child + "_";
  }
}
