import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import type { BlogPost } from '@/types';
import { cn, formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export default function BlogCard({ post, className }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        'group block rounded-2xl overflow-hidden card-hover bg-white border border-border h-full',
        className
      )}
      id={`blog-${post.slug}`}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] bg-surface-alt overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand/10 to-brand/5">
            <span className="text-brand/30 text-3xl font-bold">Blog</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {post.category && (
            <Badge variant="brand" size="sm">{post.category}</Badge>
          )}
          {post.published_at && (
            <span className="flex items-center gap-1 text-xs text-text-tertiary">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.published_at)}
            </span>
          )}
        </div>

        <h3 className="font-bold text-text-primary text-lg mb-2 group-hover:text-brand transition-colors line-clamp-2 leading-tight">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center text-brand text-sm font-semibold gap-1.5 group-hover:gap-3 transition-all duration-300">
          Leer artículo
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
