import { backendBaseUrl } from "../config";

const createParentDirectory = async (directoryName, userToken) => {
  try {
    if (!userToken) {
      throw new Error("User not logged in");
    }

    const response = await fetch(`${backendBaseUrl}/directories`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          directoryName,
        },
      ]),
    });

    if (response.ok) {
      // Parent directory created successfully
      console.log("Parent directory created successfully:", directoryName);
      return true;
    } else {
      // Handle error
      console.error("Failed to create parent directory:", response.status);
      return false;
    }
  } catch (error) {
    console.error("Error creating parent directory:", error);
    return false;
  }
};

const createSubDirectory = async (
  parentDirectoryId,
  directoryName,
  userToken
) => {
  try {
    if (!userToken) {
      throw new Error("User not logged in");
    }

    const response = await fetch(
      `${backendBaseUrl}/directories/subDirectories/${parentDirectoryId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            directoryName,
            parentDirectory: parentDirectoryId,
          },
        ]),
      }
    );

    if (response.ok) {
      // Sub-directory created successfully
      console.log("Sub-directory created successfully:", directoryName);
      return true;
    } else {
      // Handle error
      console.error("Failed to create sub-directory:", response.status);
      return false;
    }
  } catch (error) {
    console.error("Error creating sub-directory:", error);
    return false;
  }
};

export { createParentDirectory, createSubDirectory };
