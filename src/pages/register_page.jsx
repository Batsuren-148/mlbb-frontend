import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Layout } from "../layouts/layout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../services/Auth/registerAuth";

function RegisterPage() {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const data = { username, email, password };
    //     try {
    //         const response = await axios.post(
    //             "http://localhost:8000/register",
    //             data
    //         );
    //         console.log(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { username, email, password };
        dispatch(registerUser(data));
    };

    return (
        <Layout>
            <div className="flex justify-center my-10  mt-[40px]">
                <Card
                    color="transparent"
                    className="bg-white py-[20px] px-[20px]"
                    shadow={false}>
                    <Typography
                        variant="h4"
                        color="blue-gray"
                        className="text-center">
                        Sign Up
                    </Typography>
                    <Typography
                        color="gray"
                        className="mt-1 font-normal text-center">
                        Enter your details to register.
                    </Typography>
                    <form
                        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                        onSubmit={handleSubmit}>
                        <div className="mb-4 flex flex-col gap-6">
                            <Input
                                size="lg"
                                label="Username"
                                type="text"
                                name="username"
                                required
                                onChange={(e) => setUsername(e.target.value)}
                            />
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
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal">
                                    I agree the
                                    <a
                                        href="#/"
                                        className="font-medium transition-colors hover:text-blue-500">
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        <Button className="mt-6" fullWidth type="submit">
                            Register
                        </Button>
                        <Typography
                            color="gray"
                            className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <a
                                href="#/"
                                className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                                Login
                            </a>
                        </Typography>
                    </form>
                </Card>
            </div>
        </Layout>
    );
}

export default RegisterPage;
