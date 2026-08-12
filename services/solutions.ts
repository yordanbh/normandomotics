import type { Solution } from '@/types';
import { demoSolutions } from '@/lib/demo-data';

export async function getSolutions(): Promise<Solution[]> {
  return demoSolutions.filter((s) => s.active).sort((a, b) => a.order - b.order);
}

export async function getSolutionsBySegment(
  segment: Solution['segment']
): Promise<Solution[]> {
  return demoSolutions
    .filter((s) => s.segment === segment && s.active)
    .sort((a, b) => a.order - b.order);
}
