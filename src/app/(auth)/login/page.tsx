
import H1 from "@/components/H1";
import AuthForm from "@/components/auth-form";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <H1 className="mb-5 text-center text-black">Log In</H1>

            <AuthForm type="logIn" />

            <p className="mt-6 text-sm text-zinc-500">
                No account yet?{" "}
                <Link href="/signup" className="font-medium">
                    Sign up
                </Link>
            </p>
        </main>
    );
}