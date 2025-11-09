"use client";

import { useForm } from "react-hook-form";

export type FormTasksType = {
  id?: number;
  title: string;
  description: string;
};

function FormTasks({
  onSubmit,
  defaultValues,
}: {
  onSubmit: (data: FormTasksType) => Promise<void>;
  defaultValues?: FormTasksType;
}) {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-4 flex flex-col items-center"
    >
      {/* Campo de título */}
      <input
        {...register("title")}
        placeholder="Título da tarefa"
        required
        className="border border-gray-300 p-3 rounded w-full max-w-xl h-12 text-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Campo de descrição */}
      <textarea
        {...register("description")}
        placeholder="Descrição"
        required
        className="border border-gray-300 p-3 rounded w-full max-w-xl h-32 text-base mt-3 
                   resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input type="hidden" {...register("id")} />

      {/* Botão */}
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 
                   rounded-lg transition"
      >
        Adicionar
      </button>
    </form>
  );
}

export default FormTasks;
