import clsx from "clsx";
import {React} from "../../lib/react";

type PropsType = {
    children?: any;
    className?: string;
};


export const Spinner = (props: PropsType) => {

    const {
        children,
        className,
        ...rest
    } = props;

    const spinnerClassName = clsx("uiSpinner", className);

    return (
        <div className={spinnerClassName} {...rest} />
    );
}

Spinner.displayName = "Spinner";
