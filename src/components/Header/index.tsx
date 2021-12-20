import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";

import { IconEnum } from "components/Icon/Icon.types";
import Checkbox from "components/Checkbox";
import Button from "components/Button";
import Input from "components/Input";
import Icon from "components/Icon";
import { identity } from "utils";

const Header: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [isActive, setActive] = useState(false);
  const [isPromo, setPromo] = useState(false);

  return (
    <header className="header">
      <Link to={AppRoute.home}>
        <Icon type={IconEnum.logo} />
      </Link>

      <Input
        onChange={({ target: { value } }) => setSearch(value)}
        placeholder="Search"
        value={search}
        icon={IconEnum.magnifier}
      />

      <Checkbox
        onChange={(event) => setActive(event.target.checked)}
        checked={isActive}
        label="Active"
      />

      <Checkbox
        onChange={(event) => setPromo(event.target.checked)}
        checked={isPromo}
        label="Active"
      />

      <Button onClick={identity} hasOutline>
        Log in
      </Button>
    </header>
  );
};

export default Header;
