import Link from 'next/link';
import Image from 'next/image';
import { parseISO, format } from "date-fns";

export default function Article({ article }) {
    const { slug, date, title, thumbnail } = article
    return (
        <Link href={`/blog/${slug}`}>
          <a className="p-5 flex flex-row gap-10 hover:bg-opacity-20 hover:bg-gray-300 border-b-2 border-neutral-600">
            <Image src={thumbnail} width={60} height={60} alt={title} />
            <div className="flex flex-col">
              <div className="text-1xl">{title}</div>
              <div className="text-sm mt-2 flex flex-row justify-between align-center">
                <small className="text-slate-400">{format(parseISO(date), "MMM dd, yyyy")}</small>
              </div>
            </div>
          </a>
        </Link>
    );
}