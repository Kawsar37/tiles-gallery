"use client";
import React from "react";
import { Check } from "@gravity-ui/icons";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Loading from "@/app/loading";

export default function UpdateProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <Loading />;
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const { name, image } = formData;

    if (!name) {
      toast.error("Name can't be empty");
      return;
    }
    if (!image) {
      toast.error("Image link can't be empty");
      return;
    }

    const { data, error } = await authClient.updateUser({
      image: image,
      name: name,
    });

    if (error) {
      toast.error(error.message);
    }
    if (data) {
      toast.success("Profile Updated Successfully!");
    }
    // alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="flex justify-center items-center my-20 lg:my-30 ">
      <Form
        className="flex ring-1 ring-slate-200 rounded-lg w-85 sm:w-96 flex-col gap-4 p-4"
        onSubmit={onSubmit}
      >
        <TextField name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter new name" />
          <FieldError />
        </TextField>

        <TextField name="image" type="text">
          <Label>Image link</Label>
          <Input placeholder="Enter new image link" />
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Update Profile
          </Button>
        </div>
      </Form>
    </div>
  );
}
