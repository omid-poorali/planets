import { React } from "../../lib/react";
import clsx from "clsx";

type PropsType = {
    className?: string;
    imageUrl?: string;
    alt?: string;
};

export const Avatar = (props: PropsType) => {
    const {
        className,
        imageUrl,
        alt = "alt",
        ...rest
    } = props;

    const rootClassName = clsx("uiAvatar", className);

    return (
        <div
            className={rootClassName}
            {...rest}>
            <img
                style={{
                    objectFit: "cover",
                }}
                src={imageUrl ? imageUrl : "/avatar.jpg"}
                alt={alt}
            />
        </div>

    );
};

Avatar.displayName = "Avatar";
