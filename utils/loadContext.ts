"use client";

import {useContext, useEffect} from "react";
import {operations, userDispatchContext} from "@/context/AuthenticationContext";

export default function LoadContext () {
    const dispatch = useContext(userDispatchContext);
    useEffect(() => {
        dispatch({type: operations.CHECK });
    }, [])
}