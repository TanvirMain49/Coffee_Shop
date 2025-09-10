import { useState } from "react";

export const useDashModal = () => {
  const [dashModal, setDashModal] = useState({ isOpen: false, user: null, title: "", message: "", icon: null, actions: [] });

  const openModal = ({ user = null, title = "", message = "", icon = null, actions = [] }) => {
    setDashModal({ isOpen: true, user, title, message, icon, actions });
  };

  const closeModal = () => {
    setDashModal({ isOpen: false, user: null, title: "", message: "", icon: null, actions: [] });
  };

  return { dashModal, openModal, closeModal, setDashModal };
};
