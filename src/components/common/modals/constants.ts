enum ModalType {
  CONTACT_FORM = 'CONTACT_FORM',
  CONTACT_INFO = 'CONTACT_INFO',
}

export const MODALS: { [key in ModalType]: string } = {
  [ModalType.CONTACT_FORM]: 'contact-form',
  [ModalType.CONTACT_INFO]: 'contact-info',
};
