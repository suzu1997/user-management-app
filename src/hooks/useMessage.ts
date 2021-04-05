import { useToast } from "@chakra-ui/toast";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        title,
        status,
        position: "top", //メッセージを出す場所
        duration: 2000, //メッセージの表示時間
        isClosable: true, //閉じることができるかどうか
      });
    },
    [toast]
  );
  return { showMessage };
};
