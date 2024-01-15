import { Switch } from "@headlessui/react";
import {Dispatch, SetStateAction, useState} from "react";

interface props {
    edit: boolean;
    label: string;
    swtLabelStyle: string;
    swtStyle: string;
    toggleStyle: string;
    value: boolean;
    onToggle: Dispatch<SetStateAction<boolean>>
}
export const SwitchToggle = ({ edit, label, swtLabelStyle, swtStyle, toggleStyle, value, onToggle }: props) => {
    return (
        <>
            <Switch.Label as="dt" className={swtLabelStyle} passive>
                { label }
            </Switch.Label>
            <dd className="flex flex-auto items-center justify-start">
                <Switch
                    disabled={!edit}
                    checked={value}
                    onChange={onToggle}
                    className={`${swtStyle} flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                    <span
                      aria-hidden="true"
                      className={`${toggleStyle}  h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out`}
                    />
                </Switch>
            </dd>
        </>
    )
}