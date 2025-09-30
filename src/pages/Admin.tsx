import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";
import { me } from "@/lib/auth";

type Row = { id: string; email: string; name?: string; createdAt: number };

const Admin = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    (async () => {
      const u = await me();
      if (!u) {
        navigate("/investor-login", { replace: true });
        return;
      }
      if (u.role !== "admin") {
        navigate("/", { replace: true });
        return;
      }
      const res = await api.get("/admin/users", { params: { limit: 100 } });
      setRows(res.data.items ?? []);
    })();
  }, [navigate]);

  const csv = useMemo(() => {
    const header = "id,email,name,createdAt\n";
    const lines = rows
      .map(
        (r) =>
          `${r.id},${r.email},${r.name ?? ""},${new Date(
            r.createdAt
          ).toISOString()}`
      )
      .join("\n");
    return header + lines;
  }, [rows]);

  const downloadCsv = () => {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "radiamel-users.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-blue-900/20 to-blue-800/10 min-h-screen">
      <div className="container mx-auto px-6 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Registered Users</h1>

        <Card className="bg-blue-900/20 backdrop-blur-sm border border-blue-500/30">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-blue-100">
                <thead className="bg-blue-900/40">
                  <tr>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Created</th>
                    <th className="px-4 py-3">ID</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="border-t border-blue-500/20">
                      <td className="px-4 py-3">{r.email}</td>
                      <td className="px-4 py-3">{r.name ?? "-"}</td>
                      <td className="px-4 py-3">
                        {new Date(r.createdAt).toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-xs text-blue-300">
                        {r.id}
                      </td>
                    </tr>
                  ))}
                  {rows.length === 0 && (
                    <tr>
                      <td className="px-4 py-6 text-blue-300" colSpan={4}>
                        No users registered yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button onClick={() => navigate("/", { replace: true })} variant="outline" className="border-blue-400/40 text-blue-300 hover:bg-blue-400/10">Back to Home</Button>
          <Button
            onClick={downloadCsv}
            className="bg-cyan-600 hover:bg-cyan-700 text-white"
          >
            Export CSV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
