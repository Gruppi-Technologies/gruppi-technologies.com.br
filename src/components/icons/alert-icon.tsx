import { FC } from 'react';

import { SVGSVGProps } from '@/types/html';

export const AlertIcon: FC<SVGSVGProps> = ({ ...rest }) => (
  <svg width="100%" height="100%" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      d="M7.00035 13.584C10.2222 13.584 12.834 10.9722 12.834 7.75035C12.834 4.52851 10.2222 1.91669 7.00035 1.91669C3.77851 1.91669 1.16669 4.52851 1.16669 7.75035C1.16669 10.9722 3.77851 13.584 7.00035 13.584Z"
      stroke="currentColor"
      strokeWidth="1.60426"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 5.125V7.45847"
      stroke="currentColor"
      strokeWidth="1.60426"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 9.79169H7.0055"
      stroke="currentColor"
      strokeWidth="1.60426"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
