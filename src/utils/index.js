export const getAccessToken = () => {
  let token = null;
  if (typeof window !== "undefined") {
    token = sessionStorage.getItem("accessToken");
    return token;
  }
  return token;
};
export const getProfilePicture = (letter) => {
  let avatar = "/app-assets/images/avatar-man.png";

  try {
    let filePath = "/app-assets/avatar/";
    switch (letter.toLowerCase()) {
      case "ç":
        filePath += "CC.svg";
        break;
      case "i":
        filePath += "II.svg";
        break;
      case "ö":
        filePath += "OO.svg";
        break;
      case "ş":
        filePath += "SS.svg";
        break;
      case "ü":
        filePath += "UU.svg";
        break;
      default:
        filePath += letter.toUpperCase() + ".svg";
        break;
    }

    avatar = filePath;
  } catch (error) {
    console.error("Error generating profile picture path", error);
  }

  return avatar;
};

// Replace with your localization function or static values
export const getLocalization = (key) => {
  const localization = {
    Layout_Merhaba: "Hello",
    Layout_Profil: "Profile",
    CDR_Membership: "Membership",
    Layout_CikisYap: "Logout",
  };
  return localization[key] || key;
};

// Dummy user data
export const user = {
  firstName: "John",
  lastName: "Doe",
};
