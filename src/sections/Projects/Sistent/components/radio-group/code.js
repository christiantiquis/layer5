import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";

export const RadioGroupCode = () => {
  const location = useLocation();

  return (
    <SistentLayout title="Radio Group">
      <div className="content">
        <a id="Identity">
          <h2>Radio Group</h2>
        </a>
        <p>
          A Radio group is a set of related radio buttons that allows users to
          select only one option from the group. Each radio button represents a
          choice, and when one button is selected, any previously selected
          button in the same group is automatically deselected.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/radio-group"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/radio-group")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/radio-group/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/radio-group/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/radio-group/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/radio-group/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">Sorry, this page is still under work</div>
      </div>
    </SistentLayout>
  );
};
