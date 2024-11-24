import { HTMLAttributes } from "react";


export default (props: HTMLAttributes<SVGAElement>) => (
  <svg
    className={props?.className}
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    fill="none"
    viewBox="0 0 17 16"
  >
    <path
      fill="#4C40F7"
      d="M16.017 6.321a.45.45 0 0 0-.359-.302l-5.003-.712L8.403.781a.443.443 0 0 0-.797.003l-2.222 4.54-5.004.744a.45.45 0 0 0-.358.303.44.44 0 0 0 .115.454l3.63 3.52-.839 4.983c-.03.168.04.336.178.435a.44.44 0 0 0 .468.033l4.467-2.367 4.48 2.34q.1.05.204.05a.447.447 0 0 0 .431-.547l-.865-4.954 3.608-3.539a.44.44 0 0 0 .118-.458"
    ></path>
  </svg>
)