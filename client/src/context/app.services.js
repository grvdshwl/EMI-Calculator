export const LoginService = async (email, password) => {
  try {
    const loginData = await fetch("http://localhost:5001/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await loginData.json();

    return data;
  } catch (error) {
    throw new Error("Error! check your email or password.");
  }
};

export const RegisterService = async (data) => {
  try {
    const registerFetch = await fetch("http://localhost:5001/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const registerData = await registerFetch.json();
    console.log(registerData);

    return registerData;
  } catch (error) {
    throw new Error("Error! creating user");
  }
};

export const saveHistory = async (data, email) => {
  try {
    await fetch(`http://localhost:5001/history/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw new Error("Error saving data");
  }
};

export const fetchHistory = async (email) => {
  try {
    const history = await fetch(`http://localhost:5001/history/${email}`);

    const historyData = await history.json();

    return historyData[0].data;
  } catch (error) {
    throw new Error("Error saving data");
  }
};
