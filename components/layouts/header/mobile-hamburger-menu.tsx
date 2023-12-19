import useBackdrop from '@/store/useBackdrop';
import { FC } from 'react';

interface Props {
  open: boolean;
  toggleMenu: () => void;
}

const MobileHamburgerMenu: FC<Props> = ({ open, toggleMenu }) => {
  const backdropToggle = useBackdrop((state) => state.onToggle);

  const handleClick = () => {
    toggleMenu();
    backdropToggle(!open);
  };

  return (
    <button
      onClick={handleClick}
      className='flex flex-col justify-center items-center xltablet:hidden'>
      <span
        className={`bg-white block transition-all duration-300 ease-out h-[3px] w-6 rounded-sm ${
          open ? 'rotate-45 translate-y-[4px]' : '-translate-y-0.5'
        }`}></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out h-[3px] w-6 rounded-sm my-0.5 ${
          open ? 'opacity-0' : 'opacity-100'
        }`}></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out h-[3px] w-6 rounded-sm ${
          open ? '-rotate-45 -translate-y-[6px]' : 'translate-y-0.5'
        }`}></span>
    </button>
  );
};

export default MobileHamburgerMenu;
