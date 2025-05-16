// import React from "react";
// import ProfilePictures from "../../../Components/ProfilePicture/ProfilePictures";
// import BackgroundPicture from "../../../Components/ProfileBackgroundPicture/BackgroundPicture";
// import Button from "@mui/material/Button";
// import styles from "./coach.module.css";
// import ProfileAbout from "../../../Components/ProfileAbout/ProfileAbout";
// import CoachAchievements from "../../../Components/CoachAchievements/CoachAchievements";
// import { useParams } from "react-router-dom";
// import Slider from "../../../Components/Slider/Slider";

// const Coach = () => {
//   const { id } = useParams();

//   return (
//     <div>
//       <header className={`${styles}`}>
//         <div className={`${styles["main-profile"]} container`}>
//           <div className={`${styles["profile-background"]}`}>
//             <BackgroundPicture />
//           </div>
//           <div className={`${styles["profile-picture-content"]}`}>
//             <ProfilePictures
//               profilePhoto={teamMembers[id-1].imgSrc}
//               coachName={teamMembers[id-1].name}
//               coachBio={teamMembers[id-1].role}
//             />
//           </div>
//           <div className={`${styles["contact-container"]}`}>
//             <Button sx={{color: "var(--white-color)",backgroundColor: "var(--red-main-color)", padding:1, textTransform: "none" }} size="small">Message</Button>
//           </div>
//         </div>
//       </header>
//       <main>
//         <div
//           className={`container ${styles["main-container"]} d-flex justify-content-between`}
//         >
//           <div className={`${styles["aside-about"]}`}>
//             <ProfileAbout
//               gender={teamMembers[id-1].gender}
//               birthday={teamMembers[id-1].birthday}
//               address={teamMembers[id-1].address}
//               email={teamMembers[id-1].email}
//               phone={teamMembers[id-1].phone}
//             />
//           </div>
//           <div className={`${styles["container"]} achievements`}>
//             <CoachAchievements achievements={teamMembers[id-1].achievements} />
//           </div>
//         </div>
//         <div className={`${styles["other-coaches"]}`}>
//           <Slider />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Coach;

import React, { useEffect, useState } from "react";
import ProfilePictures from "../../../Components/ProfilePicture/ProfilePictures";
import BackgroundPicture from "../../../Components/ProfileBackgroundPicture/BackgroundPicture";
import Button from "@mui/material/Button";
import styles from "./coach.module.css";
import ProfileAbout from "../../../Components/ProfileAbout/ProfileAbout";
// import CoachAchievements from "../../../Components/CoachAchievements/CoachAchievements";
import Slider from "../../../Components/Slider/Slider";
import axios from "axios";

const Coach = ({ coachId }) => {
  const [coachData, setCoachData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoach = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/trainers/${coachId}`);
        setCoachData(response.data);
      } catch (err) {
        setError("Failed to fetch coach data");
        console.error(err);
      }
    };

    fetchCoach();
  }, [coachId]);

  if (error) return <div>{error}</div>;
  if (!coachData) return <div>Loading...</div>;

  return (
    <div>
      <header className={`${styles}`}>
        <div className={`${styles["main-profile"]} container`}>
          <div className={`${styles["profile-background"]}`}>
            <BackgroundPicture />
          </div>
          <div className={`${styles["profile-picture-content"]}`}>
            <ProfilePictures
              profilePhoto={coachData.image}
              coachName={coachData.name}
              coachBio={coachData.role}
            />
          </div>
          <div className={`${styles["contact-container"]}`}>
            <Button
              sx={{
                color: "var(--white-color)",
                backgroundColor: "var(--red-main-color)",
                padding: 1,
                textTransform: "none",
              }}
              size="small"
            >
              Message
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div
          className={`container ${styles["main-container"]} d-flex justify-content-between`}
        >
          <div className={`${styles["aside-about"]}`}>
            <ProfileAbout
              gender={coachData.gender}
              birthday={coachData.birthday}
              address={coachData.address}
              email={coachData.email}
              phone={coachData.phoneNumber}
            />
          </div>
          {/* Uncomment if you add achievements data
          <div className={`${styles["container"]} achievements`}>
            <CoachAchievements achievements={coachData.achievements || []} />
          </div> 
          */}
        </div>
        <div className={`${styles["other-coaches"]}`}>
          <Slider />
        </div>
      </main>
    </div>
  );
};

export default Coach;
