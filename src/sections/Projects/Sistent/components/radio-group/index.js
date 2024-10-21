import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  SistentThemeProvider,
  Input,
  Paper,
  RadioGroup,
  FormControlLabel,
} from "@layer5/sistent";

import { Row } from "../../../../../reusecore/Layout";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { Radio } from "@mui/material";

const SistentRadioGroup = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

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
        <div className="main-content">
          <p>
            A radio group is a set of radio buttons that allows users to select
            only one option from a predefined list. Each radio button within the
            group represents a choice, and all buttons are mutually
            exclusive—selecting one automatically deselects any previously
            selected option.
          </p>
          <a id="Orientation">
            <h2>Orientation</h2>
          </a>
          <p>
            The orientation of a radio group, whether horizontal or vertical,
            determines the layout and readability of the options, tailored to
            the space and clarity requirements of the user interface.
          </p>
          <a id="Vertical">
            <h3>Vertical</h3>
          </a>
          <p>
            For the Vertical Radio Group, the radio buttons are stacked in a
            column, making it easier for users to scan and select from a longer
            list of options. This layout is suitable when clarity and
            readability are prioritized.
          </p>
          <Row $Hcenter>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </SistentThemeProvider>
          </Row>
          <a id="Horizontal">
            <h3>Horizontal</h3>
          </a>
          <p>
            For the Horizontal Radio Group, the radio buttons are arranged in a
            single row, providing a compact layout for options. This format is
            ideal when you have limited space and only a few choices.
          </p>
          <Row $Hcenter>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group2"
                row
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </SistentThemeProvider>
          </Row>
          <a id="State">
            <h2>State</h2>
          </a>
          <p>
            Managing the status of these elements allows for control over user
            interactions, enabling or disabling options as required. This
            dynamic approach ensures a responsive and user-friendly interface.
          </p>
          <a>
            <h3>Disabled</h3>
          </a>
          <p>
            This will make the option disabled and unselectable. You can also
            control this behavior dynamically if needed.
          </p>
          <Row $Hcenter>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="other"
                name="radio-buttons-group3"
                row
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  disabled
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  disabled
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentRadioGroup;
