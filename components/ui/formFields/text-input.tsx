import {Dispatch, SetStateAction} from "react";

interface props {
    id: string;
    label: string;
    defaultValue: string;
    placeholder: string;
    enabled: boolean;
    onChange: Function;
}

export function TextField({ id, label, placeholder, enabled, onChange, defaultValue = '' }: props) {
    return (
        <div className="relative">
            <label
                htmlFor={id}
                className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
                {label}
            </label>
            <input
                type="text"
                disabled={!enabled}
                defaultValue={defaultValue}
                name={id}
                id={id}
                className={`${enabled ? "bg-koshkaGreen bg-opacity-5" : ""} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
            />
        </div>
    )
}