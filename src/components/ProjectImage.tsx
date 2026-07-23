"use client";

import Image from "next/image";
import { useState } from "react";

const PLACEHOLDER = "/placeholder-project.svg";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function ProjectImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
  fill,
  width,
  height,
}: ProjectImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
        onError={() => setImgSrc(PLACEHOLDER)}
      />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width ?? 800}
      height={height ?? 450}
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setImgSrc(PLACEHOLDER)}
    />
  );
}
