import React from "react";
import { Layout } from "../layouts/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroesData } from "../services/Actions/heroesAction";
import Loading from "../components/loading/loading";
import { Typography, Avatar } from "@material-tailwind/react";

const HeroesPage = () => {
    const dispatch = useDispatch();
    const { heroesData, status, error } = useSelector((state) => state.heroes);

    useEffect(() => {
        dispatch(fetchHeroesData());
    }, [dispatch]);
    // console.log(heroesData);

    if (status === "loading") {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Layout>
            <div className="mt-[100px] h-[100vh]">
                <div className="flex justify-start gap-3 container mx-auto">
                    {heroesData.map((hero) => (
                        <Typography
                            key={hero._id}
                            as="a"
                            href={`/heroes/${hero._id}`}>
                            <div className="text-center w-fit h-fit">
                                <Avatar
                                    variant="circular"
                                    size="lg"
                                    alt={hero.name}
                                    className="border border-blue-500 p-0.5"
                                    src={hero.profile}
                                />
                                <Typography> {hero.name}</Typography>
                            </div>
                        </Typography>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default HeroesPage;
