import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";
export function Profile (){

   const { level } = useContext(ChallengesContext)
   return (
      <div className={styles.profileContainer}>
         <img alt='asd' src='https://avatars.githubusercontent.com/u/71739219?s=460&u=fcb21e86440111cc6bd4dcb56b9dbbe7ed2cecf9&v=4'/>
         <div>
            <strong>
               Ismael Reis
            </strong>
            <p>
               <img alt='icom' src='icons/level.svg'></img>
               Level {level}
            </p>
         </div>
      </div>
   )
}