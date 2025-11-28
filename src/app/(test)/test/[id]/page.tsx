import { redirect } from "next/navigation";
import { validateCredentials } from "@/lib/validateCredential";
import TestContainer from "@/components/test/test-container";

export default async function TestPage(props: any) {
  const { params, searchParams } = props;

  const id = params?.id;
  const cred = searchParams?.cred;

  if (!cred || !(await validateCredentials(cred, id))) {
    redirect("/unauthorized");
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <TestContainer credentialToken={cred} />
    </main>
  );
}

