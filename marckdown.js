const markdown = {
  type: 'document',
  content: [
    {
      type: 'heading',
      content: ['Hello, World!'],
    },
    {
      type: 'paragraph',
      content: [
        'hello, ',
        {
          type: 'bold',
          content: ['world!'],
        },
      ],
    },
  ],
};

export function render(markdown) {
  let result = [];

  if (typeof markdown === 'string') {
    return markdown;
  }

  let child = markdown.content.map(render);

  if (markdown.type === 'document') {
    return child.join('');
  }

  if (markdown.type === 'paragraph') {
    return child.join('') + '\n\n';
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

  return markdown;
}
