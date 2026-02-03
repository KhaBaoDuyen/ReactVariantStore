import { Controller, FormProvider, useForm } from "react-hook-form";
import { Input } from "../form/Input";
import { ImageUpload } from "../image/ImageUpload/ImageUpload";

import { useEffect } from "react";
import { Button } from "~/components/UI/ButtonIcon/buttonIcon";
import { slugify } from "~/utils/slugify";
import StatusSwitch from "../form/status.badge";

type CategoryFormProps = {
	mode: "create" | "edit";
	defaultValues?: any;
	onSubmit: (data: any) => void;
};

export default function CategoryForm({
	mode,
	defaultValues,
	onSubmit,
}: CategoryFormProps) {
	const methods = useForm({
		defaultValues: {
			name: "",
			slug: "",
			status: true,
			...defaultValues,
		},
	});
	const name = methods.watch("name");
	useEffect(() => {
		if (name) {
			methods.setValue("slug", slugify(name), {
				shouldDirty: true,
				shouldValidate: true,
			});
		}
	}, [name]);
	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit(onSubmit)}
				className="grid grid-cols-2  gap-4 bg-white p-5 rounded-xl shadow"
			>
				<ImageUpload
					name="image"
					label="Hình ảnh danh mục (chính)"
					required
					maxFiles={1}
					maxSizeMB={5}
				/>

				<ImageUpload
					name="icon"
					label="Hình ảnh danh mục (icon)"
					required
					maxFiles={1}
					maxSizeMB={5}
				/>

				<Input
					id="name"
					label="Tên danh mục"
					{...methods.register("name", {
						required: "Không được để trống",
					})}
					error={methods.formState.errors.name}
				/>

				<Input
					id="slug"
					label="Đường dẫn danh mục"
					{...methods.register("slug")}
				/>

				<Controller
					name="status"
					control={methods.control}
					render={({ field }) => (
						<StatusSwitch value={field.value} onChange={field.onChange} />
					)}
				/>

				<Button>
					{mode === "create" ? "Tạo danh mục" : "Cập nhật danh mục"}
				</Button>
			</form>
		</FormProvider>
	);
}
