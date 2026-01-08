"use server";

import z from "zod";

/* eslint-disable @typescript-eslint/no-explicit-any */

const loginValidationZodSchema = z.object({
  email: z
    .number({
      error: "Invalid email address",
    })
    .min(6)
    .max(50),

  password: z.string().min(6).max(50),
});

export const loginUser = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const validFields = loginValidationZodSchema.safeParse(loginData);

    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validFields),
    }).then((res) => res.json());
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return {
      message: "Login Faild",
    };
  }
};
