import { create } from "zustand";

interface LoginModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

// Create a store for the register modal
const useRegisterModal = create<LoginModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;