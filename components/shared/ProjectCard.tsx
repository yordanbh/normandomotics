import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Calendar } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import type { Project } from '@/types';
import { cn, formatDate } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className={cn(
        'group block rounded-2xl overflow-hidden card-hover bg-white border border-border h-full',
        className
      )}
      id={`project-${project.slug}`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] bg-surface-alt overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-dark to-gray-800">
            <span className="text-white/30 text-4xl font-bold">NT</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {project.category && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="brand" size="sm">{project.category}</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-text-primary text-lg mb-2 group-hover:text-brand transition-colors line-clamp-2">
          {project.name}
        </h3>
        {project.description && (
          <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-2">
            {project.description}
          </p>
        )}
        <div className="flex items-center gap-4 text-xs text-text-tertiary">
          {project.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
            </span>
          )}
          {project.date && (
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(project.date)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
