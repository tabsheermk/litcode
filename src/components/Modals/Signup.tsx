import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/firebase";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = (newMode: any) => {
    setAuthModalState((oldState) => ({
      ...oldState,
      isOpen: true,
      mode: newMode,
    }));
  };

  const [input, setInput] = useState({
    email: "",
    displayName: "",
    password: "",
  });

  const router = useRouter();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((oldState) => ({ ...oldState, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.email || !input.displayName || !input.password)
      return alert("Please fill all fields");
    try {
      const newUser = await createUserWithEmailAndPassword(
        input.email,
        input.password
      );
      if (!newUser) return;
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  return (
    <form className="space-y-6 px-6 py-4" onSubmit={handleRegister}>
      <h3 className="text-x1 font-medium text-white">Register to LitCode</h3>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 text-gray-200"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="
              border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="xyz@email.com"
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <label
          htmlFor="displayName"
          className="block text-sm font-medium mb-2 text-gray-200"
        >
          Display Name
        </label>
        <input
          type="displayName"
          name="displayName"
          id="displayName"
          className="
              border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="John Doe"
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium mb-2 text-gray-200"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="
              border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="*********"
          onChange={handleChangeInput}
        />
      </div>
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
        text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange"
      >
        {loading ? "Registering..." : "Register"}
      </button>
      <div className="text-sm font-medium text-gray-300">
        Already have an account?{" "}
        <a
          href="#"
          className="text-blue-700 hove:underline"
          onClick={() => handleClick("login")}
        >
          Log In
        </a>
      </div>
    </form>
  );
};
export default Signup;
