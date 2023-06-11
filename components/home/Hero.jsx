
function Hero() {
    return (
        <section className="overflow-x-hidden  py-10 bg-contain bg-center bg-no-repeat font-sans" style={{ backgroundImage: `url('/images/header/header-bg.png')` }}>

            <div className="container">
                <div className="flex flex-col items-center justify-center lg:w-full lg:items-start my-10">
                    {/* Title For Small Devices */}
                    <h1 className="block lg:hidden text-white text-6xl font-mono lg:text-8xl font-semibold">
                        <div className="font-extrabold">
                            Snails
                        </div>
                        <div className="font-extrabold text-shadow">
                            Move
                        </div>
                        <div>
                            slowly
                        </div>
                        <div className="flex flex-row gap-x-3 items-center" >
                            but
                            <svg className="animate-spin" width="50" height="50" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="52" cy="52" r="51.632" stroke="white" strokeWidth="0.735905" />
                                <circle cx="51" cy="52" r="18.632" stroke="white" strokeWidth="0.735905" />
                                <path d="M55.4375 54.503C55.3533 54.4194 55.3001 54.3049 55.3001 54.1728L55.3001 49.2934L50.3861 49.2934C50.1288 49.2934 49.916 49.082 49.916 48.8266C49.916 48.5712 50.1288 48.3598 50.3861 48.3598L55.7702 48.3598C56.0274 48.3598 56.2403 48.5712 56.2403 48.8266L56.2403 54.1728C56.2403 54.4282 56.0274 54.6396 55.7702 54.6396C55.6416 54.644 55.5218 54.5867 55.4375 54.503Z" fill="white" />
                                <path d="M47.8986 56.6426C47.7167 56.4621 47.7167 56.1626 47.8986 55.9821L55.3627 48.5705C55.5445 48.39 55.8461 48.39 56.0279 48.5705C56.2098 48.7511 56.2098 49.0505 56.0279 49.2311L48.5638 56.6426C48.382 56.8232 48.0804 56.8232 47.8986 56.6426Z" fill="white" />
                                <path d="M26.5325 24.6704L25.9781 24.0215L28.002 22.3138L28.5565 22.9627L26.5325 24.6704Z" fill="white" />
                                <path d="M18.0033 32.7675C17.4743 32.5782 16.9663 32.6388 16.4795 32.9493C15.9905 33.2551 15.5423 33.9374 15.1348 34.9961C14.713 36.0922 14.5933 36.9364 14.7757 37.5286C14.922 38.0017 15.2432 38.3755 15.7395 38.65L18.0033 32.7675ZM20.0044 31.8483C20.4396 32.119 20.7433 32.4978 20.9155 32.9847C21.0855 33.4669 21.1432 33.9824 21.0883 34.5312C21.03 35.0788 20.7971 35.8819 20.3897 36.9406C19.7281 38.6597 19.0261 39.7372 18.2839 40.1731C17.5382 40.6077 16.6471 40.628 15.6106 40.234C14.5979 39.8491 13.9614 39.2384 13.701 38.402C13.4371 37.5642 13.6229 36.3198 14.2583 34.6688C14.9002 33.0007 15.6036 31.955 16.3684 31.5316C17.1299 31.1069 17.9947 31.0786 18.9631 31.4466L19.3152 31.598L16.4874 38.9459C17.0824 39.1058 17.6021 39.0555 18.0462 38.7951C18.5758 38.4852 19.0621 37.7549 19.5049 36.6043C19.7747 35.9031 19.9226 35.3818 19.9485 35.0404C19.9709 34.6977 19.9451 34.3738 19.871 34.0686C19.7983 33.76 19.6541 33.5101 19.4385 33.3189L20.0044 31.8483Z" fill="white" />
                                <path d="M17.4425 46.0707C17.313 47.6228 17.0617 48.7477 16.6887 49.4453C16.3121 50.1426 15.7312 50.4589 14.946 50.3941L15.0684 48.9274C15.4901 48.9622 15.8141 48.6979 16.0404 48.1347C16.2668 47.5714 16.4189 46.8227 16.4969 45.8885C16.5685 45.0306 16.5529 44.3614 16.4503 43.8808C16.3443 43.3963 16.115 43.1395 15.7624 43.1105C15.2862 43.0712 14.9971 43.3548 14.8953 43.9613C14.7934 44.5678 14.6992 45.3249 14.6124 46.2328C14.5129 47.2933 14.3215 48.2272 14.0382 49.0347C13.7552 49.8385 13.2083 50.207 12.3977 50.1402C11.7397 50.086 11.3 49.6966 11.0786 48.972C10.8576 48.2437 10.8039 47.198 10.9177 45.8349C11.052 44.2247 11.3016 43.0759 11.6664 42.3886C12.0312 41.7013 12.5717 41.3872 13.2879 41.4462L13.1664 42.902C12.7701 42.8693 12.4737 43.1322 12.277 43.6906C12.0804 44.249 11.9415 45.0135 11.8605 45.984C11.789 46.8419 11.8004 47.4943 11.8949 47.9412C11.9857 48.3879 12.2129 48.6262 12.5764 48.6562C13.009 48.6919 13.2941 48.3896 13.4317 47.7495C13.5657 47.1091 13.6789 46.3443 13.7714 45.4553C13.883 44.3811 14.0514 43.4599 14.2765 42.6915C14.502 41.9196 15.0201 41.567 15.8307 41.6338C16.5469 41.6928 17.027 42.0581 17.2711 42.7297C17.5155 43.3977 17.5726 44.5113 17.4425 46.0707Z" fill="white" />
                                <path d="M9.07569 58.2188L10.2931 58.0022L10.5684 59.5704L9.35096 59.787L9.07569 58.2188ZM11.3393 59.4367L11.064 57.8686L17.3822 56.7732L17.6575 58.3414L11.3393 59.4367Z" fill="white" />
                                <path d="M19.2069 63.8273C19.9472 65.4019 20.2297 66.6199 20.0543 67.4815C19.879 68.3431 19.2802 69.0112 18.2579 69.4859C17.2489 69.9544 16.3523 69.9806 15.5682 69.5645C14.7841 69.1484 14.022 68.1531 13.2817 66.5785C12.5523 65.0271 12.279 63.8972 12.4619 63.189C12.6433 62.4774 13.0461 61.9324 13.6703 61.5541L14.3058 62.9059C14.0038 63.0863 13.7977 63.4153 13.6876 63.8927C13.5742 64.3716 13.7565 65.1194 14.2345 66.1361C14.714 67.1561 15.2305 67.8131 15.7839 68.1071C16.3324 68.3994 16.9375 68.3919 17.5991 68.0847C18.274 67.7713 18.6723 67.3109 18.7938 66.7035C18.9104 66.0944 18.7306 65.2831 18.2541 64.2697C17.7777 63.2563 17.3249 62.6361 16.8957 62.4091C16.4617 62.1803 16.0665 62.1286 15.7102 62.2538L15.0747 60.902C15.8036 60.6521 16.4926 60.6901 17.1416 61.0161C17.7906 61.3421 18.4791 62.2792 19.2069 63.8273Z" fill="white" />
                                <path d="M19.1486 72.6327C18.7357 73.0135 18.5557 73.49 18.6086 74.0622C18.6564 74.6341 19.0593 75.342 19.8172 76.1861C20.6019 77.06 21.3008 77.5517 21.9139 77.6613C22.4039 77.7484 22.8859 77.6355 23.3598 77.3225L19.1486 72.6327ZM19.2498 70.4442C19.6922 70.1835 20.1706 70.0884 20.6848 70.1589C21.1939 70.229 21.681 70.4138 22.1459 70.7133C22.6082 71.0151 23.2182 71.5881 23.9761 72.4321C25.2068 73.8027 25.8458 74.9156 25.893 75.7707C25.9375 76.6283 25.545 77.4249 24.7153 78.1606C23.9048 78.8794 23.0659 79.1626 22.1987 79.0103C21.3288 78.8603 20.3028 78.1272 19.1209 76.8109C17.9267 75.4811 17.3168 74.3815 17.2911 73.5121C17.2627 72.6452 17.636 71.868 18.4111 71.1807L18.7086 70.9388L23.9688 76.797C24.3859 76.3443 24.5805 75.8621 24.5525 75.3506C24.5198 74.741 24.0916 73.9775 23.2679 73.0602C22.7659 72.5011 22.3684 72.1321 22.0754 71.9532C21.7796 71.7767 21.4784 71.6514 21.1716 71.5773C20.8625 71.5004 20.5728 71.5136 20.3026 71.6167L19.2498 70.4442Z" fill="white" />
                                <path d="M26.2224 81.04C25.9678 81.4357 25.9047 81.817 26.0331 82.1837C26.1595 82.5536 26.6121 82.9859 27.391 83.4808C28.1884 83.9874 28.8787 84.1819 29.4619 84.0641C29.9542 83.9663 30.3537 83.7297 30.6604 83.3541L32.5786 80.3724L33.9224 81.2262L30.4087 86.6881L29.0648 85.8342L29.571 85.0474C29.5868 85.0228 29.6052 85.0043 29.6263 84.9918L30.1053 84.8034L30.1443 84.6921C29.8958 84.8021 29.6107 84.8846 29.2891 84.9396C28.4637 85.0764 27.4985 84.7937 26.3932 84.0914C25.3557 83.4322 24.7136 82.819 24.467 82.2518C24.2173 81.6826 24.3529 80.9931 24.8739 80.1832L26.2224 81.04Z" fill="white" />
                                <path d="M42.8276 82.7177L44.3557 83.1648L41.9161 91.4011L40.388 90.954L40.6304 90.1357C40.6366 90.1147 40.6508 90.0922 40.6731 90.0684L40.8615 89.9525C40.6797 90.0399 40.4625 90.1245 40.2099 90.2065C39.401 90.4715 38.3297 90.4089 36.9958 90.0188C35.7005 89.6398 34.8097 89.0961 34.3234 88.3876C33.8336 87.6781 33.7441 86.7987 34.0549 85.7495C34.3657 84.7003 34.9193 84.0128 35.7157 83.6871C36.5086 83.3604 37.5528 83.3865 38.8481 83.7655C40.1819 84.1556 41.1165 84.6799 41.652 85.3382C41.8304 85.5576 41.9742 85.7593 42.0833 85.9432L41.9644 85.7089C41.9587 85.6768 41.9589 85.6503 41.9652 85.6293L42.8276 82.7177ZM41.0521 86.0919C40.6757 85.5903 39.9903 85.1941 38.9961 84.9033C37.9773 84.6053 37.2088 84.5799 36.6904 84.8274C36.171 85.0783 35.8113 85.5412 35.6114 86.2162C35.4104 86.8947 35.4604 87.4775 35.7612 87.9645C36.062 88.4515 36.7218 88.8441 37.7406 89.1421C38.7348 89.4329 39.5268 89.4689 40.1166 89.25C40.6687 89.0429 41.0228 88.7208 41.1789 88.2838L41.4151 87.4864C41.5252 87.0246 41.4042 86.5597 41.0521 86.0919Z" fill="white" />
                                <path d="M61.0747 87.2647L61.2659 88.0966L58.6834 88.6826L58.4923 87.8507L61.0747 87.2647Z" fill="white" />
                                <path d="M71.2204 80.0249C72.0351 79.3445 72.68 79.0197 73.1551 79.0506C73.6303 79.0814 74.0975 79.3684 74.5568 79.9115L76.6873 82.4306L78.0899 81.2591L78.7682 82.0612L78.3945 82.3733C78.2265 82.5136 78.0951 82.6661 78.0004 82.8309C77.9028 82.9979 77.8415 83.1655 77.8166 83.3337C77.7912 83.507 77.8013 83.6743 77.8471 83.8357C77.8924 84.0023 77.9727 84.1538 78.0881 84.2902L78.7524 85.0756L77.5304 86.0963L76.8661 85.3109C76.7319 85.1522 76.6442 84.9949 76.6032 84.839C76.5594 84.6855 76.5491 84.5349 76.5723 84.3873C76.595 84.2447 76.6471 84.1086 76.7284 83.9788C76.8093 83.8542 76.9062 83.74 77.0191 83.6362L76.9626 83.5694L73.0489 86.8383L72.3705 86.0362L75.4695 83.4477L73.6005 81.2378C73.2637 80.8395 72.9415 80.6619 72.6339 80.7049C72.3263 80.7479 71.9836 80.9273 71.6057 81.243C71.1494 81.6241 70.5052 82.1645 69.6734 82.8641L68.9067 81.9575C69.8417 81.1765 70.6129 80.5323 71.2204 80.0249Z" fill="white" />
                                <path d="M82.9282 72.4156C82.291 71.9839 81.7357 71.8038 81.2621 71.8751C80.7886 71.9464 80.2785 72.3807 79.7317 73.1778C79.154 74.02 78.9147 74.7655 79.0138 75.4142C79.0968 75.9638 79.3639 76.4289 79.815 76.8094L82.542 78.6566L81.6414 79.9696L76.337 76.3764L77.2375 75.0634L78.0484 75.6126C78.0725 75.629 78.0906 75.6478 78.1025 75.6691L78.3374 76.1586C78.2546 75.944 78.1858 75.7057 78.131 75.4439C77.9365 74.528 78.2736 73.4368 79.1422 72.1705C79.8684 71.1116 80.588 70.5043 81.3009 70.3484C82.0168 70.1945 82.8262 70.4234 83.7292 71.0351L86.4924 72.9069L85.5918 74.2199L82.9282 72.4156Z" fill="white" />
                                <path d="M84.6841 61.0921L85.1396 59.5665L93.487 62.0165L93.0315 63.5421L90.0108 62.6628C89.9863 62.6556 89.9656 62.6419 89.9488 62.6217L89.8115 62.393C89.9066 62.5846 89.9977 62.8149 90.0849 63.084C90.3463 63.8912 90.2783 64.9606 89.8807 66.2923C89.4716 67.6623 88.9359 68.5768 88.2736 69.0356C87.6137 69.4989 86.7258 69.566 85.6097 69.2369C84.4972 68.9088 83.7862 68.3702 83.477 67.6211C83.1666 66.8756 83.216 65.8177 83.6251 64.4476C84.0227 63.116 84.5526 62.1827 85.2148 61.6479C85.4208 61.4805 85.61 61.3442 85.7822 61.2391L85.5825 61.3342C85.5573 61.342 85.5308 61.3418 85.5028 61.3335L84.6841 61.0921ZM85.9669 62.2461C85.4625 62.6222 85.0621 63.3065 84.7658 64.2991C84.4402 65.3896 84.4057 66.1742 84.6625 66.6531C84.9217 67.1364 85.3889 67.4776 86.0641 67.6767C86.7429 67.8769 87.3217 67.8441 87.8008 67.5785C88.2787 67.3163 88.6805 66.64 89.0061 65.5495C89.3025 64.5569 89.3442 63.7668 89.1314 63.1793C88.9266 62.6283 88.6005 62.2736 88.153 62.115L87.3553 61.8798C86.9037 61.7732 86.4409 61.8953 85.9669 62.2461Z" fill="white" />
                                <path d="M87.2735 42.3389L88.1062 42.1518L88.6936 44.734L87.8608 44.921L87.2735 42.3389Z" fill="white" />
                                <path d="M76.9414 28.6723L75.4482 27.1403L78.4371 21.0357L79.5713 22.1993L77.0883 27.0045C77.0696 27.0376 77.0471 27.0719 77.0207 27.1075C76.9968 27.1457 76.9742 27.1801 76.953 27.2106L76.7755 27.3891L76.8328 27.4478L77.0179 27.2772C77.0493 27.2571 77.0846 27.2358 77.1238 27.2133C77.1629 27.1908 77.2007 27.1747 77.2371 27.165L82.4279 25.1301L83.4704 26.1998L81.2889 31.3221C81.2754 31.3605 81.2567 31.3987 81.2328 31.4369C81.2115 31.4726 81.1903 31.5057 81.1691 31.5362L81.0034 31.7033L81.0607 31.7621L81.2302 31.5989C81.2616 31.5788 81.2942 31.5575 81.3282 31.5349C81.3674 31.5124 81.4052 31.4937 81.4417 31.4788L86.3231 29.1266L87.4383 30.2707L81.2262 33.0684L79.7483 31.5521L81.6587 27.1159C81.6723 27.0775 81.6897 27.0405 81.711 27.0049C81.7349 26.9667 81.7574 26.9323 81.7786 26.9018L82.028 26.5933L81.9708 26.5346L81.6565 26.7687C81.6251 26.7888 81.5886 26.8088 81.5469 26.8287C81.5077 26.8512 81.4712 26.8686 81.4374 26.8809L76.9414 28.6723Z" fill="white" />
                                <path d="M68.8494 22.1899C67.5012 21.5343 66.5659 20.7752 66.0433 19.9127C65.5239 19.0517 65.5084 18.1255 65.9967 17.1339C66.4817 16.149 67.2215 15.6043 68.2162 15.4999C69.2141 15.3971 70.3872 15.6735 71.7354 16.3291C73.0835 16.9848 74.0197 17.7341 74.5438 18.5771C75.0711 19.4217 75.0923 20.3365 74.6073 21.3214C74.1191 22.313 73.3736 22.8691 72.3709 22.9899C71.3714 23.1122 70.1976 22.8456 68.8494 22.1899ZM69.3038 21.2671C70.2813 21.7425 71.086 21.9249 71.7177 21.8144C72.3544 21.7022 72.8379 21.3107 73.1682 20.6398C73.4969 19.9723 73.5089 19.3575 73.2042 18.7957C72.9028 18.2353 72.2633 17.7175 71.2858 17.2421C70.3083 16.7668 69.5012 16.5811 68.8645 16.6852C68.231 16.7908 67.7499 17.1774 67.4212 17.845C67.0909 18.5158 67.0765 19.1355 67.378 19.7039C67.6844 20.2707 68.3263 20.7917 69.3038 21.2671Z" fill="white" />
                                <path d="M58.5758 9.32192L60.1421 9.60764L58.5392 18.2861L56.9728 18.0004L58.5758 9.32192Z" fill="white" />
                                <path d="M50.2532 17.5695C48.5765 17.7387 47.328 17.6485 46.5076 17.2987C45.6908 16.9485 45.2281 16.2418 45.1195 15.1786L46.7308 15.016C46.7872 15.5675 47.1181 15.9539 47.7237 16.1751C48.3289 16.3926 49.1251 16.4516 50.1122 16.3519C51.0848 16.2538 51.8553 16.0789 52.4236 15.8272C52.9954 15.5752 53.259 15.2297 53.2141 14.7906C53.1499 14.1628 52.7645 13.8351 52.0577 13.8075C51.3541 13.7758 50.4162 13.7825 49.2438 13.8275C47.8409 13.8774 46.773 13.8147 46.0402 13.6394C45.3069 13.4605 44.8952 12.9301 44.8051 12.0483C44.6912 10.9343 45.0163 10.1683 45.7802 9.75025C46.5474 9.32821 47.7258 9.03698 49.3153 8.87655C50.9484 8.71173 52.1804 8.80186 53.0114 9.14693C53.8423 9.49201 54.3098 10.1744 54.414 11.194L52.8081 11.3561C52.7532 10.8191 52.413 10.4501 51.7875 10.2493C51.162 10.0485 50.3721 9.99621 49.4176 10.0925C48.4377 10.1914 47.6613 10.3614 47.0883 10.6026C46.5149 10.8401 46.2575 11.2455 46.3161 11.8188C46.3739 12.3849 46.7675 12.666 47.4967 12.662C48.2296 12.6577 49.1367 12.6358 50.2179 12.5964C51.7159 12.5442 52.8215 12.6177 53.5349 12.817C54.2519 13.0159 54.6573 13.5744 54.7511 14.4925C54.8564 15.523 54.5351 16.2539 53.7872 16.6849C53.0425 17.112 51.8645 17.4069 50.2532 17.5695Z" fill="white" />
                            </svg>
                        </div>
                        <div className="text-3xl lg:text-6xl font-extrabold text-shadow">
                        with determination
                        </div>
                    </h1>

                    {/* Title For Desktop Devices */}
                    <h1 className="hidden lg:block text-white text-6xl lg:text-8xl font-mono font-semibold">
                        <div className="flex">
                            <div className="font-extrabold">
                                Snails
                            </div>
                            <div className="font-extrabold text-shadow">
                                Move
                            </div>
                        </div>
                        sl
                        <span className="inline-block border-white border-solid border-[14px] w-96 h-14 rounded-full px-4">

                        </span>
                        wly
                        <div className="flex items-center gap-x-4">
                            but with
                            <svg className="animate-spin hover:animate-none duration-300" width="80" height="80" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="52" cy="52" r="51.632" stroke="white" strokeWidth="0.735905" />
                                <circle cx="51" cy="52" r="18.632" stroke="white" strokeWidth="0.735905" />
                                <path d="M55.4375 54.503C55.3533 54.4194 55.3001 54.3049 55.3001 54.1728L55.3001 49.2934L50.3861 49.2934C50.1288 49.2934 49.916 49.082 49.916 48.8266C49.916 48.5712 50.1288 48.3598 50.3861 48.3598L55.7702 48.3598C56.0274 48.3598 56.2403 48.5712 56.2403 48.8266L56.2403 54.1728C56.2403 54.4282 56.0274 54.6396 55.7702 54.6396C55.6416 54.644 55.5218 54.5867 55.4375 54.503Z" fill="white" />
                                <path d="M47.8986 56.6426C47.7167 56.4621 47.7167 56.1626 47.8986 55.9821L55.3627 48.5705C55.5445 48.39 55.8461 48.39 56.0279 48.5705C56.2098 48.7511 56.2098 49.0505 56.0279 49.2311L48.5638 56.6426C48.382 56.8232 48.0804 56.8232 47.8986 56.6426Z" fill="white" />
                                <path d="M26.5325 24.6704L25.9781 24.0215L28.002 22.3138L28.5565 22.9627L26.5325 24.6704Z" fill="white" />
                                <path d="M18.0033 32.7675C17.4743 32.5782 16.9663 32.6388 16.4795 32.9493C15.9905 33.2551 15.5423 33.9374 15.1348 34.9961C14.713 36.0922 14.5933 36.9364 14.7757 37.5286C14.922 38.0017 15.2432 38.3755 15.7395 38.65L18.0033 32.7675ZM20.0044 31.8483C20.4396 32.119 20.7433 32.4978 20.9155 32.9847C21.0855 33.4669 21.1432 33.9824 21.0883 34.5312C21.03 35.0788 20.7971 35.8819 20.3897 36.9406C19.7281 38.6597 19.0261 39.7372 18.2839 40.1731C17.5382 40.6077 16.6471 40.628 15.6106 40.234C14.5979 39.8491 13.9614 39.2384 13.701 38.402C13.4371 37.5642 13.6229 36.3198 14.2583 34.6688C14.9002 33.0007 15.6036 31.955 16.3684 31.5316C17.1299 31.1069 17.9947 31.0786 18.9631 31.4466L19.3152 31.598L16.4874 38.9459C17.0824 39.1058 17.6021 39.0555 18.0462 38.7951C18.5758 38.4852 19.0621 37.7549 19.5049 36.6043C19.7747 35.9031 19.9226 35.3818 19.9485 35.0404C19.9709 34.6977 19.9451 34.3738 19.871 34.0686C19.7983 33.76 19.6541 33.5101 19.4385 33.3189L20.0044 31.8483Z" fill="white" />
                                <path d="M17.4425 46.0707C17.313 47.6228 17.0617 48.7477 16.6887 49.4453C16.3121 50.1426 15.7312 50.4589 14.946 50.3941L15.0684 48.9274C15.4901 48.9622 15.8141 48.6979 16.0404 48.1347C16.2668 47.5714 16.4189 46.8227 16.4969 45.8885C16.5685 45.0306 16.5529 44.3614 16.4503 43.8808C16.3443 43.3963 16.115 43.1395 15.7624 43.1105C15.2862 43.0712 14.9971 43.3548 14.8953 43.9613C14.7934 44.5678 14.6992 45.3249 14.6124 46.2328C14.5129 47.2933 14.3215 48.2272 14.0382 49.0347C13.7552 49.8385 13.2083 50.207 12.3977 50.1402C11.7397 50.086 11.3 49.6966 11.0786 48.972C10.8576 48.2437 10.8039 47.198 10.9177 45.8349C11.052 44.2247 11.3016 43.0759 11.6664 42.3886C12.0312 41.7013 12.5717 41.3872 13.2879 41.4462L13.1664 42.902C12.7701 42.8693 12.4737 43.1322 12.277 43.6906C12.0804 44.249 11.9415 45.0135 11.8605 45.984C11.789 46.8419 11.8004 47.4943 11.8949 47.9412C11.9857 48.3879 12.2129 48.6262 12.5764 48.6562C13.009 48.6919 13.2941 48.3896 13.4317 47.7495C13.5657 47.1091 13.6789 46.3443 13.7714 45.4553C13.883 44.3811 14.0514 43.4599 14.2765 42.6915C14.502 41.9196 15.0201 41.567 15.8307 41.6338C16.5469 41.6928 17.027 42.0581 17.2711 42.7297C17.5155 43.3977 17.5726 44.5113 17.4425 46.0707Z" fill="white" />
                                <path d="M9.07569 58.2188L10.2931 58.0022L10.5684 59.5704L9.35096 59.787L9.07569 58.2188ZM11.3393 59.4367L11.064 57.8686L17.3822 56.7732L17.6575 58.3414L11.3393 59.4367Z" fill="white" />
                                <path d="M19.2069 63.8273C19.9472 65.4019 20.2297 66.6199 20.0543 67.4815C19.879 68.3431 19.2802 69.0112 18.2579 69.4859C17.2489 69.9544 16.3523 69.9806 15.5682 69.5645C14.7841 69.1484 14.022 68.1531 13.2817 66.5785C12.5523 65.0271 12.279 63.8972 12.4619 63.189C12.6433 62.4774 13.0461 61.9324 13.6703 61.5541L14.3058 62.9059C14.0038 63.0863 13.7977 63.4153 13.6876 63.8927C13.5742 64.3716 13.7565 65.1194 14.2345 66.1361C14.714 67.1561 15.2305 67.8131 15.7839 68.1071C16.3324 68.3994 16.9375 68.3919 17.5991 68.0847C18.274 67.7713 18.6723 67.3109 18.7938 66.7035C18.9104 66.0944 18.7306 65.2831 18.2541 64.2697C17.7777 63.2563 17.3249 62.6361 16.8957 62.4091C16.4617 62.1803 16.0665 62.1286 15.7102 62.2538L15.0747 60.902C15.8036 60.6521 16.4926 60.6901 17.1416 61.0161C17.7906 61.3421 18.4791 62.2792 19.2069 63.8273Z" fill="white" />
                                <path d="M19.1486 72.6327C18.7357 73.0135 18.5557 73.49 18.6086 74.0622C18.6564 74.6341 19.0593 75.342 19.8172 76.1861C20.6019 77.06 21.3008 77.5517 21.9139 77.6613C22.4039 77.7484 22.8859 77.6355 23.3598 77.3225L19.1486 72.6327ZM19.2498 70.4442C19.6922 70.1835 20.1706 70.0884 20.6848 70.1589C21.1939 70.229 21.681 70.4138 22.1459 70.7133C22.6082 71.0151 23.2182 71.5881 23.9761 72.4321C25.2068 73.8027 25.8458 74.9156 25.893 75.7707C25.9375 76.6283 25.545 77.4249 24.7153 78.1606C23.9048 78.8794 23.0659 79.1626 22.1987 79.0103C21.3288 78.8603 20.3028 78.1272 19.1209 76.8109C17.9267 75.4811 17.3168 74.3815 17.2911 73.5121C17.2627 72.6452 17.636 71.868 18.4111 71.1807L18.7086 70.9388L23.9688 76.797C24.3859 76.3443 24.5805 75.8621 24.5525 75.3506C24.5198 74.741 24.0916 73.9775 23.2679 73.0602C22.7659 72.5011 22.3684 72.1321 22.0754 71.9532C21.7796 71.7767 21.4784 71.6514 21.1716 71.5773C20.8625 71.5004 20.5728 71.5136 20.3026 71.6167L19.2498 70.4442Z" fill="white" />
                                <path d="M26.2224 81.04C25.9678 81.4357 25.9047 81.817 26.0331 82.1837C26.1595 82.5536 26.6121 82.9859 27.391 83.4808C28.1884 83.9874 28.8787 84.1819 29.4619 84.0641C29.9542 83.9663 30.3537 83.7297 30.6604 83.3541L32.5786 80.3724L33.9224 81.2262L30.4087 86.6881L29.0648 85.8342L29.571 85.0474C29.5868 85.0228 29.6052 85.0043 29.6263 84.9918L30.1053 84.8034L30.1443 84.6921C29.8958 84.8021 29.6107 84.8846 29.2891 84.9396C28.4637 85.0764 27.4985 84.7937 26.3932 84.0914C25.3557 83.4322 24.7136 82.819 24.467 82.2518C24.2173 81.6826 24.3529 80.9931 24.8739 80.1832L26.2224 81.04Z" fill="white" />
                                <path d="M42.8276 82.7177L44.3557 83.1648L41.9161 91.4011L40.388 90.954L40.6304 90.1357C40.6366 90.1147 40.6508 90.0922 40.6731 90.0684L40.8615 89.9525C40.6797 90.0399 40.4625 90.1245 40.2099 90.2065C39.401 90.4715 38.3297 90.4089 36.9958 90.0188C35.7005 89.6398 34.8097 89.0961 34.3234 88.3876C33.8336 87.6781 33.7441 86.7987 34.0549 85.7495C34.3657 84.7003 34.9193 84.0128 35.7157 83.6871C36.5086 83.3604 37.5528 83.3865 38.8481 83.7655C40.1819 84.1556 41.1165 84.6799 41.652 85.3382C41.8304 85.5576 41.9742 85.7593 42.0833 85.9432L41.9644 85.7089C41.9587 85.6768 41.9589 85.6503 41.9652 85.6293L42.8276 82.7177ZM41.0521 86.0919C40.6757 85.5903 39.9903 85.1941 38.9961 84.9033C37.9773 84.6053 37.2088 84.5799 36.6904 84.8274C36.171 85.0783 35.8113 85.5412 35.6114 86.2162C35.4104 86.8947 35.4604 87.4775 35.7612 87.9645C36.062 88.4515 36.7218 88.8441 37.7406 89.1421C38.7348 89.4329 39.5268 89.4689 40.1166 89.25C40.6687 89.0429 41.0228 88.7208 41.1789 88.2838L41.4151 87.4864C41.5252 87.0246 41.4042 86.5597 41.0521 86.0919Z" fill="white" />
                                <path d="M61.0747 87.2647L61.2659 88.0966L58.6834 88.6826L58.4923 87.8507L61.0747 87.2647Z" fill="white" />
                                <path d="M71.2204 80.0249C72.0351 79.3445 72.68 79.0197 73.1551 79.0506C73.6303 79.0814 74.0975 79.3684 74.5568 79.9115L76.6873 82.4306L78.0899 81.2591L78.7682 82.0612L78.3945 82.3733C78.2265 82.5136 78.0951 82.6661 78.0004 82.8309C77.9028 82.9979 77.8415 83.1655 77.8166 83.3337C77.7912 83.507 77.8013 83.6743 77.8471 83.8357C77.8924 84.0023 77.9727 84.1538 78.0881 84.2902L78.7524 85.0756L77.5304 86.0963L76.8661 85.3109C76.7319 85.1522 76.6442 84.9949 76.6032 84.839C76.5594 84.6855 76.5491 84.5349 76.5723 84.3873C76.595 84.2447 76.6471 84.1086 76.7284 83.9788C76.8093 83.8542 76.9062 83.74 77.0191 83.6362L76.9626 83.5694L73.0489 86.8383L72.3705 86.0362L75.4695 83.4477L73.6005 81.2378C73.2637 80.8395 72.9415 80.6619 72.6339 80.7049C72.3263 80.7479 71.9836 80.9273 71.6057 81.243C71.1494 81.6241 70.5052 82.1645 69.6734 82.8641L68.9067 81.9575C69.8417 81.1765 70.6129 80.5323 71.2204 80.0249Z" fill="white" />
                                <path d="M82.9282 72.4156C82.291 71.9839 81.7357 71.8038 81.2621 71.8751C80.7886 71.9464 80.2785 72.3807 79.7317 73.1778C79.154 74.02 78.9147 74.7655 79.0138 75.4142C79.0968 75.9638 79.3639 76.4289 79.815 76.8094L82.542 78.6566L81.6414 79.9696L76.337 76.3764L77.2375 75.0634L78.0484 75.6126C78.0725 75.629 78.0906 75.6478 78.1025 75.6691L78.3374 76.1586C78.2546 75.944 78.1858 75.7057 78.131 75.4439C77.9365 74.528 78.2736 73.4368 79.1422 72.1705C79.8684 71.1116 80.588 70.5043 81.3009 70.3484C82.0168 70.1945 82.8262 70.4234 83.7292 71.0351L86.4924 72.9069L85.5918 74.2199L82.9282 72.4156Z" fill="white" />
                                <path d="M84.6841 61.0921L85.1396 59.5665L93.487 62.0165L93.0315 63.5421L90.0108 62.6628C89.9863 62.6556 89.9656 62.6419 89.9488 62.6217L89.8115 62.393C89.9066 62.5846 89.9977 62.8149 90.0849 63.084C90.3463 63.8912 90.2783 64.9606 89.8807 66.2923C89.4716 67.6623 88.9359 68.5768 88.2736 69.0356C87.6137 69.4989 86.7258 69.566 85.6097 69.2369C84.4972 68.9088 83.7862 68.3702 83.477 67.6211C83.1666 66.8756 83.216 65.8177 83.6251 64.4476C84.0227 63.116 84.5526 62.1827 85.2148 61.6479C85.4208 61.4805 85.61 61.3442 85.7822 61.2391L85.5825 61.3342C85.5573 61.342 85.5308 61.3418 85.5028 61.3335L84.6841 61.0921ZM85.9669 62.2461C85.4625 62.6222 85.0621 63.3065 84.7658 64.2991C84.4402 65.3896 84.4057 66.1742 84.6625 66.6531C84.9217 67.1364 85.3889 67.4776 86.0641 67.6767C86.7429 67.8769 87.3217 67.8441 87.8008 67.5785C88.2787 67.3163 88.6805 66.64 89.0061 65.5495C89.3025 64.5569 89.3442 63.7668 89.1314 63.1793C88.9266 62.6283 88.6005 62.2736 88.153 62.115L87.3553 61.8798C86.9037 61.7732 86.4409 61.8953 85.9669 62.2461Z" fill="white" />
                                <path d="M87.2735 42.3389L88.1062 42.1518L88.6936 44.734L87.8608 44.921L87.2735 42.3389Z" fill="white" />
                                <path d="M76.9414 28.6723L75.4482 27.1403L78.4371 21.0357L79.5713 22.1993L77.0883 27.0045C77.0696 27.0376 77.0471 27.0719 77.0207 27.1075C76.9968 27.1457 76.9742 27.1801 76.953 27.2106L76.7755 27.3891L76.8328 27.4478L77.0179 27.2772C77.0493 27.2571 77.0846 27.2358 77.1238 27.2133C77.1629 27.1908 77.2007 27.1747 77.2371 27.165L82.4279 25.1301L83.4704 26.1998L81.2889 31.3221C81.2754 31.3605 81.2567 31.3987 81.2328 31.4369C81.2115 31.4726 81.1903 31.5057 81.1691 31.5362L81.0034 31.7033L81.0607 31.7621L81.2302 31.5989C81.2616 31.5788 81.2942 31.5575 81.3282 31.5349C81.3674 31.5124 81.4052 31.4937 81.4417 31.4788L86.3231 29.1266L87.4383 30.2707L81.2262 33.0684L79.7483 31.5521L81.6587 27.1159C81.6723 27.0775 81.6897 27.0405 81.711 27.0049C81.7349 26.9667 81.7574 26.9323 81.7786 26.9018L82.028 26.5933L81.9708 26.5346L81.6565 26.7687C81.6251 26.7888 81.5886 26.8088 81.5469 26.8287C81.5077 26.8512 81.4712 26.8686 81.4374 26.8809L76.9414 28.6723Z" fill="white" />
                                <path d="M68.8494 22.1899C67.5012 21.5343 66.5659 20.7752 66.0433 19.9127C65.5239 19.0517 65.5084 18.1255 65.9967 17.1339C66.4817 16.149 67.2215 15.6043 68.2162 15.4999C69.2141 15.3971 70.3872 15.6735 71.7354 16.3291C73.0835 16.9848 74.0197 17.7341 74.5438 18.5771C75.0711 19.4217 75.0923 20.3365 74.6073 21.3214C74.1191 22.313 73.3736 22.8691 72.3709 22.9899C71.3714 23.1122 70.1976 22.8456 68.8494 22.1899ZM69.3038 21.2671C70.2813 21.7425 71.086 21.9249 71.7177 21.8144C72.3544 21.7022 72.8379 21.3107 73.1682 20.6398C73.4969 19.9723 73.5089 19.3575 73.2042 18.7957C72.9028 18.2353 72.2633 17.7175 71.2858 17.2421C70.3083 16.7668 69.5012 16.5811 68.8645 16.6852C68.231 16.7908 67.7499 17.1774 67.4212 17.845C67.0909 18.5158 67.0765 19.1355 67.378 19.7039C67.6844 20.2707 68.3263 20.7917 69.3038 21.2671Z" fill="white" />
                                <path d="M58.5758 9.32192L60.1421 9.60764L58.5392 18.2861L56.9728 18.0004L58.5758 9.32192Z" fill="white" />
                                <path d="M50.2532 17.5695C48.5765 17.7387 47.328 17.6485 46.5076 17.2987C45.6908 16.9485 45.2281 16.2418 45.1195 15.1786L46.7308 15.016C46.7872 15.5675 47.1181 15.9539 47.7237 16.1751C48.3289 16.3926 49.1251 16.4516 50.1122 16.3519C51.0848 16.2538 51.8553 16.0789 52.4236 15.8272C52.9954 15.5752 53.259 15.2297 53.2141 14.7906C53.1499 14.1628 52.7645 13.8351 52.0577 13.8075C51.3541 13.7758 50.4162 13.7825 49.2438 13.8275C47.8409 13.8774 46.773 13.8147 46.0402 13.6394C45.3069 13.4605 44.8952 12.9301 44.8051 12.0483C44.6912 10.9343 45.0163 10.1683 45.7802 9.75025C46.5474 9.32821 47.7258 9.03698 49.3153 8.87655C50.9484 8.71173 52.1804 8.80186 53.0114 9.14693C53.8423 9.49201 54.3098 10.1744 54.414 11.194L52.8081 11.3561C52.7532 10.8191 52.413 10.4501 51.7875 10.2493C51.162 10.0485 50.3721 9.99621 49.4176 10.0925C48.4377 10.1914 47.6613 10.3614 47.0883 10.6026C46.5149 10.8401 46.2575 11.2455 46.3161 11.8188C46.3739 12.3849 46.7675 12.666 47.4967 12.662C48.2296 12.6577 49.1367 12.6358 50.2179 12.5964C51.7159 12.5442 52.8215 12.6177 53.5349 12.817C54.2519 13.0159 54.6573 13.5744 54.7511 14.4925C54.8564 15.523 54.5351 16.2539 53.7872 16.6849C53.0425 17.112 51.8645 17.4069 50.2532 17.5695Z" fill="white" />
                            </svg>
                        </div>
                        <div className="text-3xl lg:text-6xl font-extrabold text-shadow">
                            determination
                        </div>
                    </h1>

                </div>
                <div className="hidden lg:flex flex-col items-end gap-x-5 gap-y-6 mt-44 lg:mt-10">
                    <div className="flex gap-x-3 text-white font-sans">
                        <span>Scroll to explore</span>
                        <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.75 0.75H7.25C5.39411 0.752027 3.61481 1.49018 2.30249 2.80249C0.990175 4.11481 0.252027 5.89411 0.25 7.75V18.25C0.252027 20.1059 0.990175 21.8852 2.30249 23.1975C3.61481 24.5098 5.39411 25.248 7.25 25.25H10.75C12.6059 25.248 14.3852 24.5098 15.6975 23.1975C17.0098 21.8852 17.748 20.1059 17.75 18.25V7.75C17.748 5.89411 17.0098 4.11481 15.6975 2.80249C14.3852 1.49018 12.6059 0.752027 10.75 0.75ZM16 18.25C15.9986 19.6419 15.445 20.9765 14.4607 21.9607C13.4765 22.945 12.1419 23.4986 10.75 23.5H7.25C5.85806 23.4986 4.52354 22.945 3.53929 21.9607C2.55504 20.9765 2.00145 19.6419 2 18.25V7.75C2.00145 6.35806 2.55504 5.02354 3.53929 4.03929C4.52354 3.05504 5.85806 2.50145 7.25 2.5H10.75C12.1419 2.50145 13.4765 3.05504 14.4607 4.03929C15.445 5.02354 15.9986 6.35806 16 7.75V18.25ZM9.875 6V11.25C9.875 11.4821 9.78281 11.7046 9.61872 11.8687C9.45463 12.0328 9.23206 12.125 9 12.125C8.76794 12.125 8.54538 12.0328 8.38128 11.8687C8.21719 11.7046 8.125 11.4821 8.125 11.25V6C8.125 5.76794 8.21719 5.54538 8.38128 5.38128C8.54538 5.21719 8.76794 5.125 9 5.125C9.23206 5.125 9.45463 5.21719 9.61872 5.38128C9.78281 5.54538 9.875 5.76794 9.875 6Z" fill="white" />
                        </svg>
                    </div>
                    <div class="h-1 w-1/6 bg-neutral-200 dark:bg-neutral-600">
                        <div class="h-1 bg-white w-1/2"></div>
                    </div>
                </div>
                <div className="flex flex-col lg:w-full lg:flex-row lg:justify-end lg:gap-x-5 gap-y-6 items-center mt-32 lg:mt-10">
                    <div className="flex justify-center items-center gap-x-4 text-white">
                        <svg className="animate-ping " width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#52FF00" />
                        </svg>
                        <span className="font-sans">
                            Currently in Stockholm,Newyork
                        </span>
                    </div>
                    <div className="flex gap-x-3 items-center">
                        <a href="#">
                            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.4591 2C20.6891 2.35 19.8591 2.58 18.9991 2.69C19.8791 2.16 20.5591 1.32 20.8791 0.31C20.0491 0.81 19.1291 1.16 18.1591 1.36C17.3691 0.5 16.2591 0 14.9991 0C12.6491 0 10.7291 1.92 10.7291 4.29C10.7291 4.63 10.7691 4.96 10.8391 5.27C7.27906 5.09 4.10906 3.38 1.99906 0.79C1.62906 1.42 1.41906 2.16 1.41906 2.94C1.41906 4.43 2.16906 5.75 3.32906 6.5C2.61906 6.5 1.95906 6.3 1.37906 6V6.03C1.37906 8.11 2.85906 9.85 4.81906 10.24C4.18979 10.4122 3.52916 10.4362 2.88906 10.31C3.16067 11.1625 3.6926 11.9084 4.41008 12.4429C5.12756 12.9775 5.99451 13.2737 6.88906 13.29C5.37269 14.4904 3.49306 15.1393 1.55906 15.13C1.21906 15.13 0.879063 15.11 0.539062 15.07C2.43906 16.29 4.69906 17 7.11906 17C14.9991 17 19.3291 10.46 19.3291 4.79C19.3291 4.6 19.3291 4.42 19.3191 4.23C20.1591 3.63 20.8791 2.87 21.4591 2Z" fill="white" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                    <span className="mt-6 inline lg:hidden">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99961 17.7086C9.84128 17.7086 9.68294 17.6503 9.55794 17.5253L4.49961 12.4669C4.25794 12.2253 4.25794 11.8253 4.49961 11.5836C4.74128 11.3419 5.14128 11.3419 5.38294 11.5836L9.99961 16.2003L14.6163 11.5836C14.8579 11.3419 15.2579 11.3419 15.4996 11.5836C15.7413 11.8253 15.7413 12.2253 15.4996 12.4669L10.4413 17.5253C10.3163 17.6503 10.1579 17.7086 9.99961 17.7086Z" fill="white" />
                            <path d="M10 17.567C9.65833 17.567 9.375 17.2837 9.375 16.942V2.91699C9.375 2.57533 9.65833 2.29199 10 2.29199C10.3417 2.29199 10.625 2.57533 10.625 2.91699V16.942C10.625 17.2837 10.3417 17.567 10 17.567Z" fill="white" />
                        </svg>
                    </span>
                </div>
            </div>

        </section>

    )
}

export default Hero