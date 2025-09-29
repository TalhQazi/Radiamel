export type AuthUser = {
  id: string;
  email: string;
  name?: string;
  passwordHash: string; // demo only; do NOT do this in prod
  createdAt: number;
};

const USERS_KEY = "auth_users_v1";
const TOKEN_KEY = "auth_token_v1";

function readUsers(): AuthUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as AuthUser[]) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: AuthUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function hashPassword(pw: string): string {
  // demo hash: reverse + length; NOT secure. Replace with real hashing on server in prod
  return `${pw.split("").reverse().join("")}-${pw.length}`;
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem(TOKEN_KEY);
}

export function logout(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export function register(
  email: string,
  password: string,
  name?: string
): { ok: true } | { ok: false; error: string } {
  const users = readUsers();
  const exists = users.some(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
  if (exists) return { ok: false, error: "User already exists" };

  const user: AuthUser = {
    id: crypto.randomUUID(),
    email,
    name,
    passwordHash: hashPassword(password),
    createdAt: Date.now(),
  };

  users.push(user);
  writeUsers(users);
  // auto-login after signup
  localStorage.setItem(TOKEN_KEY, `demo-${user.id}`);
  return { ok: true };
}

export function login(
  email: string,
  password: string
): { ok: true } | { ok: false; error: string } {
  const users = readUsers();
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return { ok: false, error: "Invalid credentials" };
  if (user.passwordHash !== hashPassword(password))
    return { ok: false, error: "Invalid credentials" };
  localStorage.setItem(TOKEN_KEY, `demo-${user.id}`);
  return { ok: true };
}

export function listUsers(): Pick<
  AuthUser,
  "id" | "email" | "name" | "createdAt"
>[] {
  const users = readUsers();
  return users.map(({ id, email, name, createdAt }) => ({
    id,
    email,
    name,
    createdAt,
  }));
}
