import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    Typography,
    Avatar,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Card,
} from "@material-tailwind/react";
import { Layout } from "../layouts/layout";
import { useEffect, Fragment, useState } from "react";
import { fetchHeroById } from "../services/Actions/heroesAction";
import Loading2 from "../components/loading/loading2";
import "../style/heroDetail/style.css";
import { addData, deleteData } from "../services/Reducers/heroesSlice";
import Error from "../components/error";

const HeroDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [size, setSize] = useState(null);
    const handleOpen = (value) => setSize(value);

    const hero = useSelector((state) => state.heroes.heroInfo);
    const status = useSelector((state) => state.heroes.status);
    // const error = useSelector((state) => state.heroes.error);
    const level = useSelector((state) => state.heroes.level);

    useEffect(() => {
        dispatch(fetchHeroById(id));
    }, [dispatch, id]);

    const handleAddDataClick = () => {
        dispatch(addData());
    };

    const handleDeleteDataClick = () => {
        dispatch(deleteData());
    };

    if (status === "loading") {
        // return <Loading></Loading>;
        return <Loading2></Loading2>;
    }

    if (status === "failed") {
        // return <div>{error}</div>;
        return <Error></Error>;
    }

    const myStyles = {
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(5px)",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
    };

    return (
        <Layout>
            <div
                className="w-full h-fit py-[100px] pb-[120px] bg-center bg-cover"
                style={{ backgroundImage: `url(${hero.bg})` }}>
                <div
                    className="heroDiv container flex flex-wrap justify-between mx-auto h-fit py-10 px-10 pt-15"
                    style={{ ...myStyles }}>
                    {/* status name etc */}
                    <div className="lg:w-[30%] heroTitle z-[1]">
                        <div className="">
                            <Typography
                                as="h2"
                                size="2xl"
                                color="white"
                                className="text-5xl text-center w-full font-bold font-roboto uppercase text drop-shadow-xl tracking-wide text-white">
                                {hero.name}
                            </Typography>
                            <Typography
                                as="h4"
                                size="xl"
                                color="white"
                                className="text-2xl text-center w-full font-bold font-roboto text drop-shadow-xl italic  text-white">
                                {hero.qoutes}
                            </Typography>
                        </div>
                        <div className="mt-[40px]">
                            <Typography
                                as="p"
                                className="font-semibold font-monospace">
                                Role :
                            </Typography>
                            <Typography
                                as="h5"
                                size="xl"
                                color="white"
                                className="text-xl text-start w-full font-bold font-mono uppercase text-white">
                                {/* {hero.role.map((role, index) => (
                                    <span key={index}> {role} /</span>
                                ))} */}
                                {hero.role}
                            </Typography>
                        </div>
                        <div className="mt-[0px]">
                            <Typography
                                as="p"
                                className="font-semibold font-monospace">
                                Specialty :
                            </Typography>
                            <Typography
                                as="h5"
                                size="xl"
                                color="white"
                                className="text-xl text-start w-full font-bold font-mono uppercase text-white">
                                {hero.specialty}
                            </Typography>
                        </div>
                        <div className="mt-[40px]">
                            <Typography
                                as="p"
                                className="font-semibold font-monospace">
                                Durability :
                            </Typography>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{
                                        width: hero.durability + "%",
                                    }}></div>
                            </div>
                            <Typography
                                as="p"
                                className="font-semibold font-monospace">
                                Offense :
                            </Typography>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{
                                        width: hero.offense + "%",
                                    }}></div>
                            </div>
                            <Typography
                                as="p"
                                className="font-semibold font-monospace">
                                Control effect:
                            </Typography>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{
                                        width: hero.control_effect + "%",
                                    }}></div>
                            </div>
                            <Typography
                                as="p"
                                className="font-semibold font-monospace">
                                Difficulty :
                            </Typography>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{
                                        width: hero.difficulty + "%",
                                    }}></div>
                            </div>
                        </div>
                    </div>
                    {/* image */}
                    <div className="relative flex justify-center w-[30%] h-auto sm:order-1  heroImage">
                        <img
                            className=" object-cover w-full h-full"
                            src={hero.duelImage}
                            alt={hero.name}
                        />
                    </div>
                    {/* info */}
                    <div className=" heroInfo relative flex flex-wrap justify-center w-[36%] sm:order-3">
                        <div className="rounded-2xl mt-[40px]">
                            <Typography
                                as="h3"
                                className="font-bold font-monospace uppercase text-3xl text-center mb-2">
                                Info
                            </Typography>
                            <Typography
                                as="p"
                                className="text-justify rounded-xl px-4 py-2 border bg-[#00000024] ">
                                {hero.info}
                            </Typography>
                        </div>
                        <div className="w-full ">
                            <Typography
                                variant="h3"
                                className="font-bold font-monospace uppercase text-3xl w-full text-center mb-2">
                                Skills
                            </Typography>
                            <div className=" w-full">
                                <div className="flex justify-between flex-wrap">
                                    <Fragment>
                                        <Button
                                            onClick={() => handleOpen("md")}
                                            variant="gradient"
                                            className="bg-none bg-transparent shadow-none hover:shadow-none px-0 w-[50%]">
                                            <Avatar
                                                variant="circular"
                                                size="lg"
                                                alt={hero.name}
                                                className="border border-blue-500 p-0.5"
                                                src={hero.bg}
                                            />
                                            <Typography variant="h6">
                                                {hero.name}
                                            </Typography>
                                        </Button>
                                        <Dialog
                                            open={
                                                size === "xs" ||
                                                size === "sm" ||
                                                size === "md" ||
                                                size === "lg" ||
                                                size === "xl" ||
                                                size === "xxl"
                                            }
                                            size={size || "md"}
                                            handler={handleOpen}>
                                            <DialogHeader>
                                                <Avatar
                                                    variant="circular"
                                                    size="lg"
                                                    alt={hero.name}
                                                    className="border border-blue-500 p-0.5"
                                                    src={hero.bg}
                                                />
                                                <Typography className="ml-2 mr-1 font-bold uppercase ">
                                                    {hero.name}
                                                </Typography>
                                                <Typography className=" text-sm">
                                                    ({hero.skillNumber1})
                                                </Typography>
                                            </DialogHeader>
                                            <DialogBody divider>
                                                {hero.desc1}
                                            </DialogBody>
                                            <DialogFooter>
                                                <Button
                                                    variant="text"
                                                    color="red"
                                                    onClick={() =>
                                                        handleOpen(null)
                                                    }
                                                    className="mr-1">
                                                    <span>Cancel</span>
                                                </Button>
                                                <Button
                                                    variant="gradient"
                                                    color="green"
                                                    onClick={() =>
                                                        handleOpen(null)
                                                    }>
                                                    <span>Confirm</span>
                                                </Button>
                                            </DialogFooter>
                                        </Dialog>
                                    </Fragment>
                                    <Fragment>
                                        <Button
                                            onClick={() => handleOpen("md")}
                                            variant="gradient"
                                            className="bg-none bg-transparent shadow-none hover:shadow-none px-0 w-[50%] ">
                                            <Avatar
                                                variant="circular"
                                                size="lg"
                                                alt={hero.name}
                                                className="border border-blue-500 p-0.5"
                                                src={hero.bg}
                                            />
                                            <Typography variant="h6">
                                                {hero.name}
                                            </Typography>
                                        </Button>
                                        <Dialog
                                            open={
                                                size === "xs" ||
                                                size === "sm" ||
                                                size === "md" ||
                                                size === "lg" ||
                                                size === "xl" ||
                                                size === "xxl"
                                            }
                                            size={size || "md"}
                                            handler={handleOpen}>
                                            <DialogHeader>
                                                <Avatar
                                                    variant="circular"
                                                    size="lg"
                                                    alt={hero.name}
                                                    className="border border-blue-500 p-0.5"
                                                    src={hero.bg}
                                                />
                                                <Typography className="ml-2 mr-1 font-bold uppercase ">
                                                    {hero.name}
                                                </Typography>
                                                <Typography className=" text-sm">
                                                    ({hero.skillNumber1})
                                                </Typography>
                                            </DialogHeader>
                                            <DialogBody divider>
                                                {hero.desc1}
                                            </DialogBody>
                                            <DialogFooter>
                                                <Button
                                                    variant="text"
                                                    color="red"
                                                    onClick={() =>
                                                        handleOpen(null)
                                                    }
                                                    className="mr-1">
                                                    <span>Cancel</span>
                                                </Button>
                                                <Button
                                                    variant="gradient"
                                                    color="green"
                                                    onClick={() =>
                                                        handleOpen(null)
                                                    }>
                                                    <span>Confirm</span>
                                                </Button>
                                            </DialogFooter>
                                        </Dialog>
                                    </Fragment>
                                    <Fragment>
                                        <Button
                                            onClick={() => handleOpen("md")}
                                            variant="gradient"
                                            className="bg-none bg-transparent shadow-none hover:shadow-none px-0 w-[50%]">
                                            <Avatar
                                                variant="circular"
                                                size="lg"
                                                alt={hero.name}
                                                className="border border-blue-500 p-0.5"
                                                src={hero.bg}
                                            />
                                            <Typography variant="h6">
                                                {hero.name}
                                            </Typography>
                                        </Button>
                                        <Dialog
                                            open={
                                                size === "xs" ||
                                                size === "sm" ||
                                                size === "md" ||
                                                size === "lg" ||
                                                size === "xl" ||
                                                size === "xxl"
                                            }
                                            size={size || "md"}
                                            handler={handleOpen}>
                                            <DialogHeader>
                                                <Avatar
                                                    variant="circular"
                                                    size="lg"
                                                    alt={hero.name}
                                                    className="border border-blue-500 p-0.5"
                                                    src={hero.bg}
                                                />
                                                <Typography className="ml-2 mr-1 font-bold uppercase ">
                                                    {hero.skillTitle1}
                                                </Typography>
                                                <Typography className=" text-sm">
                                                    ({hero.skillNumber1})
                                                </Typography>
                                            </DialogHeader>
                                            <DialogBody divider>
                                                {hero.desc1}
                                            </DialogBody>
                                            <DialogFooter>
                                                <Button
                                                    variant="text"
                                                    color="red"
                                                    onClick={() =>
                                                        handleOpen(null)
                                                    }
                                                    className="mr-1">
                                                    <span>Cancel</span>
                                                </Button>
                                                <Button
                                                    variant="gradient"
                                                    color="green"
                                                    onClick={() =>
                                                        handleOpen(null)
                                                    }>
                                                    <span>Confirm</span>
                                                </Button>
                                            </DialogFooter>
                                        </Dialog>
                                    </Fragment>
                                    <Fragment>
                                        <Button
                                            onClick={() => handleOpen("md")}
                                            variant="gradient"
                                            className="bg-none bg-transparent shadow-none hover:shadow-none px-0 w-[50%]">
                                            <Avatar
                                                variant="circular"
                                                size="lg"
                                                alt={hero.name}
                                                className="border border-blue-500 p-0.5"
                                                src={hero.bg}
                                            />
                                            <Typography variant="h6">
                                                {hero.name}
                                            </Typography>
                                        </Button>
                                        <Dialog
                                            open={
                                                size === "xs" ||
                                                size === "sm" ||
                                                size === "md" ||
                                                size === "lg" ||
                                                size === "xl" ||
                                                size === "xxl"
                                            }
                                            size={size || "md"}
                                            handler={handleOpen}>
                                            <DialogHeader>
                                                <Avatar
                                                    variant="circular"
                                                    size="lg"
                                                    alt={hero.name}
                                                    className="border border-blue-500 p-0.5"
                                                    src={hero.bg}
                                                />
                                                <Typography className="ml-2 mr-1 font-bold uppercase ">
                                                    {hero.skillTitle1}
                                                </Typography>
                                                <Typography className=" text-sm">
                                                    ({hero.skillNumber1})
                                                </Typography>
                                            </DialogHeader>
                                            <DialogBody divider>
                                                {hero.desc1}
                                            </DialogBody>
                                            <DialogFooter>
                                                <Button
                                                    variant="text"
                                                    color="red"
                                                    onClick={() =>
                                                        handleOpen(null)
                                                    }
                                                    className="mr-1">
                                                    <span>Cancel</span>
                                                </Button>
                                                <Button
                                                    variant="gradient"
                                                    color="green"
                                                    onClick={() =>
                                                        handleOpen(null)
                                                    }>
                                                    <span>Confirm</span>
                                                </Button>
                                            </DialogFooter>
                                        </Dialog>
                                    </Fragment>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* statistic */}
                    <div className="w-full flex justify-center h-fit mt-10 order-4 py-5 px-5">
                        <div className="table_para w-[75%] h-fit flex justify-center align-top flex-wrap">
                            <div className="table1 w-[100%]">
                                <Card className="overflow-scroll h-fit w-full">
                                    <table className="w-full min-w-max table-auto text-left">
                                        <thead>
                                            <tr>
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70">
                                                        Attribute:
                                                    </Typography>
                                                </th>
                                                <th className="border-b border-l border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70">
                                                        {level}
                                                    </Typography>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        HP
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {hero.hp}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        Mana
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {hero.mana}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        HP regen
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {hero.hp_regen}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        Physical attack
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {hero.physical_attack}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        Magic Power
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {hero.magic_power}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        Physical defense
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {hero.physical_defense}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        Magic defense
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {hero.magic_defense}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        Physical penetration
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {
                                                            hero.physical_penetration
                                                        }
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        Magic penetration
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {hero.magic_penetration}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        Attack speed
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {hero.attack_speed}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        Movement speed
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {hero.movement_speed}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        Physical lifesteal
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {
                                                            hero.physical_lifesteal
                                                        }
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        Magic lifesteal
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {hero.magic_lifesteal}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        Spell vamp
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {hero.spell_vamp}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        Critical chance
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {hero.critical_chance}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr className="border-t order-blue-gray-100">
                                                <td className="pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        Healing effect
                                                    </Typography>
                                                </td>
                                                <td className="border-l pl-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal">
                                                        {hero.healing_effect}
                                                    </Typography>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Card>
                            </div>
                            <div className="table-buttons w-full flex justify-between mt-5">
                                <Button onClick={handleAddDataClick}>
                                    Level Up +
                                </Button>
                                <Button onClick={handleDeleteDataClick}>
                                    Level Down -
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HeroDetails;
