'use client';

import IconCloud from '@/components/magicui/icon-cloud';

const slugs = [
  'typescript',
  'dart',
  'java',
  'react',
  'php',
  'flutter',
  'html5',
  'css3',
  // 'nodedotjs',
  'hono',
  'nextdotjs',
  'drizzle',
  'postgresql',
  'nginx',
  'vercel',
  'jest',
  'docker',
  'git',
  'trello',
  'github',
  'visualstudiocode',
  'figma',
  'notion',
];

export function TechIconCloud() {
  return <IconCloud iconSlugs={slugs} />;
}
