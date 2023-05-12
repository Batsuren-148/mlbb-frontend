import React, { Fragment, useState, useEffect } from "react";
import {
    Avatar,
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Typography,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/loading/loading";
import { Layout } from "../layouts/layout";
import { fetchHeroesData } from "../services/Actions/heroesAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "../components/error";

function HeroVersus() {
    const { heroesData, status, error } = useSelector((state) => state.heroes);
    const [selectedHero, setSelectedHero] = useState(null);
    const [selectedHero2, setSelectedHero2] = useState(null);
    const [heroLevel, setHeroLevel] = useState(1);
    const [heroLevel2, setHeroLevel2] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHeroesData());
    }, [dispatch]);

    const [size, setSize] = useState(null);
    const handleOpen = (value) => setSize(value);

    const [size2, setSize2] = useState(null);
    const handleOpen2 = (value) => setSize2(value);

    const handleHeroClick1 = (hero) => {
        setSelectedHero(hero);
        handleOpen(null);
    };
    const handleHeroClick2 = (hero) => {
        setSelectedHero2(hero);
        handleOpen2(null);
    };

    const handleAddDataClick = () => {
        setSelectedHero((prevSelectedHero) => {
            const updatedSelectedHero = { ...prevSelectedHero };
            if (heroLevel < 15) {
                setHeroLevel(heroLevel + 1);
                updatedSelectedHero.hp += updatedSelectedHero.hp_Grow;

                updatedSelectedHero.mana += updatedSelectedHero.mana_Grow;
                updatedSelectedHero.hp_regen +=
                    updatedSelectedHero.hp_regen_Grow;
                updatedSelectedHero.hp_regen = Number(
                    updatedSelectedHero.hp_regen.toFixed(2)
                );
                updatedSelectedHero.mana_regen +=
                    updatedSelectedHero.mana_regen_Grow;
                updatedSelectedHero.mana_regen = Number(
                    updatedSelectedHero.mana_regen.toFixed(2)
                );
                updatedSelectedHero.physical_attack +=
                    updatedSelectedHero.physical_attack_Grow;
                updatedSelectedHero.physical_attack = Number(
                    updatedSelectedHero.physical_attack.toFixed(2)
                );
                updatedSelectedHero.magic_power +=
                    updatedSelectedHero.magic_power_Grow;
                updatedSelectedHero.magic_power = Number(
                    updatedSelectedHero.magic_power.toFixed(2)
                );
                updatedSelectedHero.physical_defense +=
                    updatedSelectedHero.physical_defense_Grow;
                updatedSelectedHero.physical_defense = Number(
                    updatedSelectedHero.physical_defense.toFixed(2)
                );
                updatedSelectedHero.magic_defense +=
                    updatedSelectedHero.magic_defense_Grow;
                updatedSelectedHero.magic_defense = Number(
                    updatedSelectedHero.magic_defense.toFixed(2)
                );
                updatedSelectedHero.physical_penetration +=
                    updatedSelectedHero.physical_penetration_Grow;
                updatedSelectedHero.physical_penetration = Number(
                    updatedSelectedHero.physical_penetration.toFixed(2)
                );

                updatedSelectedHero.magic_penetration +=
                    updatedSelectedHero.magic_penetration_Grow;
                updatedSelectedHero.magic_penetration = Number(
                    updatedSelectedHero.magic_penetration.toFixed(2)
                );
                updatedSelectedHero.damage_reduction +=
                    updatedSelectedHero.damage_reduction_Grow;
                updatedSelectedHero.damage_reduction = Number(
                    updatedSelectedHero.damage_reduction.toFixed(2)
                );
                updatedSelectedHero.attack_speed +=
                    updatedSelectedHero.attack_speed_Grow;
                updatedSelectedHero.attack_speed = Number(
                    updatedSelectedHero.attack_speed.toFixed(2)
                );
                updatedSelectedHero.movement_speed +=
                    updatedSelectedHero.movement_speed_Grow;

                return { ...updatedSelectedHero, heroLevel: heroLevel + 1 };
            } else {
                toast.warning("Max level", { autoClose: 1000 });
                return updatedSelectedHero;
            }
        });
    };

    const handleDeleteDataClick2 = () => {
        setSelectedHero((prevSelectedHero) => {
            const updatedSelectedHero = { ...prevSelectedHero };
            if (heroLevel > 1) {
                setHeroLevel(heroLevel - 1);
                updatedSelectedHero.hp -= updatedSelectedHero.hp_Grow;
                updatedSelectedHero.mana -= updatedSelectedHero.mana_Grow;
                updatedSelectedHero.hp_regen -=
                    updatedSelectedHero.hp_regen_Grow;
                updatedSelectedHero.hp_regen = Number(
                    updatedSelectedHero.hp_regen.toFixed(2)
                );
                updatedSelectedHero.mana_regen -=
                    updatedSelectedHero.mana_regen_Grow;
                updatedSelectedHero.mana_regen = Number(
                    updatedSelectedHero.mana_regen.toFixed(2)
                );
                updatedSelectedHero.physical_attack -=
                    updatedSelectedHero.physical_attack_Grow;
                updatedSelectedHero.physical_attack = Number(
                    updatedSelectedHero.physical_attack.toFixed(2)
                );
                updatedSelectedHero.magic_power -=
                    updatedSelectedHero.magic_power_Grow;
                updatedSelectedHero.magic_power = Number(
                    updatedSelectedHero.magic_power.toFixed(2)
                );
                updatedSelectedHero.physical_defense -=
                    updatedSelectedHero.physical_defense_Grow;
                updatedSelectedHero.physical_defense = Number(
                    updatedSelectedHero.physical_defense.toFixed(2)
                );
                updatedSelectedHero.magic_defense -=
                    updatedSelectedHero.magic_defense_Grow;
                updatedSelectedHero.magic_defense = Number(
                    updatedSelectedHero.magic_defense.toFixed(2)
                );
                updatedSelectedHero.physical_penetration -=
                    updatedSelectedHero.physical_penetration_Grow;
                updatedSelectedHero.physical_penetration = Number(
                    updatedSelectedHero.physical_penetration.toFixed(2)
                );
                updatedSelectedHero.magic_penetration -=
                    updatedSelectedHero.magic_penetration_Grow;
                updatedSelectedHero.magic_penetration = Number(
                    updatedSelectedHero.magic_penetration.toFixed(2)
                );
                updatedSelectedHero.damage_reduction -=
                    updatedSelectedHero.damage_reduction_Grow;
                updatedSelectedHero.damage_reduction = Number(
                    updatedSelectedHero.damage_reduction.toFixed(2)
                );
                updatedSelectedHero.attack_speed -=
                    updatedSelectedHero.attack_speed_Grow;
                updatedSelectedHero.attack_speed = Number(
                    updatedSelectedHero.attack_speed.toFixed(2)
                );
                updatedSelectedHero.movement_speed -=
                    updatedSelectedHero.movement_speed_Grow;

                return { ...updatedSelectedHero, heroLevel: heroLevel - 1 };
            } else if (heroLevel === 1) {
                toast.warning("Min level", { autoClose: 1000 });
                return updatedSelectedHero;
            }
        });
    };

    const handleAddDataClick3 = () => {
        setSelectedHero2((prevSelectedHero) => {
            const updatedSelectedHero = { ...prevSelectedHero };
            if (heroLevel2 < 15) {
                setHeroLevel2(heroLevel2 + 1);
                updatedSelectedHero.hp += updatedSelectedHero.hp_Grow;

                updatedSelectedHero.mana += updatedSelectedHero.mana_Grow;
                updatedSelectedHero.hp_regen +=
                    updatedSelectedHero.hp_regen_Grow;
                updatedSelectedHero.hp_regen = Number(
                    updatedSelectedHero.hp_regen.toFixed(2)
                );
                updatedSelectedHero.mana_regen +=
                    updatedSelectedHero.mana_regen_Grow;
                updatedSelectedHero.mana_regen = Number(
                    updatedSelectedHero.mana_regen.toFixed(2)
                );
                updatedSelectedHero.physical_attack +=
                    updatedSelectedHero.physical_attack_Grow;
                updatedSelectedHero.physical_attack = Number(
                    updatedSelectedHero.physical_attack.toFixed(2)
                );
                updatedSelectedHero.magic_power +=
                    updatedSelectedHero.magic_power_Grow;
                updatedSelectedHero.magic_power = Number(
                    updatedSelectedHero.magic_power.toFixed(2)
                );
                updatedSelectedHero.physical_defense +=
                    updatedSelectedHero.physical_defense_Grow;
                updatedSelectedHero.physical_defense = Number(
                    updatedSelectedHero.physical_defense.toFixed(2)
                );
                updatedSelectedHero.magic_defense +=
                    updatedSelectedHero.magic_defense_Grow;
                updatedSelectedHero.magic_defense = Number(
                    updatedSelectedHero.magic_defense.toFixed(2)
                );
                updatedSelectedHero.physical_penetration +=
                    updatedSelectedHero.physical_penetration_Grow;
                updatedSelectedHero.physical_penetration = Number(
                    updatedSelectedHero.physical_penetration.toFixed(2)
                );

                updatedSelectedHero.magic_penetration +=
                    updatedSelectedHero.magic_penetration_Grow;
                updatedSelectedHero.magic_penetration = Number(
                    updatedSelectedHero.magic_penetration.toFixed(2)
                );
                updatedSelectedHero.damage_reduction +=
                    updatedSelectedHero.damage_reduction_Grow;
                updatedSelectedHero.damage_reduction = Number(
                    updatedSelectedHero.damage_reduction.toFixed(2)
                );
                updatedSelectedHero.attack_speed +=
                    updatedSelectedHero.attack_speed_Grow;
                updatedSelectedHero.attack_speed = Number(
                    updatedSelectedHero.attack_speed.toFixed(2)
                );
                updatedSelectedHero.movement_speed +=
                    updatedSelectedHero.movement_speed_Grow;

                return { ...updatedSelectedHero, heroLevel: heroLevel2 + 1 };
            } else {
                toast.warning("Max level", { autoClose: 1000 });
                return updatedSelectedHero;
            }
        });
    };

    const handleDeleteDataClick3 = () => {
        setSelectedHero2((prevSelectedHero) => {
            const updatedSelectedHero = { ...prevSelectedHero };
            if (heroLevel2 > 1) {
                setHeroLevel2(heroLevel2 - 1);
                updatedSelectedHero.hp -= updatedSelectedHero.hp_Grow;
                updatedSelectedHero.mana -= updatedSelectedHero.mana_Grow;
                updatedSelectedHero.hp_regen -=
                    updatedSelectedHero.hp_regen_Grow;
                updatedSelectedHero.hp_regen = Number(
                    updatedSelectedHero.hp_regen.toFixed(2)
                );
                updatedSelectedHero.mana_regen -=
                    updatedSelectedHero.mana_regen_Grow;
                updatedSelectedHero.mana_regen = Number(
                    updatedSelectedHero.mana_regen.toFixed(2)
                );
                updatedSelectedHero.physical_attack -=
                    updatedSelectedHero.physical_attack_Grow;
                updatedSelectedHero.physical_attack = Number(
                    updatedSelectedHero.physical_attack.toFixed(2)
                );
                updatedSelectedHero.magic_power -=
                    updatedSelectedHero.magic_power_Grow;
                updatedSelectedHero.magic_power = Number(
                    updatedSelectedHero.magic_power.toFixed(2)
                );
                updatedSelectedHero.physical_defense -=
                    updatedSelectedHero.physical_defense_Grow;
                updatedSelectedHero.physical_defense = Number(
                    updatedSelectedHero.physical_defense.toFixed(2)
                );
                updatedSelectedHero.magic_defense -=
                    updatedSelectedHero.magic_defense_Grow;
                updatedSelectedHero.magic_defense = Number(
                    updatedSelectedHero.magic_defense.toFixed(2)
                );
                updatedSelectedHero.physical_penetration -=
                    updatedSelectedHero.physical_penetration_Grow;
                updatedSelectedHero.physical_penetration = Number(
                    updatedSelectedHero.physical_penetration.toFixed(2)
                );
                updatedSelectedHero.magic_penetration -=
                    updatedSelectedHero.magic_penetration_Grow;
                updatedSelectedHero.magic_penetration = Number(
                    updatedSelectedHero.magic_penetration.toFixed(2)
                );
                updatedSelectedHero.damage_reduction -=
                    updatedSelectedHero.damage_reduction_Grow;
                updatedSelectedHero.damage_reduction = Number(
                    updatedSelectedHero.damage_reduction.toFixed(2)
                );
                updatedSelectedHero.attack_speed -=
                    updatedSelectedHero.attack_speed_Grow;
                updatedSelectedHero.attack_speed = Number(
                    updatedSelectedHero.attack_speed.toFixed(2)
                );
                updatedSelectedHero.movement_speed -=
                    updatedSelectedHero.movement_speed_Grow;

                return { ...updatedSelectedHero, heroLevel: heroLevel2 - 1 };
            } else if (heroLevel === 1) {
                toast.warning("Min level", { autoClose: 1000 });
                return updatedSelectedHero;
            }
        });
    };

    if (status === "loading") {
        return <Loading />;
    }

    if (error) {
        // return <div>Error: {error}</div>;
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
                className="w-full h-fit py-[100px] pb-[120px] bg-center bg-cove"
                style={{
                    backgroundImage: `url(https://a-static.besthdwallpaper.com/black-fierce-dragon-yu-zhong-mobile-legends-ml-wallpaper-1920x1280-67272_38.jpg)`,
                }}>
                <div
                    className=" container mx-auto flex w-full pb-10 justify-start"
                    style={{ ...myStyles }}>
                    <div className="w-[33%] text-center mt-5">
                        {selectedHero && (
                            <div className="flex flex-col items-center mt-10">
                                <div className="text-center overflow-visible">
                                    <img
                                        variant="circular"
                                        size="lg"
                                        alt={selectedHero.name}
                                        className="object-cover overflow-visible w-[400px] h-[350px]  p-0.5"
                                        src={selectedHero.duelImage}
                                    />
                                    <div>
                                        <Typography className="mt-4 font-bold text-xl">
                                            {selectedHero.name}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero.hp}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero.mana}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero.hp_regen}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero.mana_regen}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero.physical_attack}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero.magic_power}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero.physical_defense}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero.magic_defense}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero.physical_penetration}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero.magic_penetration}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero.damage_reduction}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero.attack_speed}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero.movement_speed}
                                        </Typography>
                                    </div>
                                    <div className="flex justify-between">
                                        <Button
                                            color="blue"
                                            className="mt-4"
                                            onClick={handleAddDataClick}>
                                            Level Up +
                                        </Button>
                                        <div className="mt-3 font-bold text-3xl">
                                            <h4>{heroLevel}</h4>
                                        </div>
                                        <Button
                                            color="blue"
                                            className="mt-4"
                                            onClick={handleDeleteDataClick2}>
                                            Level Down -
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}

                        <Fragment>
                            <Button
                                onClick={() => handleOpen("lg")}
                                variant="gradient">
                                Select Hero
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
                                <DialogHeader>All Heroes</DialogHeader>
                                <DialogBody divider>
                                    {heroesData.map((hero) => (
                                        <div
                                            key={hero._id}
                                            onClick={() =>
                                                handleHeroClick1(hero)
                                            }
                                            style={{ cursor: "pointer" }}>
                                            <Avatar
                                                variant="circular"
                                                size="lg"
                                                alt={hero.name}
                                                className="border border-blue-500 p-0.5"
                                                src={hero.profile}
                                            />
                                            <Typography>{hero.name}</Typography>
                                        </div>
                                    ))}
                                </DialogBody>
                                <DialogFooter>
                                    <Button
                                        variant="text"
                                        color="red"
                                        onClick={() => handleOpen(null)}
                                        className="mr-1">
                                        <span>Cancel</span>
                                    </Button>
                                </DialogFooter>
                            </Dialog>
                        </Fragment>
                        <div className="text-center">
                            <Button
                                variant="outlined"
                                color="blue"
                                className="mt-4"
                                onClick={() => setSelectedHero(null)}>
                                Close
                            </Button>
                        </div>
                    </div>
                    <div className="w-[33%] text-center ">
                        <div className="mt-[250px]">
                            <Typography className="font-bold uppercase text-4xl">
                                {/* {selectedHero.name} */}
                                Hero
                            </Typography>
                            <Typography className="font-bold uppercase text-xl">
                                vs
                            </Typography>
                            <Typography className="font-bold uppercase text-4xl">
                                {/* {selectedHero.name} */}
                                Hero
                            </Typography>
                        </div>
                        <div className="mt-[96px]">
                            <Typography className="border-b border-blue-gray-100">
                                HP
                            </Typography>
                            <Typography className="border-b border-blue-gray-100">
                                Mana
                            </Typography>
                            <Typography className="border-b border-blue-gray-100">
                                HP Regen
                            </Typography>
                            <Typography className="border-b border-blue-gray-100">
                                Mana Regen
                            </Typography>
                            <Typography className="border-b border-blue-gray-100">
                                Physical Attack
                            </Typography>
                            <Typography className="border-b border-blue-gray-100">
                                Magic Power
                            </Typography>
                            <Typography className="border-b border-blue-gray-100">
                                Physical Defense
                            </Typography>
                            <Typography className="border-b border-blue-gray-100">
                                Magic Defense
                            </Typography>
                            <Typography className="border-b border-blue-gray-100">
                                Physical Penetration
                            </Typography>
                            <Typography className="border-b border-blue-gray-100">
                                Magic Penetration
                            </Typography>
                            <Typography className="border-b border-blue-gray-100">
                                Damage Reduction
                            </Typography>
                            <Typography className="border-b border-blue-gray-100">
                                Attack Speed
                            </Typography>
                            <Typography className="border-b border-blue-gray-100">
                                Movement Speed
                            </Typography>
                        </div>
                    </div>
                    <div className="w-[33%] text-center mt-5">
                        {selectedHero2 && (
                            <div className="flex flex-col items-center mt-10">
                                <div className="text-center overflow-visible">
                                    <img
                                        variant="circular"
                                        size="lg"
                                        alt={selectedHero2.name}
                                        className="object-cover overflow-visible w-[400px] h-[350px]  p-0.5"
                                        src={selectedHero2.duelImage}
                                    />
                                    <div>
                                        <Typography className="mt-4 font-bold text-xl">
                                            {selectedHero2.name}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero2.hp}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero2.mana}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero2.hp_regen}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero2.mana_regen}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero2.physical_attack}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero2.magic_power}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero2.physical_defense}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero2.magic_defense}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero2.physical_penetration}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero2.magic_penetration}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero2.damage_reduction}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero2.attack_speed}
                                        </Typography>
                                        <Typography className="border-b border-b-gray-100">
                                            {selectedHero2.movement_speed}
                                        </Typography>
                                    </div>
                                    <div className="flex justify-between">
                                        <Button
                                            color="blue"
                                            className="mt-4"
                                            onClick={handleAddDataClick3}>
                                            Level Up +
                                        </Button>
                                        <div className="mt-3 font-bold text-3xl">
                                            <h4>{heroLevel2}</h4>
                                        </div>
                                        <Button
                                            color="blue"
                                            className="mt-4"
                                            onClick={handleDeleteDataClick3}>
                                            Level Down -
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <Fragment>
                            <Button
                                onClick={() => handleOpen2("lg")}
                                variant="gradient">
                                Select Hero
                            </Button>
                            <Dialog
                                open={
                                    size2 === "xs" ||
                                    size2 === "sm" ||
                                    size2 === "md" ||
                                    size2 === "lg" ||
                                    size2 === "xl" ||
                                    size2 === "xxl"
                                }
                                size={size2 || "md"}
                                handler={handleOpen2}>
                                <DialogHeader>All Heroes</DialogHeader>
                                <DialogBody divider>
                                    {heroesData.map((hero) => (
                                        <div
                                            key={hero._id}
                                            onClick={() =>
                                                handleHeroClick2(hero)
                                            }
                                            style={{ cursor: "pointer" }}>
                                            <Avatar
                                                variant="circular"
                                                size="lg"
                                                alt={hero.name}
                                                className="border border-blue-500 p-0.5"
                                                src={hero.profile}
                                            />
                                            <Typography>{hero.name}</Typography>
                                        </div>
                                    ))}
                                </DialogBody>
                                <DialogFooter>
                                    <Button
                                        variant="text"
                                        color="red"
                                        onClick={() => handleOpen2(null)}
                                        className="mr-1">
                                        <span>Cancel</span>
                                    </Button>
                                </DialogFooter>
                            </Dialog>
                        </Fragment>
                        <div className="text-center">
                            <Button
                                variant="outlined"
                                color="blue"
                                className="mt-4"
                                onClick={() => setSelectedHero2(null)}>
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default HeroVersus;
