/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
export const register = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const registerData = {
      password: formData.get("password"),
      client: {
        name: formData.get("name"),
        email: formData.get("email"),
        contactNumber: formData.get("contactNumber"),
      },
    };

    const res = await fetch("http://localhost:5000/api/v1/user/create-client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    }).then((res) => res.json());
    console.log("res:", res);
    return res;
  } catch (error) {
    console.log(error);
    return {
      error: "Registration faild",
    };
  }
};
