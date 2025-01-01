"use client";

import { AxiosError } from "axios";
import { api } from "@/utils/axios";
import { Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Link from "next/link";
const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  phoneNumber: Yup.number().required(),
  name: Yup.string().required(),
  password: Yup.string().required().min(5),
});

interface IregisterForm {
  email: string;
  password: string;
  phoneNumber: number;
  name: string;
}

export default function Page() {
  const initialValues: IregisterForm = {
    email: "", //statik, nilai default
    password: "",
    phoneNumber: 0,
    name: "",
  };

  const submitRegister = async (values: IregisterForm) => {
    try {
      console.log(values);
      const res = await api.get("/users", {
        params: { email: values.email, phoneNumber: values.phoneNumber },
      });
      const checkUser = res.data as IregisterForm[];
      if (checkUser.length) throw new Error("email sudah terdaftar");
      else if (checkUser.length) throw new Error("Nomor Hp sudah terdaftar");
      await api.post("/users", values);
    } catch (error: unknown) {
      if (error instanceof AxiosError) console.log(error.response?.data);
    }
  };

  return (
    <div className="bg-[#0072ff] w-full min-h-max">
      <center className="bg-white w-[70%] h-max m-auto mt-10 rounded-lg py-10">
        <h1 className="font-semibold text-[24px] text-left ml-10">Daftar</h1>
        <Formik //komponen punya props
          initialValues={initialValues}
          onSubmit={submitRegister} //kalau ada button bisa menjalankan suatu fungsi
          validationSchema={LoginSchema}
        >
          {(props: FormikProps<IregisterForm>) => {
            const { values, errors, touched, handleChange } = props;
            return (
              <Form>
                <div className="pt-10 px-10 flex flex-col w-full">
                  <label htmlFor="email">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      value={values.email}
                      className="bg-[#f7fbff] w-full rounded-[12px] border border-[#d4d7e3] p-4"
                    />
                  </label>
                  {touched.email && errors.email ? (
                    <div className="text-red-500 text-sm text-left">
                      {errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="py-5 px-10 flex flex-col w-full">
                  <label htmlFor="password">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Kata Sandi"
                      onChange={handleChange}
                      value={values.password}
                      className="bg-[#f7fbff] w-full rounded-[12px] border border-[#d4d7e3] p-4"
                    />
                  </label>

                  {touched.password && errors.password ? (
                    <div className="text-red-500 text-sm text-left">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="mx-10">
                  <button
                    type="submit"
                    className=" w-full bg-[#0072ff] rounded-[12px] text-white font-semibold py-3 hover:opacity-60"
                  >
                    Daftar
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
        <div className="mt-5 flex items-center justify-center gap-1">
          <div className="w-[50px] h-[1px] bg-[#d4d7e3]"></div>
          <span className="text-sm">Daftar lebih cepat dengan</span>
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
          <span className="text-sm">Sudah punya akun?</span>
          <span className="font-semibold text-[#0072ff] text-sm">
            <Link href={"/login"}>Log in, yuk!</Link>
          </span>
        </div>
      </center>
    </div>
  );
}
