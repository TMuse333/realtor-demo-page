// lib/properties.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PropertyData } from '@/interfaces/property';

const propertiesDirectory = path.join(process.cwd(), 'properties');

export async function getPropertyData(id: string): Promise<PropertyData> {
  const fullPath = path.join(propertiesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
  } as PropertyData;
}

export async function getAllPropertyIds() {
  const fileNames = fs.readdirSync(propertiesDirectory);

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}
