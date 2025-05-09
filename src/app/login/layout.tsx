// app/dashboard/layout.tsx
export default function loginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <aside>Dashboard Sidebar</aside>
            <main>{children}</main>
        </div>
    );
}
