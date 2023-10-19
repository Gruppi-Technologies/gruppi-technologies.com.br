import { FC } from 'react';
import { Props as ModalProps } from 'react-modal';

import { EmailIcon } from '@/components/icons/email-icon';
import { PhoneIcon } from '@/components/icons/phone-icon';
import globalConfig from '@/config/global-config/global-config';

import Modal from '../modal/modal';
import { IconWrapper, InfoText, InfoWrapper, InformationContainer, InformationContent } from './styles';

interface Props extends ModalProps {}

export const ContactInfoModal: FC<Props> = ({ isOpen = false, ...rest }) => {
  return (
    <Modal isOpen={isOpen} {...rest}>
      <Modal.Content>
        <InformationContainer>
          <InformationContent>
            <InfoWrapper>
              <IconWrapper>
                <PhoneIcon />
              </IconWrapper>
              <InfoText>{globalConfig.whatsappNumber()}</InfoText>
            </InfoWrapper>
            <InfoWrapper>
              <IconWrapper>
                <EmailIcon />
              </IconWrapper>
              <InfoText>{globalConfig.mailAddress()}</InfoText>
            </InfoWrapper>
          </InformationContent>
        </InformationContainer>
      </Modal.Content>
    </Modal>
  );
};
