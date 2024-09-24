import logo from "../../assets/images/Poshprint-logo.svg"
const Footer = () => {
    return (


        <footer className="bg-neutral-50 mt-24">
            <div className="container mx-auto w-full p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between gap-10">
                    <div className="mb-6 md:mb-0 w-[20%] flex flex-col gap-4 items-start">
                        {/* logo */}
                        <div >
                            <a href="/" className=" w-full h-full">
                                <img alt="logo" className=" h-full object-contain min-w-36 w-full md:w-9/12 " src={logo} />
                            </a>
                        </div>
                        {/* details */}
                        <div className="flex flex-col gap-2 items-start text-gray-500 dark:text-gray-400 font-medium">
                            <p>hello@poshprint.io</p>
                            <p>+02 036 038 3996</p>
                            <address>3665 Paseo Place, Suite 0960 San Diego</address>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 w-[70%] justify-end">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-center">
                    <span className="text-base text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Posh Print</a>. All Rights Reserved.
                    </span>

                </div>
            </div>
        </footer>

    );
};

export default Footer;