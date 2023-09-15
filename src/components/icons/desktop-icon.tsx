import { FC } from 'react';

import { SVGSVGProps } from '@/types/html';

export const DesktopIcon: FC<SVGSVGProps> = ({ ...rest }) => (
  <svg width="100%" height="100%" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <g clipPath="url(#clip0_66_382)">
      <path
        d="M22.9167 0.5H2.08333C0.93316 0.5 0 1.43316 0 2.58333V16.4722C0 17.6224 0.93316 18.5556 2.08333 18.5556H10.4167L9.72222 20.6389H6.59722C6.01997 20.6389 5.55556 21.1033 5.55556 21.6806C5.55556 22.2578 6.01997 22.7222 6.59722 22.7222H18.4028C18.98 22.7222 19.4444 22.2578 19.4444 21.6806C19.4444 21.1033 18.98 20.6389 18.4028 20.6389H15.2778L14.5833 18.5556H22.9167C24.0668 18.5556 25 17.6224 25 16.4722V2.58333C25 1.43316 24.0668 0.5 22.9167 0.5ZM22.2222 15.7778H2.77778V3.27778H22.2222V15.7778Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_66_382">
        <rect width="25" height="25" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);
