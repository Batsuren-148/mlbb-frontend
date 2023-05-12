import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { logOut } from "../services/Reducers/loginSlice";

export function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    // const closeMenu = () => setIsMenuOpen(false);

    const dispatch = useDispatch();

    const userData = JSON.parse(localStorage.getItem("userData"));
    const isLogged = localStorage.getItem("isLoggedIn");

    const handleLogout = () => {
        dispatch(logOut());
        window.location.reload();
    };

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
                    {isLogged ? (
                        <Avatar
                            variant="circular"
                            size="sm"
                            alt="candice wu"
                            className="border border-blue-500 p-0.5"
                            src={userData.userData.profile}
                        />
                    ) : (
                        <Avatar
                            variant="circular"
                            size="sm"
                            alt="candice wu"
                            className="border border-blue-500 p-0.5"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                    )}

                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                <MenuItem
                    key="profile"
                    className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <Typography
                        as="span"
                        variant="small"
                        className="font-normal"
                        color="inherit">
                        My Profile
                    </Typography>
                </MenuItem>
                <MenuItem
                    key="edit"
                    className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <Typography
                        as="span"
                        variant="small"
                        className="font-normal">
                        Edit Profile
                    </Typography>
                </MenuItem>
                <MenuItem
                    key="logout"
                    onClick={handleLogout}
                    className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10">
                    {/* <LogoutIcon className="h-4 w-4 text-red-500" /> */}
                    <svg
                        className="h-6 w-6 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                        />
                    </svg>
                    <Typography
                        as="span"
                        variant="small"
                        className="font-normal"
                        color="red">
                        Log Out
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

// nav list menu
const navListMenuItems = [
    {
        title: "@material-tailwind/html",
        description:
            "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
        title: "@material-tailwind/react",
        description:
            "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
        title: "Material Tailwind PRO",
        description:
            "A complete set of UI Elements for building faster websites in less time.",
    },
];

export function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const triggers = {
        onMouseEnter: () => setIsMenuOpen(true),
        onMouseLeave: () => setIsMenuOpen(false),
    };

    const renderItems = navListMenuItems.map(({ title, description }) => (
        <a href="#/" key={title}>
            <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                    {title}
                </Typography>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal">
                    {description}
                </Typography>
            </MenuItem>
        </a>
    ));

    return (
        <React.Fragment>
            <Menu open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="font-normal">
                        <MenuItem
                            {...triggers}
                            className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
                            {/* <Square3Stack3DIcon className="h-[18px] w-[18px]" />{" "} */}
                            Pages{" "}
                            {/* <ChevronDownIcon
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            /> */}
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList
                    {...triggers}
                    className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
                    <Card
                        color="blue"
                        shadow={false}
                        variant="gradient"
                        className="col-span-3 grid h-full w-full place-items-center rounded-md">
                        {/* <RocketLaunchIcon
                            strokeWidth={1}
                            className="h-28 w-28"
                        /> */}
                    </Card>
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
                {/* <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "} */}
            </MenuItem>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}

export function NavList() {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {/* <NavListMenu /> */}
            {/* {navListItems.map(({ label }, key) => (
                <Typography
                    key={label}
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-normal">
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement({
                            className: "h-[18px] w-[18px]",
                        })}{" "}
                        {label}
                    </MenuItem>
                </Typography>
            ))} */}
            <Typography
                key="Home"
                as="a"
                href="/"
                variant="small"
                color="white"
                className="font-normal">
                <MenuItem className="flex items-center gap-2 lg:rounded-full font-bold">
                    Home
                </MenuItem>
            </Typography>
            <Typography
                key="Heroes"
                as="a"
                href="/heroes"
                variant="small"
                color="white"
                className="font-normal">
                <MenuItem className="flex items-center gap-2 lg:rounded-full font-bold">
                    Heroes
                </MenuItem>
            </Typography>

            <Typography
                key="VS"
                as="a"
                href="/vs"
                variant="small"
                color="white"
                className="font-normal">
                <MenuItem className="flex items-center gap-2 lg:rounded-full font-bold">
                    VS
                </MenuItem>
            </Typography>
        </ul>
    );
}

export function ComplexNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
    // const userData = JSON.parse(localStorage.getItem("userData"));
    // console.log(userData.token + "  my clg");
    const isLogged = localStorage.getItem("isLoggedIn");

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false)
        );
    }, []);

    return (
        <div className="relative flex justify-center w-full">
            <Navbar className="mt-[10px] z-10 container mx-auto p-2 lg:rounded-full lg:pl-6 absolute bg-transparent blur-none bg-opacity-100 backdrop-blur-none text-white">
                <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="/"
                        color="white"
                        className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
                        MLBB
                    </Typography>
                    <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
                        <NavList />
                    </div>
                    <IconButton
                        size="sm"
                        color="blue-gray"
                        variant="text"
                        onClick={toggleIsNavOpen}
                        className="ml-auto mr-2 lg:hidden">
                        <Bars3Icon className="h-6 w-6" />
                    </IconButton>
                    <div>
                        {isLogged ? (
                            <ProfileMenu />
                        ) : (
                            <div className="flex pr-2">
                                <Typography
                                    as="a"
                                    href="login"
                                    className="font-bold text-sm py-2 px-3 hover:bg-gray-200 rounded-2xl">
                                    Login
                                </Typography>
                                <span className="w-[10px]"></span>
                                <Typography
                                    as="a"
                                    href="register"
                                    className="font-bold text-sm bg-[#2196F3] py-2 px-3 rounded-2xl text-white hover:opacity-80">
                                    Register
                                </Typography>
                            </div>
                        )}
                    </div>
                </div>
                <MobileNav open={isNavOpen} className="overflow-scroll">
                    <NavList />
                </MobileNav>
            </Navbar>
        </div>
    );
}
