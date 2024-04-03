import adminData from "@api/adminData";

async function login() {
    const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData.loginData)
    });

    return response.ok;
}

async function register() {
    const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData.registerData)
    });
}

export async function checkIsAdminExist() {
    const loginResult = await login();

    if (!loginResult) {
        register();
    }
}