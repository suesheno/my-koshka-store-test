import { DOTS, usePagination } from '@/lib/hooks/usePagination';
import { cx } from 'class-variance-authority';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  onPageChange: any;
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length! < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange![paginationRange!.length - 1];
  return (
    <div className='w-full flex gap-x-20 justify-center'>
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={cx(currentPage === 1 && 'disabled:opacity-25')}>
        <ChevronLeft
          size={90}
          strokeWidth={0.5}
          className='tablet:w-auto tablet:h-auto 2xsmall:w-[52px] 2xsmall:h-[52px]'
        />
      </button>
      <ul className='flex gap-5 text-xl font-raleway text-gray-80 items-center'>
        {paginationRange!.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li key={`page${pageNumber}`} className='pagination-item dots'>
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={`page${pageNumber}`}
              className={cx(
                'cursor-pointer',
                pageNumber === currentPage && 'text-secondary'
              )}
              onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </li>
          );
        })}
      </ul>
      <button
        onClick={onNext}
        className={cx(currentPage === lastPage && 'disabled:opacity-25')}
        disabled={currentPage === lastPage}>
        <ChevronRight
          size={90}
          strokeWidth={0.5}
          className='tablet:w-auto tablet:h-auto 2xsmall:w-[52px] 2xsmall:h-[52px]'
        />
      </button>
    </div>
  );
};

export default Pagination;
