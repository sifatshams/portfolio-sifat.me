import axios_instance from "@/lib/axios_instance";
import type {
  ContactMessagePayload,
  ContactMessageResponse,
} from "@/types/contact";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const sendContactMessage = async (
  payload: ContactMessagePayload
): Promise<ContactMessageResponse> => {
  const { data } = await axios_instance.post<ContactMessageResponse>(
    "/contact",
    payload
  );
  return data;
};

export const useSendContactMessage = () => {
  return useMutation<
    ContactMessageResponse,
    AxiosError<{ message?: string }>,
    ContactMessagePayload
  >({
    mutationFn: sendContactMessage,

    onSuccess: (data) => {
      toast.success(data.message || "Message sent successfully!");
    },

    onError: (error) => {
      console.error("Contact message error:", error);

      const serverMessage = error.response?.data?.message;
      toast.error(
        serverMessage || "Failed to send your message. Please try again later!"
      );
    },
  });
};
