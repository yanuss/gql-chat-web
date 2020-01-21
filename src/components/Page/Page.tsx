import React from "react";

const Page: React.FC = props => {
  return (
    <div>
      Page
      <main>{props.children}</main>
    </div>
  );
};

export default Page;
