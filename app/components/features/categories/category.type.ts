export type CategoryFormProps = {
  mode: "create" | "edit"
  defaultValues?: any
  onSubmit: (data: any) => void
}
