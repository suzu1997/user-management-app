import { useContext } from "react";

import { LoginUserContext, LoginUserContextType } from "../providers/LoginUserProvider";

//コンテキストの値を参照していくためのカスタムフック
export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext);
