// eslint-disable-next-line no-unused-vars
import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import PropTypes from "prop-types";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spinner = ({ loading }) => {
  return (
    <BeatLoader
      color="#3B82F6"
      loading={loading}
      cssOverride={override}
      size={15}
    />
  );
};

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Spinner;
