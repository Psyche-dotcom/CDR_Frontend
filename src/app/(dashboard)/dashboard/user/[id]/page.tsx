import UserExtensionMainPage2 from "@/parts/userextensionpage copy";
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
      <UserExtensionMainPage2 id={params.id} />
    </>
  );
};

export default ProfileExtensionPage;
