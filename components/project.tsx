import React from 'react'
import { projectsData } from '@/lib/data';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  return (
    <div>{title}</div>
  )
}
