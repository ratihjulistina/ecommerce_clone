import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {children}
    </div>
  );
}

export default Layout;
