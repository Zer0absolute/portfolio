import {ComponentPropsWithoutRef} from "react";

export const FrenchIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 -4 28 28" fill="none"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g clipPath="url(#clip0_503_2485)">
        <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5"
              strokeWidth="0.5"/>
        <mask id="mask0_503_2485" className="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28"
              height="20">
          <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white"
                strokeWidth="0.5"/>
        </mask>
        <g mask="url(#mask0_503_2485)">
          <rect x="18.6667" width="9.33333" height="20" fill="#F44653"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M0 20H9.33333V0H0V20Z" fill="#1035BB"/>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_503_2485">
          <rect width="28" height="20" rx="2" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

