import { useCallback } from "react";
import { ApplicationModal, setOpenModal } from "./reducer";
import { RootState, useAppDispatch, useAppSelector } from "../..";

export function useModalOpen(modal: ApplicationModal): boolean {
  const openModal = useAppSelector(
    (state: RootState) => state.application.openModal,
  );
  return openModal === modal;
}

export function useToggleModal(modal: ApplicationModal): () => void {
  const open = useModalOpen(modal);
  const dispatch = useAppDispatch();
  return useCallback(
    () => dispatch(setOpenModal(open ? null : modal)),
    [dispatch, modal, open],
  );
}

export function useOpenModal(modal: ApplicationModal): () => void {
  const dispatch = useAppDispatch();
  return useCallback(() => dispatch(setOpenModal(modal)), [dispatch, modal]);
}

export function useWalletModalToggle(): () => void {
  return useToggleModal(ApplicationModal.WALLET);
}
