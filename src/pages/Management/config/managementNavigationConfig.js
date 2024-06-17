import { routesPath } from "@app/config/routes";
import { ReactComponent as SettingsIcon } from "@public/images/settings.svg";
import { ReactComponent as LeftArrowIcon } from "@public/images/leftArrow.svg";

export const managementNavigationConfig = [
    {
        path: routesPath.USERS,
        icon: SettingsIcon,
        title: "Пользователи"
    },
    {
        path: "/" + routesPath.PROFILE,
        icon: LeftArrowIcon,
        title: "Вернуться назад"
    }
]