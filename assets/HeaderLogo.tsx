import React from "react";

function HeaderLogo() {
  return (
    <svg
      className="h-5 w-[130px] xl:h-7.5 xl:w-[206px]"
      viewBox="0 0 207 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M106.302 8.29483V28.6264H101.47V9.17629C101.47 8.6619 101.263 8.16858 100.894 7.80486C100.525 7.44113 100.024 7.23679 99.5023 7.23679H79.7748V2.47486H100.404C101.969 2.47678 103.469 3.0908 104.575 4.18205C105.681 5.2733 106.302 6.75253 106.302 8.29483ZM113.533 17.9287H140.056V13.1653H113.533V17.9287ZM113.533 28.6191H140.056V23.8572H113.533V28.6191ZM113.533 7.23679H140.056V2.47486H113.533V7.23679ZM78.9935 18.9288L71.2805 5.16412C70.7004 4.16206 69.8603 3.33015 68.8463 2.75377C67.8323 2.1774 66.681 1.87732 65.5104 1.88433C64.3398 1.87757 63.1884 2.17808 62.1746 2.75499C61.1608 3.33191 60.3211 4.16442 59.7418 5.16701L46.598 28.6148H52.0464L63.8818 7.49732C64.0492 7.21828 64.2875 6.98705 64.5732 6.82643C64.859 6.66581 65.1822 6.58133 65.5112 6.58133C65.8401 6.58133 66.1633 6.66581 66.4491 6.82643C66.7348 6.98705 66.9731 7.21828 67.1405 7.49732L74.7434 21.0637C74.9094 21.3473 74.9967 21.6689 74.9966 21.9963C74.9965 22.3236 74.9091 22.6452 74.743 22.9287C74.5769 23.2122 74.3381 23.4476 74.0505 23.6114C73.7629 23.7751 73.4366 23.8614 73.1045 23.8615H58.0294V28.5685H73.1015C74.2506 28.569 75.3803 28.2765 76.3808 27.7195C77.3814 27.1625 78.2187 26.3599 78.8114 25.3896C79.4041 24.4194 79.7321 23.3146 79.7635 22.1825C79.7949 21.0504 79.5286 19.9295 78.9906 18.9288H78.9935ZM147.293 8.29194V28.6264H152.125V9.17629C152.125 8.92147 152.176 8.66915 152.275 8.43374C152.374 8.19834 152.519 7.98446 152.702 7.80434C152.884 7.62423 153.102 7.48139 153.34 7.38401C153.579 7.28662 153.835 7.2366 154.094 7.23679H173.822V2.47486H153.198C151.632 2.47486 150.13 3.08804 149.023 4.17949C147.915 5.27095 147.293 6.75128 147.293 8.29483V8.29194ZM188.086 6.58256C188.416 6.57938 188.74 6.66252 189.027 6.8235C189.313 6.98447 189.551 7.21749 189.716 7.49877L201.55 28.6264H206.998L193.856 5.17859C193.276 4.17589 192.436 3.34332 191.422 2.7664C190.408 2.18949 189.257 1.88904 188.086 1.89591C186.915 1.88904 185.763 2.18949 184.749 2.7664C183.735 3.34332 182.895 4.17589 182.316 5.17859L174.601 18.9288C174.065 19.9295 173.8 21.05 173.832 22.1814C173.864 23.3128 174.192 24.4168 174.785 25.3863C175.378 26.3558 176.215 27.1579 177.215 27.7147C178.214 28.2715 179.343 28.5641 180.492 28.5641H195.568V23.8673H180.495C180.162 23.8674 179.836 23.7813 179.548 23.6177C179.26 23.4541 179.021 23.2186 178.855 22.9351C178.689 22.6516 178.601 22.3299 178.601 22.0024C178.601 21.6749 178.688 21.3532 178.854 21.0695L186.463 7.50166C186.627 7.22126 186.864 6.98876 187.149 6.82782C187.434 6.66689 187.757 6.58326 188.086 6.58546V6.58256ZM32.269 18.8854C32.9596 20.0632 33.3234 21.3995 33.3237 22.7598C33.324 24.1201 32.9608 25.4566 32.2707 26.6347C31.5806 27.8128 30.5879 28.791 29.3924 29.4709C28.1969 30.1509 26.8409 30.5085 25.4606 30.508H7.87138C6.49125 30.5083 5.13537 30.1504 3.9401 29.4704C2.74483 28.7903 1.75232 27.8121 1.06238 26.6341C0.372436 25.456 0.00939572 24.1197 0.00976591 22.7595C0.0101361 21.3992 0.373904 20.0631 1.06448 18.8854L9.85984 3.87594C10.5495 2.69828 11.5415 1.72031 12.7363 1.04036C13.931 0.360411 15.2864 0.00244141 16.666 0.00244141C18.0456 0.00244141 19.401 0.360411 20.5957 1.04036C21.7905 1.72031 22.7825 2.69828 23.4722 3.87594L32.269 18.8854ZM9.30619 9.10827L11.9952 13.7066C12.1545 13.9783 12.3836 14.2039 12.6594 14.3607C12.9353 14.5174 13.2481 14.5999 13.5666 14.5997H19.8492C20.1675 14.5997 20.4803 14.5172 20.7562 14.3605C21.032 14.2037 21.2611 13.9782 21.4205 13.7066L24.1022 9.12564L21.3119 4.35937L17.7579 10.4254C17.6518 10.607 17.499 10.7578 17.3149 10.8626C17.1308 10.9675 16.9219 11.0227 16.7093 11.0227C16.4967 11.0227 16.2878 10.9675 16.1038 10.8626C15.9197 10.7578 15.7669 10.607 15.6608 10.4254L12.095 4.34634L9.30619 9.10827ZM15.5712 22.048L12.4357 16.6854C12.2768 16.4135 12.0481 16.1877 11.7725 16.0307C11.4969 15.8737 11.1842 15.7909 10.8658 15.7909H5.47024L2.67993 20.5586H9.80991C10.0224 20.5588 10.2311 20.6141 10.4151 20.7189C10.5991 20.8237 10.7519 20.9744 10.8581 21.1558C10.9644 21.3372 11.0203 21.5429 11.0204 21.7523C11.0204 21.9618 10.9646 22.1676 10.8585 22.349L7.3045 28.415H12.8851L15.5682 23.8355C15.7274 23.5639 15.8115 23.2558 15.812 22.9421C15.8125 22.6284 15.7295 22.3201 15.5712 22.048ZM23.597 20.5586H30.7255L27.9352 15.7909H22.544C22.2257 15.7909 21.913 15.8737 21.6374 16.0307C21.3618 16.1877 21.133 16.4135 20.9741 16.6854L17.8328 22.048C17.6733 22.3196 17.5893 22.6279 17.5893 22.9417C17.5893 23.2556 17.6733 23.5639 17.8328 23.8355L20.513 28.415H26.0936L22.5396 22.349C22.4331 22.1669 22.3773 21.9604 22.3777 21.7502C22.3781 21.54 22.4349 21.3336 22.5422 21.152C22.6494 20.9703 22.8035 20.8198 22.9887 20.7156C23.1739 20.6114 23.3837 20.5573 23.597 20.5586Z"
        fill="#EDEDED"
      ></path>
    </svg>
  );
}

export default HeaderLogo;