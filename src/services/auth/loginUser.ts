"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
export const loginUser = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
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
