import { ReactNode } from "react";
import {Switch} from "@headlessui/react";

interface Props {
    children: ReactNode;
    styling: string;
}
export const SwitchCtrl = ({ children, styling }: Props) => {

    return (
    <Switch.Group as="div" className={ styling }>
        {children}
    </Switch.Group>
    )
}
