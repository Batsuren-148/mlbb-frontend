import React from "react";
import { Layout } from "../layouts/layout";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

function HomePage() {
    return (
        <Layout>
            <div>
                <div>
                    <img
                        src="/image/wallpaper1.jpg"
                        alt="wallpaper"
                        className="h-[99vh] object-cover w-full "
                    />
                </div>
                <div className="container mx-auto my-10 flex justify-between flex-wrap">
                    <h3 className="w-full text-center text-3xl font-bold uppercase mb-10">
                        Heroes Card
                    </h3>
                    <Card
                        className="w-[30%] h-fit bg-transparent border "
                        data-aos="zoom-up"
                        data-aos-delay="0">
                        <CardHeader
                            floated={false}
                            className="bg-transparent overflow-visible h-fit">
                            <img
                                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIPa0qAkscK70gYL9oXB5YNiXEl-_ELql8LclaOniZKgdkqzNBu33b2f-rBNvJmrFCcrcUgpWT9OWu-nlj2EUurwfPeVrBh9KPH2AsCLpUgrdWRbPLbPHIlWRCJ-U3tfOS7V-_vq1vxW2PyYZai3TjH5J5TzSv4YJDc0nJJhL7KsaQBMSixiE5Z3lKbg/s3840/zilong-png-mobile-legends%20(3).png"
                                alt="profilepicture"
                                className="overflow-visible object-cover h-[250px]"
                            />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography
                                variant="h4"
                                color="white"
                                className="mb-2 uppercase">
                                Zilong
                            </Typography>
                            <Typography
                                color="blue"
                                className="font-medium"
                                textGradient>
                                Assasian / Fighter
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card
                        className="w-[30%] h-fit bg-transparent border"
                        data-aos="zoom-up"
                        data-aos-delay="100">
                        <CardHeader
                            floated={false}
                            className="h-fit bg-transparent overflow-visible">
                            <img
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a44778ea-3457-40e0-8979-b7e3685d23d0/df6hsph-5290b876-faeb-4b60-a204-dd8f5f111c3e.png/v1/fill/w_1280,h_720/miya_moon_priestess_skin_8k_png_by_newjer53_df6hsph-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYTQ0Nzc4ZWEtMzQ1Ny00MGUwLTg5NzktYjdlMzY4NWQyM2QwXC9kZjZoc3BoLTUyOTBiODc2LWZhZWItNGI2MC1hMjA0LWRkOGY1ZjExMWMzZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.M_fllJMbwGUPjHTY4pTMZIMceFE5cHx9GvFr0bBmEg0"
                                alt="profilepicture"
                                className="overflow-visible object-cover h-[250px]"
                            />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography
                                variant="h4"
                                color="white"
                                className="mb-2 uppercase">
                                Miya
                            </Typography>
                            <Typography
                                color="blue"
                                className="font-medium"
                                textGradient>
                                Marksman
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card
                        className="w-[30%] h-fit bg-transparent border"
                        data-aos="zoom-up"
                        data-aos-delay="200">
                        <CardHeader
                            floated={false}
                            className="h-fit bg-transparent overflow-visible">
                            <img
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ec970f4-1706-4915-9a93-41f3d9c8202c/depsk1a-4797dd09-3a64-4a4f-8473-5d0269851c55.png/v1/fill/w_1192,h_670/mobile_legends_johnson_optimus_prime_4k_png_by_divoras_depsk1a-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMmVjOTcwZjQtMTcwNi00OTE1LTlhOTMtNDFmM2Q5YzgyMDJjXC9kZXBzazFhLTQ3OTdkZDA5LTNhNjQtNGE0Zi04NDczLTVkMDI2OTg1MWM1NS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JD3ZXDeF2CyQZ6ACO25_EWSlbYFfnRG5zNpAXpz02g4"
                                alt="profilepicture"
                                className="overflow-visible object-cover h-[250px]"
                            />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography
                                variant="h4"
                                color="white"
                                className="mb-2 uppercase">
                                Jonhson
                            </Typography>
                            <Typography
                                color="blue"
                                className="font-medium"
                                textGradient>
                                Tank
                            </Typography>
                        </CardBody>
                    </Card>
                </div>

                <div className="flex justify-between container mx-auto my-10 mb-0">
                    <div className="w-[50%] h-[450px]">
                        <img
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwSWrQ3rgG3cxS1PczMfbN9gaWisr2-L1ENoiutzDEma9mFWxOO6_wSq7YSd6NFHh40tau7TZxyQD-DVnabR1SUmP-jmX4TxhSExc7yCDhtnmJLYGLGioabPc1nDY5Pn9tjYd9o_Btv4Ib0cUrvwq6_BM0EkWW5kIxSMavTbua_UqkWLDAHSX60loZhw/s3896/arlott-wallpaper-hd-mobile-legends.jpg"
                            alt=""
                            className="object-cover w-full h-full rounded-xl"
                        />
                    </div>
                    <div className="w-[50%] h-[450px] flex justify-center items-center flex-wrap">
                        <div className="h-fit px-10">
                            <h2 className="font-bold text-center text-3xl w-full mb-8">
                                New Hero Coming !!!
                            </h2>
                            <p className="text-justify italic text-lg">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores facilis magnam non
                                dolor necessitatibus dolore harum ab eos
                                mollitia. Ullam fugiat quis impedit tempore,
                                possimus cumque? Est doloremque totam quasi.
                                Voluptatum commodi totam a atque in suscipit
                                optio, autem vitae quidem minus eos vero laborum
                                excepturi quos rerum doloremque voluptate sit
                                explicabo aut reiciendis incidunt expedita.
                                Reiciendis accusamus excepturi officia! Ad quis
                                accusantium error eveniet?.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between container mx-auto my-10 mt-0">
                    <div className="w-[50%] h-[450px] flex justify-center items-center flex-wrap">
                        <div className="h-fit px-10">
                            <h2 className="font-bold text-center text-3xl w-full mb-8">
                                New Update Coming !!!
                            </h2>
                            <p className="text-justify italic text-lg">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores facilis magnam non
                                dolor necessitatibus dolore harum ab eos
                                mollitia. Ullam fugiat quis impedit tempore,
                                possimus cumque? Est doloremque totam quasi.
                                Voluptatum commodi totam a atque in suscipit
                                optio, autem vitae quidem minus eos vero laborum
                                excepturi quos rerum doloremque voluptate sit
                                explicabo aut reiciendis incidunt expedita.
                                Reiciendis accusamus excepturi officia! Ad quis
                                accusantium error eveniet?.
                            </p>
                        </div>
                    </div>
                    <div className="w-[50%] h-[450px]">
                        <img
                            src="https://i.pinimg.com/originals/8a/b4/df/8ab4dfa2efee16538d8dd6d841130919.png"
                            alt=""
                            className="object-cover w-full h-full rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;
