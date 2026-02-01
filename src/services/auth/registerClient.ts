/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import z from "zod";

const registerValidationZodSchema = z
  .object({
    name: z.string().min(1, {
      error: "Name is required",
    }),
    email: z.email({
      error: "Email is required",
    }),
    contactNumber: z.string().min(11, {
      error: "Number is required and 11 character",
    }),
    password: z
      .string()
      .min(6, {
        error: "Password is required must be at least 6 characters",
      })
      .max(50, {
        error: "Password must be at atmost 100 characters",
      }),
    confirmPassword: z.string().min(6, {
      error: "Confirm password is required must be at least 6 characters",
    }),
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export const registerClient = async (
  _currentState: any,
  formData: any,
): Promise<any> => {
  const validData = {
    name: formData.get("name"),
    email: formData.get("email"),
    contactNumber: formData.get("contactNumber"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const validatFields = registerValidationZodSchema.safeParse(validData);
  try {
    const registerData = {
      password: formData.get("password"),
      client: {
        name: formData.get("name"),
        email: formData.get("email"),
        contactNumber: formData.get("contactNumber"),
      },
    };

    if (!validatFields.success) {
      return {
        success: false,
        errors: validatFields.error.issues.map((issue) => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
      };
    }

    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(registerData));

    const res = await fetch("http://localhost:5000/api/v1/user/create-client", {
      method: "POST",
      body: newFormData,
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    // return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : "Registration Failed. Please try again."}` }
    return {
      success: false,
      message: `${"Registration faield"} and ${error.message}`,
    };
  }
};
