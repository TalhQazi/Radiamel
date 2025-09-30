import { api } from "./api";

export type Me = {
  id: string;
  email: string;
  name?: string;
  role: "user" | "admin";
  ndaAccepted: boolean;
};

export async function register(
  email: string,
  password: string,
  name?: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await api.post("/auth/register", { email, password, name });
    if (res.status === 201) return { ok: true };
    return { ok: false, error: "unknown_error" };
  } catch (err: any) {
    const code = err?.response?.data?.error;
    if (code === "email_exists") return { ok: false, error: "email_exists" };
    return { ok: false, error: code || "network_error" };
  }
}

export async function login(
  email: string,
  password: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await api.post("/auth/login", { email, password });
    if (res.status === 200) return { ok: true };
    return { ok: false, error: "unknown_error" };
  } catch (err: any) {
    const code = err?.response?.data?.error;
    return { ok: false, error: code || "invalid_credentials" };
  }
}

export async function me(): Promise<Me | null> {
  try {
    const res = await api.get("/auth/me");
    return res.data as Me;
  } catch {
    return null;
  }
}

export async function logout(): Promise<void> {
  try {
    await api.post("/auth/logout");
  } catch {}
}

export async function acceptNda(): Promise<{ ok: boolean }> {
  try {
    const res = await api.post("/nda/accept", { accepted: true });
    return { ok: res.status === 200 };
  } catch {
    return { ok: false };
  }
}

