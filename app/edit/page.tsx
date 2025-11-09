'use client';

import { useRouter, useSearchParams } from "next/navigation";
import FormTasks, { FormTasksType } from "@/components/FormTasks";
import { editTask } from "../actions/tasks";

export default function EditPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const title = searchParams.get("title") || "";
  const description = searchParams.get("description") || "";

  async function handleSubmit(data: FormTasksType) {
    if (!id) return;
    await editTask({
      id: parseInt(id),
      title: data.title,
      description: data.description,
    });
    router.push("/"); // Volta para a Home
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">✏️ Editar Tarefa</h1>

      <FormTasks
        defaultValues={{
          id: id ? parseInt(id) : undefined,
          title,
          description,
        }}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
