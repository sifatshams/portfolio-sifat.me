import axios_instance from "@/lib/axios_instance";

import type {
  ContactMessagePayload,
  ContactMessageResponse,
} from "@/types/contact";
import { useMutation } from "@tanstack/react-query";
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
  return useMutation({
    mutationFn: sendContactMessage,

    onSuccess: (data) => {
      toast.success(data.message);
    },

    onError: (error) => {
      console.error("Contact message error:", error);

      toast.error("Failed to send your message. Please try again later!");
    },
  });
};
