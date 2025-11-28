import { redirect } from "next/navigation";
import { validateCredentials } from "@/lib/validateCredential";
import TestContainer from "@/components/test/test-container";

export default async function TestPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { cred?: string };
}) {
  const { id } = params;
  const cred = searchParams?.cred;

  // Server-side validation of the credential
  if (!cred || !(await validateCredentials(cred, id))) {
    redirect("/unauthorized");
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <TestContainer credentialToken={cred} />
    </main>
  );
}
