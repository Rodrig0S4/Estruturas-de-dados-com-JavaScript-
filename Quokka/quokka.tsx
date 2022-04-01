const tags = new Set([]);

tags.add('js');
tags.add('javacript');
tags.add('js');
tags.add('js');
tags.add('js');
tags.add('js');
tags.add('js');
tags.add('js');

const result = Array.from(tags);

console.log(result); ['js', 'javascript']