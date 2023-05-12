import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Layout } from "../layouts/layout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../services/Auth/loginAuth";

function LoginPage() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = { email, password };
            dispatch(loginUser(data));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Layout>
            <div className="h-[58vh] flex justify-center my-10 mt-[60px] mb-[60px]">
                <Card
                    color="white"
                    className="py-[20px] px-[20px] bg-white mx-[40px] "
                    shadow={false}>
                    <Typography
                        variant="h4"
                        color="blue-gray"
                        className="text-center">
                        Sign In
                    </Typography>
                    <Typography
                        color="gray"
                        className="mt-1 font-normal text-center">
                        Enter your details to login.
                    </Typography>
                    <form
                        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                        onSubmit={handleSubmit}>
                        <div className="mb-4 flex flex-col gap-6">
                            <Input
                                size="lg"
                                label="Email"
                                type="email"
                                name="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                type="password"
                                size="lg"
                                label="Password"
                                name="password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button className="mt-6" type="submit" fullWidth>
                            Login
                        </Button>
                        <Typography
                            color="gray"
                            className="mt-4 text-center font-normal">
                            You don't have an account?{" "}
                            <a
                                href="register"
                                className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                                Register
                            </a>
                        </Typography>
                    </form>
                </Card>
            </div>
        </Layout>
    );
}

export default LoginPage;
