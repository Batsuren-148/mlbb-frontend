import { Typography } from "@material-tailwind/react";

export default function Footer() {
    return (
        <footer className="w-full bg-black  container mx-auto">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-white text-center md:justify-between">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png"
                    alt="logo-ct"
                    className="w-40 h-10 object-contain"
                />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                            About Us
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                            License
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                            Contribute
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-2 border-white-50" />
            <Typography color="white" className="text-center font-normal">
                &copy; 2023 Material Tailwind
            </Typography>
        </footer>
    );
}
