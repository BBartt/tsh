import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";

import { IconEnum } from "components/Icon/Icon.types";
import Checkbox from "components/Checkbox";
import Button from "components/Button";
import Input from "components/Input";
import Icon from "components/Icon";
import { identity } from "utils";
import { SearchParamsContext } from "providers/AppProviders";

const Header: React.FC = (): JSX.Element => {
  const { searchParams, setSearchParams } = useContext(SearchParamsContext);
  const { search, active, promo } = searchParams;

  return (
    <header className="header">
      <Link to={AppRoute.home}>
        <Icon type={IconEnum.logo} />
      </Link>

      <div className="container">
        <Input
          onChange={({ target: { value } }) =>
            setSearchParams({
              ...searchParams,
              search: value,
            })
          }
          placeholder="Search"
          value={search}
          icon={IconEnum.magnifier}
          autoFocus
        />

        <Checkbox
          onChange={({ target: { checked } }) =>
            setSearchParams({
              ...searchParams,
              active: checked ? checked : undefined,
            })
          }
          checked={active}
          label="Active"
        />

        <Checkbox
          onChange={({ target: { checked } }) =>
            setSearchParams({
              ...searchParams,
              promo: checked ? checked : undefined,
            })
          }
          checked={promo}
          label="Promo"
        />
      </div>

      <Button onClick={identity} hasOutline>
        Log in
      </Button>
    </header>
  );
};

export default Header;
