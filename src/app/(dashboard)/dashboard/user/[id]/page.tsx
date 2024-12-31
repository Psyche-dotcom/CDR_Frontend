import UserExtensionMainPage from "@/parts/userextensionpage";
import React from "react";

interface ProfileExtensionPageProps {
  params: {
    id: string;
  };
}

const ProfileExtensionPage: React.FC<ProfileExtensionPageProps> = ({
  params,
}) => {
  return (
    <>
      <UserExtensionMainPage id={params.id} />
    </>
  );
};

export default ProfileExtensionPage;
