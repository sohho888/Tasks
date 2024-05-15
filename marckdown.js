export function render(markdown) {
  if (typeof markdown === 'string') {
    return markdown;
  }

  let child = markdown.content.map(render);

  if (markdown.type === 'document') {
    return child.join('');
  }

  for (let i = 0; i <= child.length; i++) {
    if (markdown.type === 'paragraph') {
      return child.join('') + '\n';
    }

    if (markdown.type === 'heading') {
      return child.join('#');
    }

    if (markdown.type === 'bold') {
      return child.join('**');
    }

    if (markdown.type === 'italic') {
      return child.join('_');
    }
  }
}
