"use client";
import React from "react";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirectTo: "/",
        });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="bg-[#0072ff]  w-full h-screen">
      <center className="w-[70%] bg-white rounded-lg m-auto mt-10 py-5 px-5">
        <h1 className="font-semibold text-[24px] text-left ml-10">Login</h1>

        <form
          className="w-[90%] flex flex-col gap-4 py-5 mt-5"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">
              <input
                type="text"
                name="email"
                id=""
                className="bg-[#f7fbff] w-full rounded-[12px] border border-[#d4d7e3] p-4"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </label>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  id=""
                  className="bg-[#f7fbff] w-full rounded-[12px] border border-[#d4d7e3] p-4"
                  placeholder="Kata Sandi"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </label>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-[#1e4ae9] text-sm">
                Forget Password?
              </a>
            </div>

            <button className="text-white bg-[#0072ff] p-4 rounded-[12px] hover:opacity-50">
              Log in
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center gap-1">
          <div className="w-[50px] h-[1px] bg-[#d4d7e3]"></div>
          <span className="text-sm">Log in lebih cepat dengan</span>
          <div className="w-[50px] h-[1px] bg-[#d4d7e3]"></div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          <button className="border border-[#d4d7e3] rounded-md p-1 hover:bg-[#d4d7e3]">
            <Image
              src={"/social_media/apple-icon.svg"}
              alt="apple-icon"
              width={30}
              height={30}
            />
          </button>
          <button className="border border-[#d4d7e3] rounded-md p-1 hover:bg-[#d4d7e3]">
            <Image
              src={"/social_media/fb-icon.svg"}
              alt="fb-icon"
              width={30}
              height={30}
            />
          </button>
          <button className="border border-[#d4d7e3] rounded-md p-1 hover:bg-[#d4d7e3]">
            <Image
              src={"/social_media/icons8-google.svg"}
              alt="google-icon"
              width={30}
              height={30}
            />
          </button>
        </div>

        <div className="my-5 flex justify-center items-center gap-1">
          <span className="text-sm">Belum punya akun?</span>
          <span className="font-semibold text-[#0072ff] text-sm">
            <Link href={"/register"}>Daftar, yuk!</Link>
          </span>
        </div>
      </center>
    </div>
  );
}
