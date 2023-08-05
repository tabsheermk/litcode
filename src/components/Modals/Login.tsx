import { authModalState } from "@/atoms/authModalAtom";
import React from "react";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = (newMode: any) => {
    setAuthModalState((oldState) => ({
      ...oldState,
      isOpen: true,
      mode: newMode,
    }));
  };

  return (
    <form className="space-y-6 px-6 py-4">
      <h3 className="text-x1 font-medium text-white">Sign to LitCode</h3>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 text-gray-200"
        >
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="xyz@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium mb-2 text-gray-200"
        >
          Your Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="*********"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
          text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange"
      >
        Login
      </button>
      <button
        className="w-full justify-md"
        onClick={() => handleClick("forgotPassword")}
      >
        <a
          href="#"
          className="text-sm block text-brand-orange hover:underline w-full text-right"
        >
          Forgot Password?
        </a>
      </button>
      <div className="text-sm font-medium text-gray-300">
        Not Registered?{" "}
        <a
          href="#"
          className="text-blue-700 hove:underline"
          onClick={() => handleClick("register")}
        >
          Create account
        </a>
      </div>
    </form>
  );
};
export default Login;
