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

const content = document.querySelector('.content');

function render(markdown) {
  let result = [];

  if (typeof markdown === 'string') {
    return markdown;
  }

  let child = markdown.content.map(render);
  console.log(child);

  if (markdown.type === 'document') {
    return child.join('') + '\n\n';
  }

  if (markdown.type === 'paragraph') {
    return child.join('') + '\n\n';
  }
  return child;
}

content.textContent = `${render(markdown)}`;

console.log(content);
