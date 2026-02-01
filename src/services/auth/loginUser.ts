"use server";
import z from "zod";

/* eslint-disable @typescript-eslint/no-explicit-any */

const loginValidationZodSchema = z.object({
  email: z.email({
    error: "email is required",
  }),
  password: z
    .string()
    .min(6, {
      error: "Password is required must be at least 6 characters",
    })
    .max(50, {
      error: "Password must be at atmost 100 characters",
    }),
});

export const loginUser = async (
  _currentState: any,
  formData: any,
): Promise<any> => {
  try {
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const validFields = loginValidationZodSchema.safeParse(loginData);
    if (!validFields.success) {
      return {
        success: false,
        errors: validFields.error.issues.map((issue) => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
      };
    }

    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    return res;
  } catch (error) {
    console.log(error);
    return {
      message: "Login Faild",
    };
  }
};
