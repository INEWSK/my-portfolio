'use client';

import { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from 'react-icon-cloud';
import useMounted from '@/hooks/use-mounted';

export const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
  const minContrastRatio = theme === 'dark' ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
        e.preventDefault(),
    },
  });
};

const renderPlaceholderIcon = (theme: string) =>
  renderCustomIcon(
    {
      slug: 'loading',
      title: 'Loading',
      path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
      hex: '#6e6e73',
    },
    theme
  );

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();
  const mounted = useMounted();

  useEffect(() => {
    if (!iconSlugs.length) return;
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) {
      return Array.from({ length: iconSlugs.length }).map(() =>
        renderPlaceholderIcon(theme || 'light')
      );
    }

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || 'light')
    );
  }, [iconSlugs, data, theme]);

  return (
    mounted && (
      // @ts-expect-error - `children` is required
      <Cloud {...cloudProps}>
        <>{renderedIcons}</>
      </Cloud>
    )
  );
}
