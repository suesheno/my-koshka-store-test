import { create } from 'zustand';

interface BackdropProps {
  show: boolean;
  onToggle: (open: boolean) => void;
}

const useBackdrop = create<BackdropProps>((set) => ({
  show: false,
  onToggle: (open: boolean) => set({ show: open }),
}));

export default useBackdrop;
